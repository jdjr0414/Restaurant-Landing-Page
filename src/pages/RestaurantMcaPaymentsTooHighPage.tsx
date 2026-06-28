import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { AllIndustriesNote } from '../components/AllIndustriesNote';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { PageHero } from '../components/PageHero';
import { getMeta } from '../staticMeta';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const faqItems = [
  {
    q: 'What is a holdback percentage in a merchant cash advance?',
    a: 'The holdback (also called the "retrieval rate" or "remittance rate") is the percentage of your daily card sales that the MCA lender automatically debits each business day. If your holdback is 15% and you process $8,000 in card sales Monday, $1,200 goes to the MCA lender before you see the deposit. A 10–15% holdback is considered manageable. Above 20% starts to compress operating cash significantly.',
  },
  {
    q: 'Can I lower my MCA holdback percentage?',
    a: 'Some MCA contracts include a "true-up" mechanism that lets you request a holdback reduction if revenue falls significantly below the projections used at origination. This requires documentation (bank statements showing the revenue drop) and lender approval. Many contracts do not include this provision. If your contract does not include it, a holdback reduction requires negotiation — which is more likely to succeed with professional mediation support.',
  },
  {
    q: 'What percentage of revenue should MCA payments be?',
    a: 'A combined MCA holdback above 20% of daily card revenue starts to create meaningful operational pressure for most restaurants. Above 25–30%, the holdback typically exceeds the available margin between revenue and fixed costs, making the situation structurally unsustainable regardless of how well the restaurant performs. If you are above these thresholds, the problem is the holdback level, not your operations.',
  },
  {
    q: 'What is the difference between the holdback rate and the factor rate?',
    a: 'The factor rate determines how much you repay in total (e.g., a 1.35 factor rate means you repay $1.35 for every $1.00 advanced). The holdback rate determines how fast you repay it — what percentage of daily card revenue goes to repayment each day. A high holdback rate means faster repayment but less daily operating cash. These are separate terms and you should understand both before signing.',
  },
];

export function RestaurantMcaPaymentsTooHighPage() {
  const meta = getMeta('/restaurant-mca-payments-too-high')!;
  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonicalPath={meta.canonicalPath}
        image={meta.image}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Restaurant MCA Debt Help', path: '/restaurant-mca-debt-help' },
          { name: 'MCA Payments Too High', path: '/restaurant-mca-payments-too-high' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/restaurant-mca-payments-too-high" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Your Restaurant's MCA Daily Payments Are Too High — Here's Why and What to Do</h1>
          <p className="page-lead">
            If your merchant cash advance holdback is consuming most of the cash your restaurant generates each day, the math is telling you something important: the payment is not aligned with your actual revenue. Here is what drives holdback to unsustainable levels and what you can do about it.
          </p>
          <AllIndustriesNote />
          <div className="article__meta">
            <time className="article__date" dateTime="2026-05-21">Updated: May 21, 2026</time>
          </div>

          <section className="prose-block">
            <h2>Why Your MCA Payment Feels Larger Than It Did When You Signed</h2>
            <p>
              Most restaurant owners who describe their MCA payments as "too high" are not necessarily wrong about the contract terms they agreed to. Several things can make the holdback feel larger than it did at origination:
            </p>
            <p>
              <strong>Revenue declined after you signed.</strong> If you took a $40,000 advance when your restaurant was doing $120,000/month and revenue has since dropped to $85,000/month, the same holdback percentage now removes a larger portion of a smaller revenue base. The dollar amount of the daily deduction is lower — but it represents a bigger share of what you have available to operate.
            </p>
            <p>
              <strong>You added more advances (stacking).</strong> If the original advance was manageable, the combination of two or three is not. Each additional holdback compounds the daily cash drain. See <Link to="/restaurant-mca-stacking">restaurant MCA stacking</Link> for the full breakdown.
            </p>
            <p>
              <strong>Seasonal revenue dropped but the holdback did not.</strong> Many MCA agreements have fixed daily or weekly payment amounts rather than a true percentage of card revenue. During slow seasons — January, August — your revenue drops but the fixed payment stays constant. The ratio of payment to revenue deteriorates sharply.
            </p>
            <p>
              <strong>The holdback was high to begin with.</strong> Some MCA lenders offer advances to restaurants with thin margins and high risk profiles at holdback rates of 20–25%. These rates were never sustainable — they were the lender's way of pricing the risk. The restaurant accepted the terms out of urgency, but the structure was problematic from day one.
            </p>
          </section>

          <section className="prose-block">
            <h2>The Holdback Math: When It Stops Working</h2>
            <p>
              A simple way to test whether your holdback is at a sustainable level:
            </p>
            <ul>
              <li>Take your total daily card revenue (monthly card revenue ÷ 22 operating days)</li>
              <li>Calculate your total daily MCA deductions (all positions combined)</li>
              <li>Divide deductions by card revenue to get your effective holdback rate</li>
              <li>If the result is above 20%, operating cash is significantly compressed. Above 25–30%, you are likely operating at a structural deficit — the business is open but cannot cover its cost base from what remains after MCA payments.</li>
            </ul>
            <p>
              A restaurant processing $300,000/month in card sales ($13,600/day) with $3,500/day in total MCA deductions is running at a 25.7% effective holdback. After that deduction, $10,100/day reaches the operating account. If monthly fixed costs are $270,000 ($12,270/day), the math does not work — not because revenue is bad, but because the MCA payment claims too much of it before operations can function.
            </p>
          </section>

          <section className="prose-block">
            <h2>Fixed Payment vs. Percentage Holdback: Why the Difference Matters</h2>
            <p>
              Not all MCA agreements work the same way, and the difference matters significantly when revenue fluctuates — which it always does for restaurants.
            </p>
            <p>
              A <strong>true percentage holdback</strong> takes a fixed percentage of each day's card settlements. If you have a slow Tuesday, the payment is lower. If you have a strong Saturday, the payment is higher. The advance is theoretically "self-adjusting" — slower revenue means slower repayment, which provides some natural relief during slow periods.
            </p>
            <p>
              A <strong>fixed daily or weekly ACH payment</strong> debits a set dollar amount from your business account regardless of what you brought in. If your restaurant did $4,000 on a Monday and the ACH is $1,200, that is 30% of the day gone before anything else. If you did $9,000 the same day last year, the same $1,200 was only 13%. The advance felt manageable last year; it does not now — and the contract has not changed.
            </p>
            <p>
              Many restaurant owners sign fixed-payment MCAs without fully registering the distinction. When they call the lender to complain that payments are "too high," the lender correctly responds that the terms have not changed. What changed is the revenue the restaurant is generating against that fixed obligation. Knowing which type you have is the first step in understanding your options.
            </p>
          </section>

          <section className="prose-block">
            <h2>How to Prepare Before Calling Your Lender to Negotiate</h2>
            <p>
              If you are going to approach your lender about a holdback reduction, walking in with documentation is the difference between a productive conversation and a polite refusal. MCA lenders are accustomed to borrowers calling to complain; they are not accustomed to borrowers arriving with organized financial evidence. The latter gets taken more seriously.
            </p>
            <p>
              Before you call:
            </p>
            <ul>
              <li><strong>Pull 6 months of bank statements.</strong> Mark the months where revenue was materially lower than the period when you took the advance. The lender will ask for these.</li>
              <li><strong>Pull your merchant processing statements.</strong> These show card volume by month and are often more convincing than bank statements alone because they separate card revenue from other deposits.</li>
              <li><strong>Calculate the specific number you need.</strong> Do not call and say payments are too high. Call and say: "My current holdback is $1,400/day. Based on current card volume of $6,200/day, I need the holdback reduced to $900/day to cover payroll and rent. Here is the documentation showing the revenue change." A specific ask backed by math is harder to dismiss.</li>
              <li><strong>Know your cure period and default timeline.</strong> If you are already behind, tell the lender before they find out another way. Calling proactively — even after a missed payment — is meaningfully better than letting them initiate the default process. A lender you called is in a different conversation than a lender hunting you down.</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Options to Lower Your MCA Payment</h2>
            <p>
              The available options depend on where you are in the repayment cycle and how the original contract was structured.
            </p>
            <p>
              <strong>True-up adjustment (if your contract allows it).</strong> Some MCA agreements include a provision allowing you to request a holdback reduction if your actual revenue falls materially below the projections at origination. This requires documentation — bank statements showing the revenue drop — and lender approval. Not all contracts include this provision, but it is worth reviewing your agreement to check.
            </p>
            <p>
              <strong>Direct negotiation with the lender.</strong> If the holdback is causing you to fall behind on other obligations but you are still current on MCA payments, contacting the lender proactively may open a conversation about temporary holdback reduction. Lenders prefer a current borrower who is communicating over one who goes silent and misses payments. Present specific numbers: here is my monthly revenue, here is the holdback consuming X%, here is what I can sustain.
            </p>
            <p>
              <strong>Professional MCA restructuring.</strong> A professional mediator negotiates the terms of your existing MCA positions — potentially reducing both the remaining balance owed and the daily holdback rate to a level the restaurant can sustain. This is the highest-efficacy path for restaurants where direct negotiation has not produced results or where multiple positions are involved. <Link to="/consultation">Schedule a free consultation</Link> to review your MCA positions and understand what a restructuring program could look like.
            </p>
            <p>
              <strong>MCA consolidation.</strong> A single lender pays off all existing positions with one new advance at a consolidated holdback rate. This reduces multiple deductions to one and may lower the effective daily payment — but does not reduce the total amount owed (because the new lender adds their factor rate). Consolidation is appropriate when the problem is the number of positions rather than the total debt burden.
            </p>
          </section>

          <section className="prose-block">
            <h2>What Not to Do When Payments Are Too High</h2>
            <p>
              The most common mistake restaurant owners make when MCA payments are too high is taking another advance to cover operating gaps caused by the existing payments. This is the stacking trap:
            </p>
            <ul>
              <li>Current MCAs are consuming too much daily revenue, leaving insufficient cash for operations</li>
              <li>A new advance provides relief — for a few weeks</li>
              <li>The new advance adds another holdback on top of the existing ones</li>
              <li>Net available operating cash is now lower than before the new advance</li>
              <li>The cycle repeats until the combined holdbacks are truly unmanageable</li>
            </ul>
            <p>
              If your MCA payment is already too high, a new MCA will make it worse — not better. The solution has to reduce what you owe or what you are paying daily, not add to it.
            </p>
          </section>

          <section className="prose-block">
            <h2>When to Get Professional Help</h2>
            <p>
              Professional MCA debt restructuring makes sense when:
            </p>
            <ul>
              <li>Your combined holdbacks exceed 20% of daily card revenue</li>
              <li>You have tried to negotiate directly with lenders and did not reach workable terms</li>
              <li>You are currently behind on other obligations (rent, payroll, vendors) because of MCA payments</li>
              <li>You have more than one active MCA position</li>
            </ul>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1rem 0 1.25rem' }}>
              <strong>What restructuring typically achieves:</strong> Professional mediators typically negotiate 40–70% reductions on remaining balances and bring combined holdback rates down to 10–15% of card revenue — freeing hundreds or thousands of dollars per day for actual operations. Use the <Link to="/restaurant-mca-calculator">MCA holdback calculator</Link> to see what your specific situation looks like in numbers.
            </div>
            <p>
              For more context on the full picture of restaurant MCA debt, see the <Link to="/restaurant-mca-debt-help">restaurant MCA debt help guide</Link>.
            </p>
            <LeadCaptureForm source="restaurant-mca-payments-too-high" submitLabel="Lower My MCA Payments — Free Assessment" />
          </section>

          <section className="prose-block">
            <h2>Related Guides in This Series</h2>
            <ul>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Help: The Complete Guide</Link></li>
              <li><Link to="/cant-pay-restaurant-mca">Can't Pay Your Restaurant MCA? What to Do Right Now</Link></li>
              <li><Link to="/restaurant-mca-default">Restaurant MCA Default: What Happens and What to Do</Link></li>
              <li><Link to="/restaurant-mca-stacking">Restaurant MCA Stacking: When Multiple Advances Stack Up</Link></li>
              <li><Link to="/restaurant-mca-calculator">MCA Holdback Calculator: See Your Burden &amp; Savings</Link></li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Frequently Asked Questions</h2>
            {faqItems.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
