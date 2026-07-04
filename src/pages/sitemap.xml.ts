import type { APIRoute } from 'astro';
import { SITE_URL } from '../config';

const routes = [
  { path: '/', priority: '1.0' },
  { path: '/brake-repair-jonesboro-ga', priority: '0.9' },
  { path: '/oil-change-jonesboro-ga', priority: '0.9' },
  { path: '/check-engine-light-jonesboro-ga', priority: '0.9' },
  { path: '/auto-ac-repair-jonesboro-ga', priority: '0.9' },
  { path: '/transmission-repair-jonesboro-ga', priority: '0.9' },
  { path: '/morrow-auto-repair', priority: '0.8' },
  { path: '/forest-park-auto-repair', priority: '0.8' }
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${r.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${r.path}`}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  });
};
