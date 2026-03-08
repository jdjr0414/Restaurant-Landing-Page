# SEO-Friendly Static Site – What Changed & How to Add Pages

## What Changed

### 1. **Static HTML at build time (prerendering)**

The site is still **Vite + React**, but every important page is now **pre-rendered to static HTML** when you run `npm run build`.

- **Before:** View Source showed only `<div id="root"></div>` and a script tag; content was rendered by JavaScript after load.
- **After:** View Source shows the full page: title, meta description, canonical, Open Graph and Twitter tags, H1, article/landing content, internal links, FAQ, and CTA.

Crawlers and “View Source” now see the real content in the initial HTML.

### 2. **Build pipeline**

1. **Client build** – `vite build` → `dist/index.html`, `dist/assets/*` (JS/CSS).
2. **SSR build** – `vite build --ssr src/entry-server.tsx` → `dist/entry-server.js` (does not clear `dist/`).
3. **Prerender** – `node scripts/prerender.mjs` loads the SSR bundle, renders each route to HTML, injects per-page title/meta/canonical/OG/Twitter into the template, and writes:
   - `dist/index.html` (home)
   - `dist/restaurant-cash-advance/index.html`
   - `dist/blog/restaurant-refrigeration-emergency/index.html`
   - …one HTML file per path (252 pages total).
4. **Sitemap** – `node scripts/generate-sitemap.mjs` → `dist/sitemap.xml`.

### 3. **New / modified files**

| File | Purpose |
|------|--------|
| `src/staticMeta.ts` | Central list of all paths and per-path meta (title, description, canonical). Used by prerender and SSR. |
| `src/entry-server.tsx` | SSR entry: renders the React app for a given URL with `StaticRouter`, exports `render`, `getAllPaths`, `getMeta`. |
| `scripts/prerender.mjs` | Reads `dist/index.html`, for each path calls `render(path)` and `getMeta(path)`, injects head meta and body HTML, writes `dist/<path>/index.html`. |
| `vite.config.ts` | `build.emptyOutDir: !isSsrBuild` so the SSR build does not wipe the client build output. |
| `package.json` | `build` script runs client build → SSR build → prerender → sitemap. |

### 4. **SEO on every page**

Each prerendered page includes:

- Unique **title** and **meta description**
- **Canonical** URL
- **Open Graph** (og:title, og:description, og:url, og:image, og:type)
- **Twitter card** (twitter:card, twitter:title, twitter:description, twitter:image)
- One **H1**, proper **H2/H3** hierarchy
- **Internal links** (e.g. to `/restaurant-cash-advance`)
- **FAQ schema** where applicable (e.g. home, main guide)
- **Article + Breadcrumb schema** on blog posts
- **robots.txt** (in `public/`) and **sitemap.xml** (generated in `dist/`)

### 5. **Refrigeration blog post fix**

- **Slug:** `/blog/restaurant-refrigeration-emergency`
- **Title / meta:** “Restaurant Refrigeration Emergency: What To Do & Cost Guide | Funding Options” and description about refrigerator failure, repair costs, and funding.
- **H1:** “Restaurant Refrigeration Emergency: What to Do”
- **Body:** Custom content in `src/data/blogContent.tsx` under `'restaurant-refrigeration-emergency'`: what to do when the cooler fails, repair/replacement costs, how restaurants fund emergency repairs, plus FAQ and CTA. No more generic “restaurant cash flow” copy for this URL.

---

## Where to Edit to Add More Pages

### **New blog post**

1. **Add meta and slug** in `src/data/blogPosts.ts`:
   - Push an object: `{ slug: 'your-slug', title: '...', description: '...', publishedDate: 'YYYY-MM-DD', metaTitle?: '...' }`.
   - `metaTitle` is optional; if set, it’s used as the document title (e.g. “Topic: Costs & Options | Site Name”).
2. **Optional custom body** in `src/data/blogContent.tsx`:
   - In the `contentMap` object, add a key matching the slug and JSX for the article (intro, H2 sections, FAQ, CTA, links to `/restaurant-cash-advance`).
   - If you don’t add an entry, the post uses **generated** content from `blogContentPools.ts` (templates + slug-based variation).
3. **Rebuild:** `npm run build`. Prerender will pick up the new slug from `getAllPaths()` (which reads `blogPosts`) and generate `dist/blog/your-slug/index.html`.

No change to routing: `/blog/:slug` already handles any slug present in `blogPosts`.

### **New topic / supporting page (e.g. city or topic page)**

1. **Add config** in `src/data/topicPages.tsx`:
   - Append an item to `topicPagesConfig` with `path`, `title`, `description`, `h1`, `lead`, and `sections` (each with `h2` and `content` JSX).
2. **Routing:** Handled by the existing `TopicPage` route generated from `topicPagesConfig` in `App.tsx`.
3. **Meta:** `staticMeta.ts` uses `topicPagesConfig` for `getAllPaths()` and `getMeta(path)`, so the new path is prerendered and gets the correct title/description/canonical.

### **New static landing page (e.g. another main route)**

1. **Add route** in `App.tsx`: e.g. `<Route path="/your-page" element={<YourPage />} />`.
2. **Add meta** in `src/staticMeta.ts`:
   - In `STATIC_META`, add `'/your-page': { title: '...', description: '...' }`.
   - In `getAllPaths()`, add `'/your-page'` to the array.
3. **Create** `src/pages/YourPage.tsx` (with one H1, sections, FAQ/CTA as needed).
4. **Rebuild.** Prerender will generate `dist/your-page/index.html`.

---

## Validation

After `npm run build`:

1. Open `dist/index.html` (or any `dist/<path>/index.html`) in a text editor, or use “View Source” when serving `dist/` (e.g. `npx serve dist` or your host’s preview).
2. Confirm you see:
   - `<title>...</title>` and `<meta name="description" ...>` (and OG/Twitter) in `<head>`
   - `<div id="root">` filled with HTML (header, main content, footer), not empty.
3. For `/blog/restaurant-refrigeration-emergency`, confirm the H1 and body are about refrigeration emergency, not generic cash flow.

---

## Serving the static site

Serve the `dist/` folder so that:

- `/` → `dist/index.html`
- `/restaurant-cash-advance` → `dist/restaurant-cash-advance/index.html`
- `/blog/restaurant-refrigeration-emergency` → `dist/blog/restaurant-refrigeration-emergency/index.html`

Most static hosts (Netlify, Vercel, Cloudflare Pages, etc.) do this by default when the build output is `dist` and the publish directory is `dist`. The client JS still loads and React hydrates, so existing interactivity (e.g. mobile menu) continues to work.
