export interface Coupon {
  slug: string;              // "10-off-oil-change"
  headline: string;          // "$10 Off Any Oil Change"
  title: string;
  description: string;
  offer: string;             // one-line offer description
  finePrint: string;         // terms
  expires?: string;          // ISO date, optional
  service?: {                // optional route to related service
    href: string;
    label: string;
  };
}

// Empty by default. Populate to publish real coupons.
// Do NOT publish invented dollar amounts — confirm each offer with the shop.
export const COUPONS: Coupon[] = [];
