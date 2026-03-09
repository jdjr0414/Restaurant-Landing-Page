# Blog Strategy: The Restaurant Owners Guide

**Site:** https://therestaurantownersguide.com  
**Goal:** High-authority blog for restaurant owners with real cash-flow and funding problems, funneling qualified users to Axiant Partners safely.

---

## 1. CRITICAL FINDINGS: Duplicate Content Risk

### Content Architecture Problem

- **252+ of 280 blog posts** use `getGeneratedBlogContent()` which pulls from shared content pools.
- **~245 unique paragraphs** are reused across 252+ posts—each paragraph appears on ~10 different posts.
- **Body content is fully generic**—no slug-specific wording. Same paragraphs for "Restaurant Funding Texas," "Food Truck Payroll," and "Equipment Repairs."
- **Identical boilerplate** on every generated post: same closing paragraph, same FAQ structure, same "Not all applicants qualify" line.
- **24 FAQ pairs** reused across 252+ posts.
- **15 section title templates** with only `{topic}` placeholder varying.

**This violates your NO DUPLICATES rule and creates doorway/link-network risk.**

### Posts With Custom Content (Keep These)

These 18 posts have fully custom content in `contentMap` and are standalone useful:

| Slug | Title Tag | Status |
|------|-----------|--------|
| how-restaurant-owners-use-working-capital | Restaurant Working Capital: How Owners Use It for Payroll & Growth \| The Restaurant Owners Guide | KEEP |
| restaurant-cash-flow-problems-and-solutions | Restaurant Cash Flow Problems and Solutions \| The Restaurant Owners Guide | KEEP |
| best-financing-options-for-restaurants | Best Restaurant Financing Options Compared \| The Restaurant Owners Guide | KEEP |
| how-to-fund-restaurant-equipment-repairs | Restaurant Equipment Repair Funding Options \| The Restaurant Owners Guide | KEEP |
| restaurant-loan-vs-cash-advance | Restaurant Loan vs Cash Advance: Compare Your Options \| The Restaurant Owners Guide | KEEP |
| how-restaurants-handle-seasonal-cash-flow | Restaurant Seasonal Cash Flow: How to Manage It \| The Restaurant Owners Guide | KEEP |
| funding-options-for-new-restaurants | Funding Options for New Restaurants \| The Restaurant Owners Guide | KEEP |
| manage-restaurant-payroll-during-slow-seasons | Restaurant Payroll During Slow Seasons: How to Cover It \| The Restaurant Owners Guide | KEEP |
| restaurant-refrigeration-emergency | Restaurant Refrigeration Emergency: What Owners Should Do Immediately \| The Restaurant Owners Guide | KEEP |
| restaurant-payroll-gap | Restaurant Payroll Gap: What to Do When Cash Is Short Before Payday \| The Restaurant Owners Guide | KEEP |
| restaurant-slow-season-survival | Restaurant Slow Season Survival: How to Avoid Running Out of Cash \| The Restaurant Owners Guide | KEEP |
| restaurant-equipment-repair-cost | Restaurant Equipment Repair Costs: What to Expect & How to Fund Them \| The Restaurant Owners Guide | KEEP |
| restaurant-cash-flow-mistakes | 7 Restaurant Cash Flow Mistakes That Drain Your Business \| The Restaurant Owners Guide | KEEP |
| restaurant-late-vendor-payments | Restaurant Vendor Payments: What Happens When You Fall Behind \| The Restaurant Owners Guide | KEEP |
| restaurant-busy-season-preparation | Restaurant Busy Season Prep: Funding Without Cash Flow Stress \| The Restaurant Owners Guide | KEEP |
| restaurant-overdraft-problems | Restaurant Account Overdrafts: Why They Happen & How to Avoid \| The Restaurant Owners Guide | KEEP |
| restaurant-credit-card-cash-flow-delay | Credit Card Deposit Delay: Restaurant Cash Flow Impact \| The Restaurant Owners Guide | KEEP |

---

## 2. DUPLICATE TOPIC GROUPS (Consolidate or Remove)

### Equipment / Repairs (Overlap)

| Slug | Action | Reason |
|------|--------|--------|
| restaurant-refrigeration-emergency | KEEP | Custom, strong, HowTo schema |
| restaurant-equipment-repair-cost | KEEP | Custom, costs focus |
| how-to-fund-restaurant-equipment-repairs | KEEP | Custom, funding focus |
| restaurant-equipment-repairs-funding | REMOVE | Near-duplicate of how-to-fund |
| restaurant-equipment-replacement-funding | MERGE into how-to-fund | Overlaps |
| restaurant-equipment-financing-explained | MERGE or REMOVE | Overlaps with best-financing |
| restaurant-hood-system-repair | REMOVE (generated) | Thin, pool content |
| restaurant-plumbing-emergency | REMOVE (generated) | Thin, pool content |
| restaurant-hvac-restaurant | REMOVE (generated) | Thin, pool content |

### Working Capital (Overlap)

| Slug | Action |
|------|--------|
| how-restaurant-owners-use-working-capital | KEEP |
| when-restaurants-should-use-working-capital | REMOVE | Overlaps with how-restaurant-owners-use |
| working-capital-for-restaurant-owners | REMOVE | Overlaps |

### Seasonal / Slow Season (Overlap)

| Slug | Action |
|------|--------|
| restaurant-slow-season-survival | KEEP |
| how-restaurants-handle-seasonal-cash-flow | KEEP |
| how-to-survive-slow-season-restaurant | REMOVE | Overlaps with slow-season-survival |
| manage-restaurant-payroll-during-slow-seasons | KEEP |
| pay-restaurant-staff-during-slow-seasons | REMOVE | Overlaps with manage-restaurant-payroll |
| restaurant-summer-slump | REMOVE (generated) |
| restaurant-january-slow | REMOVE (generated) |

### Startup / New Restaurant (Overlap)

| Slug | Action |
|------|--------|
| funding-options-for-new-restaurants | KEEP |
| restaurant-startup-funding-guide | REMOVE | Overlaps |
| restaurant-pre-opening-costs | REMOVE (generated) |

### Expansion / Second Location (Overlap)

| Slug | Action |
|------|--------|
| restaurant-expansion-financing-guide | KEEP (if custom) or REMOVE |
| restaurant-financing-second-locations | REMOVE | Overlaps |
| restaurant-second-location-costs | REMOVE (generated) |

### Funding Options / Comparison (Overlap)

| Slug | Action |
|------|--------|
| best-financing-options-for-restaurants | KEEP |
| restaurant-funding-options-compared | REMOVE | Overlaps |
| restaurant-loan-vs-cash-advance | KEEP |

### Catering Cash Flow (Overlap)

| Slug | Action |
|------|--------|
| restaurant-catering-cash-flow | REMOVE (generated) |
| restaurant-catering-cash-flow-gap | REMOVE (generated) | Near-duplicate |

### State Pages (Doorway Risk)

**20 state-specific posts** (restaurant-funding-texas, california, florida, etc.) + restaurant-funding-all-states.

**Risk:** Can look like doorway/city pages if they share pool content. Each uses same generic paragraphs with only state name in titles.

**Recommendation:** Keep 3–5 high-volume states (Texas, California, Florida, New York, Illinois) ONLY if given fully custom 1400+ word content. Remove or noindex the rest until custom content exists.

---

## 3. METADATA STATUS

### Current State

- **All 280 posts** have `metaTitle` (custom or `{title} | The Restaurant Owners Guide`).
- **All** use `post.description` for meta description (from blogPosts.ts).
- **Canonical:** Set via `canonicalPath` = `/blog/{slug}`. Correct.
- **OG/Twitter:** Prerender injects og:title, og:description, og:url, og:type=article. Correct.
- **No homepage metadata inheritance**—each post gets its own meta from getMeta(path).

### Meta Description Quality

- Many descriptions are generic (e.g., "Funding options for bakeries and bakery cafés").
- Descriptions should be 150–155 chars, unique, and match the exact topic/route.
- **Action:** Audit and rewrite meta descriptions for all KEEP posts to be route-specific.

---

## 4. AXIANT LINK PLACEMENT

### Current Placement

| Location | Count | rel | target |
|----------|-------|-----|--------|
| Blog post footer (article__cta-external) | 1 per post | sponsored noopener noreferrer | _blank |
| CTA component | 0 on blog posts | N/A | BlogPostPage does NOT include CTA |

**Blog posts have exactly 1 Axiant link** in the article footer: "Find options" → FIND_MATCH_URL.

**CTA component** (with 2 Axiant links) appears on: HomePage, TopicPage, main guides. NOT on BlogPostPage.

**Compliance:** 1–2 links per blog post ✓. Main CTA near end ✓. rel="sponsored noopener noreferrer" ✓.

### Axiant URL Updated

- **Before:** https://axiantpartners.com/match  
- **After:** https://axiantpartners.com/findmatch (per your spec)

---

## 5. FILES TO EDIT FOR NEW BLOG POSTS

| File | Purpose |
|------|---------|
| `src/data/blogPosts.ts` | Add new post: slug, title, description, publishedDate, metaTitle, faqItems, keywords, howToSteps |
| `src/data/blogContent.tsx` | Add custom content in `contentMap` for the slug. If omitted, post uses generated pool content (avoid for new posts). |
| `public/llms.txt` | Add new post to Blog & Articles section for AI discovery |

### New Post Checklist

1. Add entry to `blogPosts` in blogPosts.ts with unique metaTitle, description, faqItems (3–6).
2. Add custom content in `contentMap` in blogContent.tsx (1400–2000 words).
3. Include: H1 only, H2/H3 sections, Quick Answer near top, 3–6 FAQs, internal links to /restaurant-cash-advance, /restaurant-working-capital, /restaurant-funding, 2–4 related blog links.
4. Add to llms.txt.
5. Use publishedDate for sort order (newest first on blog index).

---

## 6. PRIORITIZED MISSING HIGH-INTENT TOPICS

Add these only when you can write **fully custom 1400–2000 word** content:

### Tier 1 (Highest Intent)

1. **Restaurant payroll due tomorrow** – Urgent payroll gap
2. **Walk-in freezer stopped working** – Refrigeration emergency (you have cooler; add freezer)
3. **Restaurant equipment broke down** – Generic equipment emergency
4. **Can't pay restaurant suppliers** – Invoice/vendor payment crisis
5. **Restaurant slow season what to do** – Seasonal survival (expand existing)
6. **Restaurant funding same day** – Speed-focused
7. **Restaurant funding no credit check** – Bad credit focus (you have bad-credit post; ensure distinct)

### Tier 2 (Strong Intent)

8. **Restaurant inventory funding before busy season** – Pre-rush stocking
9. **Restaurant renovation cost** – Remodel funding
10. **Restaurant opening costs** – Pre-opening
11. **Restaurant payroll funding** – Dedicated payroll (you have payroll-gap; ensure distinct)
12. **Restaurant MCA explained** – Merchant cash advance definition
13. **Restaurant factor rate** – Cost explanation
14. **Restaurant funding declined what to do** – You have this; ensure custom content

### Tier 3 (Supporting)

15. **Restaurant invoice factoring** – Receivables
16. **Restaurant leasehold improvements** – Build-out
17. **Restaurant liquor license cost** – Compliance
18. **Restaurant health inspection failed** – Urgent repairs

---

## 7. RECOMMENDED ACTIONS

### Immediate

1. **Update Axiant URL** – Done. Changed to /findmatch.
2. **Remove or noindex generated-content posts** – Add `noindex: true` to BlogPostMeta for posts that use getGeneratedBlogContent. Prevents indexing of 252+ near-duplicate pages until they have custom content.
3. **Audit meta descriptions** – Ensure each KEEP post has a unique, route-specific description.

### Short-Term

4. **Consolidate duplicates** – Remove overlapping posts from blogPosts.ts. Start with clear duplicates (e.g., pay-restaurant-staff-during-slow-seasons vs manage-restaurant-payroll-during-slow-seasons).
5. **Add Quick Answer** – Add a "Quick Answer" block to custom content posts. Structure: `<p class="quick-answer">...</p>` or similar.
6. **Add FAQ schema** – All custom posts already have faqItems. Ensure generated posts that remain have faqItems in blogPosts.ts.

### Long-Term

7. **Phase out pool-based generation** – Do not add new posts that use getGeneratedBlogContent. All new posts must have custom content in contentMap.
8. **Rewrite or remove** – For each remaining generated post, either write custom content or remove from blog.
9. **State pages** – Either give 3–5 key states full custom content or remove all state pages.

---

## 8. FULL BLOG POST LIST (Slug, Title Tag, Meta Description)

See `BLOG_POST_AUDIT.csv` (generate separately) or run:

```bash
node -e "
const { blogPosts } = require('./src/data/blogPosts.ts');
blogPosts.forEach(p => {
  console.log([p.slug, p.metaTitle || p.title + ' | The Restaurant Owners Guide', p.description].join('\t'));
});
"
```

For a quick reference, the 280 posts are in `src/data/blogPosts.ts`. Each has: slug, title, description, publishedDate, metaTitle, optional keywords, faqItems, howToSteps.

---

## 9. CONFIRMATION: NO DUPLICATE BLOG TOPICS (After Cleanup)

**Before cleanup:** Many duplicate topics exist (see Section 2).

**After recommended consolidation:** Keep ~50–80 posts with custom content or distinct topics. Remove ~200 generated/overlapping posts.

**Ongoing rule:** Before adding any new post, audit existing slugs for overlap. One best version per topic.

---

## 10. OUTBOUND AXIANT LINKS: WHERE AND WHY

| Page Type | Axiant Links | Location | Why |
|-----------|--------------|----------|-----|
| Blog posts | 1 | Article footer "Find options" | Calm CTA after internal guides. User has read problem + options; ready to explore. |
| Homepage | 2 | Hero CTA + CTA section | Primary conversion page. |
| Topic pages | 2 | CTA section (shared component) | After educational content. |
| Main guides | 2 | CTA section | After comparing options. |

**Pattern:** Informational first → internal guides → optional Axiant. No aggressive or repeated CTAs in body. Compliant with safe conversion structure.
