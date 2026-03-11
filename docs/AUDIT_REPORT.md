# Full Website Audit Report

**Date:** March 2025

## 1. Keyword Cannibalization – Fixed

### Issues Identified

| Page A | Page B | Overlap | Fix Applied |
|--------|--------|---------|-------------|
| `/restaurant-cash-advance` | `/restaurant-cash-flow-guide` | Both used "Restaurant Cash Flow Guide" | Main page now: "Restaurant Cash Advance \| How It Works, Speed & When to Use" |
| `/restaurant-funding` | `/restaurant-funding-options` | Both "Restaurant Funding Options" | Main: "Restaurant Funding \| Cash Advance, Working Capital & Loans"; Pillar: "Complete Comparison of All Choices" |
| `/restaurant-equipment-financing-guide` | `/restaurant-equipment-financing` | Same keywords | Pillar: "Loans, Leases & Working Capital"; Topic stays product-focused |
| `/restaurant-cash-flow-guide` | Multiple | Generic "Problems, Timing & Solutions" | Pillar: "Why Timing Mismatches Cause Problems" |
| `/restaurant-funding-options` | `/restaurant-financing-options` | Funding vs Financing | Pillar: "Complete Comparison"; Topic: "Loans, Cash Advance & Equipment" |
| `/restaurant-startup-funding` | `/funding-for-new-restaurants` | New restaurant funding | Topic: "Build-Out & Early Operations" |
| `/restaurant-working-capital` | `/working-capital-for-restaurants` | Working capital | Main: "Payroll, Inventory & Operations"; Topic: "Payroll, Inventory & Day-to-Day" |

### Primary Pages (Canonical Intent)

- **Restaurant cash advance:** `/restaurant-cash-advance` (main product)
- **Restaurant cash flow:** `/restaurant-cash-flow-guide` (problem)
- **Restaurant funding:** `/restaurant-funding` (main hub)
- **Restaurant funding options:** `/restaurant-funding-options` (pillar)
- **Restaurant equipment financing:** `/restaurant-equipment-financing` (topic)
- **Restaurant equipment financing guide:** `/restaurant-equipment-financing-guide` (pillar)

### Blog vs Topic Overlap

- Blog posts without `hasCustomContent` are **noindex** – they do not compete with topic pages.
- Topic pages are the main targets for core topics.
- Blog posts with custom content use different angles (e.g., "Restaurant Loan vs Cash Advance" vs "Restaurant Cash Advance vs Loan").

---

## 2. Mobile Optimization

### Current Setup

- Viewport: `width=device-width`, `viewport-fit=cover`, `interactive-widget=resizes-visual`
- Base font: 16px on mobile (avoids iOS zoom)
- Inputs: 16px minimum on mobile
- Touch targets: 44px minimum for buttons, links, FAQ toggles
- `touch-action: manipulation` where appropriate
- Safe areas: `env(safe-area-inset-*)` for header, footer, content
- Tables: `overflow-x: auto` for horizontal scroll
- Sticky CTA: `env(safe-area-inset-bottom)` for notched devices

### Changes Made

- **360px breakpoint:** Smaller font sizes for `.page-title`, `.home-hero__title`, `.section-title` to avoid overflow
- **Home hero:** Padding adjusted for very small screens
- **Prose:** `overflow-wrap: break-word` for long URLs/words

### Breakpoints

- 360px – Very small phones
- 375px – Small phones
- 480px – Large phones
- 640px – Phones / small tablets
- 768px – Tablets
- 1024px – Desktop (mobile nav)

---

## 3. SEO Checklist

- [x] Meta title and description on all pages
- [x] Canonical URLs
- [x] OG and Twitter meta
- [x] per-page OG images
- [x] Breadcrumb schema
- [x] WebPage schema
- [x] FAQ schema
- [x] Article schema (blog)
- [x] WebSite + Organization (homepage)
- [x] Sitemap.xml in robots.txt
- [x] Sitemap link in HTML head
- [x] llms.txt for AI crawlers

---

## 4. Recommendations

1. **Monitor rankings** for the updated titles and meta descriptions.
2. **Internal linking:** Use clear anchor text for primary pages and avoid duplicate keyword targets.
3. **Blog consolidation:** Consider consolidating or redirecting thin blog posts that overlap with strong topic pages.
4. **Mobile testing:** Test on real devices (320px–375px) for layout and tap targets.
