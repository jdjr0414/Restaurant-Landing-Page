/**
 * Audit internal blog-to-blog links. Run: node scripts/audit-blog-links.mjs
 */
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = join(__dirname, '..');
const contentPath = join(root, 'src', 'data', 'blogContent.tsx');
const postsPath = join(root, 'src', 'data', 'blogPosts.ts');

const content = readFileSync(contentPath, 'utf8');
const postsContent = readFileSync(postsPath, 'utf8');

// Indexable slugs (hasCustomContent: true)
const blocks = postsContent.split(/\{\s*slug:\s*['"]/);
const indexableSlugs = new Set();
for (let i = 1; i < blocks.length; i++) {
  const block = blocks[i];
  const slugMatch = block.match(/^([^'"]+)['"]/);
  const hasCustomContent = /hasCustomContent:\s*true/.test(block);
  if (slugMatch && hasCustomContent) indexableSlugs.add(slugMatch[1]);
}

// Extract contentMap entries: 'slug': ( <> ... </> ),
const contentMapRegex = /['"]([a-z0-9-]+)['"]:\s*\(\s*<>/g;
const entryRegex = /['"]([a-z0-9-]+)['"]:\s*\(\s*<>([\s\S]*?)<\/>\s*\)/g;

const outbound = {};
const inbound = {};

// Match Link to="/blog/SLUG" - capture SLUG
const blogLinkRegex = /to=["']\/blog\/([a-z0-9-]+)["']/g;

let match;
const entries = [];
while ((match = entryRegex.exec(content)) !== null) {
  entries.push({ slug: match[1], body: match[2] });
}

for (const { slug, body } of entries) {
  if (!indexableSlugs.has(slug)) continue;
  outbound[slug] = outbound[slug] || [];
  const links = [...body.matchAll(blogLinkRegex)].map((m) => m[1]);
  for (const target of links) {
    if (indexableSlugs.has(target) && target !== slug) {
      outbound[slug].push(target);
    }
  }
}

// Build inbound from outbound
for (const src of Object.keys(outbound)) {
  for (const tgt of outbound[src]) {
    inbound[tgt] = inbound[tgt] || [];
    inbound[tgt].push(src);
  }
}

// Report
const allSlugs = [...indexableSlugs].sort();
const weakInbound = [];
const weakOutbound = [];
const weakBoth = [];

for (const slug of allSlugs) {
  const inCount = (inbound[slug] || []).length;
  const outCount = (outbound[slug] || []).length;
  const needsInbound = inCount < 2;
  const needsOutbound = outCount < 3;
  if (needsInbound) weakInbound.push({ slug, inCount, outCount });
  if (needsOutbound) weakOutbound.push({ slug, inCount, outCount });
  if (needsInbound || needsOutbound) weakBoth.push({ slug, inCount, outCount });
}

console.log('\n=== Blog Internal Link Audit ===\n');
console.log('Total indexable posts:', allSlugs.length);
console.log('\n--- Pages with < 2 inbound links (need more links TO them) ---');
weakInbound.sort((a, b) => a.inCount - b.inCount);
weakInbound.forEach(({ slug, inCount, outCount }) => {
  console.log(`  ${slug}: inbound=${inCount} outbound=${outCount}`);
});
console.log('\n--- Pages with < 3 outbound links (need more links FROM them) ---');
weakOutbound.sort((a, b) => a.outCount - b.outCount);
weakOutbound.forEach(({ slug, inCount, outCount }) => {
  console.log(`  ${slug}: inbound=${inCount} outbound=${outCount}`);
});
console.log('\n--- Weakest linked (by inbound then outbound) ---');
weakBoth.sort((a, b) => a.inCount - b.inCount || a.outCount - b.outCount);
weakBoth.slice(0, 50).forEach(({ slug, inCount, outCount }) => {
  console.log(`  ${slug}: in=${inCount} out=${outCount}`);
});
console.log('\n');
