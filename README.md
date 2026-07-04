# southlake-seo-pages

Static SEO landing pages for **Southlake Auto Care** (Jonesboro / Morrow / Forest Park, GA), built with Astro + Tailwind CSS v4 and fully prerendered to plain HTML for maximum crawlability.

## Cloudflare Pages settings

| Setting          | Value           |
| ---------------- | --------------- |
| Framework preset | Astro           |
| Build command    | `npm run build` |
| Output directory | `dist`          |

## Local development

```bash
npm install
npm run dev      # dev server
npm run build    # static build to /dist
npm run preview  # preview the built site
```

## Before launch

1. **Canonical domain** — `SITE_URL` in `src/config.ts` drives every canonical URL, OG URL, and the sitemap. It's currently `https://southlakeautocare.com`; update it if these pages will be served from a different hostname, and mirror the change in `public/robots.txt`.
2. **Reviews** — testimonials in `src/components/ReviewSection.astro` are placeholders. Swap in real Google reviews before launch.
3. **Hours** — verify shop hours in `src/config.ts` (`hoursText` / `openingHours`) and `LocalBusinessSchema.astro`.

## Structure

- `src/config.ts` — single source of truth for NAP, hours, CTA URLs, and `SITE_URL`
- `src/layouts/BaseLayout.astro` — full SEO head (title, description, canonical, OG, Twitter, manifest) + LocalBusiness schema on every page
- `src/components/` — Header, Footer, Hero, CTASection, FAQSection (FAQPage schema), ServiceCards, ReviewSection, Breadcrumbs (BreadcrumbList schema), LocalBusinessSchema, ServiceSchema
- `src/pages/sitemap.xml.ts` — build-time sitemap generated from `SITE_URL`
