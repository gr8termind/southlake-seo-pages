// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output (default) — every page is prerendered to plain HTML in /dist
// for maximum crawlability. Cloudflare Pages: build command `npm run build`,
// output directory `dist`.
export default defineConfig({
  site: 'https://southlakeautocare.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
