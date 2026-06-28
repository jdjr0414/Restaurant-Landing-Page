import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { AllIndustriesNote } from '../components/AllIndustriesNote';
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
    a: 'A factor rate above 1.40 on a 6 to 8 month advance is brutally expensive, landing somewhere around 80 to 130% APR depending on the daily holdback. Use this as a rough yardstick: below 1.20 is moderate for short-term MCA; 1.20 to 1.35 is high but common; 1.35 to 1.49 is very high and only makes sense in a genuine short-term emergency; 1.50 and up is predatory for most restaurants. The trap is that the number feels small, because it is written as a plain multiplier instead of an annual rate. A 1.45 factor rate on an 8-month advance is roughly a 120% annual interest rate in disguise.',
  },
  {
    q: 'Does your factor rate change if business slows down?',
    a: 'No. The factor rate is fixed and pays no attention to how your business does. The total payback (advance × factor rate) is locked the moment you sign. What can move is the timing. Most MCA agreements carry a reconciliation provision that lets you ask for a lower daily holdback when your actual card sales fall below the projections used to set it. The factor rate holds steady; you just pay it off more slowly. When sales climb, you pay faster. Either way, the total you owe never budges.',
  },
  {
    q: 'What is the difference between a factor rate and an interest rate?',
    a: 'An interest rate compounds. Every period, interest is figured on whatever principal is still outstanding, so paying the principal down faster means less interest overall. A factor rate touches your principal exactly once, on the day of the advance. The cost is set in stone: advance × factor rate = total payback, no matter how fast or slow you repay. That is why clearing an MCA early never shrinks the total. It only shortens the stretch of time you make payments. The full factor-rate amount still comes due.',
  },
  {
    q: 'How do I calculate how much I have already paid vs. how much I still owe?',
    a: 'Start with what you have paid so far. Count the business days you have been on the MCA and multiply by your daily holdback. Example: 45 business days × $800/day = $36,000 paid. Then find the remaining balance by taking your total payback (advance × factor rate) and subtracting what has already been debited. Example: $100,000 advance × 1.35 factor = $135,000 total payback. $135,000 - $36,000 paid = $99,000 remaining. That figure is your jumping-off point for any settlement or restructuring talk. Always confirm with the lender, since their "buyout amount" may fold in fees and come out higher.',
  },
  {
    q: 'Can I negotiate my factor rate down after I sign?',
    a: 'No. Once you sign, the factor rate is locked and there is no renegotiating it. The thing you can negotiate afterward is the remaining balance. If you have paid $36,000 of a $135,000 total and $99,000 is still owed, skilled negotiation might bring that $99,000 down to somewhere around $45,000 to $60,000. By then the factor rate is no longer a live number. What matters is the total payback and the remaining balance.',
  },
  {
    q: 'What is the "renewal trap" with MCA factor rates?',
    a: 'When a renewal MCA shows up (a new advance that replaces or stacks on top of your current one), the factor rate gets applied to the whole new advance, and that new advance usually swallows the leftover balance of the old one. Picture it: you still owe $60,000 on an old advance. A renewal lender offers $80,000, which covers the $60,000 payoff plus $20,000 in new cash, at a 1.35 factor rate. Your new total payback is $80,000 × 1.35 = $108,000. You pocketed $20,000 in fresh cash but signed up for $108,000 in new obligations. Worse, the 1.35 factor rate just got slapped onto the $60,000 you already owed, charging you factor cost a second time on old debt.',
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
            A factor rate of 1.35 sounds modest. Annualized, it can blow past 100% APR. Most restaurant owners who took an MCA were watching the daily payment, not that little multiplier, and now they owe far more than they expected. This guide walks through how factor rates actually work, how to figure out what you truly owe, and why paying early won't save you a dime.
          </p>
          <AllIndustriesNote />

          <section className="prose-block">
            <h2>What a Factor Rate Is (and What It Is Not)</h2>
            <p>
              Start here, because almost every bad MCA decision traces back to misreading this one number. A factor rate is a plain multiplier on your advance amount, and it sets the total you repay. Lenders write it as a decimal: 1.20, 1.35, 1.45. Multiply the advance by that number and there is your total payback obligation.
            </p>
            <p>
              Here is what sets factor rates apart from almost every other kind of financing you have used:
            </p>
            <ul>
              <li><strong>They do not compound.</strong> A 1.35 factor rate on a $50,000 advance means you pay $67,500 total. That is the whole number. Nothing builds on top of it over time.</li>
              <li><strong>They do not shrink when you pay early.</strong> Pay that $67,500 off in 3 months instead of 6 and you still owe $67,500. You bought back your time, not your money.</li>
              <li><strong>They are applied once, at origination.</strong> The cost is baked in the moment you sign. From then on, the total owed never moves.</li>
              <li><strong>They are not an annual rate.</strong> A 1.35 factor rate sounds tame next to a 35% annual interest rate. Yet on a 6-month advance, that same 1.35 works out to roughly 70% APR, about double the headline number once you annualize it.</li>
            </ul>
            <p>
              Lenders lead with the factor rate instead of the APR for one simple reason. It sounds smaller. Say "1.45 factor rate" out loud and it reads as reasonable. Say "145% APR" and it reads as loan-sharking. Same product. Two completely different gut reactions, and they are counting on yours.
            </p>
          </section>

          <section className="prose-block">
            <h2>The Total Cost Formula</h2>
            <p>
              Strip away the jargon and every MCA comes down to one piece of arithmetic. Learn it once and you can check any offer in your head:
            </p>
            <div style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1rem 0', fontFamily: 'monospace', fontSize: '1.1rem' }}>
              <strong>Advance Amount × Factor Rate = Total Payback</strong><br />
              <strong>Total Payback − Advance Amount = Total Cost</strong>
            </div>
            <p>
              Run a few real numbers through it:
            </p>
            <ul>
              <li>Borrow $50,000 at a gentle 1.25 factor and you repay $62,500, so the money costs you $12,500.</li>
              <li>Take $75,000 at 1.35 and the meter reads $101,250 by the end, a $26,250 cost of capital.</li>
              <li>A $100,000 advance at 1.45 balloons to $145,000 owed, with $45,000 of that being pure financing charge.</li>
              <li>Push it to $150,000 at a 1.49 factor and you are on the hook for $223,500, of which $73,500 is cost alone.</li>
            </ul>
            <p>
              Put that in restaurant terms. On a $100,000 advance at a 1.45 factor rate, your kitchen signed up to hand over $45,000 in financing cost alone, which is 45 cents on every borrowed dollar, all of it paid back inside 6 to 12 months.
            </p>
          </section>

          <section className="prose-block">
            <h2>How to Convert Factor Rate to Effective APR</h2>
            <p>
              Two things drive the effective APR: the factor rate, and how fast you repay (what lenders call the implied term). Speed up the payback and the APR shoots up, because you are paying the same fixed cost over fewer days. The table below shows how the same factor rate looks at three different speeds:
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
              The shorter the term, the higher the effective APR for the same factor rate. A 1.35 factor on a 3-month advance lands near 140% APR. Stretch that same factor over 12 months and it falls to 35% APR. Same number on the contract, wildly different cost.
            </p>
            <p>
              Most restaurant MCAs run an implied term of 4 to 9 months. At 6 months, a 1.40 factor rate works out to roughly 80% APR. That is what the money actually costs you.
            </p>
          </section>

          <section className="prose-block">
            <h2>Why Paying Early Does Not Reduce Your Total Cost</h2>
            <p>
              Of everything about factor rates, this is the part that catches owners off guard the most. It runs against every instinct you built up paying off ordinary loans.
            </p>
            <p>
              Take a normal interest-bearing loan at 10% a year. Pay it off in 3 months instead of 12 and you only owe 3 months of interest, a 75% cut in what the interest costs you. With those products, paying early genuinely puts money back in your pocket.
            </p>
            <p>
              An MCA does not work that way. The total payback ($75,000 × 1.35 = $101,250) locks in the day you sign. Clear it in 2 months or drag it out to 12 and the bill is the same $101,250. All early payoff buys you is a shorter calendar.
            </p>
            <p>
              A few MCA agreements do build in an "early payoff discount," a clause that lets you settle for less if you pay in full before a set date. They are uncommon, and the discount has to be spelled out in the contract. If yours does not say so in writing, assume it isn't there.
            </p>
            <p>
              So before you throw a strong month's revenue at an MCA to clear it early, check the agreement for that discount clause first. No clause, no savings. You finish sooner, but you still pay every dollar.
            </p>
          </section>

          <section className="prose-block">
            <h2>Buyout Amount vs. Remaining Balance: Why They Differ</h2>
            <p>
              Call your MCA lender and ask "how much do I owe?" The number they hand back is a "buyout amount," and it rarely matches the clean math of total payback minus what you have paid so far.
            </p>
            <p>
              Why the gap? The buyout amount usually rolls in a stack of extras:
            </p>
            <ul>
              <li>The remaining unpaid balance (total payback − paid to date)</li>
              <li>Default fees (if you have missed payments)</li>
              <li>NSF fees (for returned ACH transactions)</li>
              <li>Collection fees or legal fees (if the account is in collection)</li>
              <li>Post-judgment interest (if a COJ has been filed and time has passed)</li>
            </ul>
            <p>
              In practice, that buyout figure tends to run 10 to 30% above the tidy remaining-balance math. So your real starting line for any settlement is the buyout amount, not the number you worked out on a napkin. Professional mediators take the lender's buyout figure and push it down from there.
            </p>
          </section>

          <section className="prose-block">
            <h2>The Renewal Trap: How Factor Rates Compound on Rollovers</h2>
            <p>
              This is where good restaurants quietly drown. The priciest spot you can land in is a "renewal" or "stack," where a fresh MCA is taken out to pay off the one you already have. It feels like relief in the moment. Walk through the numbers and you'll see why it almost never is.
            </p>
            <p>
              Say you took a $75,000 MCA at 1.35 factor ($101,250 total payback). You've paid $45,000, so $56,250 is left. A new lender offers to "consolidate" or "renew" with $80,000 of new money ($56,250 to clear the old balance plus $23,750 in fresh cash) at a 1.35 factor rate.
            </p>
            <p>
              Your new total payback is $80,000 × 1.35 = $108,000. So for $23,750 of actual new cash, you just signed up for a $108,000 obligation, on top of the $45,000 you already poured into the first advance. Add it up: $45,000 + $108,000 = $153,000 spent and committed against $75,000 + $23,750 = $98,750 received. The financing cost alone is $54,250 on less than $100,000 of real capital.
            </p>
            <p>
              This is exactly how a restaurant ends up staring at $200,000 or more in MCA obligations that started as an $80,000 advance. When a renewal lands in your inbox dressed up as "refinancing" or "relief," it almost always makes things worse, not better.
            </p>
          </section>

          <section className="prose-block">
            <h2>If Your Factor Rate Is Too High: What to Do Now</h2>
            <p>
              If you're paying an MCA with a factor rate north of 1.35 and the holdback is eating more than 20% of your daily card receipts, the math of paying it out in full simply doesn't work for most restaurants. Here is where to look instead:
            </p>
            <ul>
              <li><Link to="/merchant-cash-advance-settlement">MCA settlement</Link>: negotiate a reduced payoff on the remaining balance. Professional mediators routinely cut remaining balances by 40 to 70%.</li>
              <li><Link to="/restaurant-mca-debt-relief">MCA debt relief and restructuring</Link>: bring the holdback rate down and stretch out the timeline without paying the full factor-rate amount.</li>
              <li><Link to="/how-to-get-out-of-merchant-cash-advance">Complete exit from MCA debt</Link>: the full playbook for getting out of MCA positions for good.</li>
            </ul>
            <p>
              Call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> for a free consultation. Have four numbers ready: your advance amount, factor rate, daily holdback, and how many days you've been paying. With those, we can pin down your exact remaining balance and sketch what a negotiated settlement looks like in a matter of minutes.
            </p>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.25rem 0' }}>
              <strong>Quick math on what settlement means:</strong> Say you have $90,000 remaining on an MCA and professional settlement lands a 55% reduction. You pay $40,500 instead of $90,000, a savings of $49,500. That $49,500 is real cash that stays in your restaurant instead of disappearing into the lender's account.
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
