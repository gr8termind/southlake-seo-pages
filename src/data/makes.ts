import type { FAQ } from '../config';

export interface VehicleMake {
  slug: string;              // "toyota"
  make: string;              // "Toyota"
  title: string;
  description: string;
  hero: string;              // hero paragraph
  common: string;            // common services/issues paragraph
  models?: string[];         // optional list
  faqs: FAQ[];
}

// Empty by default. Populate to publish. Example entry pattern:
// {
//   slug: 'toyota',
//   make: 'Toyota',
//   title: 'Toyota Repair in Jonesboro, GA | Southlake Auto Care | (770) 961-8500',
//   description: 'Toyota repair and maintenance in Jonesboro, GA. Southlake Auto Care...',
//   hero: 'From Camry and Corolla to Tacoma and 4Runner, we service every Toyota...',
//   common: 'Common Toyota work we handle: brake service, timing chain inspection...',
//   models: ['Camry', 'Corolla', 'Tacoma', '4Runner', 'Highlander', 'RAV4', 'Tundra'],
//   faqs: [...]
// }
export const MAKES: VehicleMake[] = [];
