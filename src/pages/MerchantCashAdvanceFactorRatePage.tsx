import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { HowToSchema } from '../components/HowToSchema';
import { PageHero } from '../components/PageHero';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { getMeta } from '../staticMeta';
import { PHONE_NUMBER, PHONE_HREF } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const faqItems = [
  {
    q: 'What factor rate is too high for a merchant cash advance?',
    a: 'A factor rate above 1.40 on an advance with a term of 6–8 months is extremely expensive — equivalent to an APR of 80–130% depending on daily holdback. As a rough guide: factor rates below 1.20 are moderate for short-term MCA; 1.20–1.35 is high but common; 1.35–1.49 is very high and should only be used in genuine short-term emergencies; 1.50 and above is predatory territory for most restaurant situations. The problem is that factor rates feel small because they are stated as a simple multiplier, not as an annual rate. A 1.45 factor rate on an 8-month advance is roughly equivalent to a 120% annual interest rate.',
  },
  {
    q: 'Does your factor rate change if business slows down?',
    a: 'The factor rate itself is fixed — it does not change based on your business performance. The total payback amount (advance × factor rate) is locked at the time you sign. What can change is the timing of repayment: most MCA agreements include a reconciliation provision that allows you to request a lower daily holdback if your actual card sales drop below the projections used to set the holdback. The factor rate stays the same; you just pay it more slowly. If sales increase, you pay it faster. But the total amount owed does not change regardless of how your business performs.',
  },
  {
    q: 'What is the difference between a factor rate and an interest rate?',
    a: 'An interest rate compounds over time — each period, interest is calculated on the remaining principal. If you pay down principal faster, you pay less interest total. A factor rate is applied to the original principal exactly once, at the time of the advance. The total cost is fixed: advance × factor rate = total payback, regardless of how quickly or slowly you repay. This is why early repayment of an MCA does not reduce your total cost. It only reduces the time period over which you make payments — but you still pay the full factor-rate amount.',
  },
  {
    q: 'How do I calculate how much I have already paid vs. how much I still owe?',
    a: 'Total debited to date calculation: count how many business days you have been on the MCA and multiply by your daily holdback amount. Example: 45 business days × $800/day = $36,000 paid. Remaining balance: take your total payback amount (advance × factor rate) and subtract what has been debited. Example: $100,000 advance × 1.35 factor = $135,000 total payback. $135,000 - $36,000 paid = $99,000 remaining. This is your starting point for any settlement or restructuring negotiation. Confirm with the lender — they may have a different "buyout amount" that includes fees.',
  },
  {
    q: 'Can I negotiate my factor rate down after I sign?',
    a: 'No — the factor rate is fixed at signing and cannot be renegotiated after the fact. What you can negotiate post-signing is the remaining balance. If you have paid $36,000 of a $135,000 total and owe $99,000 remaining, a settlement might reduce that $99,000 to $45,000–$60,000 through professional negotiation. The factor rate itself is no longer a live variable — it is the total payback amount and the remaining balance that matter for post-signing negotiation.',
  },
  {
    q: 'What is the "renewal trap" with MCA factor rates?',
    a: 'When a renewal MCA is offered (a new advance to replace or stack on an existing one), the factor rate is applied to the new advance amount — which often includes paying off the remaining balance of the old advance. Example: you owe $60,000 remaining on an old advance. A renewal lender offers $80,000 (which includes the $60,000 payoff plus $20,000 new cash) at a 1.35 factor rate. Your new total payback is $80,000 × 1.35 = $108,000. You received $20,000 in new cash but took on $108,000 in new total obligations — and the 1.35 factor rate was applied to the $60,000 you already owed, effectively re-charging the factor cost on old debt.',
  },
];

export function MerchantCashAdvanceFactorRatePage() {
  const meta = getMeta('/merchant-cash-advance-factor-rate')!;
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
          { name: 'MCA Factor Rate', path: '/merchant-cash-advance-factor-rate' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/merchant-cash-advance-factor-rate" />
      <HowToSchema
        name="How to Calculate Your True MCA Cost Using Factor Rate"
        description="Step-by-step formula to calculate total cost, effective APR, and remaining balance from your merchant cash advance factor rate."
        urlPath="/merchant-cash-advance-factor-rate"
        steps={[
          { name: 'Find your factor rate and advance amount in your contract', text: 'Your MCA agreement will specify the purchased amount (the amount funded to you), the factor rate (sometimes called the buy rate or purchase rate), and the daily holdback amount or holdback percentage. These three numbers are the inputs to all cost calculations.' },
          { name: 'Calculate total payback: advance × factor rate', text: 'Multiply the advance amount by the factor rate. Example: $75,000 advance × 1.40 factor rate = $105,000 total payback. This is the total amount you will pay regardless of timing. The difference ($30,000) is the total cost of the advance.' },
          { name: 'Calculate the implied term in business days', text: 'Divide total payback by daily holdback amount. Example: $105,000 ÷ $900 daily holdback = 116.7 business days ≈ 6 months. This tells you how long the advance will take to repay at the projected holdback rate.' },
          { name: 'Convert to effective APR', text: 'Use this formula: APR = (cost ÷ advance amount) ÷ (implied term in days ÷ 365) × 100. Example: ($30,000 ÷ $75,000) ÷ (117 ÷ 365) × 100 = 40% ÷ 32% × 100 = 125% APR. This is what the advance actually costs on an annualized basis.' },
          { name: 'Calculate your remaining balance', text: 'Multiply your daily holdback by the number of business days since funding to find total paid. Subtract from total payback to get remaining balance. Example: 45 days paid × $900 = $40,500 paid. $105,000 - $40,500 = $64,500 remaining. Confirm with the lender — they may charge fees that affect the buyout amount.' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Merchant Cash Advance Factor Rate: How to Calculate Your True Cost (and What to Do If It's Too High)</h1>
          <p className="page-lead">
            A factor rate of 1.35 sounds modest. Annualized, it can exceed 100% APR. Most restaurant owners who took an MCA focused on the daily payment, not the factor rate — and now owe far more than they realized. This guide explains exactly how factor rates work, how to calculate what you truly owe, and why paying early won't save you money.
          </p>

          <section className="prose-block">
            <h2>What a Factor Rate Is (and What It Is Not)</h2>
            <p>
              A factor rate is a simple multiplier applied to the advance amount to determine the total repayment. It is stated as a decimal: 1.20, 1.35, 1.45. Multiply the advance by the factor rate to get your total payback obligation.
            </p>
            <p>
              What makes factor rates unusual compared to every other common financing structure:
            </p>
            <ul>
              <li><strong>They do not compound.</strong> A 1.35 factor rate on a $50,000 advance means you pay $67,500 total. Period. There is no compounding over time.</li>
              <li><strong>They do not reduce with early payment.</strong> If you pay the full $67,500 in 3 months instead of 6, you pay the same total amount — just faster. You save time, not money.</li>
              <li><strong>They are applied once, at origination.</strong> The cost is built in the moment you sign. After that, the total amount owed is fixed.</li>
              <li><strong>They are not an annual rate.</strong> A 1.35 factor rate sounds conservative compared to a 35% annual interest rate. But on a 6-month advance, 1.35 is equivalent to approximately 70% APR — roughly double the stated factor rate when annualized.</li>
            </ul>
            <p>
              MCA lenders present factor rates (not APR) precisely because they sound lower. A 1.45 factor rate sounds reasonable. A 145% APR sounds outrageous. They are describing the same product.
            </p>
          </section>

          <section className="prose-block">
            <h2>The Total Cost Formula</h2>
            <p>
              Every MCA has one core formula:
            </p>
            <div style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1rem 0', fontFamily: 'monospace', fontSize: '1.1rem' }}>
              <strong>Advance Amount × Factor Rate = Total Payback</strong><br />
              <strong>Total Payback − Advance Amount = Total Cost</strong>
            </div>
            <p>
              Examples:
            </p>
            <ul>
              <li>$50,000 advance × 1.25 factor = $62,500 total payback ($12,500 cost)</li>
              <li>$75,000 advance × 1.35 factor = $101,250 total payback ($26,250 cost)</li>
              <li>$100,000 advance × 1.45 factor = $145,000 total payback ($45,000 cost)</li>
              <li>$150,000 advance × 1.49 factor = $223,500 total payback ($73,500 cost)</li>
            </ul>
            <p>
              On a $100,000 advance at a 1.45 factor rate, your restaurant committed to paying $45,000 — the equivalent of 45% of the advance — as the financing cost, paid back over 6–12 months.
            </p>
          </section>

          <section className="prose-block">
            <h2>How to Convert Factor Rate to Effective APR</h2>
            <p>
              The effective APR depends on both the factor rate and how quickly the advance is repaid (the implied term):
            </p>
            <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: 'var(--color-ink)', color: 'var(--color-white)' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Factor Rate</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>3-Month Implied Term</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>6-Month Implied Term</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>12-Month Implied Term</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { rate: '1.15', three: '60%', six: '30%', twelve: '15%' },
                    { rate: '1.25', three: '100%', six: '50%', twelve: '25%' },
                    { rate: '1.35', three: '140%', six: '70%', twelve: '35%' },
                    { rate: '1.45', three: '180%', six: '90%', twelve: '45%' },
                    { rate: '1.49', three: '196%', six: '98%', twelve: '49%' },
                  ].map((row, i) => (
                    <tr key={row.rate} style={{ background: i % 2 === 0 ? 'var(--color-white)' : 'var(--color-cream)', borderBottom: '1px solid var(--color-cream-dark)' }}>
                      <td style={{ padding: '0.65rem 1rem', fontWeight: 600 }}>{row.rate}</td>
                      <td style={{ padding: '0.65rem 1rem', color: '#c53030' }}>{row.three} APR</td>
                      <td style={{ padding: '0.65rem 1rem', color: '#c53030' }}>{row.six} APR</td>
                      <td style={{ padding: '0.65rem 1rem' }}>{row.twelve} APR</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              The shorter the term, the higher the effective APR for the same factor rate. A 1.35 factor on a 3-month advance is approximately 140% APR. The same factor rate on a 12-month advance is 35% APR — dramatically different costs for the same stated factor rate.
            </p>
            <p>
              Most restaurant MCAs have implied terms of 4–9 months. The APR on a 1.40 factor rate at 6 months is roughly 80%. This is the actual cost of the capital.
            </p>
          </section>

          <section className="prose-block">
            <h2>Why Paying Early Does Not Reduce Your Total Cost</h2>
            <p>
              This is the most surprising characteristic of MCA factor rates, and the most frequently misunderstood.
            </p>
            <p>
              With an interest-bearing loan at 10% annual rate, if you pay it off in 3 months instead of 12, you pay only 3 months of interest instead of 12 months of interest — a 75% reduction in interest cost. Early payoff saves meaningful money with interest-bearing products.
            </p>
            <p>
              With an MCA, the total payback amount ($75,000 × 1.35 = $101,250) is fixed the day you sign. If you pay it off in 2 months or 12 months, you pay the same $101,250 either way. Early payoff only changes the timeline, not the total cost.
            </p>
            <p>
              Some MCA agreements include "early payoff discounts" — a clause that allows you to pay a reduced amount if you pay in full before a certain date. These are rare and must be explicitly written into the agreement. If your agreement does not explicitly include an early payoff discount, assume there is none.
            </p>
            <p>
              The practical implication: if you are considering using revenue from a good month to pay off an MCA early, confirm first whether there is an early payoff discount. If there is not, the prepayment just means you are done faster — but you pay the same amount regardless.
            </p>
          </section>

          <section className="prose-block">
            <h2>Buyout Amount vs. Remaining Balance: Why They Differ</h2>
            <p>
              When you contact an MCA lender and ask "how much do I owe?", they will give you a "buyout amount" — which may differ from the simple math of total payback minus amount paid to date.
            </p>
            <p>
              The buyout amount includes:
            </p>
            <ul>
              <li>The remaining unpaid balance (total payback − paid to date)</li>
              <li>Default fees (if you have missed payments)</li>
              <li>NSF fees (for returned ACH transactions)</li>
              <li>Collection fees or legal fees (if the account is in collection)</li>
              <li>Post-judgment interest (if a COJ has been filed and time has passed)</li>
            </ul>
            <p>
              In practice, the buyout amount is often 10–30% higher than the simple remaining balance calculation. This means that the starting point for any settlement negotiation is the buyout amount, not the mathematical remaining balance. Professional mediators work with the buyout amount and negotiate it down from there.
            </p>
          </section>

          <section className="prose-block">
            <h2>The Renewal Trap: How Factor Rates Compound on Rollovers</h2>
            <p>
              The most expensive MCA situation is a "renewal" or "stack" where a new MCA is used to pay off an existing one. Here is why:
            </p>
            <p>
              Say you took a $75,000 MCA at 1.35 factor ($101,250 total payback). You've paid $45,000, leaving $56,250 remaining. A new lender offers to "consolidate" or "renew" with $80,000 new money ($56,250 payoff + $23,750 new cash) at a 1.35 factor rate.
            </p>
            <p>
              Your new total payback: $80,000 × 1.35 = $108,000. For $23,750 in new cash, you took on a new obligation of $108,000 — and you already paid $45,000 on the old advance. Total spent and committed: $45,000 + $108,000 = $153,000. Total received: $75,000 + $23,750 = $98,750. Total financing cost: $54,250 — on less than $100,000 in actual capital received.
            </p>
            <p>
              This is how restaurants end up with $200,000+ in MCA obligations from original advances that totaled $80,000. Renewal MCA offers — especially when presented as "refinancing" or "relief" — almost always worsen the situation dramatically.
            </p>
          </section>

          <section className="prose-block">
            <h2>If Your Factor Rate Is Too High: What to Do Now</h2>
            <p>
              If you are currently paying an MCA with a factor rate above 1.35 and the holdback is consuming more than 20% of your daily card receipts, the math of continuing to pay in full does not work for most restaurants. Your options:
            </p>
            <ul>
              <li><Link to="/merchant-cash-advance-settlement">MCA settlement</Link> — negotiate a reduced payoff on the remaining balance. Professional mediators routinely reduce remaining balances by 40–70%.</li>
              <li><Link to="/restaurant-mca-debt-relief">MCA debt relief and restructuring</Link> — reduce the holdback rate and extend the repayment timeline without paying the full factor-rate amount.</li>
              <li><Link to="/how-to-get-out-of-merchant-cash-advance">Complete exit from MCA debt</Link> — the full playbook for getting out of MCA positions permanently.</li>
            </ul>
            <p>
              Call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> for a free consultation. Bring your advance amount, factor rate, daily holdback, and number of days you've been paying — we can calculate your exact remaining balance and what a negotiated settlement would look like in minutes.
            </p>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.25rem 0' }}>
              <strong>Quick math on what settlement means:</strong> If you have $90,000 remaining on an MCA and professional settlement achieves a 55% reduction, you pay $40,500 instead of $90,000 — saving $49,500. That $49,500 savings is real cash that stays in your restaurant instead of going to the lender.
            </div>
          </section>

          <section className="prose-block">
            <h2>Calculate Your MCA Cost — Free Consultation</h2>
            <LeadCaptureForm source="mca-factor-rate" submitLabel="Calculate My MCA Cost — Free" />
          </section>

          <section className="prose-block">
            <h2>Related MCA Guides</h2>
            <ul>
              <li><Link to="/restaurant-mca-calculator">MCA Holdback Calculator: See What You're Actually Paying</Link></li>
              <li><Link to="/merchant-cash-advance-consolidation">MCA Consolidation: Why New Factor Rates Make It Worse</Link></li>
              <li><Link to="/merchant-cash-advance-settlement">MCA Settlement: Negotiating Down the Remaining Balance</Link></li>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Relief: Complete Options Guide</Link></li>
              <li><Link to="/how-to-get-out-of-merchant-cash-advance">How to Get Out of a Merchant Cash Advance</Link></li>
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
