/**
 * Related posts for blog internal linking. Returns 4 indexable posts
 * based on topic similarity (slug keyword overlap), prioritizing
 * posts with fewer inbound links.
 */
import { blogPosts } from './blogPosts';
import { BlogPostMeta } from './blogPosts';
import { blogInboundCounts } from './blogInboundCounts';

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i);
  return h >>> 0;
}

/** Extract topic keywords from slug for similarity matching. */
function getTopicKeywords(slug: string): Set<string> {
  const words = slug
    .toLowerCase()
    .replace(/\brestaurant\b/g, '')
    .split(/[-_]/)
    .filter((w) => w.length > 2 && !/^(the|for|and|with|when|how|what|why|can|your)$/.test(w));
  return new Set(words);
}

/** Score overlap between two slugs' topic keywords. */
function topicOverlap(slugA: string, slugB: string): number {
  const a = getTopicKeywords(slugA);
  const b = getTopicKeywords(slugB);
  let overlap = 0;
  for (const w of a) {
    if (b.has(w)) overlap++;
  }
  return overlap;
}

const INDEXABLE_POSTS = blogPosts.filter((p) => p.hasCustomContent === true);

/**
 * Get 4 related indexable blog posts for the given slug.
 * Uses topic similarity (keyword overlap), then prioritizes posts
 * with fewer inbound links, with deterministic tie-breaking.
 */
export function getRelatedPosts(currentSlug: string, count: number = 4): BlogPostMeta[] {
  const others = INDEXABLE_POSTS.filter((p) => p.slug !== currentSlug);
  if (others.length === 0) return [];

  const scored = others.map((post) => ({
    post,
    topicScore: topicOverlap(currentSlug, post.slug),
    inboundCount: blogInboundCounts[post.slug] ?? 0,
    hash: hashStr(currentSlug + post.slug),
  }));

  scored.sort((a, b) => {
    if (b.topicScore !== a.topicScore) return b.topicScore - a.topicScore;
    if (a.inboundCount !== b.inboundCount) return a.inboundCount - b.inboundCount;
    return a.hash - b.hash;
  });

  const targetCount = Math.min(count, 4, scored.length);
  return scored.slice(0, targetCount).map((s) => s.post);
}
