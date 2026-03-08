# Adding Blog Posts with Unique SEO Metadata

## 1. Route metadata

**File:** `src/staticMeta.ts`

- `STATIC_META` – hardcoded title/description for `/`, `/restaurant-cash-advance`, `/blog`, etc.
- `getMeta(path)` – returns `{ title, description, canonicalPath }` for any path.
- For blog posts: metadata comes from `src/data/blogPosts.ts` via `getBlogPost(slug)`.
- Canonical and `og:url` are built from `canonicalPath` in `scripts/prerender.mjs`.

## 2. Blog post content

**File:** `src/data/blogContent.tsx`

- `getBlogContent(slug, meta)` – returns the article body (JSX).
- Add custom content in the `contentMap` object keyed by slug.
- If a slug is missing, `getGeneratedBlogContent(meta)` is used.

## 3. Adding a new blog post

### Step 1: Add to `src/data/blogPosts.ts`

```ts
{
  slug: 'your-new-post-slug',
  title: 'Your H1 Text',  // Used for H1 and breadcrumb
  description: 'Meta description (≤155 chars).',
  publishedDate: '2025-01-15',
  metaTitle: "Optional SEO title | Restaurant Owner's Guide",  // Omit to use title + suffix
  faqItems: [  // Optional: for FAQ schema
    { q: 'Question 1?', a: 'Answer 1.' },
    { q: 'Question 2?', a: 'Answer 2.' },
  ],
},
```

### Step 2: Add content in `src/data/blogContent.tsx`

```tsx
'your-new-post-slug': (
  <>
    <p>Intro paragraph...</p>
    <h2>Section 1</h2>
    <p>Content with <Link to="/restaurant-cash-advance">internal links</Link>.</p>
    <h2>Frequently Asked Questions</h2>
    <h3>Question?</h3>
    <p>Answer.</p>
    <CtaBlock />
  </>
),
```

### Step 3: Build

```bash
npm run build
```

The prerender script will:

- Add the new path to `getAllPaths()` (from `blogPosts`)
- Use `getMeta('/blog/your-new-post-slug')` for title, description, canonical
- Set `og:type` to `article` for blog paths
- Write `dist/blog/your-new-post-slug/index.html`

## 4. Canonical and OG tags

- **Canonical:** `https://www.restaurantownersguide.com/blog/your-slug`
- **og:url:** Same as canonical
- **og:type:** `article` for all `/blog/*` paths

These are set in `scripts/prerender.mjs` via `injectMeta()`.

## 5. Article word count (1200–1600 words)

All articles—blog posts and topic pages—should be **1200–1600 words**. This provides enough depth for readers and search engines and avoids thin content. Generated blog content uses 7 sections with 4 paragraphs each. Custom content and topic pages should have 4–5+ sections with 2–3 paragraphs each.

## 6. Checklist for new posts

- [ ] Add entry to `blogPosts` in `src/data/blogPosts.ts`
- [ ] Add content in `contentMap` in `src/data/blogContent.tsx` (or rely on generated content)
- [ ] Include internal links to `/restaurant-cash-advance`, `/restaurant-working-capital`, `/restaurant-funding`
- [ ] Add `faqItems` if the post has FAQs (for FAQ schema)
- [ ] Run `npm run build` and check `dist/blog/your-slug/index.html`
- [ ] Ensure content is 1200–1600 words
