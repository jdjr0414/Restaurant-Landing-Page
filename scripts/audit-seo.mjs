/* Comprehensive technical-SEO audit of dist/ build output + _redirects + sitemap + robots.
   Read-only. Run after a build: node scripts/audit-seo.mjs */
import fs from 'fs';
import path from 'path';

const dist = 'dist';
function walk(d) {
  let r = [];
  for (const f of fs.readdirSync(d)) {
    const p = path.join(d, f);
    const s = fs.statSync(p);
    if (s.isDirectory()) r = r.concat(walk(p));
    else if (f === 'index.html') r.push(p);
  }
  return r;
}
const files = walk(dist);
const norm = (s) => (s.replace(/\/$/, '') || '/');
const pageOf = (f) => norm('/' + path.relative(dist, f).split(path.sep).join('/').replace(/index\.html$/, ''));
const livePaths = new Set(files.map(pageOf));

const decode = (s) =>
  s == null ? s : s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

// ---- redirects ----
const redRaw = fs.readFileSync('public/_redirects', 'utf8').split('\n');
const redSrc = new Map();
const redDupes = [];
const redSelf = [];
const redMalformed = [];
const seenSrc = new Set();
for (const line of redRaw) {
  if (!/^\//.test(line)) continue;
  const parts = line.trim().split(/\s+/);
  const [s, t, code] = parts;
  const ns = norm(s);
  if (parts.length < 2) { redMalformed.push(line.trim()); continue; }
  if (code && !/^30[12378]$/.test(code)) redMalformed.push(line.trim() + ' (bad status)');
  if (ns === norm(t)) redSelf.push(line.trim());
  if (seenSrc.has(ns)) redDupes.push(ns); else seenSrc.add(ns);
  redSrc.set(ns, t);
}

// ---- sitemap ----
const sm = fs.readFileSync('dist/sitemap.xml', 'utf8');
const smUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => norm(m[1].replace('https://therestaurantownersguide.com', '')));

// ---- parse each page ----
const m1 = (h, re) => { const m = h.match(re); return m ? decode(m[1]) : null; };
const has = (h, re) => re.test(h);
const pages = {};
for (const f of files) {
  const h = fs.readFileSync(f, 'utf8');
  const headEnd = h.indexOf('</head>');
  const head = headEnd > 0 ? h.slice(0, headEnd) : h;
  const body = headEnd > 0 ? h.slice(headEnd) : h;
  const bodyText = body.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  // JSON-LD blocks
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((x) => x[1]);
  let ldBad = 0;
  for (const blk of ld) { try { JSON.parse(blk); } catch { ldBad++; } }
  pages[pageOf(f)] = {
    title: m1(h, /<title>([\s\S]*?)<\/title>/),
    desc: m1(h, /<meta name="description" content="([^"]*)"/),
    canon: m1(h, /<link rel="canonical" href="([^"]*)"/),
    robots: m1(h, /<meta name="robots" content="([^"]*)"/),
    ogTitle: has(head, /property="og:title"/),
    ogDesc: has(head, /property="og:description"/),
    ogImage: has(head, /property="og:image"/),
    ogUrl: has(head, /property="og:url"/),
    ogType: has(head, /property="og:type"/),
    twCard: has(head, /name="twitter:card"/),
    h1: (body.match(/<h1[ >]/g) || []).length,
    suspense: h.includes('did not finish this Suspense'),
    ldCount: ld.length,
    ldBad,
    imgsNoAlt: (body.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length,
    httpRes: [...h.matchAll(/(?:src|href)="(http:\/\/[^"]+)"/g)].map((x) => x[1]),
    words: bodyText ? bodyText.split(' ').length : 0,
    links: [...h.matchAll(/href="(\/[^"#?]*)/g)].map((x) => norm(x[1])),
  };
}

// inbound link graph (for orphans)
const inbound = {};
for (const [src, v] of Object.entries(pages)) {
  for (const L of new Set(v.links)) {
    if (L === src) continue;
    if (/^\/(assets|images)/.test(L) || /\.[a-z0-9]+$/i.test(L)) continue;
    inbound[L] = (inbound[L] || 0) + 1;
  }
}

const isIndexable = (p, v) => !v.suspense && !(v.robots && /noindex/.test(v.robots)) && !redSrc.has(p);
const R = [];
const pick = (pred, fmt = (k) => k) => Object.entries(pages).filter(([k, v]) => pred(k, v)).map(([k, v]) => fmt(k, v));

// --- core ---
R.push(['Empty/Suspense bodies', pick((k, v) => v.suspense)]);
R.push(['Missing <title>', pick((k, v) => !v.suspense && !v.title)]);
R.push(['Missing meta description', pick((k, v) => !v.suspense && !v.desc)]);
const tmap = {}; Object.entries(pages).forEach(([k, v]) => { if (v.title) (tmap[v.title] = tmap[v.title] || []).push(k); });
R.push(['Duplicate titles', Object.entries(tmap).filter(([, a]) => a.length > 1).map(([t, a]) => `${a.length}x "${t.slice(0, 40)}" e.g. ${a[0]}`)]);
const dmap = {}; Object.entries(pages).forEach(([k, v]) => { if (v.desc) (dmap[v.desc] = dmap[v.desc] || []).push(k); });
R.push(['Duplicate descriptions', Object.entries(dmap).filter(([, a]) => a.length > 1).map(([d, a]) => `${a.length}x e.g. ${a[0]}`)]);
R.push(['Titles >65 chars (decoded)', pick((k, v) => v.title && v.title.length > 65, (k, v) => `${k} (${v.title.length})`)]);
R.push(['Descriptions >160 chars (decoded)', pick((k, v) => v.desc && v.desc.length > 160, (k, v) => `${k} (${v.desc.length})`)]);
R.push(['Descriptions <70 chars (thin)', pick((k, v) => isIndexable(k, v) && v.desc && v.desc.length < 70, (k, v) => `${k} (${v.desc.length})`)]);
R.push(['Pages not exactly one H1', pick((k, v) => !v.suspense && v.h1 !== 1, (k, v) => `${k} (h1=${v.h1})`)]);

// --- structured data ---
R.push(['Invalid JSON-LD (parse error)', pick((k, v) => v.ldBad > 0, (k, v) => `${k} (${v.ldBad} bad)`)]);
R.push(['Indexable pages with NO JSON-LD', pick((k, v) => isIndexable(k, v) && v.ldCount === 0)]);

// --- social ---
R.push(['Missing og:title', pick((k, v) => isIndexable(k, v) && !v.ogTitle)]);
R.push(['Missing og:image', pick((k, v) => isIndexable(k, v) && !v.ogImage)]);
R.push(['Missing og:url', pick((k, v) => isIndexable(k, v) && !v.ogUrl)]);
R.push(['Missing twitter:card', pick((k, v) => isIndexable(k, v) && !v.twCard)]);

// --- canonical integrity ---
R.push(['Canonical missing/mismatch', pick((k, v) => {
  if (v.suspense) return false;
  const want = norm('https://therestaurantownersguide.com' + (k === '/' ? '' : k));
  return !v.canon || norm(v.canon) !== want;
}, (k, v) => `${k} -> ${v.canon}`)]);

// --- images & mixed content ---
R.push(['Images without alt', pick((k, v) => v.imgsNoAlt > 0, (k, v) => `${k} (${v.imgsNoAlt})`)]);
R.push(['Insecure http:// resources (mixed content)', pick((k, v) => v.httpRes.length > 0, (k, v) => `${k}: ${v.httpRes[0]}`)]);

// --- content depth ---
// /consultation and /sitemap are intentional conversion/utility pages, not content pages.
const THIN_EXEMPT = new Set(['/sitemap', '/consultation']);
R.push(['Thin content (<300 words, indexable)', pick((k, v) => isIndexable(k, v) && v.words < 300 && !/\/blog\/page\//.test(k) && !THIN_EXEMPT.has(k), (k, v) => `${k} (${v.words}w)`)]);

// --- links ---
const hops = new Set(), broken = new Set();
for (const v of Object.values(pages)) {
  for (const L of v.links) {
    if (/^\/(assets|images)/.test(L) || /\.[a-z0-9]+$/i.test(L)) continue;
    if (redSrc.has(L)) hops.add(L);
    else if (!livePaths.has(L)) broken.add(L);
  }
}
R.push(['Internal links -> redirect (hops)', [...hops]]);
R.push(['Internal links -> dead path (broken)', [...broken]]);

// --- canonical points somewhere bad ---
R.push(['Canonical -> redirect/noindex/404', pick((k, v) => {
  if (!v.canon || v.suspense) return false;
  const cp = norm(v.canon.replace('https://therestaurantownersguide.com', ''));
  if (cp === k) return false;
  return redSrc.has(cp) || !livePaths.has(cp) || (pages[cp] && /noindex/.test(pages[cp].robots || ''));
}, (k, v) => `${k} -> ${v.canon}`)]);

// --- orphans ---
R.push(['Orphan pages (0 internal inbound)', pick((k, v) => isIndexable(k, v) && k !== '/' && !(inbound[k] > 0) && !/\/blog\/page\//.test(k))]);

// --- redirects file ---
R.push(['Redirect chains (target also a source)', [...redSrc.entries()].filter(([, t]) => redSrc.has(norm(t))).map(([s, t]) => `${s} -> ${t}`)]);
R.push(['Redirect self-loops', redSelf]);
R.push(['Redirect duplicate sources', [...new Set(redDupes)]]);
R.push(['Redirect malformed lines', redMalformed]);
R.push(['Redirect targets that 404', [...new Set(redSrc.values())].filter((t) => t.startsWith('/') && !livePaths.has(norm(t)))]);

// --- sitemap ---
R.push(['Sitemap URLs that redirect', smUrls.filter((u) => redSrc.has(u))]);
R.push(['Sitemap URLs not prerendered', smUrls.filter((u) => !livePaths.has(u) && !redSrc.has(u))]);
R.push(['Sitemap URLs that are noindex', smUrls.filter((u) => pages[u] && /noindex/.test(pages[u].robots || ''))]);
const smSet = new Set(smUrls);
R.push(['Indexable pages missing from sitemap', pick((k, v) => isIndexable(k, v) && !smSet.has(k) && !/\/blog\/page\//.test(k) && k !== '/404' && k !== '/sitemap')]);

// --- robots / llms ---
const robots = fs.existsSync('dist/robots.txt') ? fs.readFileSync('dist/robots.txt', 'utf8') : '';
const robotsIssues = [];
if (!robots) robotsIssues.push('robots.txt missing from dist');
else {
  if (!/sitemap:/i.test(robots)) robotsIssues.push('robots.txt has no Sitemap: directive');
  if (/^\s*Disallow:\s*\/\s*$/im.test(robots)) robotsIssues.push('robots.txt Disallows entire site');
}
if (!fs.existsSync('dist/llms.txt')) robotsIssues.push('llms.txt missing from dist');
else {
  const llms = fs.readFileSync('dist/llms.txt', 'utf8');
  for (const mm of llms.matchAll(/therestaurantownersguide\.com(\/[a-z0-9-]*)/g)) {
    const lp = norm(mm[1]);
    if (redSrc.has(lp)) robotsIssues.push(`llms.txt links a redirected URL: ${lp}`);
    else if (!livePaths.has(lp)) robotsIssues.push(`llms.txt links a dead URL: ${lp}`);
  }
}
R.push(['robots.txt / llms.txt issues', robotsIssues]);

// ---- report ----
console.log(`Pages: ${files.length} | Sitemap: ${smUrls.length} | Redirects: ${redSrc.size}`);
console.log('='.repeat(74));
let warnTotal = 0;
for (const [name, list] of R) {
  const c = list.length;
  if (c > 0) warnTotal++;
  console.log(`${c > 0 ? 'WARN' : ' OK '}  ${name}: ${c}`);
  list.slice(0, 8).forEach((e) => console.log('        - ' + e));
}
console.log('='.repeat(74));
console.log(warnTotal === 0 ? 'ALL CLEAN' : `${warnTotal} categories with findings`);
