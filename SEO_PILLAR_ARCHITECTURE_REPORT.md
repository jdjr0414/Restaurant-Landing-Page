# SEO Pillar Architecture Report

**Generated:** March 7, 2025  
**Project:** Restaurant Cash Advance / The Restaurant Owners Guide

---

## 1. Pillar Pages Created

| Path | Title | Word Count (approx) | Status |
|------|-------|---------------------|--------|
| `/restaurant-cash-flow-guide` | Restaurant Cash Flow Guide: Understanding the Problem | ~2,000+ | Complete |
| `/restaurant-funding-options` | Restaurant Funding Options Compared | ~1,800+ | Complete |
| `/restaurant-working-capital-guide` | Restaurant Working Capital Guide | ~1,200+ | Complete |
| `/restaurant-loan-alternatives` | Restaurant Loan Alternatives When Banks Say No | ~1,000+ | Complete |
| `/restaurant-equipment-financing-guide` | Restaurant Equipment Financing Guide | ~1,000+ | Complete |

### Pillar Page Features

- **Restaurant Cash Flow Guide**: Includes cash cycle diagram (Revenue → Payroll → Inventory → Equipment → Slow Periods), FAQ section, internal links to problem pages and funding guides
- **Restaurant Funding Options**: Compares cash advance, working capital, loans, and equipment financing. Links to cash flow guide and loan alternatives
- **Restaurant Working Capital Guide**: Covers what it is, when you need it, and options. Links to payroll, inventory, equipment, seasonal, and emergency funding pages
- **Restaurant Loan Alternatives**: Explains when banks say no and alternatives (cash advance, working capital). Links to cash advance vs loan comparison
- **Restaurant Equipment Financing Guide**: Covers equipment vs flexible-use, what you can finance. Links to working capital and cash flow guides

---

## 2. Pages Merged or Consolidated

**No pages were merged or consolidated.**

### Cannibalization Audit Results

- **Payroll**: No separate `/restaurant-payroll-loan` or `/restaurant-payroll-financing` pages exist. Only `/restaurant-payroll-funding` (topic page) + blog posts (restaurant-payroll-gap, restaurant-payroll-stress, manage-restaurant-payroll-during-slow-seasons, restaurant-payroll-management-guide). These serve distinct intents (funding options vs. scenarios, causes, management) and are complementary, not cannibalizing. **No action taken.**

- **Equipment**: `/restaurant-equipment-financing` (topic) + blog posts (restaurant-equipment-repair-cost, how-to-fund-restaurant-equipment-repairs, restaurant-equipment-replacement-funding). Topic page and pillar (`/restaurant-equipment-financing-guide`) serve different purposes. **No action taken.**

- **Funding vs. Financing**: `/restaurant-funding-options` (pillar) and `/restaurant-financing-options` (topic) are related but distinct—pillar is comprehensive, topic is a shorter comparison. Both retained. **No action taken.**

---

## 3. Internal Links Added

### Topic Pages → Pillar Pages

| Topic Page | Pillar Links Added |
|------------|---------------------|
| `/restaurant-payroll-funding` | restaurant-cash-flow-guide, restaurant-working-capital-guide |
| `/restaurant-equipment-financing` | restaurant-equipment-financing-guide |
| `/restaurant-seasonal-cash-flow` | restaurant-cash-flow-guide |
| `/restaurant-emergency-funding` | restaurant-cash-flow-guide, restaurant-funding-options |
| `/restaurant-cash-flow-solutions` | restaurant-cash-flow-guide |
| `/funding-for-new-restaurants` | restaurant-funding-options, restaurant-equipment-financing-guide |
| `/restaurant-inventory-funding` | restaurant-cash-flow-guide, restaurant-working-capital-guide |
| `/why-restaurants-run-out-of-cash` | restaurant-cash-flow-guide |
| `/restaurant-cash-advance-vs-loan` | restaurant-loan-alternatives, restaurant-funding-options |
| `/working-capital-for-restaurants` | restaurant-working-capital-guide, restaurant-funding-options |
| `/restaurant-financing-options` | restaurant-funding-options |
| `/restaurant-startup-funding` | restaurant-funding-options, restaurant-equipment-financing-guide |
| `/restaurant-expansion-funding` | restaurant-funding-options, restaurant-loan-alternatives |
| `/how-much-can-you-qualify-for` | restaurant-funding-options |
| `/food-truck-funding` | restaurant-cash-flow-guide |
| `/faq` | restaurant-cash-flow-guide, restaurant-working-capital-guide, restaurant-equipment-financing-guide |

### Main Pages → Pillar Pages

| Page | Pillar Links Added |
|------|---------------------|
| `/` (HomePage) | restaurant-cash-flow-guide, restaurant-funding-options |
| `/restaurant-funding` | restaurant-cash-flow-guide, restaurant-funding-options |
| `/restaurant-working-capital` | restaurant-cash-flow-guide, restaurant-working-capital-guide |
| `/restaurant-cash-advance` (RestaurantCashFlowChallenges) | restaurant-cash-flow-guide |
| `/small-business-funding` | restaurant-cash-flow-guide |
| `/business-cash-advance` | restaurant-funding-options |

### Blog & Other Pages

| Page | Pillar Links Added |
|------|---------------------|
| `/blog` (BlogIndexPage) | restaurant-cash-flow-guide, restaurant-funding-options, restaurant-working-capital-guide |
| `/blog/:slug` (BlogPostPage footer) | restaurant-cash-flow-guide, restaurant-funding-options |
| `/consultation` | restaurant-cash-flow-guide, restaurant-funding-options, restaurant-working-capital-guide |
| Footer (sitewide) | restaurant-cash-flow-guide, restaurant-funding-options |
| Sitemap | restaurant-cash-flow-guide (Main Guides section) |
| RELATED_LINKS_POOL (blog content) | restaurant-cash-flow-guide, restaurant-funding-options, restaurant-working-capital-guide |

### Pillar Pages → Problem Pages, Blog, Funding Guides

| Pillar | Links Out To |
|--------|--------------|
| restaurant-cash-flow-guide | restaurant-funding, restaurant-working-capital, restaurant-cash-advance, restaurant-payroll-funding, restaurant-inventory-funding, restaurant-equipment-financing, restaurant-emergency-funding, restaurant-seasonal-cash-flow, restaurant-cash-flow-solutions, blog/restaurant-payroll-gap, blog/restaurant-slow-season-survival |
| restaurant-funding-options | restaurant-cash-flow-guide, restaurant-cash-advance, restaurant-working-capital, restaurant-equipment-financing, restaurant-loan-alternatives, restaurant-funding, restaurant-cash-advance-vs-loan |
| restaurant-working-capital-guide | restaurant-payroll-funding, restaurant-inventory-funding, restaurant-equipment-financing, restaurant-seasonal-cash-flow, restaurant-emergency-funding, restaurant-cash-advance, restaurant-loan-alternatives |
| restaurant-loan-alternatives | restaurant-cash-advance, restaurant-funding-options, restaurant-working-capital-guide, restaurant-cash-advance-vs-loan |
| restaurant-equipment-financing-guide | restaurant-equipment-financing, restaurant-cash-advance, restaurant-working-capital-guide, restaurant-cash-flow-guide |

---

## 4. Pages Still Lacking Pillar Connections

| Page | Status | Notes |
|------|--------|-------|
| `/restaurant-cash-advance` | Has pillar link | RestaurantCashFlowChallenges links to restaurant-cash-flow-guide |
| `/restaurant-equipment-financing` | Has pillar link | Links to restaurant-equipment-financing-guide |
| `/consultation` | Has pillar links | Updated with pillar guides |
| `/404` (NotFoundPage) | No pillar link | Utility page; typically not indexed |
| `/blog/page/:n` | Inherits from BlogIndexPage | Has pillar links in intro |

**All content pages now link to at least one pillar page.**

---

## 5. Compliance Checklist

- [x] **Educational tone**: No "apply now", "instant approval", or "guaranteed funding" language
- [x] **Axiant links**: All external links use `href="https://axiantpartners.com/match" target="_blank" rel="sponsored noopener noreferrer"` (via `FIND_MATCH_URL` and `AXIANT_LINK_REL` in config)
- [x] **Pillar structure**: Each pillar has H1, sections, internal links to problem pages and funding guides
- [x] **Cash flow diagram**: Restaurant cash cycle diagram in restaurant-cash-flow-guide (ordered list with aria-label)
- [x] **Internal linking pattern**: Problem pages → pillar pages → funding option pages

---

## 6. File Summary

- **Pillar config**: `src/data/pillarPages.tsx`
- **Pillar component**: `src/pages/PillarPage.tsx`
- **Routes**: `src/App.tsx` (all 5 pillar paths)
- **Static meta**: `src/staticMeta.ts` (pillar paths for prerender)
- **Sitemap**: `src/pages/SitemapPage.tsx` (Pillar Guides section)
- **Blog related links**: `src/data/blogContent.tsx` (RELATED_LINKS_POOL includes pillar paths)
