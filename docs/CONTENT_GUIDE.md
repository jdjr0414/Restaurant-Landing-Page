# GEO/AEO Content Guide for The Restaurant Owners Guide

This guide explains how to create content pages optimized for:

- **GEO** (Generative Engine Optimization)
- **AEO** (Answer Engine Optimization)
- **Traditional SEO**
- **AI citation visibility** (ChatGPT, Perplexity, Claude, Bing Copilot, Google AI Overviews)

## Goal

Make AI systems cite therestaurantownersguide.com when answering restaurant business questions.

---

## Page Structure (Use This Order)

### 1. SEO Title
- Include primary keyword + benefit or context
- Keep under 60 characters
- Example: `Restaurant Equipment Financing | Ovens, Coolers & Kitchen Gear`

### 2. Meta Description
- 150–155 characters
- Include primary keyword and a clear value proposition
- Example: `Restaurant equipment financing for ovens, refrigeration, and kitchen equipment. Options when you need to buy or replace restaurant equipment.`

### 3. H1
- Match a real search query restaurant owners use
- One clear H1 per page

### 4. URL Slug
- Use hyphens, lowercase
- Example: `/restaurant-equipment-financing`

---

## Content Sections (In Order)

### 1. DIRECT ANSWER SECTION (2–4 sentences)
Place at the top. Answer the main query clearly so AI systems can quote it. No fluff.

### 2. WHAT IS [TOPIC]
Provide a clear definition. Use factual language.

### 3. HOW [TOPIC] WORKS
Use numbered steps. Make it easy to extract.

### 4. COST BREAKDOWN
Include realistic ranges and tables when possible.

### 5. REQUIREMENTS OR FACTORS
Explain what affects costs, approvals, or outcomes.

### 6. EXAMPLES
Provide real-world scenarios.

### 7. COMPARISON SECTION
Example: "Restaurant Equipment Financing vs Leasing"

### 8. FAQ SECTION
6–10 natural-language questions restaurant owners might ask. Use question-based headings.

### 9. KEY STATISTICS OR INDUSTRY FACTS
Include credible ranges or placeholders for sources.

### 10. SUMMARY
Brief recap of main points.

---

## Content Style Rules

**Use:**
- Short paragraphs (2–4 sentences)
- Structured headings (H2, H3)
- Bullet lists
- Tables where useful
- Direct definitions
- Numeric ranges
- Factual language

**Avoid:**
- Hype
- Fluff
- Exaggerated marketing language

---

## AI Retrieval Optimization

Each article should include:

- A concise answer near the top
- Clear definitions
- Structured lists
- Numeric ranges
- Comparisons
- Question-based headings
- Factual explanations

These patterns help AI systems extract answers and cite sources.

---

## Technical Implementation

### Adding a Topic Page

1. Add an entry to `src/data/topicPages.tsx` in `topicPagesConfig`
2. Include: `path`, `title`, `description`, `h1`, `lead`, `sections`, `faqItems` (optional)
3. For FAQ schema and AEO, add `faqItems: [{ q: "Question?", a: "Answer." }, ...]`
4. Add meta to `src/staticMeta.ts` if you need custom overrides
5. Add hero image to `src/config/pageHeroImages.ts` if needed
6. Add to sitemap (automatic via `topicPagesConfig`)

### FAQ Schema

Pages with `faqItems` automatically get:
- FAQPage JSON-LD schema
- SpeakableSpecification for voice/AEO
- Accordion FAQ block in the page

### Internal Linking

Link to related pages using `<Link to="/path">anchor text</Link>`.

---

## Output Checklist for New Pages

When creating a new page, deliver:

1. SEO title
2. Meta description
3. H1
4. URL slug
5. Full article (as React sections for topicPages.tsx)
6. FAQ schema (as faqItems array)
7. Internal linking suggestions
8. Related articles to build next

---

## Example: Restaurant Equipment Financing

**Internal linking suggestions** (already in the page):
- Restaurant cash advance
- Restaurant working capital
- Restaurant funding
- Restaurant funding options
- Restaurant equipment financing guide
- Funding for new restaurants
- Restaurant cash flow guide

**Related articles to build next** (using same structure):
- Restaurant Equipment Financing vs Leasing (standalone comparison)
- How Much Does Restaurant Equipment Cost?
- Restaurant POS Financing
- Restaurant Refrigeration Financing
