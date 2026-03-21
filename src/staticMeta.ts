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
  '/restaurant-emergency-financing-options': {
    title: 'Restaurant Emergency Financing: Same-Day & 24-Hour Funding Options',
    description:
      'Restaurant emergency? Vendor bill due, payroll coming, equipment broke. Here are the fastest financing options available to restaurant owners — some fund in 24–48 hours.',
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
  '/restaurant-funding-by-state': {
    title: 'Restaurant Funding by State | California, Texas, Florida & All 50 States',
    description:
      'Restaurant funding availability by state. California, Texas, Florida, New York, and all 50 states. How state affects qualification and what to expect in your location.',
  },
  '/busy-but-broke-restaurant': {
    title: "Busy Restaurant, No Money in the Bank | Why It Happens & What to Do",
    description:
      "Dining room full but still broke? Understand why a busy restaurant can still struggle with cash, the hidden money drains behind it, and what to do next.",
  },
  '/restaurant-first-year-cash-flow-surprises': {
    title: "First-Year Restaurant Cash Flow Surprises | 7 Costs Owners Don't See Coming",
    description:
      "New restaurant and already short on cash? Learn the most common first-year restaurant cash flow surprises—and how to prepare, respond, and protect your business.",
  },
  '/cant-make-restaurant-payroll': {
    title: "Can't Make Restaurant Payroll? What to Do Before It Snowballs",
    description:
      "Facing a restaurant payroll gap? Walk through practical steps, options, and funding paths when payday is here and the cash isn't.",
  },
  '/behind-on-restaurant-vendor-payments': {
    title: "Vendors Calling, Bills Piling Up? What to Do When You're Behind on Restaurant Payments",
    description:
      "Behind on restaurant vendor payments? How to talk to suppliers, prioritize who gets paid, and use short-term funding to get back on track without losing key relationships.",
  },
  '/restaurant-equipment-broke-no-money': {
    title: "Restaurant Equipment Broke and No Cash? The True Cost of Waiting",
    description:
      "Putting off that broken cooler or oven? Why delaying restaurant equipment repairs drains more cash—and what to do when you have no money set aside.",
  },
  '/restaurant-labor-schedule-money-drains': {
    title: "5 Money Drains Hiding in Your Restaurant Schedule",
    description:
      "Restaurant labor costs killing margins? How overstaffing, understaffing, and schedule mistakes drain cash—and how to fix them.",
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
  '/maxed-out-credit-cards-restaurant': {
    title: "When Your Restaurant's Credit Cards Hit the Limit",
    description:
      "Maxed out credit cards for your restaurant? How to stop the cycle, prioritize payments, and when a cash advance or working capital is a better move than more card debt.",
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
  '/restaurant-partner-money-problems': {
    title: "When Restaurant Partners Stop Agreeing About Money",
    description:
      "Restaurant business partner money disputes? How to talk about draws, reinvestment, and funding so the business—and the partnership—survives.",
  },
  '/restaurant-menu-engineering-cash-flow': {
    title: "How Menu Design Can Make or Break Your Restaurant Cash Flow",
    description:
      "Restaurant menu engineering and cash flow: why popular items can lose money and how to fix your mix so sales turn into real cash.",
  },
  '/restaurant-manager-quit-now-what': {
    title: "What Happens When a Key Restaurant Staff Member Walks Out",
    description:
      "Manager or chef quit? How to stabilize service, protect revenue, and when short-term funding can help you through the transition.",
  },
  '/restaurant-bar-profitable-restaurant-not': {
    title: "Why Your Bar Sales Aren't Saving Your Restaurant",
    description:
      "Bar doing well but restaurant still struggling? How bar vs kitchen costs and allocation affect cash flow—and what to fix first.",
  },
  '/restaurant-profitable-on-paper-no-cash': {
    title: "When Your Accountant Says You Made Money but You Feel Broke",
    description:
      "Restaurant profitable on paper but no cash? Why P&amp;L and bank balance don't match—and how to fix the gap with better cash management or working capital.",
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
    '/business-cash-advance',
    '/small-business-funding',
    '/blog',
    ...blogPaginationPaths,
    '/sitemap',
    '/busy-but-broke-restaurant',
    '/restaurant-first-year-cash-flow-surprises',
    '/cant-make-restaurant-payroll',
    '/behind-on-restaurant-vendor-payments',
    '/restaurant-equipment-broke-no-money',
    '/restaurant-labor-schedule-money-drains',
    '/restaurant-slow-season-cash-flow',
    '/restaurant-lease-too-expensive',
    '/maxed-out-credit-cards-restaurant',
    '/restaurant-delivery-app-fees-killing-profits',
    '/restaurant-record-sales-no-profit',
    '/restaurant-discounting-hurting-profits',
    '/restaurant-bookkeeping-bad-news',
    '/restaurant-partner-money-problems',
    '/restaurant-menu-engineering-cash-flow',
    '/restaurant-manager-quit-now-what',
    '/restaurant-bar-profitable-restaurant-not',
    '/restaurant-profitable-on-paper-no-cash',
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
