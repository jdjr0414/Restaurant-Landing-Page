# llms.txt Update Process

The `public/llms.txt` file helps AI crawlers (ChatGPT, Perplexity, etc.) discover and understand site content for GEO (Generative Engine Optimization).

## When to Update

Update `llms.txt` when you:

1. **Add a new blog post** – Add the post to the "Blog & Articles" section with title, URL, and a one-line description.
2. **Add a new topic or pillar page** – Add to the appropriate section (Topic Guides or Pillar Guides).
3. **Change the site structure** – Update Main Guides, Sitemap link, or section headers if routes change.

## Format

- Use markdown-style links: `[Title](https://therestaurantownersguide.com/path)`
- Include a brief description after the link when helpful: `[Title](url): One-line description.`
- Keep the structure: Main Guides → Topic Guides → Pillar Guides → Blog & Articles → Sitemap

## Example: Adding a New Blog Post

When adding a post to `src/data/blogPosts.ts`, add a line to `public/llms.txt` in the Blog & Articles section:

```
- [Post Title](https://therestaurantownersguide.com/blog/post-slug): Brief description of the post.
```

## Verification

After updating, ensure:

- All URLs are valid and match your routes
- The sitemap link at the bottom points to `/sitemap`
- No broken or duplicate entries
