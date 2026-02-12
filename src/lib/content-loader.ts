import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import matter from 'gray-matter';
import { Marked } from 'marked';

// Use Node's built-in glob if available, otherwise fall back
function resolveGlobs(basePath: string, includes: string[], excludes: string[]): string[] {
  const results: string[] = [];
  for (const pattern of includes) {
    // Manual glob: split pattern into directory part and file pattern
    const parts = pattern.split('/');
    if (parts.length === 2) {
      // e.g. "career/*.md" -> dir=career, filePattern=*.md
      const dir = path.join(basePath, parts[0]);
      const filePattern = parts[1];
      if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          if (matchesPattern(file, filePattern)) {
            results.push(path.join(dir, file));
          }
        }
      }
    } else if (parts.length === 1) {
      // e.g. "*.md" -> files in basePath
      const filePattern = parts[0];
      if (fs.existsSync(basePath)) {
        const files = fs.readdirSync(basePath);
        for (const file of files) {
          if (matchesPattern(file, filePattern)) {
            results.push(path.join(basePath, file));
          }
        }
      }
    }
  }

  // Filter out excludes
  const excludeNames = new Set(excludes);
  return results.filter(f => !excludeNames.has(path.basename(f)));
}

function matchesPattern(filename: string, pattern: string): boolean {
  if (pattern === '*.md') return filename.endsWith('.md');
  // For more complex patterns, do simple wildcard matching
  const regex = new RegExp('^' + pattern.replace(/\*/g, '.*').replace(/\?/g, '.') + '$');
  return regex.test(filename);
}

// Types
export interface WebsiteManifest {
  version: number;
  repo: {
    slug: string;
    title: string;
    description: string;
    github_url: string;
  };
  collections: Collection[];
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  base_path: string;
  url_prefix: string;
  include: string[];
  exclude: string[];
}

export interface ContentPage {
  slug: string;
  url: string;
  title: string;
  frontmatter: Record<string, any>;
  htmlContent: string;
  rawContent: string;
  githubUrl: string;
  category: string | null;
  repoSlug: string;
  repoTitle: string;
  collectionId: string;
  collectionTitle: string;
  filePath: string;
}

export interface RepoManifest {
  manifest: WebsiteManifest;
  repoDir: string;
}

const CONTENT_DIR = path.resolve('content/repos');

/**
 * Discover all website.yaml manifests in content/repos/
 */
export function discoverManifests(): RepoManifest[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const repos = fs.readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory());

  const results: RepoManifest[] = [];
  for (const repo of repos) {
    const manifestPath = path.join(CONTENT_DIR, repo.name, 'website.yaml');
    if (fs.existsSync(manifestPath)) {
      const raw = fs.readFileSync(manifestPath, 'utf-8');
      const manifest = yaml.load(raw) as WebsiteManifest;
      results.push({ manifest, repoDir: path.join(CONTENT_DIR, repo.name) });
    }
  }
  return results;
}

/**
 * Load all content pages from all discovered repos
 */
export function loadAllContent(): ContentPage[] {
  const manifests = discoverManifests();
  const allPages: ContentPage[] = [];

  for (const { manifest, repoDir } of manifests) {
    for (const collection of manifest.collections) {
      const basePath = path.join(repoDir, collection.base_path);
      const files = resolveGlobs(basePath, collection.include, collection.exclude);

      for (const filePath of files) {
        const page = processFile(filePath, basePath, collection, manifest, repoDir);
        if (page) allPages.push(page);
      }
    }
  }

  return allPages;
}

/**
 * Build a lookup map of all files exposed on the website
 * Maps relative framework paths (e.g. "career/30-60-90-day-plan.md") to website URLs
 */
function buildLinkMap(pages: ContentPage[], manifest: WebsiteManifest): Map<string, string> {
  const map = new Map<string, string>();
  for (const page of pages) {
    // Store multiple keys for flexible matching
    const relFromRepo = path.relative(
      path.resolve(CONTENT_DIR, manifest.repo.slug.replace('-course', '-interviews-course')),
      page.filePath
    ).replace(/\\/g, '/');
    map.set(relFromRepo, page.url);

    // Also store just the collection-relative path
    // e.g. "career/30-60-90-day-plan.md"
    const parts = page.url.split('/').filter(Boolean);
    // URL: /toolkit/lenny-course/frameworks/career/30-60-90-day-plan/
    // We want to map: "career/30-60-90-day-plan.md" -> url
    if (page.category) {
      map.set(`${page.category}/${path.basename(page.filePath)}`, page.url);
    }
    map.set(path.basename(page.filePath), page.url);
  }
  return map;
}

function processFile(
  filePath: string,
  basePath: string,
  collection: Collection,
  manifest: WebsiteManifest,
  repoDir: string
): ContentPage | null {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(raw);

  // Determine category from directory structure
  const relPath = path.relative(basePath, filePath).replace(/\\/g, '/');
  const pathParts = relPath.split('/');
  const category = pathParts.length > 1 ? pathParts[0] : null;

  // Build slug: remove .md extension
  const slugParts = relPath.replace(/\.md$/, '').split('/');
  const slug = `${manifest.repo.slug}/${collection.url_prefix}/${slugParts.join('/')}`;
  const url = `/toolkit/${slug}/`;

  // GitHub URL for "View on GitHub"
  const relFromRepo = path.relative(repoDir, filePath).replace(/\\/g, '/');
  const githubUrl = `${manifest.github_url}/blob/main/${relFromRepo}`;

  const title = frontmatter.name || frontmatter.title || slugParts[slugParts.length - 1]
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c: string) => c.toUpperCase());

  return {
    slug,
    url,
    title,
    frontmatter,
    htmlContent: '', // rendered later with link rewriting
    rawContent: content,
    githubUrl,
    category,
    repoSlug: manifest.repo.slug,
    repoTitle: manifest.repo.title,
    collectionId: collection.id,
    collectionTitle: collection.title,
    filePath,
  };
}

/**
 * Rewrite markdown links in content, then render to HTML.
 * Must be called after all pages are loaded so we have the full link map.
 */
export function renderAllContent(pages: ContentPage[]): ContentPage[] {
  // Group pages by repo manifest for link map building
  const manifests = discoverManifests();

  // Build a combined link map across all repos
  const linkMap = new Map<string, string>();
  for (const { manifest } of manifests) {
    const repoPages = pages.filter(p => p.repoSlug === manifest.repo.slug);
    const repoLinkMap = buildLinkMap(repoPages, manifest);
    for (const [k, v] of repoLinkMap) {
      linkMap.set(k, v);
    }
  }

  const marked = new Marked();

  return pages.map(page => {
    const rewrittenContent = rewriteLinks(page.rawContent, page, linkMap, manifests);
    const htmlContent = marked.parse(rewrittenContent) as string;
    return { ...page, htmlContent };
  });
}

/**
 * Rewrite internal .md links to website URLs
 */
function rewriteLinks(
  content: string,
  currentPage: ContentPage,
  linkMap: Map<string, string>,
  manifests: RepoManifest[]
): string {
  // Match markdown links: [text](url)
  return content.replace(/\[([^\]]*)\]\(([^)]+)\)/g, (match, text, href) => {
    // Skip external links and anchors
    if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:')) {
      return match;
    }

    // Only process .md links
    if (!href.endsWith('.md')) return match;

    // Try to resolve the link
    const resolved = resolveLink(href, currentPage, linkMap, manifests);
    if (resolved) {
      return `[${text}](${resolved})`;
    }

    // Fall back to GitHub URL if we can't resolve
    const manifest = manifests.find(m => m.manifest.repo.slug === currentPage.repoSlug);
    if (manifest) {
      // Resolve relative path from current file
      const currentDir = path.dirname(currentPage.filePath);
      const targetPath = path.resolve(currentDir, href).replace(/\\/g, '/');
      const relFromRepo = path.relative(manifest.repoDir, targetPath).replace(/\\/g, '/');
      const githubUrl = `${manifest.manifest.github_url}/blob/main/${relFromRepo}`;
      return `[${text}](${githubUrl})`;
    }

    return match;
  });
}

function resolveLink(
  href: string,
  currentPage: ContentPage,
  linkMap: Map<string, string>,
  manifests: RepoManifest[]
): string | null {
  // Try direct lookup (e.g. "career/30-60-90-day-plan.md")
  if (linkMap.has(href)) return linkMap.get(href)!;

  // Try resolving relative to current file's directory
  const currentDir = path.dirname(currentPage.filePath);
  const absoluteTarget = path.resolve(currentDir, href);

  // Find the repo this belongs to
  const manifest = manifests.find(m => m.manifest.repo.slug === currentPage.repoSlug);
  if (!manifest) return null;

  // Try matching by the resolved file path
  const relFromRepo = path.relative(manifest.repoDir, absoluteTarget).replace(/\\/g, '/');
  if (linkMap.has(relFromRepo)) return linkMap.get(relFromRepo)!;

  // Try just the basename for same-category links
  const basename = path.basename(href);
  if (linkMap.has(basename)) return linkMap.get(basename)!;

  // Try with category prefix
  if (currentPage.category) {
    const withCategory = `${currentPage.category}/${basename}`;
    if (linkMap.has(withCategory)) return linkMap.get(withCategory)!;
  }

  // Try stripping ../../ and resolving from frameworks base
  // Learning plans use paths like "../../frameworks/career/30-60-90-day-plan.md"
  const frameworksMatch = href.match(/(?:\.\.\/)*frameworks\/(.+)/);
  if (frameworksMatch) {
    const frameworkPath = frameworksMatch[1]; // "career/30-60-90-day-plan.md"
    if (linkMap.has(frameworkPath)) return linkMap.get(frameworkPath)!;

    // Also try the full frameworks/... path
    const fullPath = `frameworks/${frameworkPath}`;
    if (linkMap.has(fullPath)) return linkMap.get(fullPath)!;
  }

  return null;
}

/**
 * Get all unique categories for a collection within a repo
 */
export function getCategories(pages: ContentPage[], repoSlug: string, collectionId: string): string[] {
  const categories = new Set<string>();
  for (const page of pages) {
    if (page.repoSlug === repoSlug && page.collectionId === collectionId && page.category) {
      categories.add(page.category);
    }
  }
  return Array.from(categories).sort();
}

/**
 * Format a category slug into a display title
 */
export function formatCategoryTitle(category: string): string {
  return category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Load and render all content (convenience function for Astro pages)
 */
let _cachedPages: ContentPage[] | null = null;

export function getAllPages(): ContentPage[] {
  if (_cachedPages) return _cachedPages;
  const pages = loadAllContent();
  _cachedPages = renderAllContent(pages);
  return _cachedPages;
}
