import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap'; // Temporarily disabled due to build issue

// https://astro.build/config
export default defineConfig({
  site: 'https://pickmyaitools.com',
  integrations: [
    tailwind(),
    // sitemap(), // Temporarily disabled - will fix after deployment
  ],
  output: 'static',
});
