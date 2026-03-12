# Blog Internal Link Audit Report

**Date:** March 7, 2025  
**Total indexable posts:** 231  
**Targets:** ≥3 outbound links per post, ≥2 inbound links per post

---

## Summary of Changes Made

### Orphan Pages Fixed (previously 0 inbound, 0 outbound)

| Page | Changes |
|------|---------|
| **restaurant-acquisition-funding** | Added 4 outbound links (funding-options-for-new-restaurants, restaurant-expansion-financing-guide, restaurant-second-location-costs, restaurant-pre-opening-costs). Added inbound links from funding-options-for-new-restaurants, restaurant-expansion-financing-guide. |
| **restaurant-late-vendor-payments** | Added 4 outbound links (restaurant-overdraft-problems, restaurant-credit-card-deposits-delayed, restaurant-invoice-factoring, restaurant-cash-flow-mistakes). Added inbound from restaurant-cash-flow-mistakes, restaurant-overdraft-problems, restaurant-credit-card-cash-flow-delay. |
| **restaurant-overdraft-problems** | Added 4 outbound links (restaurant-late-vendor-payments, restaurant-credit-card-cash-flow-delay, restaurant-cash-flow-mistakes, restaurant-cash-flow-forecasting). Added inbound from restaurant-credit-card-cash-flow-delay, restaurant-cash-flow-mistakes. |
| **restaurant-liquor-license-cost** | Added 3 outbound links (restaurant-compliance-licenses, restaurant-second-location-costs, restaurant-opening-costs-breakdown). Added inbound from restaurant-compliance-licenses. |

### Heavily-Linked Pages (high inbound, low outbound) – Outbound Links Added

| Page | Before | After |
|------|--------|-------|
| **restaurant-slow-season-survival** | 16 inbound, 0 outbound | Added 4 outbound (how-restaurants-handle-seasonal-cash-flow, restaurant-busy-season-preparation, manage-restaurant-payroll-during-slow-seasons, restaurant-january-slow, restaurant-seasonal-budget-planning) |
| **restaurant-busy-season-preparation** | 10 inbound, 0 outbound | Added 3 outbound (restaurant-slow-season-survival, how-restaurants-handle-seasonal-cash-flow, restaurant-holiday-rush-preparation) |
| **restaurant-credit-card-cash-flow-delay** | 9 inbound, 0 outbound | Added 3 outbound (restaurant-overdraft-problems, restaurant-late-vendor-payments, restaurant-payroll-gap) |
| **restaurant-equipment-repair-cost** | 24 inbound, 1 outbound | Added 3 outbound (restaurant-commercial-oven-broke, restaurant-walk-in-freezer-emergency, how-to-fund-restaurant-equipment-repairs) |
| **how-restaurants-handle-seasonal-cash-flow** | 7 inbound, 0 outbound | Added 3 outbound (restaurant-slow-season-survival, restaurant-busy-season-preparation, manage-restaurant-payroll-during-slow-seasons) |
| **funding-options-for-new-restaurants** | 5 inbound, 0 outbound | Added 3 outbound (restaurant-acquisition-funding, restaurant-expansion-financing-guide, restaurant-pre-opening-costs) |

---

## Weakest Linked Pages (Post-Fix)

Pages still below targets (≥2 inbound, ≥3 outbound) as of the latest audit:

### Critical (0 inbound links)

| Slug | Inbound | Outbound |
|------|---------|----------|
| bar-and-brewery-funding | 0 | 1 |
| pizzeria-funding-options | 0 | 1 |
| quick-service-restaurant-funding | 0 | 1 |
| restaurant-back-to-school | 0 | 1 |
| restaurant-bakery-funding | 0 | 1 |
| restaurant-bank-statements-required | 0 | 1 |
| restaurant-bridge-loan-alternative | 0 | 1 |
| restaurant-funding-georgia | 0 | 1 |
| restaurant-funding-michigan | 0 | 1 |
| restaurant-funding-north-carolina | 0 | 1 |
| restaurant-funding-ohio | 0 | 1 |
| restaurant-funding-pennsylvania | 0 | 1 |
| restaurant-funding-virginia | 0 | 1 |
| restaurant-garden-outdoor-space | 0 | 1 |
| restaurant-insurance-premium | 0 | 1 |
| restaurant-marketing-campaign-funding | 0 | 1 |
| restaurant-pop-up-funding | 0 | 1 |
| restaurant-pos-upgrade-funding | 0 | 1 |
| restaurant-reopen-after-crisis | 0 | 1 |
| restaurant-sports-season | 0 | 1 |
| restaurant-tax-season-cash-flow | 0 | 1 |
| restaurant-utility-costs | 0 | 1 |
| restaurant-weather-impact | 0 | 1 |

### Moderate (0 inbound, 2 outbound)

| Slug | Inbound | Outbound |
|------|---------|----------|
| full-service-restaurant-cash-flow | 0 | 2 |
| how-restaurant-owners-use-working-capital | 0 | 2 |
| mobile-catering-funding | 0 | 2 |
| restaurant-ada-compliance | 0 | 2 |
| restaurant-allergen-compliance | 0 | 2 |
| restaurant-benefits-offering | 0 | 2 |
| restaurant-business-capital-planning | 0 | 2 |
| (+ many more with 0 inbound) | | |

### Low Outbound (need ≥3 outbound)

| Slug | Inbound | Outbound |
|------|---------|----------|
| how-long-restaurant-funding-takes | 5 | 0 |
| manage-restaurant-payroll-during-slow-seasons | 5 | 0 |
| restaurant-loan-vs-cash-advance | 6 | 0 |
| restaurant-payroll-gap | 13 | 1 |
| restaurant-refrigeration-emergency | 7 | 1 |
| how-to-fund-restaurant-equipment-repairs | 8 | 1 |
| restaurant-bank-statement-requirements | 8 | 1 |
| (+ many more with 1–2 outbound) | | |

---

## Recommendations for Further Improvement

1. **Concept-type pages** (bar-and-brewery-funding, pizzeria-funding-options, quick-service-restaurant-funding, restaurant-bakery-funding, mobile-catering-funding): Add inbound links from restaurant-food-truck-funding, restaurant-equipment-repair-cost, and other concept-agnostic posts that mention these concepts.

2. **State funding pages** (restaurant-funding-georgia, -michigan, -ohio, etc.): Add inbound links from restaurant-funding-all-states, restaurant-funding-amounts-by-state, and regional/cash-flow posts.

3. **Heavily-linked hubs** (restaurant-payroll-gap, restaurant-refrigeration-emergency): Add 2+ more outbound links to related equipment, payroll, or seasonal posts.

4. **0-outbound posts** (how-long-restaurant-funding-takes, manage-restaurant-payroll-during-slow-seasons, restaurant-loan-vs-cash-advance): Add 3+ contextual outbound links to related funding, payroll, or comparison posts.

---

## How to Re-Run the Audit

```bash
node scripts/audit-blog-links.mjs
```
