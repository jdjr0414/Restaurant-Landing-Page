/**
 * Generates sitemap.xml into dist/ after the prerender step. Run: npm run build (includes this).
 * Set VITE_SITE_URL in .env for production.
 *
 * The URL set is derived from the actual prerendered output in dist/ (the source of truth for
 * what exists), then filtered to exclude redirect sources, noindex pages, and utility pages.
 * This guarantees every live indexable page is listed and nothing that 301s or 404s leaks in.
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, relative, sep } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = join(__dirname, '..');
const outDir = join(root, 'dist');
const baseUrl = process.env.VITE_SITE_URL || 'https://therestaurantownersguide.com';
const buildDate = new Date().toISOString().slice(0, 10);

if (!existsSync(outDir)) {
  console.error('dist/ not found. Run vite build + prerender first.');
  process.exit(1);
}

const norm = (s) => s.replace(/\/$/, '') || '/';

// Redirect sources — never list a URL that 301s.
const redirectSources = new Set(
  readFileSync(join(root, 'public', '_redirects'), 'utf8')
    .split('\n')
    .filter((l) => /^\//.test(l))
    .map((l) => norm(l.trim().split(/\s+/)[0]))
);

// Per-blog-post lastmod from source.
const blogPostsSrc = readFileSync(join(root, 'src', 'data', 'blogPosts.ts'), 'utf8');
const blogLastmod = {};
for (const block of blogPostsSrc.split(/\{\s*slug:\s*['"]/).slice(1)) {
  const slug = block.match(/^([^'"]+)['"]/)?.[1];
  const pub = block.match(/publishedDate:\s*['"](\d{4}-\d{2}-\d{2})['"]/)?.[1];
  const mod = block.match(/dateModified:\s*['"](\d{4}-\d{2}-\d{2})['"]/)?.[1];
  if (slug && pub) blogLastmod[slug] = mod || pub;
}

// Walk dist for prerendered pages = the definitive live URL set.
function walk(dir) {
  let out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out = out.concat(walk(p));
    else if (name === 'index.html') out.push(p);
  }
  return out;
}
const pageOf = (f) => norm('/' + relative(outDir, f).split(sep).join('/').replace(/index\.html$/, ''));

const UTILITY = new Set(['/404']);
const urlEntries = [];
for (const file of walk(outDir)) {
  const path = pageOf(file);
  if (UTILITY.has(path)) continue;
  if (redirectSources.has(path)) continue;
  const html = readFileSync(file, 'utf8');
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) continue;

  let lastmod = buildDate;
  if (path.startsWith('/blog/') && !path.includes('/page/')) {
    const slug = path.replace(/^\/blog\//, '');
    if (blogLastmod[slug]) lastmod = blogLastmod[slug];
  }
  const priority = path === '/' ? '1.0' : path.startsWith('/blog/') ? '0.8' : '0.9';
  urlEntries.push({ path, lastmod, priority });
}

urlEntries.sort((a, b) => a.path.localeCompare(b.path));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries
  .map(
    ({ path, lastmod, priority }) => `  <url>
    <loc>${baseUrl}${path === '/' ? '' : path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(outDir, 'sitemap.xml'), xml, 'utf8');
console.log('Wrote ' + urlEntries.length + ' URLs to ' + join(outDir, 'sitemap.xml'));
