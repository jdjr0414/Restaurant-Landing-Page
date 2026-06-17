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
    title: "Restaurant Cash Flow Guide | Funding Options for Restaurant Owners",
    description:
      "Cash flow problems are the #1 reason restaurants close. Get a plain-English guide to funding options and what to do when cash runs out.",
  },
  '/restaurant-cash-advance': {
    title: 'Restaurant Cash Advance | How It Works, Speed & When to Use | The Restaurant Owners Guide',
    description:
      "Restaurant cash advance explained: how it works, 24–48 hour funding, repayment tied to sales. When to use it for payroll, inventory, or equipment. Compare with working capital and loans.",
  },
  '/restaurant-working-capital': {
    title: 'Restaurant Working Capital | Payroll, Inventory & Operations | The Restaurant Owners Guide',
    description:
      "Restaurant working capital for payroll, inventory, and operations. When revenue doesn't line up with bills—what it is, how it works, and what options exist.",
  },
  '/restaurant-funding': {
    title: 'Restaurant Funding Options | Working Capital for Restaurant Owners',
    description:
      'Restaurant funding options for working capital, equipment, payroll gaps, and emergencies. See what restaurant owners qualify for and how fast funding can arrive.',
  },
  '/restaurant-mca-vs-line-of-credit': {
    title: 'Restaurant MCA vs Line of Credit | Which Funding Option Fits Your Cash Flow Timing?',
    description:
      'In-depth comparison of restaurant MCA vs line of credit: speed, qualification, repayment flexibility, costs, and practical scenarios so owners can choose the best fit for urgent and planned needs.',
  },
  '/same-day-restaurant-funding': {
    title: 'Same-Day Restaurant Funding | Fast Options for Payroll, Vendors, and Emergencies',
    description:
      'Need same-day restaurant funding? Learn the fastest options, what lenders look at, and how to prepare your application for quick decisions and 24-48 hour funding outcomes.',
  },
  '/bad-credit-restaurant-funding': {
    title: 'Bad Credit Restaurant Funding | Options Beyond Traditional Bank Loans',
    description:
      'Bad credit restaurant funding options: what is realistic, how revenue-based approvals work, and steps to improve your chance of qualifying when bank financing is out of reach.',
  },
  '/restaurant-inventory-financing-fast': {
    title: 'Restaurant Inventory Financing Fast | Cover Food, Beverage, and Supply Purchases',
    description:
      'Restaurant inventory financing for urgent stock purchases before weekends, events, and seasonal demand. Compare fast funding options and build safer repayment plans tied to sales.',
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
  '/restaurant-cash-flow-problems': {
    title: 'Restaurant Cash Flow Problems | Why Restaurants Run Out of Cash | The Restaurant Owners Guide',
    description:
      'In-depth guide to restaurant cash flow problems: why restaurants run out of cash, payroll gaps, supplier payment issues, seasonal swings, and cost spikes. Practical solutions and funding options.',
  },
  '/restaurant-cash-flow-guide': {
    title: 'Restaurant Cash Flow Guide | Why Timing Mismatches Cause Problems | The Restaurant Owners Guide',
    description:
      "Why restaurant cash flow problems happen: the timing mismatch between revenue and bills. How the cash cycle works, fixed vs variable costs, and when to consider funding.",
  },
  '/restaurant-funding-options': {
    title: 'Restaurant Funding Options | Complete Comparison of All Choices | The Restaurant Owners Guide',
    description:
      'Complete comparison of restaurant funding options: cash advance vs working capital vs loans vs equipment financing. Speed, cost, qualification, and when each fits.',
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
    title: 'Restaurant Equipment Financing Guide | Loans, Leases & Working Capital | The Restaurant Owners Guide',
    description:
      'In-depth guide to restaurant equipment financing: loans vs leases, costs, requirements. When to use equipment financing vs flexible working capital for ovens, coolers, and kitchen gear.',
  },
  '/restaurant-funding-by-business-type': {
    title: 'Restaurant Funding by Business Type | Food Trucks, Pizzerias, Bars & More',
    description:
      'Restaurant funding options by business type: food trucks, pizzerias, bars and breweries, bakeries, QSR, full-service, franchises, and pop-ups. Find funding that fits your concept.',
  },
  '/busy-but-broke-restaurant': {
    title: "Busy Restaurant, No Money in the Bank | Why It Happens & What to Do",
    description:
      "Dining room full but still broke? Understand why a busy restaurant can still struggle with cash, the hidden money drains behind it, and what to do next.",
  },
  '/cant-make-restaurant-payroll': {
    title: "Can't Make Restaurant Payroll? What to Do Before It Snowballs",
    description:
      "Facing a restaurant payroll gap? Walk through practical steps, options, and funding paths when payday is here and the cash isn't.",
  },
  '/restaurant-equipment-broke-no-money': {
    title: "Restaurant Equipment Broke and No Cash? The True Cost of Waiting",
    description:
      "Putting off that broken cooler or oven? Why delaying restaurant equipment repairs drains more cash—and what to do when you have no money set aside.",
  },
  '/restaurant-slow-season-cash-flow': {
    title: "When Your Restaurant's Slow Season Lasts Longer Than You Planned",
    description:
      "Restaurant slow season cash flow crunch? How to plan, cut smart, and when to use working capital so one bad quarter does not become a crisis.",
  },
  '/restaurant-lease-too-expensive': {
    title: "Rent and Lease Costs Squeezing Your Restaurant? What You Can Do",
    description:
      "Restaurant lease or rent eating your profits? How to understand CAM, renegotiate, and when funding can bridge the gap until you renegotiate or relocate.",
  },
  '/restaurant-delivery-app-fees-killing-profits': {
    title: "How Delivery Apps Quietly Eat Your Restaurant Profits",
    description:
      "Delivery app fees killing your restaurant profits? How to measure the real cost, rebalance channels, and protect your cash flow.",
  },
  '/restaurant-record-sales-no-profit': {
    title: "Why Your Restaurant's Best Month Still Feels Like a Loss",
    description:
      "Record sales but no profit in the bank? Why your best month can still leave you short—timing, debt, and what to do next.",
  },
  '/restaurant-discounting-hurting-profits': {
    title: "The Hidden Cash Flow Danger in Restaurant Discounts and Coupons",
    description:
      "Restaurant discounting hurting profits? How deep discounts starve cash flow and what to do instead so promotions don't leave you broke.",
  },
  '/restaurant-bookkeeping-bad-news': {
    title: "What to Do When Your Bookkeeper Hands You Bad News",
    description:
      "Restaurant bookkeeping problems or sudden losses? How to triage the numbers, fix what's fixable, and when to consider short-term funding.",
  },
  '/restaurant-bar-profitable-restaurant-not': {
    title: "Why Your Bar Sales Aren't Saving Your Restaurant",
    description:
      "Bar doing well but restaurant still struggling? How bar vs kitchen costs and allocation affect cash flow—and what to fix first.",
  },
  '/restaurant-tax-bill-cant-pay': {
    title: "Restaurant Tax Bill You Can't Pay? What to Do Next",
    description:
      "Restaurant tax bill you can't pay? Options for sales tax, payroll tax, and income tax—and when short-term funding or payment plans make sense.",
  },
  '/opening-second-restaurant-cash-flow': {
    title: "The Cash Flow Risk of Opening a Second Restaurant Too Fast",
    description:
      "Opening a second restaurant? How expansion stretches cash, starves the first location, and how to fund growth without overextending.",
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
    '/restaurant-mca-vs-line-of-credit',
    '/same-day-restaurant-funding',
    '/bad-credit-restaurant-funding',
    '/restaurant-inventory-financing-fast',
    '/blog',
    ...blogPaginationPaths,
    '/sitemap',
    '/busy-but-broke-restaurant',
    '/cant-make-restaurant-payroll',
    '/restaurant-equipment-broke-no-money',
    '/restaurant-slow-season-cash-flow',
    '/restaurant-lease-too-expensive',
    '/restaurant-delivery-app-fees-killing-profits',
    '/restaurant-record-sales-no-profit',
    '/restaurant-discounting-hurting-profits',
    '/restaurant-bookkeeping-bad-news',
    '/restaurant-bar-profitable-restaurant-not',
    '/restaurant-tax-bill-cant-pay',
    '/opening-second-restaurant-cash-flow',
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
