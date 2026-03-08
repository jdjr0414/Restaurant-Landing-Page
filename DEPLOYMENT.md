# Deployment Guide: Cloudflare Pages (Static HTML)

This site is **pre-rendered at build time**. Every page outputs full HTML in `dist/`. Search engines see the real content in View Source.

---

## 1. Build Command (exact)

```
npm run build
```

This runs:
1. TypeScript compile
2. Vite client build
3. Vite SSR build
4. Prerender (252 pages)
5. Sitemap generation

**Expected duration:** 25–35 seconds. If the build finishes in under 5 seconds, prerender did not run.

---

## 2. Build Output Directory (exact)

```
dist
```

---

## 3. Deploy Steps for Cloudflare Pages

### Option A: Cloudflare Pages (Git) — recommended

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select your repository
3. **Build configuration:**
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** (leave empty)
4. **Do NOT set a deploy command** — leave it empty. Pages deploys `dist/` automatically.
5. **Clear build cache** before first deploy:
   - Settings → Builds & deployments → **Clear build cache**
   - Or: Retry deployment with "Clear cache" if available
6. Deploy

### Option B: Cloudflare Workers (wrangler)

If you use `wrangler deploy`:

1. Run the build locally: `npm run build`
2. Deploy: `npx wrangler deploy`
3. Ensure `wrangler.toml` has `[assets] directory = "./dist"`

**Important:** The build must run on Cloudflare (or locally before deploy). If Cloudflare runs the build, it must run the full `npm run build` — not just `vite build`.

---

## 4. Verification: Static HTML Output

After deployment:

1. Open your site (e.g. `https://yoursite.pages.dev`)
2. Right-click → **View Page Source** (or Ctrl+U / Cmd+Option+U)
3. You should see:
   - Full article text inside `<div id="root">`
   - Headings (H1, H2, H3)
   - Internal links
   - FAQ content
   - **Not** just `<div id="root"></div>`

### Test these URLs

| URL | Expected in View Source |
|-----|-------------------------|
| `/` | Homepage hero, sections, FAQ |
| `/restaurant-cash-advance` | Cash advance content, H1, FAQ |
| `/blog/restaurant-refrigeration-emergency` | Refrigeration article, H1 "Restaurant Refrigeration Emergency: What to Do" |

---

## 5. Refrigeration Emergency Page

- **URL:** `/blog/restaurant-refrigeration-emergency`
- **File path:** `dist/blog/restaurant-refrigeration-emergency/index.html`
- **Title:** Restaurant Refrigeration Emergency: What To Do & Cost Guide | Funding Options
- **Content:** Full article about refrigeration failure, repair costs, funding options

---

## 6. Troubleshooting

### View Source still shows empty `<div id="root"></div>`

1. **Check build logs** — Look for `Prerendered 252 pages to dist/`. If missing, prerender did not run.
2. **Build time** — Should be 25–35 seconds. ~2 seconds = cached or wrong build.
3. **Clear build cache** — Cloudflare Dashboard → your project → Settings → Clear build cache → Retry deployment.
4. **Build command** — Must be exactly `npm run build`, not `vite build`.

### Wrong title on blog page

If `/blog/restaurant-refrigeration-emergency` shows the homepage title, the wrong `index.html` is being served. This happens when:
- Only the root `index.html` was deployed (prerender did not run)
- SPA fallback is serving root for all routes

Fix: Ensure the full build runs and 252+ files are in `dist/`.

---

## 7. File Structure After Build

```
dist/
├── index.html                    # Homepage (prerendered)
├── restaurant-cash-advance/
│   └── index.html
├── restaurant-working-capital/
│   └── index.html
├── restaurant-funding/
│   └── index.html
├── blog/
│   ├── index.html
│   └── restaurant-refrigeration-emergency/
│       └── index.html
├── assets/
│   ├── index-*.js
│   └── index-*.css
├── sitemap.xml
└── ... (252 pages total)
```
