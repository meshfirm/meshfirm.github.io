# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Create production build (outputs to `/dist`)
- `npm run preview` - Preview production build locally

## Deployment

Automatic deployment to GitHub Pages occurs on push to `main` branch. Manual deployment can be triggered via GitHub Actions UI.

## Architecture

This is a static marketing website for Sindre AI built with **Astro 5.3** and **Tailwind CSS 3.4**. The site uses **Flowbite** for pre-built UI components.

### Directory Structure

- `src/components/` - Reusable Astro components (Navbar, Footer, CTAs, FAQ sections, etc.)
- `src/layouts/` - Page layout templates (Layout.astro is the main wrapper)
- `src/pages/` - Page routes (Astro auto-generates URLs from file structure)
- `public/` - Static assets (images, logos, favicon, CNAME for custom domain)

### Key Configuration

- **astro.config.cjs** - Site URL (`https://sindre.ai`), dev server port, Tailwind integration
- **tailwind.config.js** - Custom brand color palette (purple-based), dark mode via `darkMode: 'class'`, Open Sans font family

### Styling

Custom brand colors are defined in `tailwind.config.js` under `theme.extend.colors.brand` (50-900 shades). Dark mode is class-based with localStorage persistence implemented in Layout.astro.

### External Services

- **EmailJS** - Form handling (initialized in Layout.astro)
- **Flowbite JS** - Loaded from CDN for interactive components
