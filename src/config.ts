/**
 * Link to the find-match / apply form on Axiant Partners.
 */
export const FIND_MATCH_URL = 'https://axiantpartners.com/match';

/** rel attribute for all external Axiant links (sponsored disclosure, new tab). */
export const AXIANT_LINK_REL = 'sponsored noopener noreferrer';

/** Site/brand name for titles, footer, etc. */
export const SITE_NAME = 'The Restaurant Owners Guide';

/** Site URL for canonicals, OG, sitemap. Set VITE_SITE_URL in .env for production. */
export const SITE_URL =
  (typeof import.meta !== 'undefined' && (import.meta as { env?: { VITE_SITE_URL?: string } }).env?.VITE_SITE_URL) ||
  'https://therestaurantownersguide.com';

/** Default OG/Twitter image when page does not set one (1200x630 recommended). */
export const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80';

/** Publisher logo URL for schema (Organization, Article publisher). */
export const SITE_LOGO = `${SITE_URL}/logo-horizontal.svg`;
