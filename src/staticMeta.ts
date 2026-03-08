/**
 * Static meta and path list for SSG prerender. Used by entry-server and prerender script.
 */
import { getBlogPost, blogPosts } from './data/blogPosts';
import { topicPagesConfig } from './data/topicPages';

export interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
}

const STATIC_META: Record<string, Omit<PageMeta, 'canonicalPath'>> = {
  '/': {
    title: "Restaurant Cash Flow Problems? Get Answers & See Your Options | Restaurant Owner's Guide",
    description:
      "Running out of cash? Restaurant cash flow problems are the #1 reason restaurants fail. Learn why it happens, what restaurant funding and working capital options exist, and what to do next. Practical guide for restaurant owners.",
  },
  '/restaurant-cash-advance': {
    title: 'Restaurant Cash Flow Problems? Get Clear on Your Options',
    description:
      "Struggling with restaurant cash flow, payroll gaps, seasonal slumps, or equipment costs? Understand what's going on and what options exist. Practical guide for restaurant owners.",
  },
  '/restaurant-working-capital': {
    title: 'When You Need Restaurant Working Capital | Problem & Options Guide',
    description:
      "Struggling with payroll, inventory, or seasonal gaps? Understand what restaurant working capital is and what options exist when revenue doesn't line up with bills.",
  },
  '/restaurant-funding': {
    title: "Restaurant Funding Options When You're Struggling | Guide",
    description:
      'Facing a cash flow crunch or need to cover payroll, inventory, or equipment? Understand what restaurant funding options exist and when they might help.',
  },
  '/business-cash-advance': {
    title: 'What Is a Business Cash Advance? | When It Might Help',
    description:
      'Need money before revenue comes in? Understand what a business cash advance is, how it works, and when it might help with payroll, inventory, or short-term gaps.',
  },
  '/small-business-funding': {
    title: "Small Business Funding When You're Short on Cash | Guide",
    description:
      "Struggling to cover payroll, inventory, or bills? Understand small business funding options and when they might help with cash flow gaps.",
  },
  '/blog': {
    title: "Restaurant Cash Flow & Funding Blog | Tips & Guides",
    description:
      'Articles on restaurant cash flow problems, payroll gaps, seasonal slumps, equipment costs, and what options exist. Practical guides for restaurant owners.',
  },
  '/sitemap': {
    title: "Sitemap | All Guides & Topics | Restaurant Owner's Guide",
    description:
      'Browse all guides and topics: restaurant cash flow, funding, payroll, equipment, seasonal cash flow, and more. Find the guide you need.',
  },
};

export function getAllPaths(): string[] {
  const topicPaths = topicPagesConfig.map((p) => p.path);
  const blogPaths = blogPosts.map((p) => `/blog/${p.slug}`);
  return [
    '/',
    '/restaurant-cash-advance',
    '/restaurant-working-capital',
    '/restaurant-funding',
    '/business-cash-advance',
    '/small-business-funding',
    '/blog',
    '/sitemap',
    ...topicPaths,
    ...blogPaths,
  ];
}

const META_DESC_MAX = 155;

export function getMeta(path: string): PageMeta | null {
  const canonicalPath = path || '/';
  const staticEntry = STATIC_META[path];
  if (staticEntry) {
    return { ...staticEntry, canonicalPath };
  }
  const topic = topicPagesConfig.find((p) => p.path === path);
  if (topic) {
    return { title: topic.title, description: topic.description, canonicalPath: topic.path };
  }
  const blogMatch = path.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const post = getBlogPost(blogMatch[1]);
    if (!post) return null;
    const title = post.metaTitle ?? `${post.title} | Restaurant Owner's Guide`;
    const description =
      post.description.length > META_DESC_MAX
        ? post.description.slice(0, META_DESC_MAX).trim().replace(/\s+\S*$/, '') + '…'
        : post.description;
    return { title, description, canonicalPath: path };
  }
  return null;
}
