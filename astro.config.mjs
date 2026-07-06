// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Static output — every page is prerendered to plain HTML in /dist for maximum
// crawlability. These SEO landing pages are served from the `service.` subdomain;
// the main brand site stays at southlakeautocare.com.
// Cloudflare Pages: build command `npm run build`, output directory `dist`.
export default defineConfig({
  site: 'https://service.southlakeautocare.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/leave-a-review'),
      changefreq: 'weekly',
      lastmod: new Date(),
      serialize(item) {
        // City hub pages slightly lower than core service pages.
        if (/morrow-auto-repair|forest-park-auto-repair/.test(item.url)) {
          item.priority = 0.8;
        } else {
          item.priority = 0.9;
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
