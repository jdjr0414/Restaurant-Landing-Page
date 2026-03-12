#!/usr/bin/env node
/**
 * Internal linking audit: inbound/outbound counts, orphans, top pages.
 * Run: node scripts/internal-linking-audit.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');

// Build ALL_PATHS from config files (no TS import)
function getAllPaths() {
  const topicText = fs.readFileSync(path.join(SRC, 'data/topicPages.tsx'), 'utf8');
  const pillarText = fs.readFileSync(path.join(SRC, 'data/pillarPages.tsx'), 'utf8');
  const postsText = fs.readFileSync(path.join(SRC, 'data/blogPosts.ts'), 'utf8');

  const topicPaths = [...topicText.matchAll(/path:\s*['"](\/[^'"]+)['"]/g)].map((m) => m[1]);
  const pillarPaths = [...pillarText.matchAll(/path:\s*['"](\/[^'"]+)['"]/g)].map((m) => m[1]);
  const blogSlugs = [...postsText.matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  const blogPaths = blogSlugs.map((s) => `/blog/${s}`);

  const postCount = blogSlugs.length;
  const totalPages = Math.ceil(postCount / 12);
  const blogPaginationPaths = Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => `/blog/page/${i + 2}`);

  const paths = [
    '/', '/consultation', '/restaurant-cash-advance', '/restaurant-working-capital',
    '/restaurant-funding', '/business-cash-advance', '/small-business-funding',
    '/blog', ...blogPaginationPaths, '/sitemap', '/faq',
    ...pillarPaths, ...topicPaths, ...blogPaths,
  ];
  return [...new Set(paths)];
}

const ALL_PATHS = getAllPaths();

// Parse pillar/topic paths and blog slugs
const pillarPaths = [...fs.readFileSync(path.join(SRC, 'data/pillarPages.tsx'), 'utf8').matchAll(/path:\s*['"](\/[^'"]+)['"]/g)].map((m) => m[1]);
const topicPaths = [...fs.readFileSync(path.join(SRC, 'data/topicPages.tsx'), 'utf8').matchAll(/path:\s*['"](\/[^'"]+)['"]/g)].map((m) => m[1]);
const blogSlugs = [...fs.readFileSync(path.join(SRC, 'data/blogPosts.ts'), 'utf8').matchAll(/slug:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
const indexableSlugs = new Set();
const postsBlocks = fs.readFileSync(path.join(SRC, 'data/blogPosts.ts'), 'utf8').split(/\{\s*slug:\s*['"]/);
for (let i = 1; i < postsBlocks.length; i++) {
  const m = postsBlocks[i].match(/^([^'"]+)['"]/);
  const hasCustom = /hasCustomContent:\s*true/.test(postsBlocks[i]);
  if (m && hasCustom) indexableSlugs.add(m[1]);
}

// Normalize path: strip hash/query, ensure leading slash
function norm(p) {
  if (!p || typeof p !== 'string') return null;
  const clean = p.split(/[#?]/)[0].trim();
  if (!clean.startsWith('/')) return '/' + clean;
  return clean;
}

// Extract internal links from a string (Link to="/x", href="/x", or href: '/x')
function extractLinks(text) {
  const links = new Set();
  const re = /(?:to|href)\s*[=:]\s*["'](\/[^"']*)["']/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const n = norm(m[1]);
    if (n && n !== '/sitemap.xml') links.add(n);
  }
  return links;
}

// Build link graph: { fromPath -> Set<toPath> }
const outbound = new Map(); // page -> Set of pages it links to
const inbound = new Map();  // page -> Set of pages that link to it

function addLink(from, to) {
  if (!from || !to || from === to) return;
  if (!ALL_PATHS.includes(to)) return; // only count links to valid pages
  if (!outbound.has(from)) outbound.set(from, new Set());
  outbound.get(from).add(to);
  if (!inbound.has(to)) inbound.set(to, new Set());
  inbound.get(to).add(from);
}

// 1. Parse all source files for static links
const srcFiles = [
  'pages/HomePage.tsx', 'pages/BlogIndexPage.tsx', 'pages/BlogPostPage.tsx',
  'pages/SitemapPage.tsx', 'pages/RestaurantFundingPage.tsx', 'pages/RestaurantWorkingCapitalPage.tsx',
  'pages/RestaurantCashAdvancePage.tsx', 'pages/BusinessCashAdvancePage.tsx', 'pages/SmallBusinessFundingPage.tsx',
  'pages/ConsultationPage.tsx', 'components/Footer.tsx', 'components/SiteLayout.tsx',
  'components/Hero.tsx', 'components/CTA.tsx', 'components/RestaurantCashFlowChallenges.tsx',
  'components/WhenToExploreOptions.tsx', 'components/WhyAxiantPartners.tsx',
];
for (const file of srcFiles) {
  const fp = path.join(SRC, file);
  if (!fs.existsSync(fp)) continue;
  const text = fs.readFileSync(fp, 'utf8');
  const links = extractLinks(text);
  const fromPath = inferPageFromFile(file);
  if (fromPath) {
    for (const to of links) addLink(fromPath, to);
  }
}

function inferPageFromFile(file) {
  const map = {
    'pages/HomePage.tsx': '/',
    'pages/BlogIndexPage.tsx': '/blog',
    'pages/BlogPostPage.tsx': null, // varies per post
    'pages/SitemapPage.tsx': '/sitemap',
    'pages/RestaurantFundingPage.tsx': '/restaurant-funding',
    'pages/RestaurantWorkingCapitalPage.tsx': '/restaurant-working-capital',
    'pages/RestaurantCashAdvancePage.tsx': '/restaurant-cash-advance',
    'pages/BusinessCashAdvancePage.tsx': '/business-cash-advance',
    'pages/SmallBusinessFundingPage.tsx': '/small-business-funding',
    'pages/ConsultationPage.tsx': '/consultation',
    'components/Footer.tsx': null, // appears on every page - count as global
    'components/SiteLayout.tsx': null,
    'components/Hero.tsx': null,
    'components/CTA.tsx': null,
    'components/RestaurantCashFlowChallenges.tsx': null,
    'components/WhenToExploreOptions.tsx': null,
    'components/WhyAxiantPartners.tsx': null,
  };
  return map[file];
}

// 2. Pillar pages - each section can have links
const pillarText = fs.readFileSync(path.join(SRC, 'data/pillarPages.tsx'), 'utf8');
const pillarPathBlocks = pillarText.split(/path:\s*['"](\/[^'"]+)['"]/g);
for (let i = 1; i < pillarPathBlocks.length; i += 2) {
  const pagePath = pillarPathBlocks[i];
  const block = pillarPathBlocks[i + 1] || '';
  const blockLinks = extractLinks(block);
  for (const to of blockLinks) addLink(pagePath, to);
}

// 3. Topic pages
const topicText = fs.readFileSync(path.join(SRC, 'data/topicPages.tsx'), 'utf8');
const pathBlocks = topicText.split(/path:\s*['"](\/[^'"]+)['"]/g);
for (let i = 1; i < pathBlocks.length; i += 2) {
  const pagePath = pathBlocks[i];
  const block = pathBlocks[i + 1] || '';
  const blockLinks = extractLinks(block);
  for (const to of blockLinks) addLink(pagePath, to);
}

// 4. Blog content (blogContent.tsx) - contentMap has slug -> custom content
const blogContentText = fs.readFileSync(path.join(SRC, 'data/blogContent.tsx'), 'utf8');
const contentMapRegex = /['"]([a-z0-9-]+)['"]:\s*\(\s*<>([\s\S]*?)<\/>\s*\)/g;
let cmMatch;
while ((cmMatch = contentMapRegex.exec(blogContentText)) !== null) {
  const slug = cmMatch[1];
  const block = cmMatch[2];
  const blockLinks = extractLinks(block);
  const pagePath = `/blog/${slug}`;
  for (const to of blockLinks) addLink(pagePath, to);
}

// 4b. getGeneratedBlogContent - used by posts without custom content. Has RELATED_LINKS_POOL (2 picked) + 3 static
const relatedLinksMatch = blogContentText.match(/RELATED_LINKS_POOL[^[]*\[([\s\S]*?)\];/);
const relatedPaths = [];
if (relatedLinksMatch) {
  const pathRe = /path:\s*['"](\/[^'"]+)['"]/g;
  let pm;
  while ((pm = pathRe.exec(relatedLinksMatch[1])) !== null) relatedPaths.push(pm[1]);
}
// Generated posts get 2 from pool + 3 static links. Add static for all blog posts.
for (const slug of blogSlugs) {
  const pagePath = `/blog/${slug}`;
  addLink(pagePath, '/restaurant-cash-advance');
  addLink(pagePath, '/restaurant-working-capital');
  addLink(pagePath, '/restaurant-funding');
}
// Add 2 from RELATED_LINKS_POOL for generated posts (non-custom)
for (const slug of blogSlugs) {
  if (indexableSlugs.has(slug)) continue; // custom content already handled
  const pagePath = `/blog/${slug}`;
  for (let i = 0; i < Math.min(2, relatedPaths.length); i++) addLink(pagePath, relatedPaths[i]);
}

// 6. Sitemap page - links to all pillar, topic, blog, main
addLink('/sitemap', '/');
addLink('/sitemap', '/restaurant-cash-advance');
addLink('/sitemap', '/restaurant-working-capital');
addLink('/sitemap', '/restaurant-funding');
addLink('/sitemap', '/consultation');
addLink('/sitemap', '/business-cash-advance');
addLink('/sitemap', '/small-business-funding');
addLink('/sitemap', '/faq');
addLink('/sitemap', '/blog');
for (const p of pillarPaths) addLink('/sitemap', p);
for (const p of topicPaths) addLink('/sitemap', p);
for (const slug of blogSlugs) addLink('/sitemap', `/blog/${slug}`);

// 7. Footer - appears on every page via SiteLayout. Add outbound from each page to footer targets.
const footerText = fs.readFileSync(path.join(SRC, 'components/Footer.tsx'), 'utf8');
const footerLinks = extractLinks(footerText);
for (const from of ALL_PATHS) {
  for (const to of footerLinks) addLink(from, to);
}

// 8. RelatedArticles - each indexable blog post links to 4 related posts (approximated)
const indexableList = [...indexableSlugs];
for (const slug of indexableList) {
  const fromPath = `/blog/${slug}`;
  const others = indexableList.filter((s) => s !== slug);
  for (let i = 0; i < Math.min(4, others.length); i++) {
    addLink(fromPath, `/blog/${others[i]}`);
  }
}

// 9. BlogIndexPage links (step 1 may have missed some - ensure /blog has its links)
// RestaurantCashFlowChallenges - where is it used? Grep for it.
// For now, we've got the main sources. Let me also add BlogIndexPage featured/links
// 9. BlogIndexPage + pagination - same content on /blog and /blog/page/N, plus prev/next
const blogIndexText = fs.readFileSync(path.join(SRC, 'pages/BlogIndexPage.tsx'), 'utf8');
const blogIndexLinks = extractLinks(blogIndexText);
for (const to of blogIndexLinks) addLink('/blog', to);
const totalBlogPages = Math.ceil(blogSlugs.length / 12);
if (totalBlogPages >= 2) addLink('/blog', '/blog/page/2'); // next from page 1
for (let p = 2; p <= totalBlogPages; p++) {
  const pagePath = `/blog/page/${p}`;
  addLink(pagePath, p === 2 ? '/blog' : `/blog/page/${p - 1}`); // prev
  if (p < totalBlogPages) addLink(pagePath, `/blog/page/${p + 1}`); // next
  for (const to of blogIndexLinks) addLink(pagePath, to);
}

// 10. BlogPostPage - has "Back to blog" and breadcrumb links. Appears on every blog post.
const bpText = fs.readFileSync(path.join(SRC, 'pages/BlogPostPage.tsx'), 'utf8');
const bpLinks = extractLinks(bpText);
for (const slug of blogSlugs) {
  for (const to of bpLinks) addLink(`/blog/${slug}`, to);
}

// Compute stats
const pagesWithFewInbound = [];
const pagesWithFewOutbound = [];
const orphans = [];
const inboundCounts = [];

for (const p of ALL_PATHS) {
  const inCount = inbound.has(p) ? inbound.get(p).size : 0;
  const outCount = outbound.has(p) ? outbound.get(p).size : 0;
  inboundCounts.push({ path: p, count: inCount });
  if (inCount < 2) pagesWithFewInbound.push({ path: p, count: inCount });
  if (outCount < 3) pagesWithFewOutbound.push({ path: p, count: outCount });
  if (inCount === 0) orphans.push(p);
}

const top20 = inboundCounts.sort((a, b) => b.count - a.count).slice(0, 20);

// Output
console.log('\n=== INTERNAL LINKING AUDIT ===\n');

console.log('PAGES WITH <2 INBOUND LINKS (' + pagesWithFewInbound.length + '):');
pagesWithFewInbound.sort((a, b) => a.count - b.count);
for (const { path: p, count } of pagesWithFewInbound) {
  console.log(`  ${count} | ${p}`);
}

console.log('\nPAGES WITH <3 OUTBOUND LINKS (' + pagesWithFewOutbound.length + '):');
pagesWithFewOutbound.sort((a, b) => a.count - b.count);
for (const { path: p, count } of pagesWithFewOutbound) {
  console.log(`  ${count} | ${p}`);
}

console.log('\nORPHAN PAGES (0 inbound links) (' + orphans.length + '):');
orphans.sort();
for (const p of orphans) {
  console.log(`  ${p}`);
}

console.log('\nTOP 20 STRONGEST PAGES BY INBOUND LINKS:');
for (const { path: p, count } of top20) {
  console.log(`  ${count} | ${p}`);
}

console.log('\n');
