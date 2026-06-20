/* Cannibalization / uniqueness audit: finds pages that compete for the same intent via
   near-duplicate MAIN content or near-identical titles. Read-only. */
import fs from 'fs';
import path from 'path';

const dist = 'dist';
const walk = (d) => { let r = []; for (const f of fs.readdirSync(d)) { const p = path.join(d, f); const s = fs.statSync(p); if (s.isDirectory()) r = r.concat(walk(p)); else if (f === 'index.html') r.push(p); } return r; };
const norm = (s) => s.replace(/\/$/, '') || '/';
const pageOf = (f) => norm('/' + path.relative(dist, f).split(path.sep).join('/').replace(/index\.html$/, ''));

const STOP = new Set('the a an and or of to for in on with you your is are it that this when how what why can may often typically vary varies not all some more most них'.split(' '));
const tokenize = (s) => (s.toLowerCase().match(/[a-z0-9$%]+/g) || []).filter((w) => w.length > 2 && !STOP.has(w));

const pages = [];
for (const f of walk(dist)) {
  const h = fs.readFileSync(f, 'utf8');
  const p = pageOf(f);
  if (h.includes('did not finish this Suspense')) continue;
  if (/<meta name="robots" content="[^"]*noindex/.test(h)) continue;
  if (/^\/blog\/page\//.test(p) || p === '/sitemap' || p === '/404') continue;
  const title = (h.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '';
  // main content only (strip nav/header/footer/CTA chrome shared across pages)
  let main = (h.match(/<main[\s\S]*?<\/main>/) || [''])[0];
  main = main.replace(/<(nav|header|footer)[\s\S]*?<\/\1>/g, ' ').replace(/<a [^>]*class="cta[\s\S]*?<\/a>/g, ' ');
  const text = main.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ');
  const words = tokenize(text);
  // 5-word shingles
  const sh = new Set();
  for (let i = 0; i + 5 <= words.length; i++) sh.add(words.slice(i, i + 5).join(' '));
  pages.push({ p, title, titleTokens: new Set(tokenize(title.replace(/\| The Restaurant Owners Guide/, ''))), shingles: sh, wc: words.length });
}

const jac = (a, b) => { if (!a.size || !b.size) return 0; let inter = 0; const [s, l] = a.size < b.size ? [a, b] : [b, a]; for (const x of s) if (l.has(x)) inter++; return inter / (a.size + b.size - inter); };

const contentDupes = [];
const titleDupes = [];
for (let i = 0; i < pages.length; i++) {
  for (let j = i + 1; j < pages.length; j++) {
    const A = pages[i], B = pages[j];
    if (A.shingles.size > 15 && B.shingles.size > 15) {
      const c = jac(A.shingles, B.shingles);
      if (c >= 0.4) contentDupes.push([c, A.p, B.p]);
    }
    const tj = jac(A.titleTokens, B.titleTokens);
    if (tj >= 0.7 && A.titleTokens.size >= 3) titleDupes.push([tj, A.p + `  ["${A.title.slice(0, 50)}"]`, B.p]);
  }
}
contentDupes.sort((a, b) => b[0] - a[0]);
titleDupes.sort((a, b) => b[0] - a[0]);

console.log(`Indexable pages analyzed: ${pages.length}`);
console.log('='.repeat(72));
console.log(`\nNEAR-DUPLICATE CONTENT (main-content shingle Jaccard >= 0.40): ${contentDupes.length}`);
contentDupes.slice(0, 40).forEach(([c, a, b]) => console.log(`  ${(c * 100).toFixed(0)}%  ${a}  <=>  ${b}`));
console.log(`\nNEAR-IDENTICAL TITLES (token Jaccard >= 0.70): ${titleDupes.length}`);
titleDupes.slice(0, 40).forEach(([t, a, b]) => console.log(`  ${(t * 100).toFixed(0)}%  ${a}  <=>  ${b}`));

// thin shingle pages (very short main content -> likely templated/duplicate-ish)
const thinShingle = pages.filter((p) => p.shingles.size <= 15 && p.wc < 120);
console.log(`\nVery short main content (<120 words): ${thinShingle.length}`);
thinShingle.slice(0, 20).forEach((p) => console.log(`  ${p.p} (${p.wc}w)`));
