import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FIND_MATCH_URL, AXIANT_LINK_REL } from '../config';

export interface PillarPageConfig {
  path: string;
  title: string;
  description: string;
  h1: string;
  sections: { h2: string; content: ReactNode }[];
}

function CtaParagraph() {
  return (
    <p>
      Not all applicants qualify; terms vary by provider.{' '}
      <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>
        Explore Restaurant Funding Options
      </a>
      .
    </p>
  );
}

export const pillarPagesConfig: PillarPageConfig[] = [
  {
    path: '/restaurant-cash-flow-guide',
    title: 'Restaurant Cash Flow Guide | Problems, Timing & Solutions',
    description:
      'Understand restaurant cash flow: why timing mismatches cause problems, how the cash cycle works, and what options exist when revenue and bills don\'t align. Practical guide for restaurant owners.',
    h1: 'Restaurant Cash Flow Guide: Understanding the Problem',
    sections: [
      {
        h2: 'Understanding Restaurant Cash Flow',
        content: (
          <>
            <p>
              Restaurant cash flow is the movement of money in and out of your business. Money comes in from customers—credit card sales, cash, delivery orders—and goes out to pay staff, suppliers, rent, utilities, and equipment. When more comes in than goes out, you have positive cash flow. When bills exceed what you have on hand, you have a cash flow problem.
            </p>
            <p>
              Many restaurant owners assume cash flow problems mean the business is failing. Often, that&apos;s not true. A restaurant can have strong sales and still run out of cash because of timing: revenue arrives unevenly while expenses are due on a fixed schedule. Understanding this mismatch is the first step to managing it. This guide explains how the restaurant cash cycle works, where the timing gaps appear, and what options exist when you need to bridge them. For related reading, see <Link to="/blog/restaurant-payroll-gap">what to do when payroll is due but cash is tight</Link> and <Link to="/blog/restaurant-slow-season-survival">how to survive slow seasons</Link>. For funding options, see <Link to="/restaurant-funding">restaurant funding</Link> and <Link to="/restaurant-working-capital">restaurant working capital</Link>.
            </p>
          </>
        ),
      },
      {
        h2: 'The Restaurant Cash Cycle: A Visual Overview',
        content: (
          <>
            <p>
              The restaurant cash cycle follows a predictable pattern. Money flows in from daily sales, but major expenses hit on their own schedules. The diagram below shows the typical flow and where timing mismatches occur.
            </p>
            <div
              className="cash-cycle-diagram"
              role="img"
              aria-label="Restaurant cash cycle flow: Revenue comes in from daily sales, then payroll is due weekly, inventory purchases happen regularly, equipment maintenance arises unexpectedly, and slow periods reduce cash flow"
            >
              <ol className="cash-cycle-list" aria-hidden>
                <li>Revenue comes in from daily sales (credit cards, cash, delivery)</li>
                <li>Payroll is due weekly or biweekly on a fixed schedule</li>
                <li>Inventory purchases happen regularly—often weekly or before busy periods</li>
                <li>Equipment maintenance and repairs arise unexpectedly</li>
                <li>Slow periods reduce cash flow while fixed costs remain</li>
              </ol>
            </div>
            <p>
              The timing mismatch is the core problem. Revenue comes in gradually—a busy Saturday night, a slow Tuesday, a holiday rush. But payroll is due every Friday. Rent is due on the first. Vendors expect payment on net-30 or weekly terms. When a slow week happens right before payday, or when an equipment repair drains your account before the next busy weekend, you can run short even if your overall sales are healthy. This cycle repeats month after month, and many owners need a bridge—<Link to="/restaurant-cash-advance">restaurant cash advance</Link> or <Link to="/restaurant-working-capital">working capital</Link>—to smooth the gaps.
            </p>
          </>
        ),
      },
      {
        h2: 'Why Revenue Timing Creates Problems',
        content: (
          <>
            <p>
              Restaurant revenue is rarely even. A typical week might see 40% of sales on Friday and Saturday, with Monday and Tuesday bringing in far less. Credit card processors often hold funds for 24–48 hours before they hit your account, so even a strong weekend may not fund Monday&apos;s payroll. Seasonal swings add another layer: January and August can be 30–50% slower than December or October for many restaurants.
            </p>
            <p>
              Meanwhile, your biggest expenses don&apos;t flex with daily or weekly sales. Rent is the same whether you serve 50 or 500 customers. Payroll is largely fixed—you need a minimum staff to open the doors. Utilities, insurance, and loan payments follow their own calendars. When revenue dips for a week or a month, those bills don&apos;t. That&apos;s why many owners describe feeling &quot;cash rich&quot; one week and &quot;cash poor&quot; the next, even when monthly sales look fine on paper.
            </p>
          </>
        ),
      },
      {
        h2: 'Fixed Costs vs. Variable Revenue',
        content: (
          <>
            <p>
              Restaurants carry high fixed costs. Rent, insurance, minimum labor, and equipment leases often account for 50–60% of expenses before a single customer walks in. Variable costs—food, packaging, some labor—scale with sales, but the fixed portion stays the same. In a slow week, your food cost might drop, but rent and payroll don&apos;t.
            </p>
            <p>
              This structure makes restaurants vulnerable to revenue dips. A 20% drop in sales for two weeks can create a serious cash crunch because your fixed costs haven&apos;t changed. Building a cash reserve during busy periods helps, but many operators run too lean to do that. Understanding your fixed vs. variable split—and forecasting when revenue might fall short—helps you plan ahead. See <Link to="/restaurant-seasonal-cash-flow">restaurant seasonal cash flow</Link> for more on surviving slow periods.
            </p>
          </>
        ),
      },
      {
        h2: 'Payroll: The Non-Negotiable Expense',
        content: (
          <>
            <p>
              Payroll is one of the largest and most inflexible costs for restaurants. Labor often runs 25–35% of revenue. Unlike inventory, you can&apos;t delay it without damaging staff trust and potentially violating labor laws. Payday arrives on a fixed schedule—every two weeks or twice a month—regardless of whether last week&apos;s sales were strong or weak.
            </p>
            <p>
              Missing payroll damages morale, makes recruiting harder, and can lead to legal trouble. That&apos;s why many owners treat it as non-negotiable and seek <Link to="/restaurant-payroll-funding">restaurant payroll funding</Link> or working capital when a gap appears. Options like <Link to="/restaurant-cash-advance">restaurant cash advance</Link> can provide same-day or next-day funding when payday is days away—critical when you can&apos;t wait for a traditional loan.
            </p>
          </>
        ),
      },
      {
        h2: 'Inventory and Vendor Payments',
        content: (
          <>
            <p>
              Food and beverage costs typically run 28–35% of revenue. Vendors often require payment on net-7, net-15, or net-30 terms. Before a busy weekend or holiday, you may need to stock up—a large upfront purchase that drains cash before the revenue from that busy period arrives. If you miss a vendor payment, you risk losing credit or delivery, which can shut down operations.
            </p>
            <p>
              <Link to="/restaurant-inventory-funding">Restaurant inventory funding</Link> and working capital products can help you buy what you need before a rush without depleting your account. Many providers offer flexible-use funds you can put toward inventory, payroll, or other needs. The key is planning ahead: if you know a big inventory buy is coming, explore options before you&apos;re short.
            </p>
          </>
        ),
      },
      {
        h2: 'Equipment and Maintenance Surprises',
        content: (
          <>
            <p>
              Walk-in coolers, ovens, HVAC systems, and POS equipment all fail eventually—often at the worst possible time. A broken refrigeration unit can cost thousands to repair and may require immediate action to avoid losing product. These expenses are hard to predict and can&apos;t be delayed.
            </p>
            <p>
              <Link to="/restaurant-equipment-financing">Restaurant equipment financing</Link> and <Link to="/restaurant-emergency-funding">restaurant emergency funding</Link> exist for exactly these situations. Some products are tied to the equipment purchase; others are flexible working capital you can use for repairs or replacements. When an emergency hits, speed matters—many providers offer same-day decisions and funds in 24–48 hours.
            </p>
          </>
        ),
      },
      {
        h2: 'Seasonal and Slow Periods',
        content: (
          <>
            <p>
              Many restaurants see 30–50% revenue swings between peak and off-peak seasons. Post-holiday January, slow summer months, and quiet weekdays create periods when cash flow drops while fixed costs stay the same. Restaurants in tourist areas, college towns, or seasonal markets feel this especially hard.
            </p>
            <p>
              Surviving slow periods requires planning: build reserves during busy months, trim non-essential costs, and know your funding options before you need them. <Link to="/restaurant-seasonal-cash-flow">Restaurant seasonal cash flow</Link> strategies and working capital can bridge the gap until traffic returns. Some providers specialize in restaurants and understand that a slow month doesn&apos;t mean a failing business—they look at your revenue history over several months, not just the current dip.
            </p>
          </>
        ),
      },
      {
        h2: 'Building a Cash Flow Forecast',
        content: (
          <>
            <p>
              A simple cash flow forecast helps you see gaps before they hit. List your fixed expenses by due date—rent, payroll, loan payments, insurance—and compare them to when you expect revenue to arrive. Use last year&apos;s data to estimate seasonal patterns. If you see a risky week coming—payday right after a slow period—you have time to plan.
            </p>
            <p>
              Many owners run a 13-week rolling forecast, updating it weekly with actuals. The goal isn&apos;t perfection; it&apos;s visibility. When you know a gap is likely, you can cut costs, negotiate with vendors, or explore funding before you&apos;re in crisis. <Link to="/restaurant-cash-flow-solutions">Restaurant cash flow solutions</Link> combine operational improvements with financial options when needed.
            </p>
          </>
        ),
      },
      {
        h2: 'When to Consider Funding Options',
        content: (
          <>
            <p>
              When operational improvements and reserves aren&apos;t enough, <Link to="/restaurant-funding">restaurant funding</Link> options can bridge the gap. <Link to="/restaurant-cash-advance">Restaurant cash advance</Link> and <Link to="/restaurant-working-capital">restaurant working capital</Link> products often focus on revenue history rather than credit, offer fast approval and funding, and use repayment tied to daily sales—so your payment flexes when business is slow.
            </p>
            <p>
              These options aren&apos;t right for every situation. Terms and costs vary by provider. But when you need to make payroll, cover an emergency repair, or stock up before a busy season, knowing what&apos;s available puts you in a better position to act. Don&apos;t wait until the day before payday to explore; funding that takes 24–48 hours won&apos;t help if you start too late. Plan ahead when you can, and when you&apos;re ready, compare options that may fit your situation.
            </p>
            <CtaParagraph />
          </>
        ),
      },
      {
        h2: 'FAQ',
        content: (
          <>
            <p><strong>Why do restaurants experience cash flow problems?</strong> Usually a timing mismatch: revenue comes in unevenly (daily sales, weekend rushes) while rent, payroll, and vendors are due on fixed schedules. Credit card deposits take 2–3 days to hit your account. Seasonal dips and equipment emergencies add pressure.</p>
            <p><strong>What is the restaurant cash cycle?</strong> Revenue comes in from daily sales, then payroll is due weekly, inventory purchases happen regularly, equipment maintenance arises unexpectedly, and slow periods reduce cash flow. The timing mismatch between when money comes in and when it goes out creates the problem.</p>
            <p><strong>When should I consider restaurant funding?</strong> When operational improvements and reserves aren&apos;t enough—payroll due in days, equipment down, or a seasonal gap before the next busy period. <Link to="/restaurant-funding-options">Restaurant funding options</Link> can provide fast access when you need it.</p>
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-funding-options',
    title: 'Restaurant Funding Options | Compare Your Choices',
    description:
      'Compare restaurant funding options: cash advance, working capital, loans, and equipment financing. Understand what fits when you need capital.',
    h1: 'Restaurant Funding Options Compared',
    sections: [
      {
        h2: 'Overview: What Restaurant Funding Options Exist',
        content: (
          <>
            <p>
              <strong>Restaurant funding options</strong> are the ways restaurant owners can access capital when they need it—including cash advance, working capital, loans, and equipment financing. Each works differently; speed, qualification, and cost vary by product.
            </p>
            <p>
              Restaurant owners have several funding options when they need capital: <Link to="/restaurant-cash-advance">restaurant cash advance</Link>, <Link to="/restaurant-working-capital">restaurant working capital</Link> products, traditional bank loans, and <Link to="/restaurant-equipment-financing">equipment financing</Link>. Each works differently—speed, qualification, repayment structure, and cost vary. See <Link to="/restaurant-cash-flow-guide">restaurant cash flow</Link> for context on why owners need funding, and <Link to="/restaurant-loan-alternatives">restaurant loan alternatives</Link> when banks aren&apos;t an option.
            </p>
            <p>
              Many owners first think of bank loans. But banks often require strong credit and a weeks-long process. When you need funds quickly—payroll due in days, equipment down—alternatives like cash advance or working capital can offer same-day or next-day decisions and funds in 24–48 hours.
            </p>
          </>
        ),
      },
      {
        h2: 'Restaurant Cash Advance',
        content: (
          <>
            <p>
              A restaurant cash advance provides a lump sum upfront. You repay it as a percentage of your daily card sales—so when sales are high, you pay more; when they&apos;re low, you pay less. Qualification often focuses on revenue history rather than credit. Commonly used for payroll, inventory, equipment repairs, and seasonal bridges. See <Link to="/restaurant-cash-advance-vs-loan">restaurant cash advance vs loan</Link> for a detailed comparison.
            </p>
          </>
        ),
      },
      {
        h2: 'Restaurant Working Capital',
        content: (
          <>
            <p>
              Working capital is money for daily operations—payroll, inventory, supplies, repairs. <Link to="/restaurant-working-capital-guide">Restaurant working capital</Link> products can include cash advances, lines of credit, or short-term loans. Repayment is often tied to daily sales, so your payment flexes with revenue. Many providers offer flexible-use funds you can put toward any need.
            </p>
          </>
        ),
      },
      {
        h2: 'Traditional Loans and Equipment Financing',
        content: (
          <>
            <p>
              Bank loans offer fixed monthly payments and lower rates for qualified borrowers, but approval can take weeks. <Link to="/restaurant-equipment-financing-guide">Equipment financing</Link> is tied to a specific purchase—ovens, walk-ins, POS systems—and the equipment often serves as collateral. When you need flexible-use funds for repairs, a cash advance or working capital may be a better fit.
            </p>
          </>
        ),
      },
      {
        h2: 'How to Compare',
        content: (
          <>
            <p>
              Consider speed, qualification, repayment structure, and cost. When payday is days away, speed matters. When your revenue is uneven, repayment that flexes with sales can be easier to manage. There&apos;s no single best option—only the one that fits your needs. <Link to="/restaurant-funding">Restaurant funding</Link> and <Link to="/restaurant-cash-flow-guide">restaurant cash flow</Link> guides provide more context.
            </p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-working-capital-guide',
    title: 'Restaurant Working Capital Guide | When You Need It',
    description:
      'Restaurant working capital guide: what it is, when you need it, and what options exist for payroll, inventory, and operations.',
    h1: 'Restaurant Working Capital Guide',
    sections: [
      {
        h2: 'What Is Restaurant Working Capital?',
        content: (
          <>
            <p>
              Working capital is the money you use to run daily operations—payroll, inventory, supplies, repairs. It&apos;s the difference between what you have on hand and what you need to pay out. When you need more than you have, <Link to="/restaurant-working-capital">restaurant working capital</Link> funding can help. See <Link to="/restaurant-funding">restaurant funding options</Link> for more.
            </p>
            <p>
              Restaurants need working capital because revenue comes in unevenly—daily sales, weekly catering—while expenses are often fixed or predictable. Payroll is due every week or two. Vendors expect payment on delivery or net-30. Equipment breaks down unexpectedly. <Link to="/restaurant-cash-flow-guide">Restaurant cash flow</Link> explains why this timing mismatch creates the need for working capital.
            </p>
          </>
        ),
      },
      {
        h2: 'When You Need Working Capital',
        content: (
          <>
            <p>
              Common situations: payroll gaps when sales slow, <Link to="/restaurant-payroll-funding">restaurant payroll funding</Link>; inventory purchases before a busy period, <Link to="/restaurant-inventory-funding">restaurant inventory funding</Link>; equipment repairs or replacement, <Link to="/restaurant-equipment-financing">restaurant equipment financing</Link>; seasonal slow periods, <Link to="/restaurant-seasonal-cash-flow">restaurant seasonal cash flow</Link>; and emergency expenses, <Link to="/restaurant-emergency-funding">restaurant emergency funding</Link>.
            </p>
          </>
        ),
      },
      {
        h2: 'Restaurant Working Capital Options',
        content: (
          <>
            <p>
              Options include cash advance (repayment tied to daily card sales), short-term loans (fixed payments), and lines of credit (draw as needed). Each has different speed, cost, and repayment structure. <Link to="/restaurant-cash-advance">Restaurant cash advance</Link> and <Link to="/restaurant-loan-alternatives">restaurant loan alternatives</Link> can help you compare.
            </p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-loan-alternatives',
    title: 'Restaurant Loan Alternatives | Beyond Traditional Loans',
    description:
      "Restaurant loan alternatives: cash advance, working capital, and other options when a bank loan isn't right or available.",
    h1: 'Restaurant Loan Alternatives When Banks Say No',
    sections: [
      {
        h2: 'Common Restaurant Loan Alternatives',
        content: (
          <>
            <p>
              <Link to="/restaurant-cash-advance">Restaurant cash advance</Link>, working capital products, and lines of credit are the main alternatives to traditional bank loans. Each has different speed, cost, and repayment structure. <Link to="/restaurant-funding-options">Restaurant funding options</Link> can help you see what might fit when a traditional loan isn&apos;t available or fast enough.
            </p>
            <p>
              Banks typically want several years of financials, strong credit, and sometimes collateral. The approval process can take weeks. If you need funds quickly—payroll due in days, equipment down, seasonal gap—alternatives like cash advance or working capital often offer same-day or next-day decisions and funds in 24–48 hours.
            </p>
          </>
        ),
      },
      {
        h2: 'When Banks Say No',
        content: (
          <>
            <p>
              Banks may decline for many reasons: short time in business, uneven revenue, credit history, or lack of collateral. That doesn&apos;t mean you have no options. Alternatives often focus on revenue history rather than credit. If your restaurant has consistent card sales, you may qualify for cash advance or working capital even when a bank loan isn&apos;t available.
            </p>
          </>
        ),
      },
      {
        h2: 'Cash Advance vs. Traditional Loans',
        content: (
          <>
            <p>
              A <Link to="/restaurant-cash-advance-vs-loan">restaurant cash advance vs loan</Link> comparison shows key differences. Cash advance: repayment tied to daily card sales, qualification based on revenue history, often faster approval. Traditional loans: fixed monthly payments, lower rates for qualified borrowers, longer application process. Choose based on your timeline, how you prefer to repay, and what you qualify for.
            </p>
            <p>
              <Link to="/restaurant-funding-options">Restaurant funding options</Link> and <Link to="/restaurant-working-capital-guide">restaurant working capital</Link> guides provide more context on comparing options.
            </p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
  {
    path: '/restaurant-equipment-financing-guide',
    title: 'Restaurant Equipment Financing Guide | Ovens, Coolers & Kitchen Gear',
    description:
      'Restaurant equipment financing guide: options for ovens, refrigeration, and kitchen equipment when you need to buy or replace.',
    h1: 'Restaurant Equipment Financing Guide',
    sections: [
      {
        h2: 'Why Restaurants Need Equipment Financing',
        content: (
          <>
            <p>
              Restaurant equipment—ovens, walk-ins, fryers, POS systems—is expensive. <Link to="/restaurant-equipment-financing">Restaurant equipment financing</Link> and <Link to="/restaurant-cash-advance">restaurant funding</Link> options let you repair or replace without draining cash. Some products are tied to the equipment; others are flexible-use working capital.
            </p>
            <p>
              Equipment can fail or break down unexpectedly. A walk-in cooler going down or an oven failing during a busy shift can mean lost revenue and costly repairs. When you need equipment quickly—and don&apos;t have cash on hand—financing or working capital can help you get back up and running.
            </p>
          </>
        ),
      },
      {
        h2: 'Equipment Financing vs. Flexible Use',
        content: (
          <>
            <p>
              Equipment financing is tied to a specific purchase—the equipment often serves as collateral. When you need funds for repairs or replacement that aren&apos;t tied to a single purchase, <Link to="/restaurant-working-capital-guide">restaurant working capital</Link> or <Link to="/restaurant-cash-advance">restaurant cash advance</Link> may be flexible use. See <Link to="/restaurant-cash-flow-guide">restaurant cash flow</Link> for context on why owners need funding.
            </p>
          </>
        ),
      },
      {
        h2: 'What You Can Finance',
        content: (
          <>
            <p>
              Common equipment: kitchen equipment (ovens, ranges, fryers), refrigeration (walk-ins, reach-ins), POS systems, furniture, and signage. Some providers offer financing for used equipment; others require new purchases. Compare terms and costs before committing.
            </p>
            <CtaParagraph />
          </>
        ),
      },
    ],
  },
];

export function getPillarPage(path: string): PillarPageConfig | undefined {
  return pillarPagesConfig.find((p) => p.path === path);
}

export function getAllPillarPaths(): string[] {
  return pillarPagesConfig.map((p) => p.path);
}
