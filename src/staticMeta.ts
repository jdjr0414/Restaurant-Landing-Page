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
    title: 'Restaurant Cash Advance | How It Works & When to Use It',
    description:
      "Restaurant cash advance explained: how it works, 24–48 hour funding, repayment tied to sales. When to use it for payroll, inventory, or equipment. Compare with working capital and loans.",
  },
  '/restaurant-working-capital': {
    title: 'Restaurant Working Capital | Payroll, Inventory & Busy Season',
    description:
      "Restaurant working capital for payroll, inventory, and busy-season stocking. When revenue doesn't line up with bills—what it is, how it works, and what options exist.",
  },
  '/restaurant-funding': {
    title: 'Restaurant Funding Options | Working Capital for Restaurant Owners',
    description:
      'Restaurant funding options for working capital, equipment, payroll gaps, and emergencies. See what restaurant owners qualify for and how fast funding can arrive.',
  },
  '/restaurant-mca-vs-line-of-credit': {
    title: 'Restaurant MCA vs Line of Credit | Which Option Fits Best?',
    description:
      'In-depth comparison of restaurant MCA vs line of credit: speed, qualification, repayment flexibility, costs, and practical scenarios so owners can choose the best fit for urgent and planned needs.',
  },
  '/same-day-restaurant-funding': {
    title: 'Quick Restaurant Funding | Same-Day & Fast Cash in 24–48 Hours',
    description:
      'Need quick restaurant funding? Learn the fastest same-day options, what lenders look at, and how to prepare your application for quick decisions and 24-48 hour funding.',
  },
  '/bad-credit-restaurant-funding': {
    title: 'Bad Credit Restaurant Funding | Options Beyond Traditional Bank Loans',
    description:
      'Bad credit restaurant funding options: what is realistic, how revenue-based approvals work, and steps to improve your chance of qualifying when bank financing is out of reach.',
  },
  '/restaurant-inventory-financing-fast': {
    title: 'Restaurant Inventory Financing | Fast Funding for Stock Purchases',
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
    title: "Free Restaurant Funding Consultation | No Obligation",
    description:
      "Book a free consultation to discuss your restaurant cash flow, payroll gaps, seasonal slumps, or funding options. No obligation—get clarity on what might fit your situation.",
  },
  '/restaurant-cash-flow-problems': {
    title: 'Restaurant Cash Flow Problems | Why Restaurants Run Out of Cash',
    description:
      'In-depth guide to restaurant cash flow problems: why restaurants run out of cash, payroll gaps, supplier payment issues, seasonal swings, and cost spikes. Practical solutions and funding options.',
  },
  '/restaurant-cash-flow-guide': {
    title: 'Restaurant Cash Flow Guide | Why Timing Mismatches Hurt You',
    description:
      "Why restaurant cash flow problems happen: the timing mismatch between revenue and bills. How the cash cycle works, fixed vs variable costs, and when to consider funding.",
  },
  '/restaurant-funding-options': {
    title: 'Restaurant Funding Options | Compare All Your Choices',
    description:
      'Complete comparison of restaurant funding options: cash advance vs working capital vs loans vs equipment financing. Speed, cost, qualification, and when each fits.',
  },
  '/restaurant-working-capital-guide': {
    title: 'Restaurant Working Capital Guide | When You Need It',
    description:
      'Restaurant working capital guide: what it is, when you need it, and what options exist for payroll, inventory, and operations.',
  },
  '/restaurant-loan-alternatives': {
    title: 'Restaurant Loan Alternatives | When Banks Say No',
    description:
      "Restaurant loan alternatives: cash advance, working capital, and other options when a bank loan isn't right or available.",
  },
  '/restaurant-equipment-financing-guide': {
    title: 'Restaurant Equipment Financing | Loans, Leases & Working Capital',
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
  '/restaurant-mca-debt-help': {
    title: "Restaurant MCA Debt Relief | Restructuring, Settlement & Help",
    description:
      "Restaurant MCA debt crushing your cash flow? Professional mediators typically achieve 40–70% balance reductions. Learn what MCA debt relief, restructuring, and settlement actually look like.",
  },
  '/cant-pay-restaurant-mca': {
    title: "Can't Pay Merchant Cash Advance? What Happens & What to Do",
    description:
      "Can't pay your merchant cash advance? Steps to take in the next 72 hours, how lenders use Confessions of Judgment, and when professional help changes the outcome.",
  },
  '/restaurant-mca-default': {
    title: "Merchant Cash Advance Default: Frozen Account, COJ & Recovery",
    description:
      "Defaulted on an MCA or bank account frozen? The exact timeline from missed payment to frozen account, what a COJ means, and the recovery steps that actually work.",
  },
  '/restaurant-mca-payments-too-high': {
    title: "MCA Payments Too High? Lower Your Restaurant Holdback Rate",
    description:
      "MCA daily holdbacks consuming 20–30%+ of your restaurant revenue? How holdback rates work, what makes them unsustainable, and how professional restructuring lowers them.",
  },
  '/restaurant-mca-stacking': {
    title: "MCA Stacking: Multiple Merchant Cash Advances & How to Exit",
    description:
      "Stacked multiple MCAs and now paying 30–50% of daily revenue before operations? How stacking compounds cash drain, how lenders target stacked businesses, and how to get out.",
  },
  '/restaurant-mca-calculator': {
    title: "Restaurant MCA Calculator: Free Holdback Rate & Payment Tool",
    description:
      "Free restaurant MCA calculator. Enter your daily or weekly deductions and card revenue to instantly see your holdback rate, monthly MCA cost, and how much restructuring could save you.",
  },
  '/restaurant-occupancy-cost-calculator': {
    title: "Restaurant Occupancy Cost Ratio Calculator | What % of Sales Is Your Rent?",
    description:
      "Free restaurant occupancy cost calculator. Enter your monthly sales, rent, and occupancy costs to see your occupancy cost ratio, whether it's in the healthy range, and the maximum rent your sales can support.",
  },
  '/restaurant-mca-confession-of-judgment': {
    title: "Confession of Judgment in MCAs: What It Means by State",
    description:
      "How COJ clauses work in MCA contracts, which states enforce them, and what to do immediately if your bank account has been frozen by an MCA lender.",
  },
  '/how-to-get-out-of-merchant-cash-advance': {
    title: "How to Get Out of a Merchant Cash Advance | Every Exit Path",
    description:
      "Every exit path from a merchant cash advance explained: self-negotiation, professional restructuring, consolidation, and legal defense. Which one fits your situation and how long each takes.",
  },
  '/merchant-cash-advance-settlement': {
    title: "Merchant Cash Advance Settlement | What to Expect & How to Negotiate",
    description:
      "MCA settlement explained: what settlement percentages look like (40–70% reductions), lump sum vs. structured settlement, when lenders will negotiate, and red flags to avoid.",
  },
  '/restaurant-mca-debt-relief': {
    title: "Restaurant MCA Debt Relief | Who Qualifies and How It Works",
    description:
      "Restaurant MCA debt relief is not a government program — it's a professional negotiation that reduces what you owe and lowers daily payments to sustainable levels. Who qualifies and what to expect.",
  },
  '/mca-bank-account-frozen': {
    title: "MCA Froze My Bank Account | Emergency Steps in the Next 24 Hours",
    description:
      "MCA bank account frozen by a restraining notice? Open a new account, redirect your processor, and contact a mediator within hours. This guide covers the exact priority order.",
  },
  '/merchant-cash-advance-personal-guarantee': {
    title: "Merchant Cash Advance Personal Guarantee | What Assets Are at Risk",
    description:
      "Does an MCA personal guarantee put your home at risk? What assets are reachable, homestead exemptions by state, and how to get a PG released as part of settlement.",
  },
  '/restaurant-mca-debt-after-closing': {
    title: "MCA Debt After Restaurant Closes | What Survives and What to Do",
    description:
      "Closing your restaurant does not eliminate MCA debt. Personal guarantees, COJ judgments, and UCC liens survive closure. Why negotiating before closing produces far better outcomes.",
  },
  '/merchant-cash-advance-ucc-lien': {
    title: "Merchant Cash Advance UCC Lien | How to Find and Remove Them",
    description:
      "Every MCA files a UCC-1 lien against your business. How to search your state's SOS database, what all-assets liens block, lien priority explained, and how to get UCC-3 terminations.",
  },
  '/merchant-cash-advance-consolidation': {
    title: "MCA Consolidation vs Restructuring | The Math and Red Flags",
    description:
      "MCA consolidation increases your total obligation while lowering daily payments. See the break-even math, red flags in consolidation offers, and when restructuring is the better option.",
  },
  '/restaurant-mca-debt-help-texas': {
    title: "Texas Restaurant MCA Debt Help | Homestead & Wage Protections",
    description:
      "Texas restaurant owners with MCA debt have stronger protections than most states: unlimited homestead exemption, no wage garnishment for commercial debt, and a slower COJ enforcement timeline.",
  },
  '/restaurant-mca-debt-help-california': {
    title: "California Restaurant MCA Debt Help | COJ Ban, SB 1235 & More",
    description:
      "California prohibits confessed judgments (CCP § 1132), requires APR disclosure under SB 1235, and offers unique grounds to challenge MCA enforcement. What California restaurant owners need to know.",
  },
  '/restaurant-mca-debt-help-florida': {
    title: "Florida Restaurant MCA Debt Help | Homestead, UEFJA & Wage Rights",
    description:
      "Florida's unlimited homestead exemption, 30-day UEFJA contest window, and head-of-household wage exemption give Florida restaurant owners strong MCA debt protections.",
  },
  '/merchant-cash-advance-attorney': {
    title: "Merchant Cash Advance Attorney | When You Need One vs. a Mediator",
    description:
      "5 specific situations that require an MCA attorney vs. when professional mediation is faster and cheaper. COJ vacatur, usury arguments, UEFJA defense, and what MCA attorneys charge.",
  },
  '/merchant-cash-advance-factor-rate': {
    title: "MCA Factor Rate Explained | True Cost, APR & Early Payoff Math",
    description:
      "A 1.35 factor rate is 70%+ APR on a 6-month advance. How to calculate your true MCA cost, why paying early saves no money, the renewal trap, and what buyout amount really means.",
  },
  '/faq': {
    title: "FAQ: Restaurant Cash Flow, Funding & MCA Debt",
    description:
      "Answers to common questions about restaurant cash flow, merchant cash advances, MCA debt restructuring, working capital, and what to do when payments become unmanageable.",
  },
  '/behind-on-restaurant-vendor-payments': {
    title: "Behind on Restaurant Vendor Payments? How to Catch Up Without Losing Suppliers",
    description:
      "Behind on restaurant vendor payments? How to prioritize which suppliers to pay first, how to approach vendors before they cut you off, and funding options to get current fast.",
  },
  '/business-cash-advance': {
    title: "Business Cash Advance | How It Works, Costs & When to Use It",
    description:
      "Business cash advance explained: how revenue-based repayment works, factor rates, qualification requirements, and when it makes more sense than a traditional small business loan.",
  },
  '/small-business-funding': {
    title: "Small Business Funding | Fast Options When Banks Say No",
    description:
      "Small business funding beyond bank loans: merchant cash advances, working capital, revenue-based financing, and equipment funding. How each works and who qualifies.",
  },
  '/restaurant-manager-quit-now-what': {
    title: "Your Restaurant Manager Quit Without Notice | What to Do Now",
    description:
      "Restaurant manager quit suddenly? Immediate steps to protect operations, how to manage the financial hit of turnover, and when short-term funding helps while you rebuild the team.",
  },
  '/restaurant-profitable-on-paper-no-cash': {
    title: "Restaurant Shows a Profit on Paper But No Cash in the Bank | Why",
    description:
      "Why your restaurant P&L shows profit but your bank account is empty. The accounting and timing gaps that cause it — and what to do when paper profit doesn't pay real bills.",
  },
  '/merchant-cash-advance-for-restaurants': {
    title: "Merchant Cash Advance for Restaurants | How It Works & What to Watch",
    description:
      "How merchant cash advances work for restaurants: repayment tied to card sales, factor rates, holdback rates, and what to compare before taking one on. Alternatives explained.",
  },
  '/restaurant-payroll-funding-options': {
    title: "Restaurant Payroll Funding Options | When Payday Is Short",
    description:
      "Restaurant payroll funding options when cash runs short before payday: how to bridge gaps fast, what lenders look for, and which options get money in your account in 24–48 hours.",
  },
  '/war-impact-restaurant-financing': {
    title: "Global Economic Uncertainty and Restaurant Financing | What Changed",
    description:
      "How global supply chain disruptions and economic uncertainty changed restaurant financing: tighter bank credit, higher food costs, and what fast funding options still exist for operators.",
  },
  '/restaurant-first-year-cash-flow-surprises': {
    title: "First-Year Restaurant Cash Flow Surprises | What New Owners Don't Expect",
    description:
      "The cash flow surprises that hit new restaurant owners hardest in year one: delayed card deposits, startup overruns, seasonality, and why the first January can break a restaurant's finances.",
  },
  '/maxed-out-credit-cards-restaurant': {
    title: "Running a Restaurant on Maxed-Out Credit Cards | What to Do Instead",
    description:
      "Maxed-out credit cards running your restaurant? Why this cycle accelerates cash problems, what alternative funding exists, and how to restructure before interest compounds the situation.",
  },
  '/restaurant-labor-schedule-money-drains': {
    title: "Restaurant Labor Scheduling Mistakes That Drain Cash | How to Fix Them",
    description:
      "How poor labor scheduling quietly drains restaurant cash: overtime creep, overstaffing slow periods, split-shift costs. Scheduling fixes that restore margin without cutting service quality.",
  },
  '/restaurant-partner-money-problems': {
    title: "Restaurant Partner Money Disputes | How to Handle Financial Conflicts",
    description:
      "Restaurant partnership money problems: how ownership disputes, unequal capital contributions, and financial disagreements threaten operations — and steps to resolve them before they close the business.",
  },
  '/restaurant-menu-engineering-cash-flow': {
    title: "Menu Engineering for Restaurant Cash Flow | Pricing Your Way to Profit",
    description:
      "How menu engineering improves restaurant cash flow: identifying high-margin items, repositioning slow movers, and using pricing strategy to free up operating cash every week.",
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
    '/restaurant-mca-debt-help',
    '/cant-pay-restaurant-mca',
    '/restaurant-mca-default',
    '/restaurant-mca-payments-too-high',
    '/restaurant-mca-stacking',
    '/restaurant-mca-calculator',
    '/restaurant-occupancy-cost-calculator',
    '/restaurant-mca-confession-of-judgment',
    '/faq',
    '/how-to-get-out-of-merchant-cash-advance',
    '/merchant-cash-advance-settlement',
    '/restaurant-mca-debt-relief',
    '/mca-bank-account-frozen',
    '/merchant-cash-advance-personal-guarantee',
    '/restaurant-mca-debt-after-closing',
    '/merchant-cash-advance-ucc-lien',
    '/merchant-cash-advance-consolidation',
    '/restaurant-mca-debt-help-texas',
    '/restaurant-mca-debt-help-california',
    '/restaurant-mca-debt-help-florida',
    '/merchant-cash-advance-attorney',
    '/merchant-cash-advance-factor-rate',
    '/behind-on-restaurant-vendor-payments',
    '/business-cash-advance',
    '/small-business-funding',
    '/restaurant-manager-quit-now-what',
    '/restaurant-profitable-on-paper-no-cash',
    '/merchant-cash-advance-for-restaurants',
    '/restaurant-payroll-funding-options',
    '/war-impact-restaurant-financing',
    '/restaurant-first-year-cash-flow-surprises',
    '/maxed-out-credit-cards-restaurant',
    '/restaurant-labor-schedule-money-drains',
    '/restaurant-partner-money-problems',
    '/restaurant-menu-engineering-cash-flow',
    ...pillarPaths,
    ...topicPaths,
    ...blogPaths,
  ];
}

const META_DESC_MAX = 155;
const TITLE_MAX = 65;
const DESC_MAX = 160;
const BRAND_SUFFIX = ` | ${SITE_NAME}`;

/**
 * Keep titles within ~65 chars so Google doesn't truncate them in the SERP. Only titles that
 * actually exceed the limit are touched: first drop the " | Brand" suffix, and if the core is
 * still too long, truncate at a word boundary.
 */
function formatTitle(raw: string): string {
  if (raw.length <= TITLE_MAX) return raw;
  const bare = raw.endsWith(BRAND_SUFFIX) ? raw.slice(0, -BRAND_SUFFIX.length) : raw;
  if (bare.length <= TITLE_MAX) return bare;
  return bare.slice(0, TITLE_MAX - 3).replace(/\s+\S*$/, '').trim();
}

/** Keep meta descriptions within ~160 chars (truncate at a word boundary with an ellipsis). */
function clampDesc(raw: string): string {
  if (raw.length <= DESC_MAX) return raw;
  return raw.slice(0, DESC_MAX - 3).trim().replace(/\s+\S*$/, '') + '…';
}

function normalize(m: PageMeta): PageMeta {
  return { ...m, title: formatTitle(m.title), description: clampDesc(m.description) };
}

export function getMeta(path: string): PageMeta | null {
  const canonicalPath = path || '/';
  const staticEntry = STATIC_META[path];
  if (staticEntry) {
    const image = PAGE_OG_IMAGES[path];
    return normalize({ ...staticEntry, canonicalPath, ...(image && { image }) });
  }
  const topic = topicPagesConfig.find((p) => p.path === path);
  if (topic) {
    const title = topic.title.includes(SITE_NAME) ? topic.title : `${topic.title} | ${SITE_NAME}`;
    const image = PAGE_OG_IMAGES[path];
    return normalize({ title, description: topic.description, canonicalPath: topic.path, ...(image && { image }) });
  }
  const blogPageMatch = path.match(/^\/blog\/page\/(\d+)$/);
  if (blogPageMatch) {
    const pageNum = parseInt(blogPageMatch[1], 10);
    const totalPages = getBlogTotalPages();
    if (pageNum < 1 || pageNum > totalPages) return null;
    return normalize({
      title: `Blog Page ${pageNum} | Restaurant Cash Flow & Funding Guides`,
      description:
        `Page ${pageNum} of ${totalPages}: articles on restaurant cash flow problems, payroll gaps, seasonal slumps, equipment costs, and funding options for restaurant owners.`,
      canonicalPath: path,
    });
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
    return normalize({
      title,
      description,
      canonicalPath: path,
      datePublished: post.publishedDate,
      dateModified,
      ...(image && { image }),
      ...((post.noindex === true || post.hasCustomContent !== true) && { noindex: true }),
    });
  }
  return null;
}
