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
    q: 'What is a business cash advance?',
    a: 'A business cash advance (often called a merchant cash advance or MCA) is a lump sum of capital you receive upfront and repay through a fixed percentage of your daily card sales or revenue, rather than in fixed monthly installments. It is technically a sale of future receivables, not a loan, which is why approval depends more on sales history than credit score. When sales are higher you pay more; when they are lower you pay less.',
  },
  {
    q: 'How does a business cash advance work?',
    a: 'You receive a lump sum, and the provider collects a set percentage of your daily sales (the "holdback") until the agreed total is repaid. The cost is expressed as a factor rate — for example, a $50,000 advance at a 1.3 factor rate means you repay $65,000 total. Because repayment flexes with sales, the effective term shifts with how fast you sell, but the total payback amount is fixed at signing.',
  },
  {
    q: 'How much does a business cash advance cost?',
    a: 'Cost is set by a factor rate, commonly 1.1 to 1.5. Multiply the advance by the factor rate to get total payback: a $40,000 advance at 1.4 means $56,000 repaid, or $16,000 of cost. Because the full factor applies regardless of how early you repay, the effective APR is high — often well above a term loan. That is the tradeoff for speed and easier qualification.',
  },
  {
    q: 'Is a business cash advance better than a loan?',
    a: 'It depends on the need. A cash advance is faster (24–48 hours) and easier to qualify for, with payments that flex with sales — best for urgent, short-term gaps. A term loan or SBA loan costs far less per dollar and has predictable fixed payments — best for planned investments. Many owners use an advance for emergencies and a loan for everything they can plan ahead for.',
  },
  {
    q: 'How fast can I get a business cash advance?',
    a: 'Decisions often come within one business day and funds can arrive in 24–48 hours. Qualification focuses on revenue and card-processing volume rather than credit alone, so the process is faster and lighter on documentation than a bank loan. Not all applicants qualify; funding is not available in all states.',
  },
  {
    q: 'Do I qualify for a business cash advance?',
    a: 'Most providers look for several months of consistent revenue, a minimum monthly sales volume, and some time in business (often 6+ months). Credit matters less than for a bank loan. Businesses with strong, steady card sales but imperfect credit are common candidates. Requirements vary by provider.',
  },
];

export function BusinessCashAdvancePage() {
  const meta = getMeta('/business-cash-advance')!;
  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonicalPath={meta.canonicalPath}
        image={meta.image}
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Business Cash Advance', path: '/business-cash-advance' }]} />
      <BlogFaqSchema items={FAQ_ITEMS} urlPath="/business-cash-advance" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Business Cash Advance</h1>
          <p className="page-lead">
            A business cash advance provides upfront capital that you repay as a percentage of your daily sales or revenue. It’s a common option for businesses that need fast access to working capital—including restaurants, retail, and other industries with strong card or revenue volume but uneven cash flow.
          </p>

          <section className="prose-block">
            <p>
              <strong>Quick answer:</strong> A business cash advance is a lump sum you receive upfront and repay through a fixed percentage of daily sales, priced with a factor rate (commonly 1.1–1.5) rather than an interest rate. It is technically a purchase of future receivables, not a loan—so it funds fast (24–48 hours) and qualifies on revenue more than credit, but it costs more than a <Link to="/restaurant-term-loans">term loan</Link>. It fits urgent, short-term needs; for planned investments, a lower-cost loan is usually better.
            </p>
          </section>

          <section className="prose-block">
            <h2>What Is a Business Cash Advance?</h2>
            <p>A business cash advance (often called a merchant cash advance or MCA) is not a loan. You receive a lump sum upfront and repay it through a percentage of your daily card sales or revenue. When sales are higher, you pay more; when they’re lower, you pay less. That flexibility can make it easier to manage than a fixed monthly loan payment. Many businesses use it for payroll, inventory, equipment, repairs, or short-term cash flow needs. A <Link to="/restaurant-cash-advance">restaurant cash advance</Link> is one example of this type of funding, tailored to the food service industry.</p>
          </section>

          <section className="prose-block">
            <h2>How the Cost Works: Factor Rates</h2>
            <p>Instead of an interest rate, a cash advance uses a <strong>factor rate</strong>—usually between 1.1 and 1.5. You multiply the advance by the factor rate to get your total payback. For example, a $50,000 advance at a 1.3 factor rate means you repay $65,000—a cost of $15,000. Unlike a loan, the full factor applies even if you repay early, so paying it off faster doesn’t save on cost. That makes the effective APR high relative to a term loan, which is the tradeoff for speed and easy qualification. See the <Link to="/merchant-cash-advance-factor-rate">factor rate explained</Link> for the full math, and the <Link to="/restaurant-mca-calculator">restaurant MCA calculator</Link> to run your own numbers.</p>
          </section>

          <section className="prose-block">
            <h2>Business Cash Advance vs Loan</h2>
            <div className="comparison__table-wrap">
              <table className="comparison__table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Business Cash Advance</th>
                    <th>Term Loan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Speed</td>
                    <td>24–48 hours</td>
                    <td>Days to weeks</td>
                  </tr>
                  <tr>
                    <td>Cost</td>
                    <td>Factor rate 1.1–1.5 (higher)</td>
                    <td>Interest on declining balance (lower)</td>
                  </tr>
                  <tr>
                    <td>Repayment</td>
                    <td>% of daily sales — flexes</td>
                    <td>Fixed monthly</td>
                  </tr>
                  <tr>
                    <td>Qualification</td>
                    <td>Revenue-based, credit-flexible</td>
                    <td>Stronger credit and financials</td>
                  </tr>
                  <tr>
                    <td>Best for</td>
                    <td>Urgent, short-term gaps</td>
                    <td>Planned, longer-term investment</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Traditional loans can be better for large, long-term investments when you qualify; a cash advance is often used for short-term working capital rather than multi-year projects. Not all applicants qualify for either; terms and costs vary. Compare them side by side in <Link to="/restaurant-cash-advance-vs-loan">restaurant cash advance vs loan</Link>, and see lower-cost paths in <Link to="/restaurant-term-loans">restaurant term loans</Link> and <Link to="/sba-loans-for-restaurants">SBA loans for restaurants</Link>.</p>
          </section>

          <section className="prose-block">
            <h2>Why Businesses Use Cash Advances</h2>
            <p>Speed is the major reason. Decisions can come in a day and funds in as little as 24–48 hours. Qualification often focuses on revenue and sales history rather than credit score alone, so businesses that might not qualify for a bank loan may still be eligible. Use of funds is typically flexible—payroll, inventory, equipment, marketing, or other operating needs. For seasonal businesses like restaurants, repayment that flexes with sales can be especially useful when revenue dips.</p>
          </section>

          <section className="prose-block">
            <h2>Who Qualifies?</h2>
            <p>Eligibility depends on the provider and product. Many cash advance providers look at your business’s revenue, card processing volume, and time in business (often 6+ months). They may be more flexible than banks on credit. Business owners—including restaurant owners—can compare options and see what’s typically required. Not all applicants qualify; funding is not available in all states.</p>
          </section>

          <section className="prose-block">
            <h2>Restaurant Cash Advance</h2>
            <p>If you run a restaurant, café, bar, or food truck, a <Link to="/restaurant-cash-advance">restaurant cash advance</Link> is a business cash advance designed for your industry. The same principles apply: fast funding, repayment based on sales, flexible use. <Link to="/restaurant-cash-advance">Explore restaurant cash advance options</Link>, or see <Link to="/restaurant-funding-options">restaurant funding options</Link> for a full comparison.</p>
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
            <h2>Exploring Your Options</h2>
            <p>If you need working capital for payroll, inventory, or short-term gaps, understanding what’s available can help. Not all applicants qualify; terms vary. <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>See What Restaurant Funding Options May Be Available</a>.</p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
