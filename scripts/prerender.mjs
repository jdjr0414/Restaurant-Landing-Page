/**
 * Prerender all routes to static HTML. Run after: vite build && vite build --ssr src/entry-server.tsx
 * Writes dist/<path>/index.html for each path so View Source shows full content.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { pathToFileURL } from 'url';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = join(__dirname, '..');
const distDir = join(root, 'dist');
const siteUrl = process.env.VITE_SITE_URL || 'https://www.restaurantownersguide.com';
const defaultOgImage = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80';

function escapeHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function injectMeta(template, meta) {
  const { title, description, canonicalPath } = meta;
  const canonicalUrl = `${siteUrl}${canonicalPath === '/' ? '' : canonicalPath}`;
  let out = template;

  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
  out = out.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );

  if (!out.includes('rel="canonical"')) {
    out = out.replace(
      /(<meta name="description" content="[^"]*" \/>)/,
      `$1\n    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`
    );
  } else {
    out = out.replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`);
  }

  const ogTwitterBlock = `
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="${defaultOgImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${defaultOgImage}" />`;

  if (!out.includes('og:title')) {
    out = out.replace('</title>', `</title>${ogTwitterBlock}`);
  }

  return out;
}

async function main() {
  if (!existsSync(distDir)) {
    console.error('dist/ not found. Run: vite build');
    process.exit(1);
  }
  const entryPath = join(distDir, 'entry-server.js');
  if (!existsSync(entryPath)) {
    console.error('dist/entry-server.js not found. Run: vite build --ssr src/entry-server.tsx');
    process.exit(1);
  }

  const templatePath = join(distDir, 'index.html');
  let template = readFileSync(templatePath, 'utf8');

  const { render, getAllPaths, getMeta } = await import(pathToFileURL(entryPath).href);
  const paths = getAllPaths();

  let written = 0;
  for (const path of paths) {
    const meta = getMeta(path);
    if (!meta) continue;

    const { html } = render(path);
    let pageHtml = injectMeta(template, meta);
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const filePath = path === '/' ? join(distDir, 'index.html') : join(distDir, path, 'index.html');
    const fileDir = dirname(filePath);
    if (!existsSync(fileDir)) mkdirSync(fileDir, { recursive: true });
    writeFileSync(filePath, pageHtml, 'utf8');
    written++;
  }

  console.log(`Prerendered ${written} pages to dist/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
