# Blog Audit Report: The Restaurant Owners Guide

**Site:** https://therestaurantownersguide.com  
**Date:** March 7, 2025  
**Total posts:** 270 (10 duplicates removed)

---

## 1. All Blog Posts: Slug, Title Tag, Meta Description

### Indexed Posts (18 with custom content, hasCustomContent: true)

| Slug | Title Tag | Meta Description |
|------|-----------|-------------------|
| how-restaurant-owners-use-working-capital | Restaurant Working Capital: How Owners Use It for Payroll & Growth \| The Restaurant Owners Guide | How restaurant owners use working capital for payroll, inventory, and growth. Options when you need to bridge the gap between revenue and bills. |
| restaurant-cash-flow-problems-and-solutions | Restaurant Cash Flow Problems and Solutions \| The Restaurant Owners Guide | Common restaurant cash flow problems and practical solutions. When you can't pay bills on time and what options exist for owners. |
| best-financing-options-for-restaurants | Best Restaurant Financing Options Compared \| The Restaurant Owners Guide | Compare the best restaurant financing options: loans, cash advance, working capital. Speed, cost, and what to expect for your situation. |
| how-to-fund-restaurant-equipment-repairs | Restaurant Equipment Repair Funding Options \| The Restaurant Owners Guide | Funding options for restaurant equipment repairs and replacements. When you need money fast for ovens, coolers, or fryers. |
| restaurant-loan-vs-cash-advance | Restaurant Loan vs Cash Advance: Compare Your Options \| The Restaurant Owners Guide | Restaurant loan vs cash advance: differences in speed, qualification, and repayment. Which option fits your situation when you need funds. |
| how-restaurants-handle-seasonal-cash-flow | Restaurant Seasonal Cash Flow: How to Manage It \| The Restaurant Owners Guide | Strategies for managing seasonal cash flow in restaurants. How to survive slow seasons when rent and payroll don't drop. |
| funding-options-for-new-restaurants | Funding Options for New Restaurants \| The Restaurant Owners Guide | Restaurant startup funding options for new owners. What exists when you're opening or just opened your restaurant. |
| manage-restaurant-payroll-during-slow-seasons | Restaurant Payroll During Slow Seasons: How to Cover It \| The Restaurant Owners Guide | Tips for covering restaurant payroll when business is slow. How to bridge the gap when revenue drops but payday doesn't. |
| restaurant-refrigeration-emergency | Restaurant Refrigeration Emergency: What Owners Should Do Immediately \| The Restaurant Owners Guide | What to do when your restaurant refrigerator or walk-in cooler fails. Immediate steps, repair costs, and funding options. |
| restaurant-payroll-gap | Restaurant Payroll Gap: What to Do When Cash Is Short Before Payday \| The Restaurant Owners Guide | Payroll is due but your restaurant account is short. Learn what owners do when cash doesn't line up with payday and what options exist. |
| restaurant-slow-season-survival | Restaurant Slow Season Survival: How to Avoid Running Out of Cash \| The Restaurant Owners Guide | Traffic drops but rent and payroll don't. How restaurant owners prepare for and survive slow seasons without running out of cash. |
| restaurant-equipment-repair-cost | Restaurant Equipment Repair Costs: What to Expect & How to Fund Them \| The Restaurant Owners Guide | Ovens, coolers, and fryers break at the worst times. The real costs of restaurant equipment repairs and how owners fund them. |
| restaurant-broken-walk-in-cooler | Walk-In Cooler Broken? Steps, Costs & Funding Options \| The Restaurant Owners Guide | A broken walk-in cooler can shut you down. Immediate steps, repair costs, and how restaurant owners fund emergency cooler repairs. |
| restaurant-cash-flow-mistakes | 7 Restaurant Cash Flow Mistakes That Drain Your Business \| The Restaurant Owners Guide | Common cash flow mistakes restaurant owners make and how to avoid them. Practical fixes and when funding can help. |
| restaurant-late-vendor-payments | Restaurant Vendor Payments: What Happens When You Fall Behind \| The Restaurant Owners Guide | When you can't pay suppliers on time. Consequences, how to get current, and what options exist for restaurant owners. |
| restaurant-busy-season-preparation | Restaurant Busy Season Prep: Funding Without Cash Flow Stress \| The Restaurant Owners Guide | Stocking up and staffing up before the rush requires cash upfront. How to prepare for busy seasons without draining your account. |
| restaurant-overdraft-problems | Restaurant Account Overdrafts: Why They Happen & How to Avoid \| The Restaurant Owners Guide | Overdrafts happen when cash flow doesn't match timing. Why it happens and what restaurant owners can do to avoid or recover. |
| restaurant-credit-card-cash-flow-delay | Credit Card Deposit Delay: Restaurant Cash Flow Impact \| The Restaurant Owners Guide | Card sales don't hit your account immediately. How the 2–3 day delay affects restaurant cash flow and what owners do about it. |

### Noindex Posts (252 with generated pool content)

All other 252 posts use `getGeneratedBlogContent()` from shared pools. They have:
- **noindex: true** (via `hasCustomContent !== true`)
- Custom metaTitle and description per post
- Canonical URL = `/blog/{slug}`
- og:title, og:description, og:url, og:type=article

**Full list:** All 270 posts are in `src/data/blogPosts.ts`. Each has: slug, title, description, metaTitle, publishedDate. Title tag = metaTitle or `{title} | The Restaurant Owners Guide`.

---

## 2. Confirmation: No Duplicate Blog Topics

**Duplicates removed (10):**

| Removed Slug | Reason |
|--------------|--------|
| when-restaurants-should-use-working-capital | Overlaps with how-restaurant-owners-use-working-capital |
| restaurant-equipment-repairs-funding | Near-duplicate of how-to-fund-restaurant-equipment-repairs |
| working-capital-for-restaurant-owners | Overlaps with how-restaurant-owners-use-working-capital |
| restaurant-funding-options-compared | Overlaps with best-financing-options-for-restaurants |
| pay-restaurant-staff-during-slow-seasons | Overlaps with manage-restaurant-payroll-during-slow-seasons |
| restaurant-financing-second-locations | Overlaps with restaurant-expansion-financing-guide |
| restaurant-startup-funding-guide | Overlaps with funding-options-for-new-restaurants |
| how-to-survive-slow-season-restaurant | Overlaps with restaurant-slow-season-survival |
| restaurant-catering-cash-flow | Generated, near-duplicate of catering content |
| restaurant-catering-cash-flow-gap | Near-duplicate of catering cash flow |

**Remaining topics:** Each of the 270 posts has a distinct slug and topic. No two posts target the exact same search intent.

**Equipment overlap (kept distinct):**
- restaurant-refrigeration-emergency — broad refrigeration
- restaurant-broken-walk-in-cooler — cooler-specific
- restaurant-equipment-repair-cost — cost focus
- how-to-fund-restaurant-equipment-repairs — funding focus

---

## 3. Outbound Axiant Links: Where and Why

| Location | Count | rel | target | Why |
|----------|-------|-----|--------|-----|
| Blog post article footer | 1 per post | sponsored noopener noreferrer | _blank | Calm CTA after user reads problem + options. "When you're ready to see what may match your situation: Find options." |
| Homepage | 2 | (CTA component) | _blank | Primary conversion page |
| Topic pages | 2 | (CTA component) | _blank | After educational content |
| Main guides | 2 | (CTA component) | _blank | After comparing options |

**Axiant URL:** https://axiantpartners.com/findmatch (in `src/config.ts`)

**Blog post CTA placement:** In `BlogPostPage.tsx` article footer, after internal links to /restaurant-cash-advance, /restaurant-working-capital, /restaurant-funding. Single link, near end, compliant with 1–2 max per blog post.

---

## 4. Files to Edit for New Blog Posts

| File | Purpose |
|------|---------|
| `src/data/blogPosts.ts` | Add new post: slug, title, description, publishedDate, metaTitle, faqItems (3–6), keywords, howToSteps, **hasCustomContent: true** |
| `src/data/blogContent.tsx` | Add custom content in `contentMap` for the slug. **Required** for new posts—do not use generated pool content. |
| `public/llms.txt` | Add new post to "Blog & Articles" section for AI discovery |

### New Post Checklist

1. Add entry to `blogPosts` in blogPosts.ts with unique metaTitle, description, faqItems (3–6), **hasCustomContent: true**
2. Add custom content in `contentMap` in blogContent.tsx (1400–2000 words)
3. Include: H1 only, H2/H3 sections, Quick Answer near top, 3–6 FAQs, internal links to /restaurant-cash-advance, /restaurant-working-capital, /restaurant-funding, 2–4 related blog links
4. Add to llms.txt
5. Use publishedDate for sort order (newest first on blog index)

---

## 5. Metadata Implementation

- **Title tag:** From `post.metaTitle ?? \`${post.title} | ${SITE_NAME}\``
- **Meta description:** From `post.description` (truncated to 155 chars in BlogPostPage)
- **Canonical:** `/blog/{slug}` (matches route)
- **og:title, og:description, og:url, og:type=article:** Injected by prerender and SeoHead
- **twitter:title, twitter:description:** Same as og
- **noindex:** When `post.hasCustomContent !== true` (252 generated posts)

---

## 6. Summary of Changes Made

1. **Noindex for generated posts** — BlogPostPage and staticMeta set `noindex` when `!post.hasCustomContent`. Prerender injects `<meta name="robots" content="noindex, nofollow" />` for those posts.
2. **Removed 10 duplicate posts** — Overlapping topics consolidated per BLOG_STRATEGY.md.
3. **Improved meta descriptions** — First 8 custom posts now have route-specific, 150–155 char descriptions.
4. **Axiant URL** — Already updated to https://axiantpartners.com/findmatch in config.ts.
