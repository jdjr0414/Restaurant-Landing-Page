# Axiant Partners Link Audit Report

**Date:** March 7, 2025  
**Goal:** Ensure all outbound links to Axiant Partners follow a safe linking structure to avoid link-network patterns while allowing users to explore funding options when appropriate.

---

## 1. Summary of Changes

| Task | Status |
|------|--------|
| Update Axiant URL to `https://axiantpartners.com/match` | ✅ Done |
| Standardize `target="_blank"` and `rel="sponsored noopener noreferrer"` | ✅ Done |
| Remove Axiant links from sitewide navigation (header) | ✅ Done |
| Remove Axiant links from footer | ✅ Done |
| Blog posts: at most 1 Axiant link (near end) | ✅ Compliant |
| Funding guide pages: 2–3 Axiant links where appropriate | ✅ Compliant |
| Blog posts prioritize internal links (cash-advance, working-capital, funding) | ✅ Compliant |
| Varied anchor text across the site | ✅ Done |

---

## 2. Files Updated

| File | Changes |
|------|---------|
| `src/config.ts` | `FIND_MATCH_URL` set to `https://axiantpartners.com/match` |
| `src/components/SiteLayout.tsx` | Removed header CTAs (mobile + desktop) linking to Axiant |
| `src/components/Footer.tsx` | Removed footer Axiant link; removed `FIND_MATCH_URL` import |
| `src/pages/BlogPostPage.tsx` | Updated link attributes; anchor: "See What Restaurant Funding Options May Be Available" |
| `src/pages/BlogIndexPage.tsx` | Updated link attributes; anchor: "Explore Restaurant Funding Options" |
| `src/pages/HomePage.tsx` | Updated link attributes; anchors: "Explore Restaurant Funding Options", "Review Restaurant Financing Options" |
| `src/components/CTA.tsx` | Updated link attributes; anchors: "Explore Restaurant Funding Options", "See What Restaurant Funding Options May Be Available" |
| `src/components/WhenToExploreOptions.tsx` | Updated link attributes; anchor: "Review Restaurant Financing Options" |
| `src/components/Hero.tsx` | Updated link attributes; anchor: "Explore Restaurant Funding Options" |
| `src/components/WhyAxiantPartners.tsx` | Updated link attributes; anchor: "Review Restaurant Financing Options" |
| `src/pages/BusinessCashAdvancePage.tsx` | Updated link attributes; anchor: "See What Restaurant Funding Options May Be Available" |
| `src/pages/RestaurantWorkingCapitalPage.tsx` | Updated link attributes; anchor: "Review Restaurant Financing Options" |
| `src/pages/RestaurantFundingPage.tsx` | Updated link attributes; anchor: "Review Restaurant Financing Options" |
| `src/pages/SmallBusinessFundingPage.tsx` | Updated link attributes; anchor: "See What Restaurant Funding Options May Be Available" |
| `src/data/topicPages.tsx` | Updated link attributes; anchor: "Explore Restaurant Funding Options" |

---

## 3. Complete Inventory of Outbound Axiant Links

All links use `FIND_MATCH_URL` from `src/config.ts` → `https://axiantpartners.com/match`.

| Location | Page(s) | Anchor Text | Link Count | Compliant |
|----------|---------|-------------|------------|-----------|
| **BlogPostPage** | All blog posts | See What Restaurant Funding Options May Be Available | 1 per post | ✅ |
| **BlogIndexPage** | /blog | Explore Restaurant Funding Options | 1 | ✅ |
| **HomePage** | / | Explore Restaurant Funding Options | 1 (hero) | ✅ |
| **HomePage** | / | Review Restaurant Financing Options | 1 (final CTA) | ✅ |
| **CTA** | Funding guides, Topic pages | Explore Restaurant Funding Options | 1 (section) | ✅ |
| **CTA (sticky)** | Funding guides, Topic pages | See What Restaurant Funding Options May Be Available | 1 (mobile sticky) | ✅ |
| **WhenToExploreOptions** | /restaurant-cash-advance | Review Restaurant Financing Options | 1 | ✅ |
| **Hero** | /restaurant-cash-advance | Explore Restaurant Funding Options | 1 | ✅ |
| **WhyAxiantPartners** | (if used) | Review Restaurant Financing Options | 1 | ✅ |
| **BusinessCashAdvancePage** | /business-cash-advance | See What Restaurant Funding Options May Be Available | 1 | ✅ |
| **RestaurantWorkingCapitalPage** | /restaurant-working-capital | Review Restaurant Financing Options | 1 | ✅ |
| **RestaurantFundingPage** | /restaurant-funding | Review Restaurant Financing Options | 1 | ✅ |
| **SmallBusinessFundingPage** | /small-business-funding | See What Restaurant Funding Options May Be Available | 1 | ✅ |
| **topicPages** (CtaParagraph) | Topic pages (restaurant-payroll-funding, etc.) | Explore Restaurant Funding Options | 1 per topic page | ✅ |

**Removed:**
- Header navigation (mobile + desktop): 2 links removed
- Footer: 1 link removed

---

## 4. Link Format Compliance

Every remaining Axiant link uses:

```html
<a href="https://axiantpartners.com/match"
   target="_blank"
   rel="sponsored noopener noreferrer">
   [Varied anchor text]
</a>
```

- **URL:** Centralized in `src/config.ts` as `FIND_MATCH_URL`
- **rel:** Centralized as `AXIANT_LINK_REL` = `"sponsored noopener noreferrer"`
- **target:** `"_blank"` on all links

---

## 5. Anchor Text Variations

| Variation | Used On |
|-----------|---------|
| Explore Restaurant Funding Options | Home hero, Blog index, CTA section, Hero, Topic pages |
| See What Restaurant Funding Options May Be Available | Blog posts, CTA sticky, BusinessCashAdvancePage, SmallBusinessFundingPage |
| Review Restaurant Financing Options | Home final CTA, WhenToExploreOptions, Hero (restaurant-cash-advance), WhyAxiantPartners, RestaurantWorkingCapitalPage, RestaurantFundingPage |

---

## 6. Page-Level Link Counts

| Page Type | Axiant Links | Limit | Status |
|------------|--------------|-------|--------|
| Blog post | 1 | ≤ 1 | ✅ |
| Blog index | 1 | ≤ 1 | ✅ |
| Home | 2 | 2–3 (guide-like) | ✅ |
| Restaurant Cash Advance (main guide) | 3 (Hero + WhenToExplore + CTA) | 2–3 | ✅ |
| Other funding guides | 2 (body + CTA) | 2–3 | ✅ |
| Topic pages | 2 (CtaParagraph + CTA) | 2–3 | ✅ |

---

## 7. Internal Link Priority

Blog posts and key pages prioritize internal links to:
- `/restaurant-cash-advance`
- `/restaurant-working-capital`
- `/restaurant-funding`

These appear in article footers, breadcrumbs, and body copy before any external Axiant link.

---

## 8. Build Verification

- `npm run build` completed successfully
- 274 pages prerendered
- No broken links or TypeScript errors
