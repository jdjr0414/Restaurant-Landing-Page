/**
 * Generates sitemap.xml into dist/ after build. Run: npm run build (includes this step).
 * Set VITE_SITE_URL in .env for production.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'dist');
const baseUrl = process.env.VITE_SITE_URL || 'https://www.restaurantownersguide.com';

const staticPaths = [
  '/',
  '/restaurant-cash-advance',
  '/restaurant-working-capital',
  '/restaurant-funding',
  '/business-cash-advance',
  '/small-business-funding',
  '/blog',
  '/sitemap',
];

const blogPostsPath = join(root, 'src', 'data', 'blogPosts.ts');
const blogPostsSrc = readFileSync(blogPostsPath, 'utf8');
const slugMatches = blogPostsSrc.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
const blogSlugs = [...new Set([...slugMatches].map((m) => m[1]))];
const blogPaths = blogSlugs.map((s) => `/blog/${s}`);

const POSTS_PER_PAGE = 12;
const blogTotalPages = Math.ceil(blogSlugs.length / POSTS_PER_PAGE);
const blogPaginationPaths = Array.from({ length: blogTotalPages - 1 }, (_, i) => `/blog/page/${i + 2}`);

const topicPagesPath = join(root, 'src', 'data', 'topicPages.tsx');
const topicPagesSrc = readFileSync(topicPagesPath, 'utf8');
const pathMatches = topicPagesSrc.matchAll(/path:\s*['"]([^'"]+)['"]/g);
const topicPaths = [...new Set([...pathMatches].map((m) => m[1]).filter((p) => p.startsWith('/')))];

const urls = [...staticPaths, ...blogPaginationPaths, ...topicPaths, ...blogPaths];
const lastmod = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : path.startsWith('/blog/') ? '0.8' : '0.9'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

if (!existsSync(outDir)) {
  console.error('dist/ not found. Run vite build first.');
  process.exit(1);
}

const outPath = join(outDir, 'sitemap.xml');
writeFileSync(outPath, xml, 'utf8');
console.log('Wrote ' + urls.length + ' URLs to ' + outPath);
