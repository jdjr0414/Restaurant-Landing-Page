# SEO Recommendations

Based on a full pass over every page and component, here are focused recommendations.

---

## Implemented in this pass

- **robots.txt** – Added in `public/robots.txt`: allows all crawlers; points to both sitemap.xml and HTML /sitemap.
- **Open Graph & Twitter Cards** – `SeoHead` sets `og:title`, `og:description`, `og:url`, `og:type`, `og:image`; plus `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`. **Default og:image** used when a page doesn’t set one.
- **Noindex for “Post not found”** – When a blog slug doesn’t exist, the page sets `robots` noindex,nofollow.
- **Meta description length** – Blog post meta descriptions truncated to ~155 characters for SERPs.
- **Article schema** – Blog post pages output JSON-LD `Article` (headline, datePublished, description, url).
- **XML sitemap** – `scripts/generate-sitemap.mjs` runs after `vite build` and writes `dist/sitemap.xml` with all static, topic, and blog URLs. Referenced in `robots.txt`.
- **404 page** – Dedicated `NotFoundPage` with noindex; catch-all route shows it (with header/footer) instead of redirecting to home.
- **WhyAxiantPartners** – Rephrased to “Why Restaurant Owners Explore Funding Options”; lender-neutral copy; CTA links to find-match URL instead of /about.
- **SITE_URL from environment** – `src/config.ts` uses `import.meta.env.VITE_SITE_URL` (fallback: restaurantownersguide.com). Sitemap script uses `process.env.VITE_SITE_URL`.
- **Breadcrumb schema** – `BreadcrumbSchema` component added; used on topic pages (Home > Page) and blog post pages (Home > Blog > Post title).

---

## Medium priority (optional)

- **Default meta in index.html** – If you add pre-rendering or SSR, ensure the initial HTML matches the default route.
- **Blog post images** – Article schema supports `image`; add a featured image per post (or default) and include in Article JSON-LD and `og:image` if desired.
- **Structured data for topic pages** – Topic pages could use `WebPage` or `Article` schema with `mainEntity` FAQ if they have a clear Q&A structure.

---

## Already in good shape

- **One H1 per page** – Each main page and topic page has a single, clear H1.
- **Canonical URLs** – All key pages set a canonical via `SeoHead`.
- **Unique titles and meta descriptions** – Main pages, topic pages, and blog posts use distinct titles and descriptions.
- **FAQ schema** – Main landing (FaqSchema) and homepage (HomeFaqSchema) use FAQPage schema.
- **Semantic HTML** – Blog posts use `<article>`, `<header>`, `<time>`, and sections with headings.
- **Image alt text** – Homepage hero and content images have descriptive alt text.
- **Internal linking** – Topic pages and content link to `/restaurant-cash-advance`, `/restaurant-working-capital`, `/blog`, etc.

---

## Quick wins

- Add a **default og:image** (e.g. 1200×630) in `SeoHead` when no page-specific image is set so shares always show an image.
- Ensure **blog list** and **sitemap** pages are linked from the footer (already present) and that the most important topic pages are linked from the homepage.
- If you add **sitemap.xml**, list it in Google Search Console and (if used) Bing Webmaster Tools.
