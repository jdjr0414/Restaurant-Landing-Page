/**
 * Unique hero images per page for tab variety. All use w=1200&q=90 for sharp display.
 * Theme: restaurant, food service, kitchens, dining, business.
 * Each image is used exactly once across the site.
 */
const Q = 'w=1200&q=90';

export const PAGE_HERO_IMAGES: Record<string, string> = {
  // Main nav tabs
  '/restaurant-funding': `https://images.unsplash.com/photo-1770509634681-be8be680968a?${Q}`,
  '/restaurant-working-capital': `https://images.unsplash.com/photo-1761095596618-081ea3f043a5?${Q}`,
  '/consultation': `https://images.unsplash.com/photo-1696860650232-621c1c01fd84?${Q}`,
  '/faq': `https://images.unsplash.com/photo-1592861956120-e524fc739696?${Q}`,
  '/blog': `https://images.unsplash.com/photo-1667388968964-4aa652df0a9b?${Q}`,
  '/sitemap': `https://images.unsplash.com/photo-1766812782166-e243111f703d?${Q}`,
  '/business-cash-advance': `https://images.unsplash.com/photo-1616538994032-f7619b8bebb5?${Q}`,
  '/small-business-funding': `https://images.unsplash.com/photo-1771575521792-4843df806b57?${Q}`,

  // Pillar pages
  '/restaurant-cash-flow-guide': `https://images.unsplash.com/photo-1758835382995-acc5e2592d6e?${Q}`,
  '/restaurant-funding-options': `https://images.unsplash.com/photo-1763994682440-6e596fce21b5?${Q}`,
  '/restaurant-working-capital-guide': `https://images.unsplash.com/photo-1760276148662-7f78634412f2?${Q}`,
  '/restaurant-loan-alternatives': `https://images.unsplash.com/photo-1667388969250-1c7220bf3f37?${Q}`,
  '/restaurant-equipment-financing-guide': `https://images.unsplash.com/photo-1729394405518-eaf2a0203aa7?${Q}`,

  // Topic pages - each unique
  '/restaurant-payroll-funding': `https://images.unsplash.com/photo-1538333581680-29dd4752ddf2?${Q}`,
  '/restaurant-equipment-financing': `https://images.unsplash.com/photo-1583354608715-177553a4035e?${Q}`,
  '/restaurant-seasonal-cash-flow': `https://images.unsplash.com/photo-1560130934-590b85fc08e7?${Q}`,
  '/restaurant-emergency-funding': `https://images.unsplash.com/photo-1613274554329-70f997f5789f?${Q}`,
  '/restaurant-cash-flow-solutions': `https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?${Q}`,
  '/funding-for-new-restaurants': `https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?${Q}`,
  '/restaurant-inventory-funding': `https://images.unsplash.com/photo-1514939771107-60b853a2ebdd?${Q}`,
  '/why-restaurants-run-out-of-cash': `https://images.unsplash.com/photo-1568901346375-23c9450c58cd?${Q}`,
  '/restaurant-cash-advance-vs-loan': `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?${Q}`,
  '/working-capital-for-restaurants': `https://images.unsplash.com/photo-1759866614069-e5b93d17e663?${Q}`,
  '/restaurant-financing-options': `https://images.unsplash.com/photo-1769208053961-567c81c9def0?${Q}`,
  '/restaurant-startup-funding': `https://images.unsplash.com/photo-1667388968900-4dc428fedb8c?${Q}`,
  '/restaurant-expansion-funding': `https://images.unsplash.com/photo-1758245475662-09d75f1f230a?${Q}`,
  '/how-much-can-you-qualify-for': `https://images.unsplash.com/photo-1494346480775-936a9f0d0877?${Q}`,
  '/food-truck-funding': `https://images.unsplash.com/photo-1526069631228-723c945bea6b?${Q}`,
};

const DEFAULT_HERO_IMAGE = `https://images.unsplash.com/photo-1653259038915-7cf0b7a4dd6c?${Q}`;

export function getPageHeroImage(pathname: string): string {
  if (PAGE_HERO_IMAGES[pathname]) return PAGE_HERO_IMAGES[pathname];
  if (pathname.startsWith('/blog')) return PAGE_HERO_IMAGES['/blog'] ?? DEFAULT_HERO_IMAGE;
  return DEFAULT_HERO_IMAGE;
}
