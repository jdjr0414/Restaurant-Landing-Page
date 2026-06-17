import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { FaqSchema } from '../components/FaqSchema';
import { PageHero } from '../components/PageHero';
import { getMeta } from '../staticMeta';
import { faqItems } from '../data/faq';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const mcaFaqItems = [
  {
    question: 'What is a merchant cash advance (MCA)?',
    answer: 'A merchant cash advance is a funding product where a company provides upfront capital in exchange for a percentage of your future card sales. It is not a loan — it is structured as a purchase of future receivables. Repayment comes as a daily or weekly holdback on card settlements. MCAs fund quickly (often 24–48 hours) but carry high total cost due to factor rates rather than interest.',
  },
  {
    question: 'What is MCA stacking?',
    answer: 'MCA stacking means carrying two or more active merchant cash advances simultaneously. Each advance adds its own daily holdback on card revenue. A restaurant with three stacked MCAs may be remitting 30–50% of daily card revenue before paying any operating expense. Stacking is the most common path to an unsustainable MCA position.',
  },
  {
    question: 'What is a Confession of Judgment (COJ) in an MCA?',
    answer: 'A Confession of Judgment is a clause in most MCA agreements that authorizes the lender to obtain a court judgment against you without filing a lawsuit, notifying you in advance, or holding a trial. Once entered (often in New York, where most MCAs are governed), the lender can freeze your bank account within days. Most restaurant owners do not realize they signed one at closing.',
  },
  {
    question: 'What happens when a restaurant defaults on an MCA?',
    answer: 'Defaulting on an MCA triggers a fast sequence of events — often faster than a traditional loan default. Lenders contact you immediately. If you do not respond or cure the default within the contract\'s cure period (usually 3–10 days), they may file a COJ and obtain a bank restraining notice. A bank account can be frozen within 1–2 weeks of a missed payment. See the full restaurant MCA default guide for the complete timeline.',
  },
  {
    question: 'Can MCA debt be restructured or reduced?',
    answer: 'Yes. MCA lenders have strong incentive to negotiate — partial recovery from an operating restaurant is better than zero recovery from a closed one. Professional MCA mediators negotiate both balance reductions (typically 40–70%) and holdback rate reductions to a sustainable level. Results depend on the specific lenders, positions, and how far behind payments are.',
  },
  {
    question: 'What is MCA debt restructuring?',
    answer: 'MCA debt restructuring is a negotiated process where a professional mediator works directly with your MCA lenders to modify the terms of what you owe — reducing the remaining balance, extending the repayment period, or lowering the daily holdback percentage. Unlike consolidation (which replaces debt with new debt), restructuring modifies existing agreements without adding new obligations.',
  },
  {
    question: 'What is the difference between MCA restructuring and MCA consolidation?',
    answer: 'Consolidation means a new lender pays off your existing MCAs with a single new advance at one holdback rate. This simplifies payments but typically does not reduce total cost — the new lender adds their factor rate on top of remaining balances. Restructuring means a mediator renegotiates the existing agreements to reduce what you owe and lower the daily payment. Restructuring is generally the better path when the total debt burden is the problem.',
  },
];

export function FaqPage() {
  const meta = getMeta('/faq')!;
  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonicalPath={meta.canonicalPath}
        image={meta.image}
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }]} />
      <FaqSchema basePath="/faq" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">FAQ: Restaurant Cash Flow, Funding & MCA Debt</h1>
          <p className="page-lead">
            Answers to the most common questions restaurant owners ask about cash flow, merchant cash advances, working capital, and what to do when MCA payments become unmanageable.
          </p>

          <section className="prose-block">
            <h2>Restaurant Funding & Cash Advance</h2>
            {faqItems.map((item) => (
              <div key={item.question} style={{ marginBottom: '1.5rem' }}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </section>

          <section className="prose-block">
            <h2>MCA Debt, Restructuring & Default</h2>
            {mcaFaqItems.map((item) => (
              <div key={item.question} style={{ marginBottom: '1.5rem' }}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </section>

          <section className="prose-block">
            <h2>More Detailed Guides</h2>
            <ul>
              <li><Link to="/restaurant-cash-advance">Restaurant Cash Advance: How It Works & When to Use It</Link></li>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Help: The Complete Guide</Link></li>
              <li><Link to="/restaurant-mca-stacking">Restaurant MCA Stacking: When Multiple Advances Stack Up</Link></li>
              <li><Link to="/cant-pay-restaurant-mca">Can't Pay Your Restaurant MCA? What to Do Right Now</Link></li>
              <li><Link to="/restaurant-mca-default">Restaurant MCA Default: What Happens and What to Do</Link></li>
              <li><Link to="/restaurant-mca-calculator">MCA Holdback Calculator: See Your Burden & Savings</Link></li>
              <li><Link to="/restaurant-cash-flow-problems">Restaurant Cash Flow Problems: Why Restaurants Run Out of Cash</Link></li>
              <li><Link to="/restaurant-funding-options">Restaurant Funding Options: Compare All Your Choices</Link></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
