# Sitemap Audit Report

**Date:** 2025-03-07  
**Total URLs in sitemap:** 298

---

## 1. Sitemap Coverage

### ✅ All indexable pages are in the sitemap
- **Static pages:** 9 (/, /restaurant-cash-advance, /restaurant-working-capital, /restaurant-funding, /business-cash-advance, /small-business-funding, /blog, /sitemap, /consultation)
- **Pillar pages:** 7
- **Topic pages:** 47 (includes /faq, /food-truck-funding, and all funding guides)
- **Blog posts (indexable):** 231 (only `hasCustomContent: true`)
- **Blog pagination:** 19 pages (/blog/page/2 through /blog/page/20)

### ✅ No redirects in sitemap
- All sitemap URLs resolve to real pages (no 301/302 redirects)
- `Navigate` in PillarPage/TopicPage is only for invalid paths (404 fallback), not for any sitemap URLs

### ✅ No noindex pages in sitemap
- Blog posts without `hasCustomContent` are excluded from the XML sitemap
- Verify-sitemap script confirms: 0 noindex pages incorrectly included

---

## 2. Quality Considerations

### Blog pagination pages (19 URLs)
- **Paths:** /blog/page/2 through /blog/page/20
- **Quality:** Thin content (pagination only). Standard for blog indexes.
- **Recommendation:** Keep in sitemap for discoverability of older posts. They have rel prev/next. Optional: noindex pages 2+ if you prefer to consolidate link equity to /blog.

### HTML sitemap (/sitemap)
- **Fixed:** Now links only to indexable blog posts (matches XML sitemap)
- Previously linked to all posts including noindex; now filtered by `hasCustomContent`

---

## 3. High-Quality, Low-Competition URLs to Index

These pages target niche keywords with lower competition and strong content (1300+ words for topic pages). Prioritize these for indexing and backlinks.

### Topic pages (new, 1300+ words, niche keywords)

| URL | Primary keyword |
|-----|-----------------|
| https://therestaurantownersguide.com/restaurant-liquor-license-financing | restaurant liquor license financing |
| https://therestaurantownersguide.com/restaurant-ada-compliance-funding | restaurant ADA compliance funding |
| https://therestaurantownersguide.com/restaurant-tax-season-funding | restaurant tax season funding |
| https://therestaurantownersguide.com/restaurant-rent-increase-funding | restaurant rent increase funding |
| https://therestaurantownersguide.com/restaurant-staff-training-funding | restaurant staff training funding |
| https://therestaurantownersguide.com/restaurant-insurance-funding | restaurant insurance premium funding |
| https://therestaurantownersguide.com/restaurant-outdoor-dining-financing | restaurant outdoor dining financing |
| https://therestaurantownersguide.com/restaurant-pos-financing | restaurant POS financing |
| https://therestaurantownersguide.com/restaurant-refrigeration-financing | restaurant refrigeration financing |
| https://therestaurantownersguide.com/restaurant-catering-funding | restaurant catering funding |
| https://therestaurantownersguide.com/restaurant-franchise-financing | restaurant franchise financing |
| https://therestaurantownersguide.com/restaurant-delivery-app-funding | restaurant delivery app funding |
| https://therestaurantownersguide.com/restaurant-revenue-based-financing | restaurant revenue-based financing |
| https://therestaurantownersguide.com/restaurant-grants-and-non-repayment-funding | restaurant grants |
| https://therestaurantownersguide.com/restaurant-marketing-funding | restaurant marketing funding |

### Established topic pages (comprehensive, niche)

| URL | Primary keyword |
|-----|-----------------|
| https://therestaurantownersguide.com/how-much-can-you-qualify-for | how much restaurant funding qualify |
| https://therestaurantownersguide.com/funding-for-new-restaurants | funding for new restaurants |
| https://therestaurantownersguide.com/working-capital-for-restaurants | working capital for restaurants |
| https://therestaurantownersguide.com/restaurant-equipment-financing | restaurant equipment financing |
| https://therestaurantownersguide.com/restaurant-emergency-funding | restaurant emergency funding |
| https://therestaurantownersguide.com/restaurant-seasonal-cash-flow | restaurant seasonal cash flow |
| https://therestaurantownersguide.com/food-truck-funding | food truck funding |

### Pillar pages (hub content)

| URL | Primary keyword |
|-----|-----------------|
| https://therestaurantownersguide.com/restaurant-funding-by-state | restaurant funding by state |
| https://therestaurantownersguide.com/restaurant-funding-by-business-type | restaurant funding by business type |
| https://therestaurantownersguide.com/restaurant-cash-flow-problems | restaurant cash flow problems |
| https://therestaurantownersguide.com/restaurant-funding-options | restaurant funding options |

---

## 4. Quick Reference: Top 15 URLs to Index First

1. https://therestaurantownersguide.com/restaurant-liquor-license-financing  
2. https://therestaurantownersguide.com/restaurant-ada-compliance-funding  
3. https://therestaurantownersguide.com/restaurant-tax-season-funding  
4. https://therestaurantownersguide.com/restaurant-rent-increase-funding  
5. https://therestaurantownersguide.com/restaurant-insurance-funding  
6. https://therestaurantownersguide.com/restaurant-staff-training-funding  
7. https://therestaurantownersguide.com/restaurant-outdoor-dining-financing  
8. https://therestaurantownersguide.com/restaurant-refrigeration-financing  
9. https://therestaurantownersguide.com/restaurant-catering-funding  
10. https://therestaurantownersguide.com/restaurant-franchise-financing  
11. https://therestaurantownersguide.com/restaurant-delivery-app-funding  
12. https://therestaurantownersguide.com/how-much-can-you-qualify-for  
13. https://therestaurantownersguide.com/restaurant-funding-by-state  
14. https://therestaurantownersguide.com/restaurant-funding-by-business-type  
15. https://therestaurantownersguide.com/food-truck-funding  

---

## 5. Actions Taken

- **HTML sitemap:** Updated to list only indexable blog posts (`hasCustomContent: true`), matching the XML sitemap
- **Verification:** All indexable pages are in sitemap; no redirects; no noindex pages included
