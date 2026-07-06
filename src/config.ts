/**
 * Single source of truth for business + site data.
 * SITE_URL is the subdomain these static SEO pages are served from. It controls
 * every canonical URL, OG URL, and the sitemap. The main brand site lives at
 * BUSINESS.mainSiteUrl (southlakeautocare.com) — that is where "Home" points and
 * where the LocalBusiness entity is anchored.
 */
export const SITE_URL = 'https://service.southlakeautocare.com';

export const BUSINESS = {
  name: 'Southlake Auto Care',
  siteTitle: 'SouthLake AutoCare',
  phone: '(770) 961-8500',
  phoneHref: 'tel:+17709618500',
  // Conversion actions live on THIS subdomain (relative paths). "Home" is the
  // only link that crosses to the main domain (BUSINESS.mainSiteUrl).
  ctaUrl: '/contact',
  scheduleUrl: '/schedule-service',
  mainSiteUrl: 'https://southlakeautocare.com',
  address: {
    street: '7032 Jonesboro Rd',
    city: 'Morrow',
    state: 'GA',
    zip: '30260'
  },
  geo: { lat: 33.5947, lng: -84.3396 },
  // Verify hours with the shop before launch
  hoursText: 'Mon–Fri: 8:00 AM – 5:30 PM',
  openingHours: 'Mo-Fr 08:00-17:30',
  serviceAreas: ['Jonesboro', 'Morrow', 'Forest Park', 'Riverdale', 'Lake City', 'Rex', 'Lovejoy', 'Hampton', 'Stockbridge', 'McDonough', 'Fayetteville'],
  logo: '/logo.png',
  ogImage: '/og-image.png'
} as const;

export interface FAQ { q: string; a: string; }
export interface Crumb { name: string; href: string; }
