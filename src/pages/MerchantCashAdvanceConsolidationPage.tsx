import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { AllIndustriesNote } from '../components/AllIndustriesNote';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { PageHero } from '../components/PageHero';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { getMeta } from '../staticMeta';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const faqItems = [
  {
    q: 'Is MCA consolidation the same as MCA debt restructuring?',
    a: 'No — they are fundamentally different. Consolidation means a new lender pays off your existing MCAs with a new, larger advance. You still owe the full consolidated amount plus a new factor rate. Total cost increases. Restructuring means a professional mediator renegotiates your existing agreements to reduce the remaining balance and lower the holdback rate. No new debt is added. For most restaurants with MCA debt problems, restructuring is the appropriate solution because it reduces total obligations. Consolidation is appropriate only when the problem is payment complexity, not total debt burden.',
  },
  {
    q: 'Will consolidating my MCAs lower my daily payments?',
    a: 'Possibly in the short term — but the total amount you owe usually increases. A consolidation lender pays off your existing positions with a new advance, often adding a 1.30–1.45 factor rate on top of the remaining balances. If you had three MCAs with combined remaining balances of $90,000, the consolidation advance might be $90,000 at a 1.35 factor rate — meaning you now owe $121,500. Your daily payment might be lower because there is only one deduction instead of three, but you are paying it against a larger total obligation.',
  },
  {
    q: 'Can I use an SBA loan or bank loan to consolidate MCA debt?',
    a: 'Theoretically yes — but active MCA UCC liens typically block this path. An SBA or bank lender needs a clean first-lien position on business assets. If you have active "all assets" MCA liens from three lenders, there is no clean collateral position available for a new bank lender. The MCA liens must be released before a bank loan can fund. To get the liens released, the MCAs need to be paid off or settled first — creating a chicken-and-egg problem. This is why many restaurant owners find themselves unable to escape MCAs through conventional refinancing.',
  },
  {
    q: 'What factor rate should I expect on an MCA consolidation advance?',
    a: 'Consolidation advances typically carry factor rates of 1.25–1.45, depending on your revenue, credit profile, and the lenders involved. If your existing MCAs had factor rates of 1.30–1.40, a consolidation advance at 1.35 on a combined balance is not dramatically better — and it extends the repayment timeline, meaning you pay for longer. The key math: multiply the consolidation amount by the new factor rate to find what you will pay in total, then compare that to what you currently owe across all positions.',
  },
  {
    q: 'What are the red flags that a consolidation offer is predatory?',
    a: 'Red flags include: (1) The consolidation lender calls you specifically — they found you via UCC database and know you are in distress. (2) They emphasize monthly payment reduction without disclosing the new total payback amount. (3) The offer requires signing a new personal guarantee. (4) They discourage you from reading the contract carefully or create urgency. (5) The factor rate is higher than your existing positions. (6) The term is significantly longer than your existing positions. Always calculate total payback before signing any consolidation offer.',
  },
  {
    q: 'Is there any situation where MCA consolidation is the right move?',
    a: 'Yes — one specific scenario: when you have multiple MCAs with different daily payment structures that create cash flow timing problems, and the total debt burden is manageable but the complexity of payments is not. For example, three MCAs with deductions on Monday/Wednesday/Friday from different lenders creating uneven cash flow could legitimately be simplified through consolidation into a single daily holdback. This assumes the total remaining balance is serviceable and the consolidation factor rate does not significantly increase the total cost. Outside of this narrow case, restructuring is the better solution.',
  },
];

export function MerchantCashAdvanceConsolidationPage() {
  const meta = getMeta('/merchant-cash-advance-consolidation')!;
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
          { name: 'MCA Consolidation', path: '/merchant-cash-advance-consolidation' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/merchant-cash-advance-consolidation" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Merchant Cash Advance Consolidation: The Math, the Red Flags, and When It Actually Makes Sense</h1>
          <p className="page-lead">
            MCA consolidation is frequently marketed as a solution to MCA debt — but in most cases, it is a new debt product that increases your total obligation while reducing payment complexity. This guide shows you the actual math, the red flags in consolidation offers, and the one narrow scenario where consolidation genuinely helps.
          </p>
          <AllIndustriesNote />
          <div className="article__meta">
            <time className="article__date" dateTime="2026-04-28">Updated: April 28, 2026</time>
          </div>

          <section className="prose-block">
            <h2>What MCA Consolidation Actually Is</h2>
            <p>
              Consolidation means a single lender pays off all of your existing MCA positions simultaneously, replacing them with one new advance. Instead of three daily holdback deductions from three different lenders, you have one deduction from one lender. The pitch is simplicity and lower daily payments.
            </p>
            <p>
              What the pitch does not emphasize: the consolidation lender is also adding a new factor rate on top of the money they paid out to close your existing positions. They paid $90,000 to retire your old MCAs, and now you owe them $90,000 × their factor rate — typically $117,000–$130,500.
            </p>
            <p>
              You went from $90,000 in total remaining MCA obligations to $117,000–$130,500 in a single new obligation. You did not reduce debt. You increased it. The daily payment may be lower because it is spread over a longer term — but the total amount you will pay over the life of the advance is higher.
            </p>
          </section>

          <section className="prose-block">
            <h2>The Break-Even Math: Consolidation vs. Restructuring</h2>
            <p>
              Here is the same $90,000 debt situation resolved through consolidation versus professional restructuring:
            </p>
            <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: 'var(--color-ink)', color: 'var(--color-white)' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Metric</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>MCA Consolidation</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Professional Restructuring</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: 'var(--color-white)', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 1rem' }}>Starting balance</td>
                    <td style={{ padding: '0.65rem 1rem' }}>$90,000</td>
                    <td style={{ padding: '0.65rem 1rem' }}>$90,000</td>
                  </tr>
                  <tr style={{ background: 'var(--color-cream)', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 1rem' }}>Total amount you will pay</td>
                    <td style={{ padding: '0.65rem 1rem', color: '#c53030', fontWeight: 600 }}>$121,500 (1.35× factor)</td>
                    <td style={{ padding: '0.65rem 1rem', color: '#2d6a4f', fontWeight: 600 }}>$36,000–$54,000 (60% reduction)</td>
                  </tr>
                  <tr style={{ background: 'var(--color-white)', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 1rem' }}>New debt added?</td>
                    <td style={{ padding: '0.65rem 1rem', color: '#c53030' }}>Yes — $31,500 more</td>
                    <td style={{ padding: '0.65rem 1rem', color: '#2d6a4f' }}>No</td>
                  </tr>
                  <tr style={{ background: 'var(--color-cream)', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 1rem' }}>UCC liens cleared?</td>
                    <td style={{ padding: '0.65rem 1rem' }}>Old ones — but new lien filed</td>
                    <td style={{ padding: '0.65rem 1rem', color: '#2d6a4f' }}>All liens terminated at close</td>
                  </tr>
                  <tr style={{ background: 'var(--color-white)', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 1rem' }}>Can I access bank financing after?</td>
                    <td style={{ padding: '0.65rem 1rem' }}>No — new MCA lien blocks it</td>
                    <td style={{ padding: '0.65rem 1rem', color: '#2d6a4f' }}>Yes — liens released</td>
                  </tr>
                  <tr style={{ background: 'var(--color-cream)' }}>
                    <td style={{ padding: '0.65rem 1rem' }}>Timeline to resolution</td>
                    <td style={{ padding: '0.65rem 1rem' }}>12–18 months of payments</td>
                    <td style={{ padding: '0.65rem 1rem', color: '#2d6a4f' }}>2–6 weeks negotiation + structured payments</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Consolidation costs $31,500 more than the original debt and leaves you in a new MCA with a new lien. Restructuring costs $36,000–$54,000 versus the original $90,000 — saving $36,000–$54,000 while clearing all liens. For most restaurants, restructuring is the materially better financial outcome.
            </p>
          </section>

          <section className="prose-block">
            <h2>Red Flags in Consolidation Offers</h2>
            <p>
              MCA consolidation lenders specifically target businesses with active MCA stacks — they find you through UCC database searches. When the call comes, watch for these tactics:
            </p>
            <ul>
              <li>
                <strong>They lead with the daily payment, not the total cost.</strong> "We can get your daily payment down to $800" sounds better than "you will pay $121,500 total." Always ask for the total payback amount (advance amount × factor rate).
              </li>
              <li>
                <strong>They create urgency that prevents you from reading the contract.</strong> "This rate expires today" or "your lenders are about to file COJs and we need to move fast" are pressure tactics to prevent you from calculating the true cost.
              </li>
              <li>
                <strong>They require you to sign a new personal guarantee.</strong> A new MCA position means a new personal guarantee. You are not just consolidating debt — you are extending your personal liability into a new obligation.
              </li>
              <li>
                <strong>The factor rate is higher than your existing positions.</strong> Some consolidation lenders charge 1.45–1.55 factor rates to businesses in distress. This significantly increases the total cost over positions that may have been 1.25–1.35.
              </li>
              <li>
                <strong>The term is significantly longer than your existing positions.</strong> A longer term means lower daily payments but more total payments. The revenue you are committing to the advance grows with a longer term.
              </li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>The One Scenario Where Consolidation Makes Sense</h2>
            <p>
              There is one legitimate use case for MCA consolidation:
            </p>
            <p>
              You have multiple MCA positions with different payment structures — some daily, some weekly, some ACH on specific days — and the timing mismatches are creating cash flow disruption that the business could otherwise manage. The total remaining balance is within what the business can sustain (combined holdbacks under 18%). You have good revenue and a reasonable path to paying down the consolidation advance.
            </p>
            <p>
              In this narrow case, consolidating into a single, predictable daily holdback at a reasonable rate simplifies operations without dramatically increasing total cost. The math needs to work: total payback on the consolidation advance should not be significantly more than the combined remaining balances on the existing positions.
            </p>
            <p>
              <strong>The test question:</strong> Take the consolidation advance amount × the factor rate. Compare that number to the sum of your current remaining balances across all positions. If the consolidation number is within 10–15% of what you already owe, it might be worth the simplification. If it is 25–40% more, you are paying heavily for the convenience of one payment.
            </p>
          </section>

          <section className="prose-block">
            <h2>What to Ask Before Accepting Any Consolidation Offer</h2>
            <ul>
              <li><strong>What is the total payback amount?</strong> (Advance amount × factor rate = what you will pay in total)</li>
              <li><strong>What factor rate are you charging?</strong></li>
              <li><strong>Will you file a new UCC lien, or are old liens being transferred?</strong></li>
              <li><strong>What happens to the personal guarantees on the existing MCAs — are they released?</strong></li>
              <li><strong>What happens if I miss a payment under the consolidation agreement?</strong></li>
              <li><strong>Is there a reconciliation provision that reduces my payment in slow months?</strong></li>
              <li><strong>What is the effective APR on this advance?</strong></li>
            </ul>
            <p>
              If the consolidation lender cannot or will not answer these questions clearly before you sign, that is your answer.
            </p>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.25rem 0' }}>
              <strong>Before accepting any consolidation offer:</strong> Get the total payback amount in writing and compare it to the total remaining balances on your existing positions. If you are paying meaningfully more in total, you are not solving a debt problem — you are deepening it. <Link to="/consultation">Schedule a free consultation</Link> to compare consolidation vs. restructuring for your specific numbers.
            </div>
          </section>

          <section className="prose-block">
            <h2>Get a Free Consolidation vs. Restructuring Comparison</h2>
            <p>
              Share your current MCA situation and any consolidation offer you have received. We will show you the math on both options so you can make a clear-eyed decision. No obligation.
            </p>
            <LeadCaptureForm source="mca-consolidation" submitLabel="Compare My Options — Free" />
          </section>

          <section className="prose-block">
            <h2>Related MCA Guides</h2>
            <ul>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Relief: Restructuring vs. Consolidation vs. Settlement</Link></li>
              <li><Link to="/restaurant-mca-stacking">Restaurant MCA Stacking: The Root Cause Consolidation Doesn't Fix</Link></li>
              <li><Link to="/merchant-cash-advance-ucc-lien">MCA UCC Liens: What Consolidation Leaves Behind</Link></li>
              <li><Link to="/merchant-cash-advance-settlement">MCA Settlement: What 40–70% Balance Reduction Actually Looks Like</Link></li>
              <li><Link to="/restaurant-mca-calculator">MCA Holdback Calculator: Run the Numbers on Your Current Burden</Link></li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Frequently Asked Questions</h2>
            {faqItems.map((item) => (
              <div key={item.q} style={{ marginBottom: '1.5rem' }}>
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
