import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FIND_MATCH_URL } from '../config';

export interface TopicPageConfig {
  path: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: { h2: string; content: ReactNode }[];
}

function CtaParagraph() {
  return (
    <p>
      Not all applicants qualify; terms vary by provider. <a href={FIND_MATCH_URL} target="_blank" rel="sponsored noopener noreferrer">Find options that may match your situation</a>.
    </p>
  );
}

export const topicPagesConfig: TopicPageConfig[] = [
  {
    path: '/restaurant-payroll-funding',
    title: 'Restaurant Payroll Funding | Cover Payroll When Cash Is Short',
    description: "Can't make payroll? Restaurant payroll funding options when revenue is slow but payday isn't. Fast options for restaurant owners.",
    h1: 'Restaurant Payroll Funding When You Need It',
    lead: "Payroll is one of the biggest fixed costs for restaurants. When revenue dips—slow week, seasonal slump, or unexpected drop—many owners need restaurant payroll funding to cover wages on time. This guide explains what options exist and when they can help.",
    sections: [
      {
        h2: 'Why Restaurant Payroll Is So Hard to Cover',
        content: (
          <>
            <p>Labor often runs 25–35% of revenue. Unlike inventory, you can&apos;t delay it without hurting your team and your reputation. When sales are uneven, restaurant payroll funding or working capital can bridge the gap until revenue catches up. <Link to="/restaurant-cash-advance">Restaurant cash advance</Link> and other <Link to="/restaurant-funding">restaurant funding options</Link> are commonly used for exactly this.</p>
            <p>Restaurant revenue is rarely even from week to week. Weekend rushes, holiday lulls, and seasonal swings create unpredictable cash flow. Meanwhile, payroll hits on a fixed schedule—every two weeks or twice a month. That timing mismatch is one of the main causes of restaurant payroll stress. Credit card deposits take 2–3 days to hit your account, so even a strong weekend may not fund Monday&apos;s payroll.</p>
            <p>Missing payroll damages staff trust, can violate labor laws, and makes it harder to retain good employees. Once word gets out that you&apos;ve delayed wages, recruiting becomes harder and turnover spikes. That&apos;s why many owners treat payroll as non-negotiable and seek funding when a gap appears.</p>
          </>
        ),
      },
      {
        h2: 'When Restaurant Payroll Gaps Happen',
        content: (
          <>
            <p>Gaps often appear after a slow week, during a seasonal dip, or when an unexpected expense—a repair, a tax payment, a vendor bill—drains your account before payday. The biweekly payroll calendar doesn&apos;t align with when your busiest nights occur. A big weekend right after payday may leave you short when the next payday arrives.</p>
            <p>New restaurants and those in seasonal markets face this more often. So do operators who&apos;ve recently expanded or taken on new costs. Understanding your revenue pattern and forecasting ahead can help you see gaps before they hit—and give you time to explore funding options before you&apos;re in crisis.</p>
          </>
        ),
      },
      {
        h2: 'How Restaurant Payroll Funding Works',
        content: (
          <>
            <p><Link to="/restaurant-cash-advance">Restaurant cash advance</Link> and <Link to="/restaurant-working-capital">restaurant working capital</Link> products are typically flexible-use. Payroll is one of the most common uses. Many providers offer same-day or next-day decisions and funds in 24–48 hours—critical when payday is days away.</p>
            <p>Repayment is often tied to your daily card sales. When revenue is low, your payment is lower; when business picks up, payments scale up. That flexibility can make it easier to manage than a fixed loan payment when your revenue fluctuates. Not all applicants qualify; terms vary by provider. But when you need to make payroll and don&apos;t have the cash, exploring your options is a practical step.</p>
          </>
        ),
      },
      {
        h2: 'What to Look For in Payroll Funding',
        content: (
          <>
            <p>Speed matters when payday is approaching. Look for options that offer fast decisions and funding within a few days. Compare repayment structure—sales-based repayment can ease the burden when business is slow. Some providers focus specifically on restaurants and understand the seasonal nature of your revenue.</p>
            <p>Having a relationship or application on file before you need funds can speed things up when a gap appears. Don&apos;t wait until the day before payday to explore options; funding that takes 24–48 hours won&apos;t help if you start too late. Plan ahead when you can.</p>
          </>
        ),
      },
      {
        h2: 'Planning Ahead for Payroll',
        content: (
          <>
            <p>Building a cash reserve during busy periods helps. So does improving your cash flow forecast so you can see gaps before they hit. Review your payroll calendar against your typical revenue pattern. If you see a risky week coming—payday right after a slow period—plan in advance.</p>
            <p>Some owners set up a small <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or <Link to="/restaurant-working-capital">working capital</Link> line before the busy season so they have it available when needed. The goal is to never be caught off guard when payday arrives. When reserves aren&apos;t enough, knowing your restaurant funding options before you need them puts you in a better position to act quickly.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-equipment-financing',
    title: 'Restaurant Equipment Financing | Ovens, Coolers & Kitchen Gear',
    description: 'Restaurant equipment financing for ovens, refrigeration, and kitchen equipment. Options when you need to buy or replace restaurant equipment.',
    h1: 'Restaurant Equipment Financing',
    lead: "Restaurant equipment—ovens, walk-ins, fryers, POS systems—is expensive. When you need to buy, replace, or repair it, restaurant equipment financing can spread the cost or get you funded fast. Here's what you need to know.",
    sections: [
      {
        h2: 'Why Restaurants Need Equipment Financing',
        content: (
          <>
            <p>Equipment breaks, becomes obsolete, or limits growth. Restaurant equipment financing and <Link to="/restaurant-cash-advance">restaurant funding</Link> options let you repair or replace without draining cash. Some products are tied to the equipment; others are flexible-use working capital you can put toward any need.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-seasonal-cash-flow',
    title: 'Restaurant Seasonal Cash Flow | Survive Slow Seasons',
    description: 'Restaurant seasonal cash flow problems and solutions. How to bridge slow months and when funding can help.',
    h1: 'Restaurant Seasonal Cash Flow: Problems and Options',
    lead: "Seasonal cash flow is a reality for most restaurants. When traffic drops but rent and payroll don't, you need a plan. This guide covers why seasonal restaurant cash flow is tough and what options exist—including working capital and funding—to get through slow periods.",
    sections: [
      {
        h2: 'Why Seasonal Cash Flow Hurts Restaurants',
        content: (
          <>
            <p>Revenue can swing 40–60% between peak and off-peak. Fixed costs don&apos;t. Rent, utilities, insurance, and minimum payroll stay the same whether you serve 50 or 50 customers. When traffic drops—after the holidays, during a slow summer, or in a quiet January—the gap between lower revenue and unchanged expenses is where many restaurant cash flow problems begin.</p>
            <p>Restaurants in tourist areas, seasonal markets, or college towns feel this especially hard. But even in steady markets, weather, events, and local competition can create noticeable dips. Surviving a slow season requires planning, cost control, and sometimes a bridge to the next busy period.</p>
          </>
        ),
      },
      {
        h2: 'Preparing Before the Slow Season',
        content: (
          <>
            <p>Don&apos;t wait until traffic drops. Identify your slow periods from last year&apos;s data—January, post-holiday summer, or quiet weekdays. Start setting aside cash during your busiest months. Even a small reserve can reduce stress when revenue dips. If you know a slow period is coming and your account is thin, explore <Link to="/restaurant-funding">restaurant funding</Link> options before you need them.</p>
            <p>Build reserves during busy periods. Trim non-essential costs. Renegotiate with suppliers if possible. And know your options: <Link to="/restaurant-working-capital">restaurant working capital</Link> and <Link to="/restaurant-cash-advance">restaurant cash advance</Link> products can help bridge the gap when you need cash before the next busy period. Stocking up before traffic returns often requires cash—explore <Link to="/restaurant-inventory-funding">restaurant inventory funding</Link> for more on bridging slow periods.</p>
          </>
        ),
      },
      {
        h2: 'Using Restaurant Funding During Slow Seasons',
        content: (
          <>
            <p>Many lenders focus on your revenue history over several months, not just the current slow period. If you have consistent sales over time, you may qualify for <Link to="/restaurant-funding">restaurant funding</Link> even during a dip. Repayment tied to sales means your payment flexes when revenue is low—which can make it easier to manage than a fixed loan payment.</p>
            <p>Some providers specialize in restaurants and understand that January or August might be slow even for healthy businesses. They look at your annual or quarterly revenue pattern rather than a single slow month. That can make it possible to access <Link to="/restaurant-working-capital">working capital</Link> when you need it most—to cover rent, payroll, and utilities until traffic returns.</p>
          </>
        ),
      },
      {
        h2: 'Cutting Costs Without Cutting Quality',
        content: (
          <>
            <p>Reduce waste, optimize labor schedules, and trim non-essential spending. But don&apos;t cut so deep that you can&apos;t serve customers well when traffic returns. The goal is to survive the slow period and be ready for the next rush. Consider limited-time promotions or specials to draw in customers during slow weeks—happy hour, prix fixe menus, or weekday deals.</p>
            <p>Track which costs are truly fixed versus adjustable. Labor can often be scaled with demand—fewer servers on slow nights, cross-training to reduce total headcount. Menu engineering can highlight high-margin items. And when cuts aren&apos;t enough, <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or funding can bridge the gap until the next busy period.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-emergency-funding',
    title: 'Restaurant Emergency Funding | When You Need Money Fast',
    description: "Restaurant emergency funding for equipment breakdowns, payroll gaps, and urgent expenses. Fast options when you can't wait.",
    h1: "Restaurant Emergency Funding When You Can't Wait",
    lead: "When the walk-in fails, payroll is due, or an opportunity requires cash now, restaurant emergency funding can get you through. This guide explains what fast restaurant funding options exist and when they make sense.",
    sections: [
      {
        h2: 'When Restaurant Emergency Funding Makes Sense',
        content: (
          <>
            <p>Equipment breakdowns, missed vendor payments, or a sudden chance to stock up often need a quick response. <Link to="/restaurant-funding">Restaurant funding</Link> options like cash advance or working capital can offer same-day decisions and funds in 24–48 hours. <Link to="/restaurant-cash-advance">Compare restaurant cash advance and other options</Link> to see what fits.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-cash-flow-solutions',
    title: 'Restaurant Cash Flow Solutions | Fix Cash Flow Problems',
    description: 'Restaurant cash flow solutions: practical steps and when funding can help. For owners facing payroll gaps and seasonal slumps.',
    h1: 'Restaurant Cash Flow Solutions That Actually Help',
    lead: 'Restaurant cash flow problems have two kinds of solutions: operational (forecasting, inventory, costs) and financial (working capital or funding to bridge gaps). This guide covers both so you can choose what fits your situation.',
    sections: [
      {
        h2: 'Operational Restaurant Cash Flow Solutions',
        content: (
          <>
            <p>Better forecasting, inventory control, and vendor terms can reduce the need for external cash. When that&apos;s not enough, <Link to="/restaurant-working-capital">restaurant working capital</Link> or a <Link to="/restaurant-cash-advance">restaurant cash advance</Link> can provide the bridge. Many owners use both: improve operations and have a funding option when needed.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-loan-alternatives',
    title: 'Restaurant Loan Alternatives | Beyond Traditional Loans',
    description: "Restaurant loan alternatives: cash advance, working capital, and other options when a bank loan isn't right or available.",
    h1: 'Restaurant Loan Alternatives When Banks Say No',
    lead: "Traditional restaurant loans aren't the only option. Restaurant loan alternatives—including restaurant cash advance and working capital—often focus on revenue rather than credit and can provide faster access to funds. Here's how they compare.",
    sections: [
      {
        h2: 'Common Restaurant Loan Alternatives',
        content: (
          <>
            <p><Link to="/restaurant-cash-advance">Restaurant cash advance</Link>, working capital products, and lines of credit are the main alternatives. Each has different speed, cost, and repayment. <Link to="/restaurant-funding">Restaurant funding options compared</Link> can help you see what might fit when a traditional loan isn&apos;t available or fast enough.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/funding-for-new-restaurants',
    title: 'Funding for New Restaurants | Startup Funding Options',
    description: "Funding for new restaurants and startups. Options when you're opening or growing a new restaurant and need capital.",
    h1: 'Funding for New Restaurants and Startups',
    lead: "New restaurants often struggle to get traditional loans. Funding for new restaurants can include equipment financing, working capital once you have sales, and other options. This guide explains what's typically available and what to expect.",
    sections: [
      {
        h2: 'What New Restaurants Can Qualify For',
        content: (
          <>
            <p>Once you have revenue, <Link to="/restaurant-cash-advance">restaurant cash advance</Link> and <Link to="/restaurant-working-capital">working capital</Link> may be options. Equipment financing can help with gear. Requirements vary; <Link to="/restaurant-funding">restaurant funding options</Link> and eligibility depend on the provider.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-inventory-funding',
    title: 'Restaurant Inventory Funding | Stock Up Before Busy Seasons',
    description: 'Restaurant inventory funding for food, beverage, and supplies. Options when you need to stock up before holidays or events.',
    h1: 'Restaurant Inventory Funding When You Need to Stock Up',
    lead: 'Stocking up before a busy season or large event requires cash upfront. Restaurant inventory funding and working capital can help you buy what you need without draining your account. This guide covers when and how.',
    sections: [
      {
        h2: 'Why Restaurants Need Inventory Funding',
        content: (
          <>
            <p>Holidays, events, and peak seasons often require large inventory buys. <Link to="/restaurant-cash-advance">Restaurant cash advance</Link> and <Link to="/restaurant-working-capital">working capital</Link> are commonly used for inventory. Use is typically flexible—you buy what you need and repay as sales come in.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/why-restaurants-run-out-of-cash',
    title: 'Why Restaurants Run Out of Cash | Causes and Options',
    description: 'Why do restaurants run out of cash? Timing, seasonality, and fixed costs. What to do when it happens.',
    h1: 'Why Restaurants Run Out of Cash (Even When Sales Are Good)',
    lead: "Running out of cash doesn't always mean your restaurant is failing. Often it's a timing problem: bills are due before revenue arrives. This guide explains why restaurants run out of cash and what options exist when it happens.",
    sections: [
      {
        h2: 'The Main Reasons Restaurants Run Out of Cash',
        content: (
          <>
            <p>Timing mismatch (revenue vs. bills), seasonal dips, equipment emergencies, and thin margins all contribute. <Link to="/restaurant-cash-advance">Restaurant funding</Link> and <Link to="/restaurant-working-capital">working capital</Link> can bridge gaps. Understanding the cause helps you choose the right solution.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-cash-advance-vs-loan',
    title: 'Restaurant Cash Advance vs Loan | Compare Your Options',
    description: 'Restaurant cash advance vs loan: speed, qualification, repayment. Which fits your situation?',
    h1: "Restaurant Cash Advance vs Loan: What's the Difference?",
    lead: 'Restaurant cash advance and traditional loans both provide capital but work differently. Speed, qualification, and repayment structure vary. This guide helps you compare so you can choose what fits your needs.',
    sections: [
      {
        h2: 'Key Differences: Restaurant Cash Advance vs Loan',
        content: (
          <>
            <p>A restaurant cash advance provides a lump sum upfront; you repay it as a percentage of your daily card sales or revenue. That structure means your payment flexes with sales—when business is slow, you pay less. Traditional loans typically have fixed monthly payments over a set term. Both can provide capital, but they work differently. <Link to="/restaurant-cash-advance">Restaurant cash advance explained</Link> and <Link to="/restaurant-funding">restaurant funding options</Link> can help you decide.</p>
            <p>Cash advance: often faster approval and funding (often 24–48 hours), repayment tied to sales, qualification based on revenue history. Loan: fixed payments, often lower rate for those who qualify, longer application process, typically requires stronger credit and collateral.</p>
          </>
        ),
      },
      {
        h2: 'When a Restaurant Cash Advance Makes Sense',
        content: (
          <>
            <p>When you need money quickly—payroll due in days, equipment down, seasonal gap—a cash advance can provide faster access than a bank loan. When your revenue is uneven and you prefer repayment that flexes with sales, a cash advance may be easier to manage than a fixed loan payment. When your credit isn&apos;t strong enough for a traditional loan but your restaurant has consistent sales, many providers focus on revenue rather than credit.</p>
            <p>Restaurant cash advances are commonly used for payroll, inventory, equipment repairs, seasonal bridges, and short-term growth needs. They&apos;re not ideal for very large, long-term projects where a bank loan might offer better terms—if you qualify.</p>
          </>
        ),
      },
      {
        h2: 'When a Traditional Loan Makes Sense',
        content: (
          <>
            <p>When you need a large amount for a long-term project—a second location, major remodel, or large equipment purchase—a traditional loan may offer lower rates and longer terms. When you have strong credit and time to wait for approval, a bank loan can be the right fit. When you prefer fixed monthly payments and a clear payoff date, a loan provides that structure.</p>
            <p>Banks typically want several years of financials, strong credit, and sometimes collateral. The approval process can take weeks. If you can wait and you qualify, a loan may cost less over time. If you need funds now or don&apos;t meet bank criteria, a restaurant cash advance or working capital product may be more accessible.</p>
          </>
        ),
      },
      {
        h2: 'Comparing Speed, Cost, and Qualification',
        content: (
          <>
            <p>Speed: Cash advance often wins—same-day or next-day decisions, funds in 24–48 hours. Loans can take weeks. Cost: Loans often have lower rates for qualified borrowers. Cash advance uses factor rates and fees; total cost depends on your repayment speed. Qualification: Cash advance focuses on revenue and sales history; loans focus on credit and collateral.</p>
            <p>Consider your timeline, how you prefer to repay, and what you qualify for. There&apos;s no single &quot;best&quot; option—only the one that fits your situation. For more detail, see <Link to="/restaurant-cash-advance">restaurant cash advance</Link> and <Link to="/restaurant-working-capital">restaurant working capital</Link> guides.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/working-capital-for-restaurants',
    title: 'Working Capital for Restaurants | Day-to-Day Funding',
    description: 'Working capital for restaurants: what it is, when you need it, and what options exist for payroll, inventory, and operations.',
    h1: 'Working Capital for Restaurants',
    lead: 'Working capital for restaurants is the money you use to run daily operations—payroll, inventory, supplies, repairs. When you need more than you have on hand, working capital funding can help. This guide explains what it is and what options exist.',
    sections: [
      {
        h2: 'When Restaurants Need Working Capital',
        content: (
          <>
            <p>Seasonal gaps, payroll crunches, inventory builds, and equipment costs are common triggers. <Link to="/restaurant-working-capital">Restaurant working capital guide</Link> and <Link to="/restaurant-cash-advance">restaurant cash advance options</Link> can help you see what might fit.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-financing-options',
    title: 'Restaurant Financing Options | Compare All Your Choices',
    description: 'Restaurant financing options compared: loans, cash advance, working capital, equipment financing. Find what fits.',
    h1: 'Restaurant Financing Options Compared',
    lead: 'Restaurant financing options include traditional loans, restaurant cash advance, working capital products, and equipment financing. Each has different speed, cost, and use. This guide helps you compare so you can choose.',
    sections: [
      {
        h2: 'Types of Restaurant Financing',
        content: (
          <>
            <p><Link to="/restaurant-cash-advance">Restaurant cash advance</Link>, <Link to="/restaurant-working-capital">working capital</Link>, term loans, and equipment financing each suit different needs. <Link to="/restaurant-funding">Restaurant funding options in detail</Link>.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-startup-funding',
    title: 'Restaurant Startup Funding | Options for New Restaurants',
    description: "Restaurant startup funding for new owners. What options exist when you're opening or just opened.",
    h1: 'Restaurant Startup Funding',
    lead: "New restaurants often need capital for build-out, equipment, and early operations. Restaurant startup funding options vary by stage and revenue. This guide covers what's typically available for new restaurant owners.",
    sections: [
      {
        h2: 'Funding Options for Restaurant Startups',
        content: (
          <>
            <p>Once you have sales, <Link to="/restaurant-cash-advance">restaurant cash advance</Link> and <Link to="/funding-for-new-restaurants">funding for new restaurants</Link> may be options. Equipment and build-out financing exist too. <Link to="/restaurant-funding">Compare restaurant funding options</Link>.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-expansion-funding',
    title: 'Restaurant Expansion Funding | Second Location & Growth',
    description: 'Restaurant expansion funding for second locations, renovations, and growth. Options when you\'re ready to grow.',
    h1: 'Restaurant Expansion Funding',
    lead: 'Opening a second location, renovating, or scaling up requires capital. Restaurant expansion funding can come from loans, working capital, or other products. This guide explains what options exist and when each might fit.',
    sections: [
      {
        h2: 'How to Fund Restaurant Expansion',
        content: (
          <>
            <p><Link to="/restaurant-working-capital">Working capital</Link> and <Link to="/restaurant-cash-advance">restaurant cash advance</Link> can fund short-term expansion needs. Larger projects may need traditional loans. <Link to="/restaurant-funding">Restaurant funding options</Link> compared.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/how-much-can-you-qualify-for',
    title: 'How Much Can You Qualify For? | Restaurant & Business Funding Amounts',
    description: 'How funding amounts are calculated: monthly sales, typical ranges, and what varies by provider and state. For restaurants and food trucks.',
    h1: 'How Much Can You Qualify For?',
    lead: 'Many restaurant and business cash advance products base the amount you can access on your average monthly sales or card processing volume. This guide explains how that typically works and what ranges to expect—without promising a specific number, since amounts vary by lender, product, and state.',
    sections: [
      {
        h2: 'How Lenders Typically Calculate Amounts',
        content: (
          <>
            <p>Lenders often look at your last several months of revenue or card sales, average that to a monthly figure, and offer a percentage or multiple of that amount. So if your average monthly processing is high and consistent, the amount you may qualify for can be higher. Exact formulas and caps vary by provider. Some products offer amounts from a few thousand dollars into the six figures; others have lower maximums. <Link to="/restaurant-cash-advance">Restaurant cash advance</Link> and <Link to="/restaurant-working-capital">working capital</Link> products work similarly for restaurants and <Link to="/food-truck-funding">food trucks</Link>.</p>
            <p>Requirements (e.g. minimum monthly revenue, time in business) also vary. Not all applicants qualify; funding is not available in all states. Checking with a provider is the way to see what you may qualify for.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/food-truck-funding',
    title: 'Food Truck Funding | Working Capital & Cash Advance for Food Trucks',
    description: 'Food truck funding and working capital for mobile restaurants. Payroll, inventory, equipment, and seasonal cash flow. Options for food truck owners.',
    h1: 'Food Truck Funding',
    lead: 'Food truck owners face the same cash flow challenges as brick-and-mortar restaurants—payroll, inventory, equipment, and seasonal dips—but with the added cost of maintaining a truck and often variable locations. Food truck funding and working capital products can help cover gaps when revenue is uneven.',
    sections: [
      {
        h2: 'Why Food Trucks Need Funding',
        content: (
          <>
            <p>Food trucks need to pay staff, stock inventory, maintain and repair the truck and kitchen equipment, and cover permits and fuel. When events or weather slow sales, or when you need to invest in a new location or upgrade equipment, <Link to="/restaurant-cash-advance">restaurant and food truck cash advance</Link> or <Link to="/restaurant-working-capital">working capital</Link> can provide fast access to funds. Many lenders treat food trucks like other restaurant businesses and base qualification on revenue and card sales.</p>
            <h3>How much can food trucks qualify for?</h3>
            <p>Amounts are typically based on your average monthly sales or processing volume, similar to other restaurants. Ranges vary by provider and state; checking with a provider is the way to see what you may qualify for.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/faq',
    title: 'Restaurant Cash Flow & Funding FAQ | Common Questions',
    description: 'FAQ: restaurant cash flow problems, working capital, funding options, payroll, and equipment. Answers for restaurant owners.',
    h1: 'Frequently Asked Questions: Restaurant Cash Flow & Funding',
    lead: 'Common questions restaurant owners ask about cash flow, working capital, restaurant funding, and what to do when money is tight. Quick answers and links to deeper guides.',
    sections: [
      {
        h2: 'Restaurant Cash Flow',
        content: (
          <>
            <p>Why do restaurants have cash flow problems? Usually a timing mismatch: revenue comes in unevenly while rent, payroll, and vendors are due on a schedule. <Link to="/why-restaurants-run-out-of-cash">Why restaurants run out of cash</Link>. <Link to="/restaurant-cash-flow-solutions">Restaurant cash flow solutions</Link>.</p>
          </>
        ),
      },
      {
        h2: 'Restaurant Funding & Working Capital',
        content: (
          <>
            <p>What is restaurant working capital? Money for day-to-day operations. <Link to="/restaurant-working-capital">Working capital when you need it</Link>. What options exist? <Link to="/restaurant-funding">Restaurant funding options</Link> and <Link to="/restaurant-cash-advance">restaurant cash advance</Link> explained.</p>
          </>
        ),
      },
      {
        h2: 'Payroll, Equipment, Seasonal',
        content: (
          <>
            <p><Link to="/restaurant-payroll-funding">Restaurant payroll funding</Link>. <Link to="/restaurant-equipment-financing">Restaurant equipment financing</Link>. <Link to="/restaurant-seasonal-cash-flow">Restaurant seasonal cash flow</Link>. <Link to="/restaurant-emergency-funding">Restaurant emergency funding</Link>.</p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
];

export function getTopicPage(path: string): TopicPageConfig | undefined {
  return topicPagesConfig.find((p) => p.path === path);
}

export function getAllTopicPaths(): string[] {
  return topicPagesConfig.map((p) => p.path);
}
