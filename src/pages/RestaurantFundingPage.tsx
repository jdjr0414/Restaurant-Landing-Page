import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { CTA } from '../components/CTA';
import { PageHero } from '../components/PageHero';
import { FIND_MATCH_URL, AXIANT_LINK_REL } from '../config';
import { getMeta } from '../staticMeta';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const FAQ_ITEMS = [
  {
    q: 'What funding options do restaurants have?',
    a: 'Restaurants can use a merchant cash advance or working capital (fastest — funds in 24–48 hours, repaid as a percentage of daily sales), a term loan or SBA loan (lower cost and fixed monthly payments, but slower and credit-dependent), equipment financing (secured by the equipment itself), or a business line of credit (revolving, draw as needed). The fastest options cost more; the lowest-cost options require stronger credit and more time.',
  },
  {
    q: 'How fast can a restaurant get funding?',
    a: 'A cash advance or working capital can fund in 24–48 hours, sometimes same-day. Online term loans take 1–3 days, bank loans 1–4 weeks, and SBA loans typically 30–90 days. If you need money this week — payroll due or a cooler down — a cash advance is usually the only option fast enough.',
  },
  {
    q: 'How much funding can a restaurant get?',
    a: 'Amounts vary by product and your revenue. Cash advances and working capital are often sized to roughly 0.5–1.5x average monthly sales. Term loans range from a few thousand dollars to several hundred thousand, and SBA 7(a) loans go up to $5 million. The amount you qualify for depends mainly on consistent revenue, time in business, and credit.',
  },
  {
    q: 'What is the cheapest way for a restaurant to borrow?',
    a: 'Per dollar borrowed, an SBA loan is usually the cheapest, followed by a conventional bank term loan, then online term loans, with a merchant cash advance the most expensive. The cheaper options are slower and require stronger credit, so the "best" choice depends on how fast you need the money and what you qualify for. Use the restaurant loan calculator to compare the monthly cost.',
  },
  {
    q: 'Can a restaurant get funding with bad credit?',
    a: 'Often yes. Cash advance and working capital providers weigh revenue and sales history more heavily than credit score, so restaurants with steady sales but weak credit may still qualify. The tradeoff is higher cost. Stronger credit opens up lower-rate term loans and SBA loans. Not all applicants qualify; terms vary by provider.',
  },
];

export function RestaurantFundingPage() {
  const meta = getMeta('/restaurant-funding')!;
  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonicalPath={meta.canonicalPath}
        image={meta.image}
      />
      <BreadcrumbSchema items={[{ name: 'Restaurant Cash Advance', path: '/restaurant-cash-advance' }, { name: 'Funding Options', path: '/restaurant-funding' }]} />
      <BlogFaqSchema items={FAQ_ITEMS} urlPath="/restaurant-funding" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Restaurant Funding Options When You’re Struggling</h1>
          <p className="page-lead">
            When revenue doesn’t cover payroll, inventory, or equipment costs, restaurant owners look for ways to bridge the gap. This guide explains the main funding options—what they are, what they cost, how fast they fund, and how to choose for your situation.
          </p>

          <section className="prose-block">
            <p>
              <strong>Quick answer:</strong> Restaurants can fund payroll, inventory, equipment, and seasonal gaps through a few main paths. A <Link to="/restaurant-cash-advance">cash advance or working capital</Link> is the fastest (24–48 hours, repaid as a percentage of daily sales), but the most expensive. A <Link to="/restaurant-term-loans">term loan</Link> or <Link to="/sba-loans-for-restaurants">SBA loan</Link> costs less per dollar with fixed monthly payments, but is slower and credit-dependent. <Link to="/restaurant-equipment-financing-guide">Equipment financing</Link> is secured by the asset itself. The fast options trade higher cost for speed; the low-cost options need stronger credit and more time.
            </p>
          </section>

          <section className="prose-block">
            <h2>Restaurant Funding Options at a Glance</h2>
            <div className="comparison__table-wrap">
              <table className="comparison__table">
                <thead>
                  <tr>
                    <th>Option</th>
                    <th>Typical Speed</th>
                    <th>Repayment</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Cash advance / working capital</td>
                    <td>24–48 hours</td>
                    <td>% of daily card sales</td>
                    <td>Urgent gaps, payroll, inventory</td>
                  </tr>
                  <tr>
                    <td>Term loan</td>
                    <td>1 day–4 weeks</td>
                    <td>Fixed monthly</td>
                    <td>Planned investments, refinancing</td>
                  </tr>
                  <tr>
                    <td>SBA loan</td>
                    <td>30–90 days</td>
                    <td>Fixed monthly (long term)</td>
                    <td>Major investment, lowest rate</td>
                  </tr>
                  <tr>
                    <td>Equipment financing</td>
                    <td>Days–2 weeks</td>
                    <td>Fixed, secured by the asset</td>
                    <td>Buying or replacing equipment</td>
                  </tr>
                  <tr>
                    <td>Line of credit</td>
                    <td>1–2 weeks</td>
                    <td>Revolving — pay on what you use</td>
                    <td>Recurring or unpredictable gaps</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Not all applicants qualify; speed, cost, and terms vary by provider and state. Before committing to any option, run the monthly cost with the <Link to="/restaurant-loan-calculator">restaurant loan calculator</Link>.</p>
          </section>

          <section className="prose-block">
            <h2>Why Restaurants Seek Funding</h2>
            <p>Restaurant owners look for funding to cover payroll, buy inventory, repair or replace equipment, handle seasonal cash flow gaps, or fund expansion. Sometimes the need is urgent—a broken walk-in or a missed payroll—and sometimes it’s planned, like stocking up for the holidays or opening a second location. Understanding your options helps you choose the right type of funding for your situation. The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> explains why these gaps occur. For a full comparison, see <Link to="/restaurant-funding-options">restaurant funding options</Link>. Food trucks, bars, or pizzerias? <Link to="/restaurant-funding-by-business-type">Restaurant funding by business type</Link>. Just opening? <Link to="/restaurant-startup-funding">Restaurant startup funding</Link>. Wondering about amounts? <Link to="/how-much-can-you-qualify-for">How much can you qualify for</Link>.</p>
          </section>

          <section className="prose-block">
            <h2>Restaurant Cash Advance</h2>
            <p>A restaurant cash advance provides upfront capital that you repay as a percentage of your daily sales. It’s one of the faster options: many providers offer same-day or next-day decisions and funding in as little as 24–48 hours. Because qualification often focuses on revenue rather than credit alone, it can be accessible to owners who might not qualify for a bank loan. Cost is typically expressed as a factor rate (often 1.1–1.5), so it is higher than a term loan—best reserved for urgent, short-term needs. Funds can be used for payroll, inventory, equipment, repairs, or other business needs. <Link to="/restaurant-cash-advance">Explore restaurant cash advance options</Link>.</p>
          </section>

          <section className="prose-block">
            <h2>Restaurant Working Capital</h2>
            <p>Working capital products are designed for short-term operating needs. They can include cash advances, lines of credit, or short-term loans. The goal is to give you access to funds when revenue is uneven or when you need to act quickly. Many restaurant owners use working capital to cover payroll during slow weeks, purchase inventory before a busy season, or handle unexpected expenses. <Link to="/restaurant-working-capital">Learn more about restaurant working capital</Link>.</p>
          </section>

          <section className="prose-block">
            <h2>Restaurant Term Loans and SBA Loans</h2>
            <p>When you have time and stronger credit, a <Link to="/restaurant-term-loans">restaurant term loan</Link> or an <Link to="/sba-loans-for-restaurants">SBA loan</Link> is the lower-cost path. Both charge interest on a declining balance rather than a fixed factor rate, so they cost less per dollar than a cash advance, with predictable fixed monthly payments. Term loans fund in days to a few weeks; SBA loans take 30–90 days but offer the lowest rates, longest terms, and amounts up to $5 million—ideal for a build-out, a second location, or refinancing high-cost advances. Model the payment on the <Link to="/restaurant-loan-calculator">restaurant loan calculator</Link>.</p>
          </section>

          <section className="prose-block">
            <h2>Restaurant Equipment Financing</h2>
            <p>Equipment financing is geared toward purchasing or leasing ovens, refrigeration, point-of-sale systems, and other gear. The equipment often secures the financing, which can make it easier to qualify for than unsecured funding. This is a good fit when you need to buy or replace specific assets and want to spread the cost over time—see the <Link to="/restaurant-equipment-financing-guide">restaurant equipment financing guide</Link>. For faster, more flexible funding you can use for equipment or anything else, a restaurant cash advance is another option.</p>
          </section>

          <section className="prose-block">
            <h2>Comparing Restaurant Financing Options</h2>
            <p>When comparing options, consider speed, qualification requirements, repayment structure, and cost. Cash advances and some working capital products offer speed and sales-based repayment. Term and SBA loans offer lower rates for those who qualify but take longer and require stronger credit. There’s no single “best” option—only the one that fits your needs and situation. Comparing <Link to="/restaurant-cash-advance-vs-loan">restaurant cash advance vs loan</Link> side by side helps you make an informed decision.</p>
          </section>

          <section className="prose-block">
            <h2>Funding for Specific Situations</h2>
            <p>Restaurant funding isn’t one-size-fits-all. Depending on your timing and goal, explore <Link to="/same-day-restaurant-funding">quick restaurant funding</Link> when you need cash in 24–48 hours, <Link to="/restaurant-emergency-funding">restaurant emergency financing options</Link> when equipment fails or payroll is due, <Link to="/restaurant-working-capital">working capital for busy season</Link> to stock up before a rush, or <Link to="/restaurant-franchise-financing">restaurant franchise funding</Link> for fees, royalties, and build-out. Worried about your credit? See <Link to="/bad-credit-restaurant-funding">bad credit restaurant funding</Link> options. Stocking up before a rush? <Link to="/restaurant-inventory-financing-fast">Fast restaurant inventory financing</Link> can bridge the gap.</p>
          </section>

          <section className="prose-block" id="faq" data-speakable-faq>
            <h2>Frequently Asked Questions</h2>
            {FAQ_ITEMS.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>If you’re facing a cash flow problem or need to cover a specific expense, understanding your options is the first step. Not all applicants qualify; terms vary by provider. <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>Review Restaurant Financing Options</a>.</p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
