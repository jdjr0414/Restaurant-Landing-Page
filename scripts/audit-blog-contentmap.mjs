/**
 * Audit: Ensure every blog post with a contentMap entry has hasCustomContent: true.
 * Matches by slug to avoid curly apostrophe issues in titles.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const contentPath = path.join(root, 'src/data/blogContent.tsx');
const postsPath = path.join(root, 'src/data/blogPosts.ts');

const content = fs.readFileSync(contentPath, 'utf8');
const postsContent = fs.readFileSync(postsPath, 'utf8');

const contentMapSlugRe = /'([a-z0-9-]+)':\s*\(\s*$/gm;
const contentMapSlugs = new Set();
let m;
while ((m = contentMapSlugRe.exec(content)) !== null) {
  contentMapSlugs.add(m[1]);
}

const postEntries = postsContent.split(/\},\s*\n\s*\{/);
const allPostSlugs = new Map();
for (const entry of postEntries) {
  const slugMatch = entry.match(/slug:\s*'([^']+)'/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  const hasCustomContent = entry.includes('hasCustomContent: true');
  allPostSlugs.set(slug, { hasCustomContent });
}

const mismatches = [];
for (const slug of contentMapSlugs) {
  const post = allPostSlugs.get(slug);
  if (!post) {
    mismatches.push({ slug, issue: 'contentMap entry exists but slug not found in blogPosts' });
  } else if (!post.hasCustomContent) {
    mismatches.push({ slug, issue: 'contentMap entry exists but hasCustomContent is not true' });
  }
}

console.log('ContentMap entries:', contentMapSlugs.size);
console.log('Blog posts total:', allPostSlugs.size);
console.log('Mismatches:', mismatches.length);
if (mismatches.length > 0) {
  console.log('\nMismatches:');
  mismatches.forEach(({ slug, issue }) => console.log(`  - ${slug}: ${issue}`));
} else {
  console.log('\nAll contentMap entries have matching blog posts with hasCustomContent: true.');
}
