import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { FIND_MATCH_URL, AXIANT_LINK_REL } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';
import '../styles/occupancy-calculator.css';

const usd = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
const num = (v: string) => parseFloat(String(v).replace(/[^0-9.\-]/g, '')) || 0;

interface LoanResult {
  amount: number;
  apr: number;
  term: number;
  revenue: number;
  monthly: number;
  totalRepay: number;
  totalInterest: number;
  pctOfRevenue: number;
}

function compute(amount: string, apr: string, term: string, revenue: string): LoanResult {
  const p = num(amount);
  const a = num(apr);
  const n = Math.max(1, Math.round(num(term)));
  const rev = num(revenue);
  const i = a / 100 / 12;
  // Standard amortizing payment; falls back to straight-line when APR is 0.
  const monthly = i > 0 ? (p * i) / (1 - Math.pow(1 + i, -n)) : p / n;
  const totalRepay = monthly * n;
  const totalInterest = Math.max(0, totalRepay - p);
  const pctOfRevenue = rev > 0 ? (monthly / rev) * 100 : 0;
  return { amount: p, apr: a, term: n, revenue: rev, monthly, totalRepay, totalInterest, pctOfRevenue };
}

const FAQ_ITEMS = [
  {
    q: 'How do you calculate a restaurant loan payment?',
    a: 'A term loan uses standard amortization: Monthly Payment = P × i ÷ (1 − (1 + i)^−n), where P is the loan amount, i is the monthly rate (APR ÷ 12), and n is the number of months. For example, a $50,000 loan at 18% APR over 36 months is about $1,808/month, with roughly $15,100 in total interest. This calculator runs that math for you and also shows the payment as a percentage of your monthly sales.',
  },
  {
    q: 'What APR do restaurant loans charge?',
    a: 'It varies widely by product and qualifications. SBA 7(a) loans for restaurants are often in the high single digits to low teens; conventional bank term loans for qualified borrowers can run roughly 8–25% APR; online and revenue-based lenders are higher, and merchant cash advances are higher still (factor rates that translate to 40%+ effective APR). Rate depends on credit, time in business, revenue, and collateral.',
  },
  {
    q: 'What percentage of revenue should a restaurant loan payment be?',
    a: 'There is no fixed rule, but restaurants run thin margins, so debt service should be comfortable against sales. As a directional check, a loan payment under about 5% of monthly revenue is generally comfortable, 5–10% is manageable for many concepts, and above 10% starts to squeeze a P&L that already carries food cost, labor, and occupancy cost. Look at the payment against your slowest months, not just your average.',
  },
  {
    q: 'Is a term loan or a merchant cash advance cheaper for a restaurant?',
    a: 'A term loan is almost always cheaper per dollar borrowed than a merchant cash advance, because it charges interest on a declining balance rather than a fixed factor rate on the full amount. The tradeoff is speed and qualification: term loans take longer and require stronger credit and financials. Use this calculator for term-loan math, and the restaurant MCA calculator for advance/holdback math.',
  },
  {
    q: 'Does this calculator show my real loan offer?',
    a: 'No. It is an estimate for planning only. Your actual rate, term, and approval depend on your business profile, the lender, and the product. Not all applicants qualify; terms vary by provider. Use the numbers here to budget and compare, then get a real quote before deciding.',
  },
];

export function RestaurantLoanCalculatorPage() {
  const [amount, setAmount] = useState('50,000');
  const [apr, setApr] = useState('18');
  const [term, setTerm] = useState('36');
  const [revenue, setRevenue] = useState('80,000');
  const [result, setResult] = useState<LoanResult>(() => compute('50,000', '18', '36', '80,000'));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setResult(compute(amount, apr, term, revenue));
  }

  const band =
    result.pctOfRevenue <= 0
      ? ''
      : result.pctOfRevenue < 5
        ? 'occ-good'
        : result.pctOfRevenue <= 10
          ? 'occ-mid'
          : 'occ-bad';

  const verdict =
    result.amount <= 0
      ? 'Enter a loan amount, rate, and term to see your monthly payment.'
      : result.revenue <= 0
        ? `Your estimated payment is ${usd(result.monthly)}/month. Add your monthly sales to see how much of revenue that uses.`
        : result.pctOfRevenue < 5
          ? `Comfortable. At ${usd(result.monthly)}/month, the payment is ${result.pctOfRevenue.toFixed(1)}% of sales — light against revenue for most concepts.`
          : result.pctOfRevenue <= 10
            ? `Manageable, but check your slow months. ${usd(result.monthly)}/month is ${result.pctOfRevenue.toFixed(1)}% of sales — workable, with less cushion when traffic dips.`
            : `Heavy. ${usd(result.monthly)}/month is ${result.pctOfRevenue.toFixed(1)}% of sales — a large fixed payment on top of food cost, labor, and rent. Consider a smaller amount, a longer term, or a lower-rate product.`;

  return (
    <>
      <SeoHead
        title="Restaurant Loan Calculator | Monthly Payment & Affordability"
        description="Free restaurant loan calculator. Enter loan amount, APR, and term to see your monthly payment, total interest, and total cost — plus how much of your sales the payment uses."
        canonicalPath="/restaurant-loan-calculator"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Restaurant Loan Calculator', path: '/restaurant-loan-calculator' },
        ]}
      />
      <BlogFaqSchema items={FAQ_ITEMS} urlPath="/restaurant-loan-calculator" />
      <main className="page-main">
        <div className="page-content">
          <section className="occ-hero">
            <p className="occ-eyebrow">Free Restaurant Tool</p>
            <h1>Restaurant Loan Calculator</h1>
            <p className="occ-lede">
              See the real cost of a restaurant loan before you sign. Enter your loan amount, APR, and term to get the
              monthly payment, total interest, and total repayment — then add your monthly sales to see whether the
              payment fits your cash flow.
            </p>
          </section>

          <section className="occ-section">
            <div className="occ-card">
              <form onSubmit={onSubmit} className="occ-grid">
                <div className="occ-field">
                  <label htmlFor="loan-amount">Loan amount ($)</label>
                  <input id="loan-amount" inputMode="decimal" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g., 50,000" />
                </div>
                <div className="occ-field">
                  <label htmlFor="loan-apr">Interest rate / APR (%)</label>
                  <input id="loan-apr" inputMode="decimal" value={apr} onChange={(e) => setApr(e.target.value)} placeholder="e.g., 18" />
                  <small>SBA &amp; bank loans are lower; online lenders &amp; MCAs are higher.</small>
                </div>
                <div className="occ-field">
                  <label htmlFor="loan-term">Term (months)</label>
                  <input id="loan-term" inputMode="decimal" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="e.g., 36" />
                  <small>Most restaurant term loans run 12–60 months.</small>
                </div>
                <div className="occ-field">
                  <label htmlFor="loan-rev">Monthly sales ($, optional)</label>
                  <input id="loan-rev" inputMode="decimal" value={revenue} onChange={(e) => setRevenue(e.target.value)} placeholder="e.g., 80,000" />
                  <small>Used to show payment as a % of revenue.</small>
                </div>
                <div className="occ-field occ-field-full">
                  <button type="submit" className="occ-btn">Calculate My Payment</button>
                </div>
              </form>

              <div className="occ-results">
                <div className={`occ-headline ${band}`}>
                  <div className="occ-ratio">{result.monthly > 0 ? usd(result.monthly) : '—'}</div>
                  <div className="occ-ratio-l">Estimated monthly payment</div>
                </div>
                <p className="occ-verdict">{verdict}</p>
                <div className="occ-rows">
                  <div className="occ-row"><span>Total of payments</span><span>{result.totalRepay > 0 ? usd(result.totalRepay) : '—'}</span></div>
                  <div className="occ-row"><span>Total interest cost</span><span>{result.totalRepay > 0 ? usd(result.totalInterest) : '—'}</span></div>
                  <div className="occ-row"><span>Payment as % of monthly sales</span><span>{result.pctOfRevenue > 0 ? `${result.pctOfRevenue.toFixed(1)}%` : '—'}</span></div>
                </div>
              </div>
            </div>
          </section>

          <article className="occ-content">
            <h2>How the restaurant loan calculation works</h2>
            <p>
              A term loan is repaid on an amortization schedule: each fixed monthly payment covers the interest due that
              month plus a slice of principal, so the balance — and the interest portion — shrinks over time. The payment
              formula is <strong>P × i ÷ (1 − (1 + i)<sup>−n</sup>)</strong>, where <em>P</em> is the loan amount,{' '}
              <em>i</em> is the monthly rate (APR ÷ 12), and <em>n</em> is the number of months. This calculator runs that
              math and then divides the payment by your monthly sales so you can see the cash-flow impact, not just the
              number.
            </p>
            <h2>What payment-to-sales tells you</h2>
            <p>
              Restaurants carry food cost (often 28–35% of sales), labor (25–35%), and occupancy cost (frequently 8–12%)
              before a dollar of profit. A loan payment is a fixed cost layered on top, so it matters how big it is
              against revenue:
            </p>
            <ul>
              <li><strong>Under 5% of sales</strong> — comfortable for most concepts; the payment leaves room in the P&amp;L.</li>
              <li><strong>5%–10%</strong> — manageable, but check the payment against your slowest months, not your average.</li>
              <li><strong>Over 10%</strong> — heavy. A large fixed payment on thin margins is a common reason a busy restaurant still runs short on cash.</li>
            </ul>
            <p>
              These bands are directional, not a lending rule. If the payment looks heavy, the levers are a smaller amount,
              a longer term (lower payment, more total interest), or a lower-rate product. Run your own occupancy math with
              the <Link to="/restaurant-occupancy-cost-calculator">restaurant occupancy cost calculator</Link>, and if
              you&apos;re weighing an advance instead of a loan, the{' '}
              <Link to="/restaurant-mca-calculator">restaurant MCA calculator</Link> shows holdback and factor-rate cost.
            </p>
            <h2>Loan vs. cash advance for restaurants</h2>
            <p>
              A term loan charges interest on a declining balance, so it is almost always cheaper per dollar than a
              merchant cash advance, which applies a fixed factor rate to the full amount up front. The tradeoff is speed
              and qualification: loans take longer and need stronger credit and financials, while advances fund in 24–48
              hours on revenue history. See <Link to="/restaurant-cash-advance-vs-loan">restaurant cash advance vs loan</Link>{' '}
              and the full <Link to="/restaurant-funding-options">restaurant funding options</Link> comparison, plus{' '}
              <Link to="/restaurant-term-loans">restaurant term loans</Link> and{' '}
              <Link to="/sba-loans-for-restaurants">SBA loans for restaurants</Link> for the lower-cost paths.
            </p>
            <p className="occ-disclaim">
              This calculator provides estimates for educational purposes only and is not financial advice or a loan
              offer. Actual rates, terms, and approval vary by lender and by business. Not all applicants qualify.
            </p>
          </article>

          <section className="occ-cta">
            <h2>Want a real number for your restaurant?</h2>
            <p>
              Tell us a little about your restaurant and we&apos;ll help you find funding that fits your cash flow — not
              the most expensive option in the room.
            </p>
            <LeadCaptureForm source="loan-calculator" />
            <p className="occ-cta-alt">
              Or{' '}
              <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL} className="occ-cta-link">
                explore restaurant funding options
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
