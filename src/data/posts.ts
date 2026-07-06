import type { FAQ } from '../config';

export interface Post {
  slug: string;
  title: string;
  description: string;      // meta description
  headline: string;         // display headline
  author: string;           // shop name or technician
  publishedISO: string;     // e.g. "2026-07-15"
  updatedISO?: string;
  readMinutes: number;
  category: string;
  excerpt: string;
  body: string;             // full HTML/markup body — kept simple
  faqs?: FAQ[];
}

// Empty by default. Populate to publish blog articles.
export const POSTS: Post[] = [];
