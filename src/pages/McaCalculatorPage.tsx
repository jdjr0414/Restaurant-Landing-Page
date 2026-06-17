import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { PageHero } from '../components/PageHero';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { getMeta } from '../staticMeta';
import { PHONE_NUMBER, PHONE_HREF } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const OPERATING_DAYS = 22;
const SUSTAINABLE_HOLDBACK = 0.15;
const YELLOW_THRESHOLD = 0.20;
const RED_THRESHOLD = 0.25;

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function pct(n: number) {
  return (n * 100).toFixed(1) + '%';
}

export function McaCalculatorPage() {
  const meta = getMeta('/restaurant-mca-calculator')!;

  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [dailyDeduction, setDailyDeduction] = useState('');
  const [remainingBalance, setRemainingBalance] = useState('');

  const rev = parseFloat(monthlyRevenue.replace(/[^0-9.]/g, '')) || 0;
  const ded = parseFloat(dailyDeduction.replace(/[^0-9.]/g, '')) || 0;
  const bal = parseFloat(remainingBalance.replace(/[^0-9.]/g, '')) || 0;

  const dailyRevenue = rev / OPERATING_DAYS;
  const holdbackRate = dailyRevenue > 0 ? ded / dailyRevenue : 0;
  const monthlyMcaCost = ded * OPERATING_DAYS;
  const sustainableMonthlyPayment = dailyRevenue * OPERATING_DAYS * SUSTAINABLE_HOLDBACK;
  const monthlyFreed = monthlyMcaCost - sustainableMonthlyPayment;
  const annualFreed = monthlyFreed * 12;
  const hasResults = rev > 0 && ded > 0;

  let riskLevel: 'green' | 'yellow' | 'red' = 'green';
  let riskLabel = 'Manageable';
  let riskMessage = 'Your holdback rate is within a sustainable range. Payments may be manageable relative to your revenue.';
  if (holdbackRate >= RED_THRESHOLD) {
    riskLevel = 'red';
    riskLabel = 'Structurally Unsustainable';
    riskMessage = 'At this holdback rate, your MCA payments are consuming more than your operating margin. This situation typically requires professional restructuring.';
  } else if (holdbackRate >= YELLOW_THRESHOLD) {
    riskLevel = 'yellow';
    riskLabel = 'High Pressure';
    riskMessage = 'Your holdback rate is above the threshold where most restaurants start to feel serious operational pressure. Every dollar above 20% is coming directly out of your operating margin.';
  }

  const riskColors: Record<string, { bg: string; border: string; text: string }> = {
    green: { bg: '#f0fff4', border: '#2d6a4f', text: '#2d6a4f' },
    yellow: { bg: '#fffbeb', border: '#c17f3a', text: '#8b5a28' },
    red: { bg: '#fff5f5', border: '#c53030', text: '#c53030' },
  };
  const colors = riskColors[riskLevel];

  const calcFaqItems = [
    {
      q: 'How is MCA holdback rate calculated?',
      a: 'Your effective holdback rate equals your total daily MCA deductions divided by your daily card revenue. Daily card revenue is your monthly card sales divided by 22 (approximate operating days per month). For example: $1,800/day in deductions ÷ ($90,000/month ÷ 22 days = $4,090/day) = 44% effective holdback rate. Most sustainable holdbacks are 10–15%.',
    },
    {
      q: 'What holdback rate is too high for a restaurant?',
      a: 'Above 20% is elevated pressure. Above 25% is structurally unsustainable for most restaurants — the holdback consumes more than the typical operating margin, meaning the business cannot cover its cost structure from what remains after MCA payments. A restaurant with a 5% net margin cannot mathematically sustain a 25% holdback regardless of revenue volume.',
    },
    {
      q: 'How much can MCA debt be reduced through restructuring?',
      a: 'Professional MCA mediators typically achieve 40–70% reductions on remaining balances. This means a $100,000 remaining balance is often resolved for $30,000–$60,000 through negotiated settlement. The specific outcome depends on the lender, how far behind payments are, and whether the restaurant is still operating when negotiations begin.',
    },
    {
      q: 'What is a merchant cash advance factor rate?',
      a: 'A factor rate determines how much you repay in total. A 1.35 factor rate on a $60,000 advance means you repay $81,000 total (60,000 × 1.35). There are no monthly payments or interest accrual — you owe the total payback amount regardless of how long it takes. The holdback rate determines how fast you repay it by setting what percentage of daily card sales goes to repayment each day.',
    },
    {
      q: 'How long does it take to pay off an MCA?',
      a: 'MCAs typically have implied terms of 6–18 months, but the actual term varies because repayment is tied to card revenue — slower revenue means slower repayment. A true percentage holdback (not a fixed daily ACH) extends the term automatically during slow periods. This self-adjustment feature is one of the key differences between a true MCA and a disguised loan with fixed daily payments.',
    },
  ];

  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonicalPath={meta.canonicalPath}
        image={meta.image}
      />
      <BlogFaqSchema items={calcFaqItems} urlPath="/restaurant-mca-calculator" />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Restaurant MCA Debt Help', path: '/restaurant-mca-debt-help' },
          { name: 'MCA Holdback Calculator', path: '/restaurant-mca-calculator' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Restaurant MCA Holdback Calculator</h1>
          <p className="page-lead">
            Enter your numbers below to see your current MCA burden, whether your holdback rate is sustainable, and how much cash you would free up if payments were restructured.
          </p>

          <section className="prose-block">
            <div style={{ background: 'var(--color-cream-dark)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ marginTop: 0 }}>Your MCA Numbers</h2>

              <div style={{ display: 'grid', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Monthly card / credit card revenue
                  </label>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
                    Your total monthly credit and debit card sales (not total revenue — just card volume).
                  </p>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', fontWeight: 600, color: 'var(--color-ink-muted)' }}>$</span>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 85000"
                      value={monthlyRevenue}
                      onChange={e => setMonthlyRevenue(e.target.value)}
                      className="lead-form__input"
                      style={{ paddingLeft: '1.75rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Total daily MCA deductions (all positions combined)
                  </label>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
                    Add up every daily holdback deduction across all active MCAs. Check your bank statement — these appear as daily debits from your MCA lenders.
                  </p>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', fontWeight: 600, color: 'var(--color-ink-muted)' }}>$</span>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 1850"
                      value={dailyDeduction}
                      onChange={e => setDailyDeduction(e.target.value)}
                      className="lead-form__input"
                      style={{ paddingLeft: '1.75rem' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Total remaining MCA balance across all positions <span style={{ fontWeight: 400, color: 'var(--color-ink-muted)' }}>(optional)</span>
                  </label>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
                    The total amount still owed across all MCAs. Used to estimate potential settlement savings. Leave blank to skip.
                  </p>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', fontWeight: 600, color: 'var(--color-ink-muted)' }}>$</span>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 120000"
                      value={remainingBalance}
                      onChange={e => setRemainingBalance(e.target.value)}
                      className="lead-form__input"
                      style={{ paddingLeft: '1.75rem' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {hasResults && (
              <div style={{ display: 'grid', gap: '1.25rem' }}>

                {/* Risk Level */}
                <div style={{ background: colors.bg, border: `2px solid ${colors.border}`, borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '1.75rem', fontWeight: 800, color: colors.text }}>{pct(holdbackRate)}</span>
                    <div>
                      <div style={{ fontWeight: 700, color: colors.text, fontSize: '1.05rem' }}>Effective Holdback Rate — {riskLabel}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>of daily card revenue going to MCA payments before operations</div>
                    </div>
                  </div>
                  <p style={{ margin: 0, color: 'var(--color-ink)', fontSize: '0.95rem' }}>{riskMessage}</p>
                </div>

                {/* Current Burden */}
                <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-cream-dark)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                  <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Your Current MCA Burden</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ background: 'var(--color-cream)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-ink)' }}>{fmt(monthlyMcaCost)}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>Monthly MCA payments</div>
                    </div>
                    <div style={{ background: 'var(--color-cream)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-ink)' }}>{fmt(rev - monthlyMcaCost)}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>Remaining for operations/month</div>
                    </div>
                  </div>
                </div>

                {/* Restructuring Savings */}
                {monthlyFreed > 0 && (
                  <div style={{ background: '#f0fff4', border: '2px solid #2d6a4f', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                    <h3 style={{ marginTop: 0, color: '#2d6a4f' }}>If Restructured to a Sustainable 15% Holdback</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2d6a4f' }}>{fmt(sustainableMonthlyPayment)}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>New monthly MCA payment</div>
                      </div>
                      <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2d6a4f' }}>{fmt(monthlyFreed)}/mo</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>Cash freed up monthly</div>
                      </div>
                    </div>
                    <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                      <div style={{ fontSize: '2rem', fontWeight: 800, color: '#2d6a4f' }}>{fmt(annualFreed)}</div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>Total cash freed up over 12 months</div>
                    </div>
                    <p style={{ margin: '1rem 0 0', fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>
                      Based on reducing your combined holdback from {pct(holdbackRate)} to 15%. Professional MCA mediators typically achieve holdback reductions through negotiated restructuring of existing agreement terms.
                    </p>
                  </div>
                )}

                {/* Balance Savings */}
                {bal > 0 && (
                  <div style={{ background: '#ebf4f8', border: '2px solid #2c5282', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                    <h3 style={{ marginTop: 0, color: '#2c5282' }}>Potential Balance Reduction</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '0.75rem' }}>
                      <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-ink)' }}>{fmt(bal)}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>Current remaining balance</div>
                      </div>
                      <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '1rem', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#2c5282' }}>{fmt(bal * 0.5)}</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>Estimated settlement at 50% reduction</div>
                      </div>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>
                      Professional MCA mediators have achieved balance reductions of 40–70% on remaining balances in many cases. A 50% reduction is used here as a midpoint estimate. Actual outcomes depend on your lenders, the number of positions, and how far behind payments are.
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div style={{ background: 'var(--color-ink)', borderRadius: 'var(--radius-lg)', padding: '2rem', color: 'var(--color-white)' }}>
                  <h2 style={{ marginTop: 0, color: 'var(--color-white)' }}>Get a Free Assessment of Your Situation</h2>
                  <p style={{ color: '#cbd5e0', marginBottom: '1.5rem' }}>
                    These numbers give you a starting picture. A free consultation gives you a specific assessment of your contracts, lender positions, and what restructuring would look like for your restaurant. No obligation — just clarity on your options.
                  </p>
                  <p style={{ color: '#cbd5e0', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                    Or call us directly: <a href={PHONE_HREF} style={{ color: 'var(--color-amber-light)', fontWeight: 600 }}>{PHONE_NUMBER}</a>
                  </p>
                  <LeadCaptureForm source="mca-calculator" submitLabel="Get My Free MCA Assessment" />
                </div>
              </div>
            )}

            {!hasResults && (
              <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-cream-dark)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'center', color: 'var(--color-ink-muted)' }}>
                <p style={{ margin: 0 }}>Enter your monthly card revenue and daily MCA deductions above to see your results.</p>
              </div>
            )}
          </section>

          <section className="prose-block">
            <h2>Sample Results: What These Numbers Look Like at Different Revenue Levels</h2>
            <p>
              Not sure what to enter or want to see how the numbers work before using your own? Here are three pre-calculated scenarios showing what different holdback situations look like — and what restructuring would save.
            </p>
            <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: 'var(--color-ink)', color: 'var(--color-white)' }}>
                    <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left' }}>Scenario</th>
                    <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left' }}>Monthly Revenue</th>
                    <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left' }}>Daily Deductions</th>
                    <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left' }}>Holdback Rate</th>
                    <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left' }}>Monthly MCA Cost</th>
                    <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left' }}>Cash Freed if Restructured to 15%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: '#f0fff4', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 0.9rem', fontWeight: 600 }}>Manageable (1 MCA)</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$85,000</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$580/day</td>
                    <td style={{ padding: '0.65rem 0.9rem', color: '#2d6a4f', fontWeight: 600 }}>15%</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$12,760</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>—</td>
                  </tr>
                  <tr style={{ background: '#fffbeb', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 0.9rem', fontWeight: 600 }}>High Pressure (2 MCAs)</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$120,000</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$1,450/day</td>
                    <td style={{ padding: '0.65rem 0.9rem', color: '#8b5a28', fontWeight: 600 }}>26.6%</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$31,900</td>
                    <td style={{ padding: '0.65rem 0.9rem', color: '#2d6a4f', fontWeight: 600 }}>+$13,700/mo</td>
                  </tr>
                  <tr style={{ background: '#fff5f5' }}>
                    <td style={{ padding: '0.65rem 0.9rem', fontWeight: 600 }}>Unsustainable (3 MCAs)</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$200,000</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$4,100/day</td>
                    <td style={{ padding: '0.65rem 0.9rem', color: '#c53030', fontWeight: 600 }}>45.1%</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$90,200</td>
                    <td style={{ padding: '0.65rem 0.9rem', color: '#2d6a4f', fontWeight: 600 }}>+$60,200/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>
              "Cash freed if restructured to 15%" assumes holdback rate is reduced to 15% through professional mediation. Actual restructuring outcomes depend on specific lenders, balance, and payment history. Use the calculator above with your actual numbers for a personalized estimate.
            </p>
          </section>

          <section className="prose-block">
            <h2>How to Read Your Results</h2>
            <p>
              <strong>Effective holdback rate</strong> is the most important number. It tells you what percentage of your daily card revenue is going to MCA payments before your business can cover any operating expense. Industry experience shows:
            </p>
            <ul>
              <li><strong>Under 15%:</strong> Generally manageable. The advance is being repaid without materially compressing your operating cash.</li>
              <li><strong>15–20%:</strong> Elevated pressure. One slow week or an unexpected cost can push you into a shortfall. Manageable with tight operations but not sustainable long-term with multiple positions.</li>
              <li><strong>20–25%:</strong> High risk. At this level, most restaurants cannot cover their full cost structure from remaining daily deposits. Operating reserves deplete over time.</li>
              <li><strong>Above 25%:</strong> Structurally unsustainable. The math does not work regardless of how well the restaurant performs. The holdback exceeds the typical operating margin, meaning the business cannot survive at this payment level indefinitely.</li>
            </ul>
            <p>
              The restructuring savings estimate assumes your holdback is reduced to 15% — a sustainable level for most restaurants. Professional MCA mediators negotiate both holdback rate reductions and remaining balance reductions simultaneously, which is why the results can be significant.
            </p>
            <p>
              For more context on how this works, see the <Link to="/restaurant-mca-debt-help">restaurant MCA debt help guide</Link> or <Link to="/restaurant-mca-payments-too-high">what to do when your MCA payments are too high</Link>.
            </p>
          </section>

          <section className="prose-block">
            <h2>Frequently Asked Questions</h2>
            {calcFaqItems.map((item) => (
              <div key={item.q} style={{ marginBottom: '1.5rem' }}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>

          <section className="prose-block">
            <h2>Related MCA Guides</h2>
            <ul>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Relief: The Complete Guide</Link></li>
              <li><Link to="/how-to-get-out-of-merchant-cash-advance">How to Get Out of a Merchant Cash Advance: Every Exit Path</Link></li>
              <li><Link to="/merchant-cash-advance-settlement">Merchant Cash Advance Settlement: What to Expect</Link></li>
              <li><Link to="/restaurant-mca-stacking">Restaurant MCA Stacking: When Multiple Advances Stack Up</Link></li>
              <li><Link to="/cant-pay-restaurant-mca">Can't Pay Your Restaurant MCA? What to Do Right Now</Link></li>
              <li><Link to="/restaurant-mca-default">Restaurant MCA Default: What Happens and What to Do</Link></li>
              <li><Link to="/restaurant-mca-payments-too-high">Your Restaurant MCA Payments Are Too High — Here's Why</Link></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
