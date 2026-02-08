# Sindre Design System

This document defines the visual style for sindre.ai marketing pages. Use it as the reference when building or redesigning any page on the site.

## Design Philosophy

**Clean Nordic minimalism.** The interface should feel confident, precise, and uncluttered. White and gray dominate. Purple appears only on interactive call-to-action elements. Every element earns its place — if it doesn't serve a clear purpose, remove it.

The brand name "Sindre" comes from Norse mythology (the dwarf who crafted artifacts for the Gods). This heritage shows subtly through geometric patterns — never literal Norse imagery.

---

## Typography

**Font family:** Inter (loaded via Google Fonts)

```
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

| Role | Weight | Size (Tailwind) | Color |
|---|---|---|---|
| H1 (hero headline) | 600 | `text-5xl md:text-6xl xl:text-7xl` | `text-gray-900 dark:text-white` |
| H2 (section heading) | 600 | `text-3xl md:text-5xl` | `text-gray-900 dark:text-white` |
| H3 (card/feature title) | 600 | `text-xl` or `text-lg` | `text-gray-900 dark:text-white` |
| Body text | 400 | `text-lg` | `text-gray-500 dark:text-gray-400` |
| Small/detail text | 400 | `text-sm` | `text-gray-500 dark:text-gray-400` |
| Badge/label text | 500 | `text-sm` | `text-gray-600 dark:text-gray-300` |

**Key rules:**
- Hero headlines use `leading-[1.08] tracking-tight` for tight, impactful display
- Body text uses `leading-relaxed` for comfortable reading
- Section subtitles are capped at `max-w-xl mx-auto` for readable line lengths
- One accent phrase per hero headline can use `text-brand-600 dark:text-brand-400` — this is the only purple in body content

---

## Color Usage

The site is overwhelmingly gray and white. Purple is reserved exclusively for interactive elements.

### Where purple IS used
- **Primary CTA buttons** — `bg-brand-700 hover:bg-brand-800 text-white`
- **Focus rings on CTAs** — `focus:ring-4 focus:ring-brand-200 dark:focus:ring-brand-900`
- **One accent phrase in hero headline** — `text-brand-600 dark:text-brand-400`

### Where purple is NOT used
- Icons, icon backgrounds, badges, dividers, borders, shadows, decorative elements, section backgrounds, step numbers — all of these use gray tones.

### Background colors by section type
| Section type | Light | Dark |
|---|---|---|
| Primary (hero, features, use cases) | `bg-white` | `dark:bg-gray-900` |
| Alternate (how-it-works, steps) | `bg-gray-50` | `dark:bg-gray-800/50` |
| CTA block | `bg-gray-900` | `dark:bg-gray-800` |

---

## Buttons

### Primary CTA
```html
<a href="..." class="inline-flex items-center px-6 py-3 text-white bg-brand-700 hover:bg-brand-800 rounded-lg font-medium transition-colors focus:ring-4 focus:ring-brand-200 dark:focus:ring-brand-900">
  Button text
  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
  </svg>
</a>
```
- Arrow icon on primary CTAs only
- Purple background, white text

### Secondary button
```html
<a href="..." class="inline-flex items-center px-6 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">
  Button text
</a>
```
- Gray background, no icon
- Used for supporting actions (setup guides, docs links)

### Secondary button on dark background (CTA section)
```html
<a href="..." class="inline-flex items-center px-6 py-3 text-gray-300 border border-gray-600 hover:bg-gray-800 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors">
  Button text
</a>
```

---

## Component Patterns

### Page badge (top of hero)
A small pill that labels the page context. Uses an integration icon + text.
```html
<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
  <img src="/icon.png" class="w-4 h-4" alt="..." />
  <span class="text-sm font-medium text-gray-600 dark:text-gray-300">Label Text</span>
</div>
```

### Feature cards (2-column grid)
```html
<div class="feature-card group p-8 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/40">
  <div class="flex items-center gap-4 mb-4">
    <div class="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700/50 transition-colors group-hover:bg-gray-200 dark:group-hover:bg-gray-700">
      <!-- SVG icon: w-5 h-5 text-gray-600 dark:text-gray-300, stroke-width 1.5 -->
    </div>
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Title</h3>
  </div>
  <p class="text-gray-500 dark:text-gray-400 leading-relaxed">Description</p>
</div>
```
- Grid: `grid md:grid-cols-2 gap-5`
- Hover: lifts 2px with soft shadow (see Animations section)
- Icons are gray, not purple

### Numbered steps (4-column grid)
```html
<div class="relative">
  <span class="font-display text-6xl leading-none text-gray-200 dark:text-gray-700 select-none">01</span>
  <h3 class="mt-3 text-lg font-semibold text-gray-900 dark:text-white">Step title</h3>
  <p class="mt-2 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Description</p>
</div>
```
- Grid: `grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8`
- Step numbers are large, light gray — decorative, not prominent

### Use case icons (4-column grid, centered)
```html
<div class="text-center">
  <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
    <!-- SVG icon: w-5 h-5 text-gray-500 dark:text-gray-400, stroke-width 1.5 -->
  </div>
  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Title</h3>
  <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">Description</p>
</div>
```
- Grid: `grid sm:grid-cols-2 lg:grid-cols-4 gap-10`

### Hero image
```html
<div class="relative">
  <div class="hero-float rounded-2xl overflow-hidden shadow-2xl shadow-gray-900/10 dark:shadow-black/30 border border-gray-200/80 dark:border-gray-700/60">
    <img src="/image.png" alt="..." class="w-full max-w-[560px] h-auto block" loading="eager" />
  </div>
  <div class="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-2xl bg-gray-200/60 dark:bg-gray-700/20"></div>
</div>
```
- Gentle floating animation
- Offset decorative panel behind (gray, not purple)
- `rounded-2xl` border radius

### CTA section (dark block)
```html
<section class="relative bg-gray-900 dark:bg-gray-800 overflow-hidden">
  <!-- Optional lattice overlay -->
  <div class="absolute inset-0 opacity-[0.05] pointer-events-none">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <pattern id="cta-lattice" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M20 0 L40 20 L20 40 L0 20Z" fill="none" stroke="white" stroke-width="0.5"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#cta-lattice)" />
    </svg>
  </div>
  <!-- Content: centered, max-w-screen-md -->
</section>
```
- Dark gray background (not purple)
- White heading text, `text-gray-400` subtitle
- Primary CTA in purple, secondary with gray border

---

## Decorative Elements

### Diamond lattice background (hero sections)
A subtle SVG pattern of rotated squares forming a diamond grid. Inspired by Norse geometric patterns.
```html
<div class="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none">
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <pattern id="norse-lattice" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse">
      <path d="M28 0 L56 28 L28 56 L0 28Z" fill="none" stroke="#6B7280" stroke-width="0.6"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#norse-lattice)" />
  </svg>
</div>
```
- Gray stroke color (`#6B7280`), not purple
- Very low opacity: 2.5% light / 4% dark
- Use in hero sections only, not every section

### Section divider
A thin gradient line between major sections.
```html
<div class="norse-divider mx-auto max-w-screen-lg"></div>
```
```css
.norse-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, #9CA3AF, transparent);
  opacity: 0.3;
}
.dark .norse-divider { opacity: 0.15; }
```
- Use sparingly — only between hero and first content section

---

## Animations

All animations are CSS-only. No JS animation libraries.

### Scroll reveal
Elements fade in and slide up when they enter the viewport. Applied via the `.reveal` class with staggered delays.

```css
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger classes */
.rd1 { transition-delay: 0.1s; }
.rd2 { transition-delay: 0.2s; }
.rd3 { transition-delay: 0.3s; }
.rd4 { transition-delay: 0.4s; }
```

Triggered by IntersectionObserver:
```js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
```

**Staggering rules:**
- Hero: badge (no delay), headline (rd1), subtitle (rd2), CTAs (rd3), image (rd2)
- Section headings: title (no delay), subtitle (rd1)
- Grid items: rd1 through rd4 matching their position

### Hero image float
```css
@keyframes gentle-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.hero-float { animation: gentle-float 5s ease-in-out infinite; }
```

### Feature card hover
```css
.feature-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}
.dark .feature-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}
```

---

## Page Structure Template

Standard page layout follows this section order:

```
<Layout>
  <Navbar />
  <div class="page-wrapper"> <!-- font-family: Inter -->

    1. Hero Section         — bg-white, lattice bg, badge + headline + CTAs + image
    2. Divider              — norse-divider (optional)
    3. Features Section     — bg-white, 2-col card grid
    4. How It Works Section — bg-gray-50, numbered steps 4-col
    5. Use Cases Section    — bg-white, 4-col icon grid
    6. CTA Section          — bg-gray-900, dark block with lattice overlay

  </div>
  <GeneralFAQ />
  <PrimaryCTA />
  <Footer />
</Layout>
```

**Spacing:**
- Section padding: `py-16 lg:py-24` (content sections), `pt-28 lg:pt-36` (hero, accounts for fixed nav)
- Container: `px-4 mx-auto max-w-screen-xl`
- Section heading bottom margin: `mb-14` to `mb-16`
- Grid gaps: `gap-5` (feature cards), `gap-10 lg:gap-8` (steps), `gap-10` (use cases)

---

## Icon Style

- Source: Heroicons outline style or equivalent
- Stroke width: `1.5` (feature cards) or `2` (buttons/CTAs)
- Size: `w-5 h-5` inside containers, `w-4 h-4` inline with buttons
- Color: `text-gray-600 dark:text-gray-300` (feature cards), `text-gray-500 dark:text-gray-400` (use cases)
- Never use filled/solid icons — always outline/stroke

---

## Dark Mode

Dark mode is class-based (`darkMode: 'class'` in Tailwind config) with localStorage persistence. Every element must have explicit dark variants.

**Quick reference:**
| Element | Light | Dark |
|---|---|---|
| Page background | `bg-white` | `dark:bg-gray-900` |
| Alternate section bg | `bg-gray-50` | `dark:bg-gray-800/50` |
| CTA section bg | `bg-gray-900` | `dark:bg-gray-800` |
| Heading text | `text-gray-900` | `dark:text-white` |
| Body text | `text-gray-500` | `dark:text-gray-400` |
| Card border | `border-gray-100` | `dark:border-gray-800` |
| Card bg | `bg-gray-50/50` | `dark:bg-gray-800/40` |
| Icon bg | `bg-gray-100` | `dark:bg-gray-700/50` |
| Icon color | `text-gray-600` | `dark:text-gray-300` |

---

## Product Visuals (HTML/CSS Mockups)

Instead of static screenshots, use crafted HTML/CSS mockups that look like real product interfaces. These are resolution-independent, dark-mode compatible, and stay perfectly on-brand. They live in `src/components/` as `.astro` files.

### Design principles

- **Look like a real app, not a wireframe.** Include enough detail (avatars, timestamps, status indicators) to feel authentic. Don't over-simplify into abstract shapes.
- **Use the gray/white palette.** The mockup UI itself should be gray and white, matching the page. The only color comes from functional UI elements (avatar initials, status indicators like green checkmarks).
- **No brand purple inside mockups.** Purple is for the page's CTAs, not the product UI. The Sindre logo can appear inside the mockup for branding context.
- **Window chrome on top.** Three dots (macOS style) + optional URL text ground the mockup as a real application.
- **Inter font throughout.** Apply `font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif` to the mockup root.
- **`select-none` on the wrapper.** Prevents text selection on decorative UI text.
- **Full dark mode support.** Every element needs explicit `dark:` variants.

### Structural anatomy

Every mockup follows this general shell:

```html
<div class="mockup-root w-full rounded-2xl border border-gray-200/50 dark:border-gray-700/30 bg-white dark:bg-gray-800/80 shadow-[...] overflow-hidden select-none">

  <!-- 1. Window chrome -->
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border-b border-gray-200/60 dark:border-gray-700/40">
    <span class="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
    <span class="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
    <span class="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>
    <span class="ml-4 text-[11px] text-gray-400 dark:text-gray-500 font-medium">app.sindre.ai</span>
  </div>

  <!-- 2. Content area (varies per mockup) -->
  ...

</div>

<style>
  .mockup-root {
    font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
  }
</style>
```

### Sizing

| Context | Width constraint | Notes |
|---|---|---|
| Hero (full-width, e.g. homepage) | `max-w-5xl mx-auto` | Wide — include sidebar + main content |
| Hero (side-by-side, e.g. Slack page) | `max-w-[520px]` | Compact — single-pane view |
| Showcase sections | `w-full` within grid column | Adapts to column width |

### Shadow styles

For hero-level mockups (large, prominent):
```
shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_16px_-4px_rgba(0,0,0,0.06),0_24px_48px_-12px_rgba(0,0,0,0.08)]
dark:shadow-[0_1px_2px_rgba(0,0,0,0.2),0_8px_16px_-4px_rgba(0,0,0,0.3),0_24px_48px_-12px_rgba(0,0,0,0.4)]
```

For smaller/inline mockups:
```
shadow-xl shadow-gray-900/[0.04] dark:shadow-black/20
```

### Content patterns for mockups

**User avatars** — Colored initials in small circles. Use soft, distinct hues (emerald, blue, amber, rose) for differentiation. Never brand purple.
```html
<div class="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/40 border-2 border-white dark:border-gray-800 flex items-center justify-center">
  <span class="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300">SC</span>
</div>
```

**Sindre avatar** — Use the actual logo image inside a brand-tinted container. This is the one place brand color appears inside mockups.
```html
<div class="w-8 h-8 rounded-lg overflow-hidden bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center">
  <img src="/sindre-logo-128.png" alt="Sindre" class="w-6 h-6 rounded" />
</div>
```

**Section labels** — Small uppercase tracking-wide headers to divide content areas.
```html
<h3 class="text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">Key Discussion Points</h3>
```

**Bullet lists with hierarchy** — Dots that decrease in darkness to show relative importance.
```html
<span class="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-white"></span>    <!-- Primary -->
<span class="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></span>  <!-- Secondary -->
<span class="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></span>  <!-- Tertiary -->
```

**Action/status indicators** — Green for completed/saved, gray for pending.
```html
<!-- Completed -->
<svg class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400">...</svg>
<span class="text-[12px] text-gray-500 dark:text-gray-400">Insight saved: <span class="font-medium text-gray-700 dark:text-gray-300">"Title"</span></span>

<!-- Pending checkbox -->
<span class="w-4 h-4 rounded border border-gray-300 dark:border-gray-600"></span>
```

**Structured data cards** — Nested cards for tables/lists inside a response.
```html
<div class="rounded-lg border border-gray-100 dark:border-gray-700/50 overflow-hidden">
  <div class="px-3.5 py-2 border-b border-gray-100 dark:border-gray-700/40">
    <span class="text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Header</span>
  </div>
  <div class="divide-y divide-gray-100 dark:divide-gray-700/40">
    <!-- rows -->
  </div>
</div>
```

**App sidebar** (for full-width mockups) — Narrow left nav with Sindre logo and icon+label nav items. One item highlighted as active.
```html
<div class="hidden sm:flex flex-col w-48 md:w-52 border-r border-gray-100 dark:border-gray-700/40 bg-gray-50/50 dark:bg-gray-800/50 flex-shrink-0 py-4 px-3">
  <!-- Logo -->
  <div class="flex items-center gap-2 px-2 mb-6">
    <img src="/sindre-logo-128.png" alt="" class="w-5 h-5 rounded" />
    <span class="text-sm font-semibold text-gray-900 dark:text-white">Sindre</span>
  </div>
  <!-- Nav items: inactive = text-gray-400, active = bg-white shadow-sm border -->
</div>
```

### Existing mockup components

| Component | Used on | Shows |
|---|---|---|
| `SlackMockup.astro` | `/slack` hero | Slack conversation with user asking Sindre to summarize feedback, structured response with themes card, action indicator |
| `MeetingSummaryMockup.astro` | `/` hero | Full app view with sidebar, meeting title/metadata, participant avatars, key discussion points, action items table |

### When to use mockups vs. screenshots

- **Prefer mockups** for hero images and primary showcase visuals. They scale perfectly, support dark mode, load instantly, and stay on-brand.
- **Screenshots are acceptable** for secondary/supporting visuals where the real product UI needs to be shown exactly as-is, or where creating a mockup would be disproportionate effort.

---

## What to Avoid

- Purple on anything that isn't an interactive CTA button or the one hero accent phrase
- Heavy drop shadows — keep shadows subtle (`shadow-gray-900/10`)
- Decorative elements competing with content — lattice patterns stay below 4% opacity
- Overly dense layouts — use generous whitespace between sections
- Inconsistent border radius — cards use `rounded-xl`, images use `rounded-2xl`, buttons use `rounded-lg`
- Colored section backgrounds (purple, blue, etc.) — stick to white, gray-50, and gray-900
