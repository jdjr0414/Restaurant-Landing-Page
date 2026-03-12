#!/usr/bin/env node
/**
 * Audit sitemap generation: total URLs, blog posts, indexable vs noindex, etc.
 */
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = join(__dirname, '..');
const distSitemap = join(root, 'dist', 'sitemap.xml');
const blogPostsPath = join(root, 'src', 'data', 'blogPosts.ts');
const blogPostsSrc = readFileSync(blogPostsPath, 'utf8');

// Parse blog posts: indexable vs noindex
const blocks = blogPostsSrc.split(/\{\s*slug:\s*['"]/);
const indexableSlugs = new Set();
const allSlugs = [];
for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];
  const slugMatch = block.match(/^([^'"]+)['"]/);
  const hasCustomContent = /hasCustomContent:\s*true/.test(block);
  if (slugMatch) {
    allSlugs.push(slugMatch[1]);
    if (hasCustomContent) indexableSlugs.add(slugMatch[1]);
  }
}

// Parse sitemap.xml
if (!existsSync(distSitemap)) {
  console.error('dist/sitemap.xml not found. Run: npm run build');
  process.exit(1);
}
const xml = readFileSync(distSitemap, 'utf8');
const urlMatches = [...xml.matchAll(/<loc>https?:\/\/[^<]+<\/loc>/g)];
const sitemapUrls = urlMatches.map((m) => {
  const u = m[0].replace(/<loc>|<\/loc>/g, '');
  return u.replace(/^https?:\/\/[^/]+/, '');
});

const sitemapBlogPosts = sitemapUrls.filter((u) => u.match(/^\/blog\/[^/]+$/) && !u.includes('page'));
const sitemapBlogSlugs = new Set(sitemapBlogPosts.map((u) => u.replace(/^\/blog\//, '')));

// Indexable missing from sitemap
const indexableMissing = [...indexableSlugs].filter((s) => !sitemapBlogSlugs.has(s));

// Noindex (generated) incorrectly in sitemap
const noindexSlugs = allSlugs.filter((s) => !indexableSlugs.has(s));
const noindexInSitemap = noindexSlugs.filter((s) => sitemapBlogSlugs.has(s));

console.log('\n=== SITEMAP AUDIT ===\n');
console.log('Total URLs in sitemap:', sitemapUrls.length);
console.log('Blog post URLs in sitemap:', sitemapBlogPosts.length);
console.log('Indexable blog posts (hasCustomContent):', indexableSlugs.size);
console.log('Indexable blog posts missing from sitemap:', indexableMissing.length);
if (indexableMissing.length > 0) {
  console.log('  Missing:', indexableMissing.slice(0, 10).join(', '), indexableMissing.length > 10 ? '...' : '');
}
console.log('Noindexed pages incorrectly in sitemap:', noindexInSitemap.length);
if (noindexInSitemap.length > 0) {
  console.log('  Incorrectly included:', noindexInSitemap.slice(0, 10).join(', '), noindexInSitemap.length > 10 ? '...' : '');
}
console.log('\n');
