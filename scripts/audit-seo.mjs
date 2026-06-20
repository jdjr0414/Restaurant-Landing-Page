/* One-off technical SEO audit of dist/ build output + _redirects + sitemap. Not part of build. */
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
const pageOf = (f) => {
  let rel = path.relative(dist, f).split(path.sep).join('/').replace(/index\.html$/, '');
  return norm('/' + rel);
};
const livePaths = new Set(files.map(pageOf));

const redLines = fs.readFileSync('public/_redirects', 'utf8').split('\n').filter((l) => /^\//.test(l));
const redSrc = new Map();
redLines.forEach((l) => {
  const [s, t] = l.trim().split(/\s+/);
  redSrc.set(norm(s), t);
});

const sm = fs.readFileSync('dist/sitemap.xml', 'utf8');
const smUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => norm(m[1].replace('https://therestaurantownersguide.com', '')));

const decode = (s) =>
  s == null
    ? s
    : s
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&#x27;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>');
const get = (h, re) => { const m = h.match(re); return m ? decode(m[1]) : null; };
const pages = {};
for (const f of files) {
  const h = fs.readFileSync(f, 'utf8');
  pages[pageOf(f)] = {
    title: get(h, /<title>([\s\S]*?)<\/title>/),
    desc: get(h, /<meta name="description" content="([^"]*)"/),
    canon: get(h, /<link rel="canonical" href="([^"]*)"/),
    robots: get(h, /<meta name="robots" content="([^"]*)"/),
    h1: (h.match(/<h1[ >]/g) || []).length,
    suspense: h.includes('did not finish this Suspense'),
    links: [...h.matchAll(/href="(\/[^"#?]*)/g)].map((m) => norm(m[1])),
  };
}

const R = [];
const pick = (pred, fmt = (k) => k) => Object.entries(pages).filter(([k, v]) => pred(k, v)).map(([k, v]) => fmt(k, v));

R.push(['Empty/Suspense bodies', pick((k, v) => v.suspense)]);
R.push(['Missing <title>', pick((k, v) => !v.suspense && !v.title)]);
R.push(['Missing meta description', pick((k, v) => !v.suspense && !v.desc)]);

const tmap = {}; Object.entries(pages).forEach(([k, v]) => { if (v.title) (tmap[v.title] = tmap[v.title] || []).push(k); });
R.push(['Duplicate titles', Object.entries(tmap).filter(([, a]) => a.length > 1).map(([t, a]) => `${a.length}x "${t.slice(0, 45)}" e.g. ${a[0]}`)]);
const dmap = {}; Object.entries(pages).forEach(([k, v]) => { if (v.desc) (dmap[v.desc] = dmap[v.desc] || []).push(k); });
R.push(['Duplicate descriptions', Object.entries(dmap).filter(([, a]) => a.length > 1).map(([d, a]) => `${a.length}x e.g. ${a[0]}`)]);

R.push(['Titles >65 chars', pick((k, v) => v.title && v.title.length > 65, (k, v) => `${k} (${v.title.length})`)]);
R.push(['Descriptions >160 chars', pick((k, v) => v.desc && v.desc.length > 160, (k, v) => `${k} (${v.desc.length})`)]);
R.push(['Pages not exactly one H1', pick((k, v) => !v.suspense && v.h1 !== 1, (k, v) => `${k} (h1=${v.h1})`)]);
R.push(['noindex pages (built)', pick((k, v) => v.robots && /noindex/.test(v.robots))]);
R.push(['Canonical missing/mismatch', pick((k, v) => {
  if (v.suspense) return false;
  const want = norm('https://therestaurantownersguide.com' + (k === '/' ? '' : k));
  return !v.canon || norm(v.canon) !== want;
}, (k, v) => `${k} -> ${v.canon}`)]);

const hops = new Set(), broken = new Set();
for (const v of Object.values(pages)) {
  for (const L of v.links) {
    if (/^\/(assets|images)/.test(L) || /\.(js|css|png|svg|jpg|jpeg|xml|txt|ico|webp|woff2?)$/.test(L)) continue;
    if (redSrc.has(L)) hops.add(L);
    else if (!livePaths.has(L)) broken.add(L);
  }
}
R.push(['Internal links -> redirect (hops)', [...hops]]);
R.push(['Internal links -> dead path (broken)', [...broken]]);

R.push(['Redirect chains (target also a source)', [...redSrc.entries()].filter(([, t]) => redSrc.has(norm(t))).map(([s, t]) => `${s} -> ${t}`)]);
R.push(['Redirect targets that 404', [...new Set(redSrc.values())].filter((t) => t.startsWith('/') && !livePaths.has(norm(t)))]);

R.push(['Sitemap URLs that redirect', smUrls.filter((u) => redSrc.has(u))]);
R.push(['Sitemap URLs not prerendered', smUrls.filter((u) => !livePaths.has(u) && !redSrc.has(u))]);
R.push(['Sitemap URLs that are noindex', smUrls.filter((u) => pages[u] && /noindex/.test(pages[u].robots || ''))]);

const smSet = new Set(smUrls);
R.push(['Indexable pages missing from sitemap', pick((k, v) => !v.suspense && !(v.robots && /noindex/.test(v.robots)) && !redSrc.has(k) && !smSet.has(k) && !/\/blog\/page\//.test(k) && k !== '/404')]);

console.log(`Pages: ${files.length} | Sitemap: ${smUrls.length} | Redirects: ${redSrc.size}`);
console.log('='.repeat(72));
for (const [name, list] of R) {
  const c = list.length;
  console.log(`${c > 0 ? 'WARN' : ' OK '}  ${name}: ${c}`);
  list.slice(0, 10).forEach((e) => console.log('        - ' + e));
}
