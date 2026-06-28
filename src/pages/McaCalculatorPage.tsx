import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { AllIndustriesNote } from '../components/AllIndustriesNote';
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

const toggleBase: React.CSSProperties = {
  padding: '0.5rem 1.5rem',
  fontWeight: 600,
  fontSize: '0.9375rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'background 0.15s, color 0.15s',
  fontFamily: 'inherit',
};

const calcFaqItems = [
  {
    q: 'What is a merchant cash advance holdback rate?',
    a: 'The holdback rate — also called the retrieval rate or remittance rate — is the percentage of your daily credit and debit card sales that the MCA lender automatically debits each business day. For example, a 15% holdback rate means $150 is deducted for every $1,000 in daily card sales. If you have a fixed daily ACH payment rather than a true percentage holdback, you calculate the effective holdback rate by dividing your daily payment by your average daily card revenue. This calculator computes that effective rate for you.',
  },
  {
    q: 'How do you calculate the MCA holdback rate for a restaurant?',
    a: 'The formula is: Holdback Rate = Total Daily MCA Deductions ÷ Daily Card Revenue. To get daily card revenue, divide your monthly card sales by 22 (the approximate number of business operating days per month for restaurants). For example: $1,800/day in deductions ÷ ($90,000/month ÷ 22 days = $4,091/day in card revenue) = 44% effective holdback rate. If you have weekly ACH payments, divide the weekly amount by 5 to get the daily equivalent before calculating.',
  },
  {
    q: 'What holdback rate is too high for a restaurant?',
    a: 'Above 20% is elevated pressure. Above 25% is structurally unsustainable for most restaurants — the holdback consumes more than the typical operating margin, meaning the business cannot cover its cost structure from what remains after MCA payments. A restaurant with a 5% net profit margin cannot mathematically sustain a 25% holdback regardless of how well it performs. Industry experience shows that 10–15% is sustainable; 15–20% is manageable with tight operations; above 20% creates structural cash deficits.',
  },
  {
    q: 'How much does a merchant cash advance cost per month for a restaurant?',
    a: 'Monthly MCA cost equals your daily deduction multiplied by 22 operating days. A restaurant paying $1,500/day across all MCA positions is paying $33,000/month in MCA costs. On $120,000/month in revenue, that represents 27.5% of all card income going to MCA payments before a single operational expense is covered. The total cost over the life of an advance also includes the factor rate — a 1.35 factor on a $100,000 advance means $135,000 total repayment regardless of how long it takes.',
  },
  {
    q: 'Can I use this calculator if I have multiple MCAs?',
    a: 'Yes — and this is exactly when the calculator is most useful. Add together all daily deductions across every active MCA position and enter the combined total. This gives you the true effective holdback rate across your entire MCA stack. Restaurants with two or three active MCAs frequently discover their combined holdback is 30–50% of card revenue — far above what any restaurant can sustain — even though each individual advance seemed manageable when taken alone.',
  },
  {
    q: 'What does the restructuring savings estimate mean?',
    a: 'The restructuring savings estimate shows how much monthly cash would be freed up if your combined holdback rate were reduced to 15% — a level most restaurants can sustain. Professional MCA mediators negotiate both holdback rate reductions and remaining balance reductions with lenders simultaneously. The monthly savings figure is the difference between what you currently pay and what a 15%-rate structure would require at your revenue level. This is not a guaranteed outcome — it is a benchmark estimate based on what restructuring to a sustainable rate would produce.',
  },
  {
    q: 'What is the difference between a daily ACH and a percentage holdback?',
    a: 'A percentage holdback takes a fixed percentage of each day\'s actual card settlements — if sales are slow, the payment is lower; if sales are high, it\'s higher. A fixed daily ACH debits a set dollar amount from your bank account every business day regardless of card volume. Fixed ACH payments are more common but more dangerous during slow periods, because the payment does not adjust when revenue drops. The calculator handles both: enter your fixed daily ACH amount in the daily field, or enter your weekly ACH and toggle to "Weekly ACH" — the tool converts to daily and calculates your effective holdback rate.',
  },
  {
    q: 'How much can MCA debt be reduced through restructuring?',
    a: 'Professional MCA mediators typically achieve 40–70% reductions on remaining balances. A $100,000 remaining balance is often resolved for $30,000–$60,000 through negotiated settlement. The specific outcome depends on the lender, how far behind payments are, whether the restaurant is still operating, and how many lenders are involved. Holdback rates are typically negotiated down to 10–15% simultaneously with balance reductions, so both the total owed and the daily payment burden improve through one negotiation process.',
  },
  {
    q: 'What is a factor rate and how does it affect the true cost of an MCA?',
    a: 'A factor rate determines the total amount you repay. A 1.35 factor rate on a $60,000 advance means you repay $81,000 total ($60,000 × 1.35 = $81,000) — regardless of how long repayment takes. Unlike a loan with an annual interest rate, an MCA factor rate does not compound and does not decrease if you repay early. The holdback rate controls how fast you repay; the factor rate controls how much. Both terms together determine the true cost of the advance. Our holdback calculator focuses on the payment burden side — the impact on your daily and monthly operating cash.',
  },
  {
    q: 'What is a UCC lien and does it affect my ability to get other financing?',
    a: 'A UCC (Uniform Commercial Code) lien is a filing an MCA lender places against your business assets — typically all accounts receivable — when they fund your advance. It is a claim on those assets that is visible to all other lenders in a public database. If you have an active UCC lien from an MCA, most traditional lenders and SBA lenders will require it to be satisfied before extending credit to you. This is one reason MCA stacking makes exits harder: each new advance adds another UCC lien, and clearing them all requires settling each position separately.',
  },
];

export function McaCalculatorPage() {
  const meta = getMeta('/restaurant-mca-calculator')!;

  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [deductionInput, setDeductionInput] = useState('');
  const [remainingBalance, setRemainingBalance] = useState('');
  const [payFreq, setPayFreq] = useState<'daily' | 'weekly'>('daily');

  const rev = parseFloat(monthlyRevenue.replace(/[^0-9.]/g, '')) || 0;
  const rawDed = parseFloat(deductionInput.replace(/[^0-9.]/g, '')) || 0;
  // Convert weekly to daily equivalent (÷5 business days) before calculations
  const ded = payFreq === 'weekly' ? rawDed / 5 : rawDed;
  const bal = parseFloat(remainingBalance.replace(/[^0-9.]/g, '')) || 0;

  const dailyRevenue = rev / OPERATING_DAYS;
  const holdbackRate = dailyRevenue > 0 ? ded / dailyRevenue : 0;
  const monthlyMcaCost = ded * OPERATING_DAYS;
  const sustainableMonthlyPayment = dailyRevenue * OPERATING_DAYS * SUSTAINABLE_HOLDBACK;
  const monthlyFreed = monthlyMcaCost - sustainableMonthlyPayment;
  const annualFreed = monthlyFreed * 12;
  const hasResults = rev > 0 && rawDed > 0;

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
            The free restaurant MCA calculator below computes your effective holdback rate, total monthly MCA cost, and estimated restructuring savings — in seconds. Enter your card revenue and daily or weekly deductions across all active merchant cash advance positions to see whether your payments are sustainable and what relief could look like.
          </p>
          <AllIndustriesNote />

          <section className="prose-block">
            <div style={{ background: 'var(--color-cream-dark)', borderRadius: 'var(--radius-lg)', padding: '2rem', marginBottom: '2rem' }}>
              <h2 style={{ marginTop: 0 }}>Your MCA Numbers</h2>

              <div style={{ display: 'grid', gap: '1.25rem' }}>
                {/* Monthly revenue */}
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

                {/* Payment frequency toggle */}
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.6rem' }}>
                    How are your MCA payments deducted?
                  </label>
                  <div style={{ display: 'flex', border: '1px solid var(--color-cream-dark)', borderRadius: 'var(--radius-md)', overflow: 'hidden', width: 'fit-content', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                    <button
                      type="button"
                      onClick={() => setPayFreq('daily')}
                      style={{
                        ...toggleBase,
                        background: payFreq === 'daily' ? 'var(--color-amber)' : 'var(--color-white)',
                        color: payFreq === 'daily' ? 'var(--color-white)' : 'var(--color-ink-muted)',
                      }}
                    >
                      Daily ACH
                    </button>
                    <button
                      type="button"
                      onClick={() => setPayFreq('weekly')}
                      style={{
                        ...toggleBase,
                        borderLeft: '1px solid var(--color-cream-dark)',
                        background: payFreq === 'weekly' ? 'var(--color-amber)' : 'var(--color-white)',
                        color: payFreq === 'weekly' ? 'var(--color-white)' : 'var(--color-ink-muted)',
                      }}
                    >
                      Weekly ACH
                    </button>
                  </div>
                </div>

                {/* Deduction input — label and placeholder adapt to frequency */}
                <div>
                  <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Total {payFreq === 'daily' ? 'daily' : 'weekly'} MCA deductions (all positions combined)
                  </label>
                  <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem', color: 'var(--color-ink-muted)' }}>
                    {payFreq === 'daily'
                      ? 'Add up every daily holdback deduction across all active MCAs. Check your bank statement — these appear as daily debits.'
                      : 'Add up every weekly ACH deduction across all active MCAs. Check your bank statement — these typically hit on a set weekday.'
                    }
                  </p>
                  <div style={{ position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', fontWeight: 600, color: 'var(--color-ink-muted)' }}>$</span>
                    <input
                      type="number"
                      min="0"
                      placeholder={payFreq === 'daily' ? 'e.g. 1850' : 'e.g. 9250'}
                      value={deductionInput}
                      onChange={e => setDeductionInput(e.target.value)}
                      className="lead-form__input"
                      style={{ paddingLeft: '1.75rem' }}
                    />
                  </div>
                  {payFreq === 'weekly' && rawDed > 0 && (
                    <p style={{ margin: '0.4rem 0 0', fontSize: '0.85rem', color: 'var(--color-ink-muted)' }}>
                      ≈ {fmt(rawDed / 5)}/day effective daily deduction
                    </p>
                  )}
                </div>

                {/* Remaining balance */}
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

                {/* Quick CTA — low friction, right next to results */}
                <div style={{ background: 'var(--color-trust-soft)', border: '1px solid rgba(44,82,130,0.2)', borderRadius: 'var(--radius-lg)', padding: '1.25rem 1.5rem' }}>
                  <p style={{ margin: '0 0 0.5rem', fontWeight: 700, color: 'var(--color-trust)', fontSize: '1rem' }}>
                    Talk to someone about these numbers — free, no obligation
                  </p>
                  <p style={{ margin: '0 0 1rem', fontSize: '0.9rem', color: 'var(--color-ink-muted)', lineHeight: 1.55 }}>
                    A free consultation gives you a specific assessment of your contracts, lender positions, and what restructuring would look like for your restaurant.
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    <Link to="/consultation" className="btn btn-primary" style={{ fontSize: '0.9375rem', padding: '0.625rem 1.25rem' }}>Get Free Help Now</Link>
                    <a href={PHONE_HREF} style={{ fontWeight: 600, color: 'var(--color-trust)', fontSize: '0.9375rem', textDecoration: 'none' }}>📞 {PHONE_NUMBER}</a>
                  </div>
                </div>

                {/* Full lead form — form wrapped in white card so labels are visible on dark background */}
                <div style={{ background: 'var(--color-ink)', borderRadius: 'var(--radius-lg)', padding: '2rem', color: 'var(--color-white)' }}>
                  <h2 style={{ marginTop: 0, color: 'var(--color-white)' }}>Get a Free Assessment of Your Situation</h2>
                  <p style={{ color: '#cbd5e0', marginBottom: '1rem' }}>
                    These numbers give you a starting picture. A free consultation gives you a specific assessment of your contracts, lender positions, and what restructuring would look like for your restaurant. No obligation — just clarity on your options.
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                    Or call us directly: <a href={PHONE_HREF} style={{ color: 'var(--color-amber-light)', fontWeight: 600 }}>{PHONE_NUMBER}</a>
                  </p>
                  <div style={{ background: 'var(--color-white)', borderRadius: 'var(--radius-md)', padding: '1.5rem' }}>
                    <LeadCaptureForm source="mca-calculator" submitLabel="Get My Free MCA Assessment" />
                  </div>
                </div>

              </div>
            )}

            {!hasResults && (
              <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-cream-dark)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'center', color: 'var(--color-ink-muted)' }}>
                <p style={{ margin: 0 }}>Enter your monthly card revenue and MCA deductions above to see your results.</p>
              </div>
            )}
          </section>

          <section className="prose-block">
            <h2>How This MCA Calculator Works</h2>
            <p>
              Most restaurant owners do not know their effective holdback rate — they only know what their payment is. This calculator converts your payment amount into a holdback rate so you can see exactly what percentage of your daily card revenue is being consumed by MCA payments before your restaurant can cover any operating expense.
            </p>

            <h3>The Holdback Rate Formula</h3>
            <p>
              The core calculation is straightforward:
            </p>
            <div style={{ background: 'var(--color-cream-dark)', borderRadius: 'var(--radius-md)', padding: '1.25rem 1.5rem', margin: '1rem 0', fontFamily: 'monospace', fontSize: '1rem', lineHeight: 2 }}>
              <strong>Effective Holdback Rate</strong> = Total Daily MCA Deductions ÷ Daily Card Revenue<br />
              <strong>Daily Card Revenue</strong> = Monthly Card Sales ÷ 22 operating days<br />
              <strong>Monthly MCA Cost</strong> = Daily Deduction × 22 operating days
            </div>
            <p>
              The 22-day figure reflects the approximate number of business operating days per month for restaurants (accounting for closures). It is the same figure MCA lenders use internally when projecting repayment timelines.
            </p>

            <h3>How Weekly ACH Payments Are Converted</h3>
            <p>
              If your MCA lender debits your account on a weekly basis rather than daily, the calculator divides your weekly payment by 5 (business days per week) to derive the daily equivalent before computing the holdback rate. For example, a $9,500 weekly ACH deduction equals approximately $1,900/day — the amount compared to your daily card revenue to produce the holdback percentage.
            </p>
            <p>
              Weekly ACH structures are more common in some lender portfolios and behave similarly to daily structures from a cash flow perspective. The effective holdback rate calculation is identical once you have the daily equivalent.
            </p>

            <h3>What the Restructuring Savings Number Means</h3>
            <p>
              The restructuring estimate shows what your monthly cash position would look like if your combined holdback rate were reduced to 15% — widely regarded as the upper boundary of what most restaurants can sustain without compressing operating margin. The "cash freed monthly" figure is the difference between your current total MCA payment and what a 15%-rate structure would require at your revenue level.
            </p>
            <p>
              This is not an annualized cost-of-capital figure or a total interest comparison. It is a monthly operational cash flow estimate — the question it answers is: how much more money would your restaurant have available for payroll, rent, food costs, and reserves every month under restructured payments?
            </p>
            <p>
              The balance reduction estimate uses a 50% reduction as a midpoint — professional mediators have achieved reductions of 40–70% on remaining balances in many cases, with outcomes depending on lender, balance, and payment status.
            </p>
          </section>

          <section className="prose-block">
            <h2>MCA Holdback Rate Benchmarks for Restaurants</h2>
            <p>
              Restaurant operators typically work on net margins of 3–9%. A merchant cash advance imposes its cost before the business can generate margin — it comes out of gross card revenue before a single operational expense is covered. This is why holdback rates that look modest in percentage terms can be devastating in practice.
            </p>
            <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
                <thead>
                  <tr style={{ background: 'var(--color-ink)', color: 'var(--color-white)' }}>
                    <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left' }}>Holdback Rate</th>
                    <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left' }}>Risk Level</th>
                    <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left' }}>Impact on Operations</th>
                    <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left' }}>Typical Situation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: '#f0fff4', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 0.9rem', fontWeight: 600, color: '#2d6a4f' }}>Under 15%</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>Manageable</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>Operating cash compressed but workable. Most restaurants can sustain this range with careful cash management.</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>Single MCA position, good revenue volume</td>
                  </tr>
                  <tr style={{ background: '#fffbeb', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 0.9rem', fontWeight: 600, color: '#8b5a28' }}>15–20%</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>Elevated Pressure</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>Every slow week creates a shortfall. Not sustainable long-term if two or more positions are involved.</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>One or two MCAs, revenue seasonal or declining</td>
                  </tr>
                  <tr style={{ background: '#fff9f0', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 0.9rem', fontWeight: 600, color: '#c17f3a' }}>20–25%</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>High Risk</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>Restaurant likely falling behind on other obligations. Cash reserves depleting. Default risk high without intervention.</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>Two or more MCAs, stacking situation</td>
                  </tr>
                  <tr style={{ background: '#fff5f5' }}>
                    <td style={{ padding: '0.65rem 0.9rem', fontWeight: 600, color: '#c53030' }}>Above 25%</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>Structurally Unsustainable</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>Holdback exceeds typical operating margin. Business cannot cover fixed costs from what remains. Requires immediate professional intervention.</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>Three or more MCAs, or single MCA with very high factor rate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-ink-muted)', marginTop: '0.5rem' }}>
              Benchmarks based on industry experience across restaurant MCA restructuring cases. Individual restaurant results vary based on revenue mix, fixed cost structure, and lender terms.
            </p>
          </section>

          <section className="prose-block">
            <h2>How to Use This Calculator if You Have Multiple MCAs</h2>
            <p>
              If you have more than one active merchant cash advance — a common situation called MCA stacking — the most important number to calculate is your <em>combined</em> effective holdback rate. Each lender calculates their own rate in isolation, but you experience the combined impact on every dollar of card revenue.
            </p>
            <p>
              To use this calculator with multiple positions:
            </p>
            <ol>
              <li><strong>Add up all daily deductions.</strong> Pull 5 consecutive business days of bank statements and add every daily ACH debit from all MCA lenders. Divide by 5 to confirm the average daily total.</li>
              <li><strong>Use the combined total in the calculator.</strong> Enter the sum of all daily deductions — not each individually — in the deductions field.</li>
              <li><strong>Your card revenue does not change.</strong> Each lender is pulling from the same pool of card receipts. The holdback calculation uses total combined deductions against a single revenue figure.</li>
              <li><strong>Enter the combined remaining balance.</strong> Add all outstanding balances across every MCA position. This gives you the full restructuring savings estimate.</li>
            </ol>
            <p>
              Restaurants with three active MCAs frequently find their combined holdback is 35–50% of card revenue — even though each advance seemed manageable in isolation when funded. The calculator makes that cumulative burden visible in a single number.
            </p>
          </section>

          <section className="prose-block">
            <h2>Pre-Calculated Scenarios: What These Numbers Look Like at Different Revenue Levels</h2>
            <p>
              Not sure what to enter, or want to see how the calculation works before using your own numbers? The three scenarios below show real-world holdback situations at different restaurant revenue levels.
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
                    <th style={{ padding: '0.65rem 0.9rem', textAlign: 'left' }}>Cash Freed at 15%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: '#f0fff4', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 0.9rem', fontWeight: 600 }}>Manageable — 1 MCA</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$85,000</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$580/day</td>
                    <td style={{ padding: '0.65rem 0.9rem', color: '#2d6a4f', fontWeight: 600 }}>15%</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$12,760</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>—</td>
                  </tr>
                  <tr style={{ background: '#fffbeb', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.65rem 0.9rem', fontWeight: 600 }}>High Pressure — 2 MCAs</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$120,000</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$1,450/day</td>
                    <td style={{ padding: '0.65rem 0.9rem', color: '#8b5a28', fontWeight: 600 }}>26.6%</td>
                    <td style={{ padding: '0.65rem 0.9rem' }}>$31,900</td>
                    <td style={{ padding: '0.65rem 0.9rem', color: '#2d6a4f', fontWeight: 600 }}>+$13,700/mo</td>
                  </tr>
                  <tr style={{ background: '#fff5f5' }}>
                    <td style={{ padding: '0.65rem 0.9rem', fontWeight: 600 }}>Unsustainable — 3 MCAs</td>
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
              "Cash freed at 15%" shows how much monthly operating cash is recovered by reducing the combined holdback to 15%. Actual restructuring outcomes depend on specific lenders, remaining balances, and payment history.
            </p>
          </section>

          <section className="prose-block">
            <h2>Signs Your Restaurant's MCA Payments Are Too High</h2>
            <p>
              The holdback rate number is the clearest signal, but there are operational warning signs that appear even before a restaurant owner calculates their effective rate:
            </p>
            <ul>
              <li><strong>Rent is late more than once in a quarter.</strong> MCA payments hit daily before other obligations are covered. If rent is competing with MCA deductions for the same pool of deposits, the holdback is too high relative to the revenue base.</li>
              <li><strong>Payroll requires borrowing or personal contribution.</strong> When the daily holdback consumes enough of card receipts that the payroll account comes up short, the effective holdback rate has exceeded what the business can sustain operationally.</li>
              <li><strong>You took a new MCA to cover operating costs caused by the existing MCA.</strong> This is the clearest behavioral indicator that the original advance is unsustainable. A second advance taken to bridge gaps created by the first is the beginning of the stacking cycle.</li>
              <li><strong>Your bank account balance hits near-zero between daily deposits.</strong> If the account is emptied by the MCA deduction each morning and only refills when card settlements post, there is no operational buffer. Any variable — a supplier COD requirement, a repair, a slow weekend — creates an immediate deficit.</li>
              <li><strong>You cannot pay quarterly estimated taxes or vendor invoices on time.</strong> These obligations often get pushed behind MCA payments because the lender's daily deduction is automatic. When taxes and vendors go unpaid, the MCA holdback rate has consumed what should have covered them.</li>
              <li><strong>Your combined daily MCA deductions exceed 20% of average daily card deposits.</strong> Use this calculator to confirm. If the number comes back above 20%, the math is telling you the same thing the operational signs are.</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>The True Monthly Cost of a Merchant Cash Advance</h2>
            <p>
              MCA lenders quote advances in terms of factor rates, not annual percentage rates — which makes cost comparisons difficult and often masks how expensive the product is in monthly cash terms.
            </p>
            <p>
              Here is how to calculate the true monthly cost of any merchant cash advance:
            </p>
            <ol>
              <li><strong>Find your total repayment amount.</strong> Multiply the advance amount by the factor rate. Example: $60,000 advance × 1.38 factor = $82,800 total repayment.</li>
              <li><strong>Subtract the advance amount to find the cost.</strong> $82,800 − $60,000 = $22,800 total cost of the advance.</li>
              <li><strong>Estimate the repayment term.</strong> Divide the total repayment by the monthly payment amount. $82,800 ÷ ($1,200/day × 22 days/month = $26,400/month) ≈ 3.1 months to pay off.</li>
              <li><strong>Calculate monthly cost.</strong> $22,800 total cost ÷ 3.1 months ≈ $7,355 per month in MCA fees alone — before the principal repayment portion of each payment.</li>
            </ol>
            <p>
              Expressed as an APR, this structure can represent effective annual rates of 60–300% depending on the factor rate and holdback speed. The faster the holdback pulls the advance out, the higher the effective APR — even though the nominal factor rate stays the same.
            </p>
            <p>
              This calculator focuses on the cash flow impact rather than the effective APR — because the daily operational question for a restaurant owner is not "what is my cost of capital" but "do I have enough money to pay my staff and suppliers today." The holdback rate is the number that answers that question.
            </p>
          </section>

          <section className="prose-block">
            <h2>What to Do if Your Holdback Rate Is Too High</h2>
            <p>
              If the calculator shows your holdback rate is above 20% — or if you already knew the number was high — there are specific paths forward depending on where you are in the situation.
            </p>
            <p>
              <strong>If you are current on payments but struggling operationally:</strong> This is the best position to negotiate from. Contact your lenders proactively with documented revenue figures and request a holdback reduction. Some contracts include a "true-up" provision that allows a formal request. Professional mediation at this stage typically produces the most favorable terms because you have not yet defaulted.
            </p>
            <p>
              <strong>If you have missed payments or received a default notice:</strong> Professional mediation becomes more important, not less. Lenders who have begun default proceedings have a different conversation when a professional mediator is involved — because the mediator signals a realistic path to recovery, which most lenders prefer over the cost and uncertainty of COJ enforcement against a still-operating restaurant.
            </p>
            <p>
              <strong>If your bank account has already been frozen:</strong> This is an emergency with a different priority order. See the <Link to="/mca-bank-account-frozen">MCA bank account frozen guide</Link> — the first step is to open a new account at a different institution immediately, before addressing the underlying debt.
            </p>
            <p>
              <strong>If you have three or more MCAs:</strong> Self-negotiation with multiple lenders simultaneously is extremely difficult. Each lender's enforcement actions can accelerate the others'. Professional mediation with all positions simultaneously is almost always necessary to produce a stable outcome. See <Link to="/restaurant-mca-stacking">restaurant MCA stacking</Link> for the full picture.
            </p>
            <p>
              For a complete overview of all exit paths from restaurant MCA debt — restructuring, settlement, consolidation, and legal options — see the <Link to="/restaurant-mca-debt-help">restaurant MCA debt help guide</Link>.
            </p>
          </section>

          <section className="prose-block">
            <h2>Frequently Asked Questions About the Restaurant MCA Calculator</h2>
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
              <li><Link to="/mca-bank-account-frozen">MCA Froze My Bank Account: Emergency Steps</Link></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
