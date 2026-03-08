# Deploying to Cloudflare Pages

This site is **pre-rendered at build time**. Each page outputs full HTML in `dist/`. To see it when you "View Source", you must deploy the **built** output, not run the dev server.

**→ For full deployment steps, see [DEPLOYMENT.md](./DEPLOYMENT.md).**

## Cloudflare Pages Setup

1. **Build command:** `npm run build`
2. **Build output directory:** `dist`
3. **Root directory:** (leave default, or `/` if your repo root contains the project)
4. **Deploy command:** Leave EMPTY for Pages Git deployment. Do NOT use `npx wrangler deploy` unless you use Workers.

## Why View Source Might Show Empty `<div id="root"></div>`

| Scenario | What you see |
|----------|--------------|
| **`npm run dev`** (development) | Empty root — dev server is client-side only |
| **`npx serve dist`** (local preview of build) | Full HTML in source ✅ |
| **Cloudflare Pages** (correct deploy) | Full HTML in source ✅ |
| **Wrong output dir** (e.g. deploying `./` instead of `dist/`) | Empty or broken |

## Validate Locally Before Deploy

```bash
npm run build
npx serve dist
```

Open http://localhost:3000/restaurant-cash-advance and use **View Source** (Ctrl+U / Cmd+Option+U). You should see article text, headings, and links inside the HTML.

## Output Structure

After `npm run build`, `dist/` contains:

```
dist/
├── index.html
├── restaurant-cash-advance/
│   └── index.html
├── restaurant-working-capital/
│   └── index.html
├── restaurant-funding/
│   └── index.html
├── blog/
│   └── restaurant-refrigeration-emergency/
│       └── index.html
├── assets/
│   ├── index-*.js
│   └── index-*.css
├── sitemap.xml
└── ... (252 pages total)
```

Cloudflare Pages serves these so that `/restaurant-cash-advance` returns `dist/restaurant-cash-advance/index.html` with full prerendered HTML.

## Troubleshooting: Still Seeing Empty `<div id="root"></div>`

1. **Check build logs** — In Cloudflare dashboard: Workers & Pages → your project → Deployments → click the latest deployment → View build logs. Look for:
   - `Prerendered 252 pages to dist/`
   - `Wrote 252 URLs to ... sitemap.xml`
   - Build should take ~30 seconds (not ~2 seconds). If it finishes in under 5 seconds, prerender likely didn't run.
   - **Clear build cache** — Retry deployment and enable "Clear build cache" if available. Cached builds may skip prerender.

2. **Node version** — The project uses `.nvmrc` (Node 20). In Cloudflare Pages → Settings → Environment variables, add `NODE_VERSION` = `20` if builds fail or behave oddly.

3. **Retry deployment** — Deployments → three dots on latest → Retry deployment.

4. **Purge cache** — If the build succeeded but you still see old content: Caching → Purge everything (or wait for cache expiry).

5. **Verify build command** — Settings → Builds & deployments → Build configuration must be exactly `npm run build` and output directory `dist`.
