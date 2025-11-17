# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website and technical blog built with Astro, featuring blog posts, presentation slides, and a resume/profile page. The site is deployed to GitHub Pages and uses TypeScript, React, and TailwindCSS.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (with type checking)
npm run dev

# Start development server (without type checking)
npm start

# Build for production (includes jampack optimization)
npm run build

# Preview production build locally
npm run preview

# Type checking and schema sync
npm run sync

# Code formatting
npm run format        # Format all files
npm run format:check  # Check formatting without changes

# Linting
npm run lint

# Commit with conventional commits
npm run cz
```

## Architecture

### Content Collections

The site uses Astro Content Collections with strict Zod schemas defined in `src/content/_schemas.ts`:

- **blog**: Blog posts stored in `src/content/blog/` with schema including title, pubDate, description, tags, featured status, draft status, and optional ogImage
- **slides**: Presentation slides stored in `src/content/slides/` with title, pubDate, and draft status
- **profile**: Profile/resume content in `src/content/profile/`

Collections are registered in `src/content/config.ts`.

### Key Directories

- `src/pages/`: File-based routing (each `.astro` or `.md` file becomes a route)
- `src/components/`: Reusable Astro and React components (Header, Footer, Search, Card, etc.)
- `src/layouts/`: Layout components (Layout, PostDetails, Posts, Slides, ProfileLayout, ResumeLayout)
- `src/utils/`: Utility functions for sorting posts/slides, generating OG images, tag management, and slugification
- `src/styles/`: Global styles and Tailwind configuration
- `public/`: Static assets served directly

### Configuration

- **Site config**: `src/config.ts` contains SITE object (website URL, author, title, GA ID), LOCALE, LOGO_IMAGE settings, and SOCIALS array
- **Astro config**: `astro.config.mjs` configures integrations (Tailwind, React, Sitemap, MDX, Partytown), markdown plugins (remark-toc, remark-collapse), Shiki syntax highlighting (one-dark-pro theme), and Vite plugins (YAML support)
- **Markdown**: Uses remark-toc for table of contents and remark-collapse to collapse "Table of contents" sections

### Special Features

- **OG Image Generation**: Dynamic Open Graph images generated in `src/utils/generateOgImage.tsx` using Satori
- **Fuzzy Search**: Implemented with FuseJS in `src/components/Search.tsx`
- **Slides**: Uses Reveal.js for presentation slides (configured in `src/reveal-plugins/`)
- **D2 Diagrams**: Custom script `d2-compile` watches for `.d2` files and compiles them to SVG using the elk layout engine
- **RSS Feed**: Generated at `/rss.xml` via `src/pages/rss.xml.ts`

### Content Frontmatter

**Blog posts** require:
- `title`: string
- `description`: string
- `pubDate`: date
- `tags`: array of strings (defaults to ["others"])

Optional fields: `author`, `postSlug`, `featured`, `draft`, `ogImage`, `resources`

**Slides** require:
- `title`: string
- `pubDate`: date

Optional: `draft`

## Build and Deployment

- Pre-commit hook runs `lint-staged` to format files with Prettier (excludes image files)
- Production build runs `astro build && jampack ./dist` for optimization
- GitHub Actions workflow (`.github/workflows/astro.yml`) automatically builds and deploys to GitHub Pages on push to master branch
- Build uses Node 18 and npm ci for dependency installation

## Tech Stack

- Framework: Astro 3.x
- Type Checking: TypeScript
- Components: React 18 + Astro components
- Styling: TailwindCSS with @tailwindcss/typography
- Search: FuseJS
- Slides: Reveal.js
- Diagrams: D2 (compiled to SVG)
- Code Formatting: Prettier with Tailwind plugin
- Linting: ESLint with Astro parser
- Commits: Commitizen with conventional changelog
- Optimization: Jampack
