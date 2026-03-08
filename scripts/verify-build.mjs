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
const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf8');
const hasContent = indexHtml.includes('<div id="root">') && !indexHtml.includes('<div id="root"></div>');

if (total < 100) {
  console.error(`[verify-build] FAIL: dist has only ${total} files. Expected 250+. Prerender did not run.`);
  process.exit(1);
}
if (!hasContent) {
  console.error('[verify-build] FAIL: dist/index.html has empty <div id="root">. Prerender did not run.');
  process.exit(1);
}
console.log(`[verify-build] OK: ${total} files, index.html has prerendered content.`);
