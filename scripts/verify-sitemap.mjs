/**
 * Verify sitemap includes all indexable pages and excludes noindex.
 * Run after: npm run build (or node scripts/generate-sitemap.mjs)
 */
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');
const sitemapPath = join(distDir, 'sitemap.xml');

if (!existsSync(sitemapPath)) {
  console.error('[verify-sitemap] sitemap.xml not found. Run npm run build first.');
  process.exit(1);
}

const baseUrl = process.env.VITE_SITE_URL || 'https://therestaurantownersguide.com';
const xml = readFileSync(sitemapPath, 'utf8');
const locMatches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
const sitemapUrls = [...locMatches].map((m) => m[1].replace(baseUrl, '') || '/');

// Build expected indexable URLs from source (same logic as generate-sitemap)
const staticPaths = [
  '/', '/restaurant-cash-advance', '/restaurant-working-capital', '/restaurant-funding',
  '/business-cash-advance', '/small-business-funding', '/blog', '/sitemap', '/consultation',
];

const pillarPagesSrc = readFileSync(join(root, 'src', 'data', 'pillarPages.tsx'), 'utf8');
const pillarPaths = [...pillarPagesSrc.matchAll(/path:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]).filter((p) => p.startsWith('/'));

const topicPagesSrc = readFileSync(join(root, 'src', 'data', 'topicPages.tsx'), 'utf8');
const topicPaths = [...topicPagesSrc.matchAll(/path:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]).filter((p) => p.startsWith('/'));

const blogPostsSrc = readFileSync(join(root, 'src', 'data', 'blogPosts.ts'), 'utf8');
const blocks = blogPostsSrc.split(/\{\s*slug:\s*['"]/);
const indexableBlogSlugs = [];
for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];
  const slugMatch = block.match(/^([^'"]+)['"]/);
  const hasCustomContent = /hasCustomContent:\s*true/.test(block);
  if (slugMatch && hasCustomContent) indexableBlogSlugs.push(slugMatch[1]);
}
const blogPaths = indexableBlogSlugs.map((s) => `/blog/${s}`);

const blogTotalPosts = blocks.length - 1;
const blogTotalPages = Math.ceil(blogTotalPosts / 12);
const blogPaginationPaths = Array.from({ length: blogTotalPages - 1 }, (_, i) => `/blog/page/${i + 2}`);

const expectedIndexable = new Set([
  ...staticPaths,
  ...pillarPaths,
  ...topicPaths,
  ...blogPaths,
  ...blogPaginationPaths,
]);

const sitemapPaths = new Set(sitemapUrls);

const missing = [...expectedIndexable].filter((p) => !sitemapPaths.has(p));
const extra = [...sitemapPaths].filter((p) => !expectedIndexable.has(p));

// Any URL in sitemap not in expected indexable set is incorrectly included (noindex or invalid)
const incorrectlyIncluded = extra;

console.log('\n=== Sitemap Verification ===');
console.log('Total URLs in sitemap:', sitemapPaths.size);
if (missing.length > 0) {
  console.log('\nIndexable pages MISSING from sitemap:', missing.length);
  missing.forEach((p) => console.log('  -', p));
} else {
  console.log('\nIndexable pages missing: none');
}
if (incorrectlyIncluded.length > 0) {
  console.log('\nNoindex pages INCORRECTLY included:', incorrectlyIncluded.length);
  incorrectlyIncluded.forEach((p) => console.log('  -', p));
} else {
  console.log('\nNoindex pages incorrectly included: none');
}
if (extra.length > 0 && incorrectlyIncluded.length === 0) {
  console.log('\nExtra URLs in sitemap (not in expected set, may be OK):', extra.length);
  extra.slice(0, 10).forEach((p) => console.log('  -', p));
  if (extra.length > 10) console.log('  ... and', extra.length - 10, 'more');
}
console.log('\n');
