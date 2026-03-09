/**
 * Static meta and path list for SSG prerender. Used by entry-server and prerender script.
 */
import { getBlogPost, blogPosts, blogPostsSortedByDate } from './data/blogPosts';
import { topicPagesConfig } from './data/topicPages';
import { pillarPagesConfig } from './data/pillarPages';
import { SITE_NAME, PAGE_OG_IMAGES } from './config';

const POSTS_PER_PAGE = 12;

function getBlogTotalPages(): number {
  return Math.ceil(blogPostsSortedByDate.length / POSTS_PER_PAGE);
}

export interface PageMeta {
  title: string;
  description: string;
  canonicalPath: string;
  /** For blog posts: published date (YYYY-MM-DD) for article meta tags */
  datePublished?: string;
  /** For blog posts: modified date (YYYY-MM-DD) for article:modified_time. Defaults to datePublished. */
  dateModified?: string;
  /** Optional custom OG image URL (1200x630) for this page */
  image?: string;
  /** When true, add robots noindex,nofollow (e.g. for generated-content blog posts) */
  noindex?: boolean;
}

const STATIC_META: Record<string, Omit<PageMeta, 'canonicalPath'>> = {
  '/': {
    title: "Restaurant Cash Flow Problems? Get Answers & See Your Options | The Restaurant Owners Guide",
    description:
      "Running out of cash? Restaurant cash flow problems are the #1 reason restaurants fail. Learn why it happens, what restaurant funding and working capital options exist, and what to do next. Practical guide for restaurant owners.",
  },
  '/restaurant-cash-advance': {
    title: 'Restaurant Cash Flow Guide: Problems, Options & Funding | The Restaurant Owners Guide',
    description:
      "Struggling with restaurant cash flow, payroll gaps, seasonal slumps, or equipment costs? Understand what's going on and what options exist. Practical guide for restaurant owners.",
  },
  '/restaurant-working-capital': {
    title: 'Restaurant Working Capital: When You Need It | The Restaurant Owners Guide',
    description:
      "Struggling with payroll, inventory, or seasonal gaps? Understand what restaurant working capital is and what options exist when revenue doesn't line up with bills.",
  },
  '/restaurant-funding': {
    title: "Restaurant Funding Options: Compare When You're Struggling | The Restaurant Owners Guide",
    description:
      'Facing a cash flow crunch or need to cover payroll, inventory, or equipment? Understand what restaurant funding options exist and when they might help.',
  },
  '/business-cash-advance': {
    title: 'Business Cash Advance: What It Is, How It Works | The Restaurant Owners Guide',
    description:
      'Need money before revenue comes in? Understand what a business cash advance is, how it works, and when it might help with payroll, inventory, or short-term gaps.',
  },
  '/small-business-funding': {
    title: "Small Business Funding When You're Short on Cash | The Restaurant Owners Guide",
    description:
      "Struggling to cover payroll, inventory, or bills? Understand small business funding options and when they might help with cash flow gaps.",
  },
  '/blog': {
    title: "Restaurant Cash Flow & Funding Guides | The Restaurant Owners Guide",
    description:
      'Articles on restaurant cash flow problems, payroll gaps, seasonal slumps, equipment costs, and what options exist. Practical guides for restaurant owners.',
  },
  '/sitemap': {
    title: "Sitemap | All Restaurant Guides & Topics | The Restaurant Owners Guide",
    description:
      'Browse all guides and topics: restaurant cash flow, funding, payroll, equipment, seasonal cash flow, and more. Find the guide you need.',
  },
  '/consultation': {
    title: "Free Consultation | Restaurant Cash Flow & Funding | The Restaurant Owners Guide",
    description:
      "Book a free consultation to discuss your restaurant cash flow, payroll gaps, seasonal slumps, or funding options. No obligation—get clarity on what might fit your situation.",
  },
  '/restaurant-cash-flow-guide': {
    title: 'Restaurant Cash Flow Guide | Problems, Timing & Solutions | The Restaurant Owners Guide',
    description:
      "Understand restaurant cash flow: why timing mismatches cause problems, how the cash cycle works, and what options exist when revenue and bills don't align.",
  },
  '/restaurant-funding-options': {
    title: 'Restaurant Funding Options | Compare Your Choices | The Restaurant Owners Guide',
    description:
      'Compare restaurant funding options: cash advance, working capital, loans, and equipment financing. Understand what fits when you need capital.',
  },
  '/restaurant-working-capital-guide': {
    title: 'Restaurant Working Capital Guide | When You Need It | The Restaurant Owners Guide',
    description:
      'Restaurant working capital guide: what it is, when you need it, and what options exist for payroll, inventory, and operations.',
  },
  '/restaurant-loan-alternatives': {
    title: 'Restaurant Loan Alternatives | Beyond Traditional Loans | The Restaurant Owners Guide',
    description:
      "Restaurant loan alternatives: cash advance, working capital, and other options when a bank loan isn't right or available.",
  },
  '/restaurant-equipment-financing-guide': {
    title: 'Restaurant Equipment Financing Guide | Ovens, Coolers & Kitchen Gear | The Restaurant Owners Guide',
    description:
      'Restaurant equipment financing guide: options for ovens, refrigeration, and kitchen equipment when you need to buy or replace.',
  },
};

export function getAllPaths(): string[] {
  const topicPaths = topicPagesConfig.map((p) => p.path);
  const pillarPaths = pillarPagesConfig.map((p) => p.path);
  const blogPaths = blogPosts.map((p) => `/blog/${p.slug}`);
  const blogTotalPages = getBlogTotalPages();
  const blogPaginationPaths = Array.from({ length: blogTotalPages - 1 }, (_, i) => `/blog/page/${i + 2}`);
  return [
    '/',
    '/consultation',
    '/restaurant-cash-advance',
    '/restaurant-working-capital',
    '/restaurant-funding',
    '/business-cash-advance',
    '/small-business-funding',
    '/blog',
    ...blogPaginationPaths,
    '/sitemap',
    ...pillarPaths,
    ...topicPaths,
    ...blogPaths,
  ];
}

const META_DESC_MAX = 155;

export function getMeta(path: string): PageMeta | null {
  const canonicalPath = path || '/';
  const staticEntry = STATIC_META[path];
  if (staticEntry) {
    const image = PAGE_OG_IMAGES[path];
    return { ...staticEntry, canonicalPath, ...(image && { image }) };
  }
  const topic = topicPagesConfig.find((p) => p.path === path);
  if (topic) {
    const title = topic.title.includes(SITE_NAME) ? topic.title : `${topic.title} | ${SITE_NAME}`;
    const image = PAGE_OG_IMAGES[path];
    return { title, description: topic.description, canonicalPath: topic.path, ...(image && { image }) };
  }
  const blogPageMatch = path.match(/^\/blog\/page\/(\d+)$/);
  if (blogPageMatch) {
    const pageNum = parseInt(blogPageMatch[1], 10);
    const totalPages = getBlogTotalPages();
    if (pageNum < 1 || pageNum > totalPages) return null;
    return {
      title: `Blog Page ${pageNum} | Restaurant Cash Flow & Funding Guides`,
      description:
        'Articles on restaurant cash flow problems, payroll gaps, seasonal slumps, equipment costs, and what options exist. Practical guides for restaurant owners.',
      canonicalPath: path,
    };
  }
  const blogMatch = path.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const post = getBlogPost(blogMatch[1]);
    if (!post) return null;
    const title = post.metaTitle ?? `${post.title} | ${SITE_NAME}`;
    const description =
      post.description.length > META_DESC_MAX
        ? post.description.slice(0, META_DESC_MAX).trim().replace(/\s+\S*$/, '') + '…'
        : post.description;
    const image = PAGE_OG_IMAGES[path];
    const dateModified = post.dateModified ?? post.publishedDate;
    return {
      title,
      description,
      canonicalPath: path,
      datePublished: post.publishedDate,
      dateModified,
      ...(image && { image }),
      ...(post.hasCustomContent !== true && { noindex: true }),
    };
  }
  return null;
}
