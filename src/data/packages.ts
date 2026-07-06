import type { FAQ } from '../config';

export interface Package {
  slug: string;              // "30k-service"
  name: string;              // "30,000-Mile Service"
  title: string;
  description: string;
  hero: string;
  includes: string[];        // what's in the package
  benefits: string;          // paragraph
  price?: string;            // optional; leave blank unless the shop confirms
  faqs: FAQ[];
}

// Empty by default. Populate to publish. Suggested packages to seed later:
// - "New Customer Welcome"
// - "30,000-Mile Service"
// - "60,000-Mile Service"
// - "90,000-Mile Service"
// - "Pre-Trip Inspection"
// - "Georgia Emissions Prep"
export const PACKAGES: Package[] = [];
