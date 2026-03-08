# Deploying to Cloudflare Pages

This site is **pre-rendered at build time**. Each page outputs full HTML in `dist/`. To see it when you "View Source", you must deploy the **built** output, not run the dev server.

## Cloudflare Pages Setup

1. **Build command:** `npm run build`
2. **Build output directory:** `dist`
3. **Root directory:** (leave default, or `/` if your repo root contains the project)

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
