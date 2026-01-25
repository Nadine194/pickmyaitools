# Quick Start Guide

## First Time Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321`

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in `dist/` directory

## Adding Affiliate Links

When you're ready to add real affiliate links, replace placeholder URLs in:
- Markdown content files (`src/content/pages/*.md`)
- Component usage in templates

Use the `AffiliateLink` component:
```astro
---
import AffiliateLink from '../components/AffiliateLink.astro';
---

<AffiliateLink href="YOUR_AFFILIATE_URL" label="Click here" />
```

The component automatically adds proper attributes and tracking.

## Content Structure

All content pages are in `src/content/pages/` as Markdown files.

Each file needs frontmatter:
```yaml
---
title: Page Title
description: SEO description
section: use-cases | comparisons | guides
slug: url-slug
date: 2025-01-27
updated: 2025-01-27
keywords: [keyword1, keyword2]
affiliate: true
featured: false
draft: false
---
```

## Deployment Checklist

Before deploying:
- [ ] Replace placeholder affiliate URLs
- [ ] Update site URL in `astro.config.mjs` if needed
- [ ] Verify all pages render correctly
- [ ] Test internal links
- [ ] Check sitemap at `/sitemap-index.xml`
- [ ] Verify robots.txt at `/robots.txt`

## Next Steps

1. Fill in content for the 20 markdown pages
2. Add real affiliate links
3. Customize styling if needed
4. Add analytics (if desired)
5. Deploy to Vercel/Netlify
