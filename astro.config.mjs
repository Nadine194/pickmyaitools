import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pickmyaitools.com',
  integrations: [
    tailwind(),
    sitemap({
      // Keep noindexed pages out of the sitemap. Only homepage, about and
      // the tool selector should be submitted to search engines.
      filter: (page) => {
        const noindexPatterns = [
          '/use-cases',
          '/comparisons',
          '/guides',
          '/privacy',
          '/terms',
          '/affiliate-disclaimer',
          '/404',
        ];
        return !noindexPatterns.some((pattern) => page.includes(pattern));
      },
    }),
  ],
  output: 'static',
});
