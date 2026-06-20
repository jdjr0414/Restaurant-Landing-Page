/**
 * Verify prerendered build output. Fails if dist has too few files or index.html is empty.
 * Run after: npm run build
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const distDir = join(__dirname, '..', 'dist');

function countFiles(dir, base = '') {
  let count = 0;
  const entries = readdirSync(join(dir, base));
  for (const e of entries) {
    const p = join(dir, base, e);
    if (statSync(p).isDirectory()) {
      count += countFiles(dir, join(base, e));
    } else {
      count++;
    }
  }
  return count;
}

const total = countFiles(distDir);

if (total < 100) {
  console.error(`[verify-build] FAIL: dist has only ${total} files. Expected 250+. Prerender did not run.`);
  process.exit(1);
}

// Spot-check a sample of prerendered pages for REAL body content. The old check only confirmed
// <div id="root"> wasn't literally empty, which a broken Suspense fallback could pass while the
// body had zero article text. Now we require actual rendered markup and reject Suspense errors.
const samplePaths = [
  'index.html',
  'restaurant-funding/index.html',
  'restaurant-cash-advance/index.html',
  'restaurant-emergency-funding/index.html',
];

for (const rel of samplePaths) {
  let html;
  try {
    html = readFileSync(join(distDir, rel), 'utf8');
  } catch {
    console.error(`[verify-build] FAIL: expected prerendered page missing: ${rel}`);
    process.exit(1);
  }
  if (html.includes('did not finish this Suspense boundary')) {
    console.error(`[verify-build] FAIL: ${rel} has an unresolved Suspense boundary (empty body). SSR render is broken.`);
    process.exit(1);
  }
  // Body must contain real rendered markup, not just <div id="root"> + scripts.
  const bodyHasContent = /<div id="root">[\s\S]*?<(p|h1|h2|main|section|article)[\s>]/.test(html);
  if (!bodyHasContent) {
    console.error(`[verify-build] FAIL: ${rel} has no article markup (<p>/<h1>/<main>) in the body. Prerender produced an empty shell.`);
    process.exit(1);
  }
}

console.log(`[verify-build] OK: ${total} files, ${samplePaths.length} sampled pages have real prerendered body content.`);
