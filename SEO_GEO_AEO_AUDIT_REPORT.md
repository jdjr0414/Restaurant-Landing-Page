# SEO, GEO & AEO Audit Report

**Date:** March 2025

---

## 1. Sitemap Updates

### XML Sitemap (`dist/sitemap.xml`)
- **All pages included:** Static paths, pillar pages, topic pages, blog posts, blog pagination
- **lastmod:** Every URL has `<lastmod>YYYY-MM-DD</lastmod>` (blog posts use publishedDate/dateModified when available)
- **Paths covered:** `/`, `/consultation`, `/restaurant-cash-advance`, `/restaurant-working-capital`, `/restaurant-funding`, `/business-cash-advance`, `/small-business-funding`, `/blog`, `/sitemap`, all 5 pillar pages, all topic pages, all blog posts

### HTML Sitemap (`/sitemap`)
- **Main Guides:** Home, Restaurant Cash Advance, Working Capital, Restaurant Funding, **Free Consultation** (added), Business Cash Advance, Small Business Funding, FAQ
- **Pillar Guides:** All 5 pillar pages linked
- **Topic Guides:** All topic pages linked
- **Blog:** Index + all blog posts linked

### llms.txt (AI/LLM crawlers)
- Added Home, Free Consultation to Main Guides
- Added **Pillar Guides** section with all 5 pillar pages
- Referenced in `robots.txt`

---

## 2. Internal Linking

- **BreadcrumbSchema** added to: ConsultationPage, SitemapPage, BusinessCashAdvancePage, SmallBusinessFundingPage
- **Footer:** Links to Home, pillar pages, main guides, topic pages, Blog, Sitemap
- **Pillar–cluster structure:** Problem pages → pillar pages → funding guides (from prior SEO work)

---

## 3. SEO Optimization

| Element | Status |
|---------|--------|
| **Meta title** | Unique per page, includes SITE_NAME |
| **Meta description** | Unique, under 155 chars |
| **Canonical URL** | Set on all pages via SeoHead |
| **OG tags** | og:title, og:description, og:url, og:type, og:image, og:image:alt, **og:locale** (en_US), **og:site_name** |
| **Twitter cards** | summary_large_image |
| **BreadcrumbSchema** | All main pages |
| **ArticleSchema** | Blog posts |
| **WebPageSchema** | Pillar pages (new) |
| **robots.txt** | Allows all, references sitemap.xml and llms.txt |

---

## 4. GEO (Geographic SEO)

| Element | Status |
|---------|--------|
| **GeoMeta component** | Added to SiteLayout (all pages) |
| **geo.region** | `US` |
| **geo.placename** | `United States` |
| **Organization schema** | `areaServed: { @type: Country, name: United States }` in WebSiteSchema |
| **html lang** | `en` in index.html |

---

## 5. AEO (Answer Engine Optimization)

| Element | Status |
|---------|--------|
| **FAQ schema** | HomePage (HomeFaqSchema), FAQ page (FaqSchema), blog posts with faqItems (BlogFaqSchema) |
| **Speakable** | FaqSchema (FAQ page), HomeFaqSchema (homepage) – `data-speakable-faq`, `data-speakable-home-faq` |
| **HowTo schema** | Blog posts with howToSteps |
| **Article schema** | Blog posts (headline, datePublished, keywords) |
| **WebPage schema** | Pillar pages |
| **WebSite schema** | Homepage (SearchAction for site search) |
| **BlogIndexSchema** | ItemList for blog index |
| **BreadcrumbList** | All pages with BreadcrumbSchema |

---

## 6. Files Modified

- `src/pages/SitemapPage.tsx` – Main Guides updated, BreadcrumbSchema added
- `src/components/SiteLayout.tsx` – GeoMeta added
- `src/components/GeoMeta.tsx` – **New** – geo meta tags
- `src/components/WebSiteSchema.tsx` – areaServed added
- `src/components/HomeFaqSchema.tsx` – speakable added
- `src/components/HomeFAQ.tsx` – data-speakable-home-faq attribute
- `src/components/SeoHead.tsx` – og:locale, og:site_name
- `src/components/WebPageSchema.tsx` – **New** – WebPage schema for pillar pages
- `src/pages/PillarPage.tsx` – WebPageSchema added
- `src/pages/ConsultationPage.tsx` – BreadcrumbSchema added
- `src/pages/BusinessCashAdvancePage.tsx` – BreadcrumbSchema added
- `src/pages/SmallBusinessFundingPage.tsx` – BreadcrumbSchema added
- `public/llms.txt` – Home, Consultation, Pillar Guides section added
