/**
 * Generates sitemap.xml into dist/ after build. Run: npm run build (includes this step).
 * Set VITE_SITE_URL in .env for production.
 * Each URL includes <lastmod>YYYY-MM-DD</lastmod> using the page's actual last update when available.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'dist');
const baseUrl = process.env.VITE_SITE_URL || 'https://therestaurantownersguide.com';
const buildDate = new Date().toISOString().slice(0, 10);

const staticPaths = [
  '/',
  '/restaurant-cash-advance',
  '/restaurant-working-capital',
  '/restaurant-funding',
  '/business-cash-advance',
  '/small-business-funding',
  '/blog',
  '/sitemap',
  '/consultation',
];

// Pillar pages
const pillarPagesPath = join(root, 'src', 'data', 'pillarPages.tsx');
const pillarPagesSrc = readFileSync(pillarPagesPath, 'utf8');
const pillarPathMatches = pillarPagesSrc.matchAll(/path:\s*['"]([^'"]+)['"]/g);
const pillarPaths = [...new Set([...pillarPathMatches].map((m) => m[1]).filter((p) => p.startsWith('/')))];

// Blog posts with publishedDate / dateModified for lastmod
const blogPostsPath = join(root, 'src', 'data', 'blogPosts.ts');
const blogPostsSrc = readFileSync(blogPostsPath, 'utf8');
const slugMatches = blogPostsSrc.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
const blogSlugs = [...new Set([...slugMatches].map((m) => m[1]))];
const blogPaths = blogSlugs.map((s) => `/blog/${s}`);

// Build slug -> lastmod from blog data (dateModified || publishedDate)
const blogLastmod = {};
const blocks = blogPostsSrc.split(/\{\s*slug:\s*['"]/);
for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];
  const slugMatch = block.match(/^([^'"]+)['"]/);
  const pubMatch = block.match(/publishedDate:\s*['"](\d{4}-\d{2}-\d{2})['"]/);
  const modMatch = block.match(/dateModified:\s*['"](\d{4}-\d{2}-\d{2})['"]/);
  if (slugMatch && pubMatch) {
    blogLastmod[slugMatch[1]] = modMatch ? modMatch[1] : pubMatch[1];
  }
}

const POSTS_PER_PAGE = 12;
const blogTotalPages = Math.ceil(blogSlugs.length / POSTS_PER_PAGE);
const blogPaginationPaths = Array.from({ length: blogTotalPages - 1 }, (_, i) => `/blog/page/${i + 2}`);

const topicPagesPath = join(root, 'src', 'data', 'topicPages.tsx');
const topicPagesSrc = readFileSync(topicPagesPath, 'utf8');
const pathMatches = topicPagesSrc.matchAll(/path:\s*['"]([^'"]+)['"]/g);
const topicPaths = [...new Set([...pathMatches].map((m) => m[1]).filter((p) => p.startsWith('/')))];

// Collect all URLs with their lastmod
const urlEntries = [];

function addUrl(path, lastmodOverride, priority) {
  let lastmodVal = lastmodOverride || buildDate;
  if (!lastmodOverride && path.startsWith('/blog/') && !path.includes('/page/')) {
    const slug = path.replace(/^\/blog\//, '');
    if (blogLastmod[slug]) lastmodVal = blogLastmod[slug];
  }
  const pri = priority ?? (path === '/' ? '1.0' : path.startsWith('/blog/') ? '0.8' : '0.9');
  urlEntries.push({ path, lastmod: lastmodVal, priority: pri });
}

staticPaths.forEach((p) => addUrl(p));
pillarPaths.forEach((p) => addUrl(p));
blogPaginationPaths.forEach((p) => addUrl(p));
topicPaths.forEach((p) => addUrl(p));
blogPaths.forEach((p) => addUrl(p));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries
  .map(
    ({ path, lastmod, priority }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
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
console.log('Wrote ' + urlEntries.length + ' URLs to ' + outPath);
