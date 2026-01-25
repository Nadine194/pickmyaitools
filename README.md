# PickMyAITools

A fast, static, SEO-first affiliate content site for AI tool reviews, comparisons, and guides.

## Tech Stack

- **Framework:** Astro (latest)
- **Output:** Static Site Generation (SSG)
- **Styling:** Tailwind CSS
- **Content:** Markdown files with Astro Content Collections
- **SEO:** Sitemap, robots.txt, meta tags, Open Graph, Twitter Cards, JSON-LD

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

To build the static site:

```bash
npm run build
```

The output will be in the `dist/` directory.

### Preview

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── Layout.astro    # Main layout with header/footer
│   ├── SEO.astro       # SEO meta tags component
│   ├── AffiliateLink.astro
│   ├── ToolCard.astro
│   ├── ComparisonTable.astro
│   ├── FAQ.astro
│   ├── AffiliateDisclosure.astro
│   ├── RelatedPages.astro
│   ├── Breadcrumbs.astro
│   └── QuickPick.astro
├── content/
│   └── pages/          # Markdown content files
├── layouts/
│   └── ContentPage.astro  # Template for content pages
├── pages/              # Route files
│   ├── index.astro     # Home page
│   ├── use-cases/      # Use case pages
│   ├── comparisons/    # Comparison pages
│   ├── guides/         # Guide pages
│   └── [static pages]  # About, Privacy, Terms, etc.
└── styles/
    └── global.css      # Global styles and Tailwind
```

## Adding New Content

### Adding a New Markdown Page

1. Create a new `.md` file in `src/content/pages/`
2. Add frontmatter with required fields:

```yaml
---
title: Your Page Title
description: A compelling description for SEO
section: use-cases | comparisons | guides
slug: your-page-slug
date: 2025-01-27
updated: 2025-01-27
keywords: [keyword1, keyword2, keyword3]
affiliate: true
featured: false
draft: false
---
```

3. Write your content in Markdown below the frontmatter
4. The page will automatically be available at `/{section}/{slug}`

### Frontmatter Fields

- **title** (required): Page title
- **description** (required): Meta description for SEO
- **section** (required): `use-cases`, `comparisons`, or `guides`
- **slug** (required): URL-friendly identifier
- **date** (required): Publication date
- **updated** (required): Last update date
- **keywords** (required): Array of SEO keywords
- **affiliate** (optional): Whether page contains affiliate links (default: true)
- **featured** (optional): Show on homepage (default: false)
- **draft** (optional): Hide from site (default: false)

## Adding Affiliate Links

Use the `AffiliateLink` component in your markdown or Astro files:

```astro
---
import AffiliateLink from '../components/AffiliateLink.astro';
---

<AffiliateLink href="https://example.com" label="Click here" />
```

The component automatically:
- Adds `rel="nofollow sponsored noopener"`
- Opens in new tab (`target="_blank"`)
- Appends tracking parameter `?ref=pickmyaitools`

**Important:** Replace placeholder URLs (`https://example.com`) with real affiliate URLs when ready.

## Components

### Available Components

- **Layout**: Main site layout with navigation
- **SEO**: Handles all meta tags, Open Graph, Twitter Cards
- **AffiliateLink**: Creates properly formatted affiliate links
- **ToolCard**: Displays tool information with affiliate link
- **ComparisonTable**: Side-by-side comparison tables
- **FAQ**: FAQ section with JSON-LD schema
- **AffiliateDisclosure**: Affiliate disclosure block
- **RelatedPages**: Auto-generated related content
- **Breadcrumbs**: Navigation breadcrumbs with JSON-LD
- **QuickPick**: Highlighted tool recommendation

## SEO Features

- ✅ Automatic sitemap generation (`/sitemap-index.xml`)
- ✅ robots.txt
- ✅ Canonical URLs
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (FAQ, Breadcrumbs)
- ✅ Semantic HTML
- ✅ Internal linking
- ✅ Last updated dates

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Astro
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### Other Static Hosts

Build the site with `npm run build` and upload the `dist/` directory to your hosting provider.

## Development Notes

- All content is stored in Markdown files
- No database required
- No authentication needed
- Static site = fast loading times
- SEO-optimized out of the box

## License

Proprietary - All rights reserved
