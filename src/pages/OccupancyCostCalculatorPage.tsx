import { useState, type FormEvent } from 'react';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { FIND_MATCH_URL, AXIANT_LINK_REL } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';
import '../styles/occupancy-calculator.css';

const usd = (n: number) => '$' + Math.round(n).toLocaleString('en-US');
const num = (v: string) => parseFloat(String(v).replace(/[^0-9.\-]/g, '')) || 0;

interface OccResult {
  rev: number;
  occ: number;
  ratio: number;
  maxRent: number;
  target: number;
}

function compute(revenue: string, rent: string, other: string, target: string): OccResult {
  const rev = num(revenue);
  const r = num(rent);
  const o = num(other);
  const t = num(target) || 8;
  const occ = r + o;
  const ratio = rev > 0 ? (occ / rev) * 100 : 0;
  const maxRent = Math.max(0, rev * (t / 100) - o);
  return { rev, occ, ratio, maxRent, target: t };
}

export function OccupancyCostCalculatorPage() {
  const [revenue, setRevenue] = useState('80,000');
  const [rent, setRent] = useState('6,000');
  const [other, setOther] = useState('1,500');
  const [target, setTarget] = useState('8');
  const [result, setResult] = useState<OccResult>(() => compute('80,000', '6,000', '1,500', '8'));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setResult(compute(revenue, rent, other, target));
  }

  const band =
    result.ratio <= 0 ? '' : result.ratio < 6 ? 'occ-good' : result.ratio <= 10 ? 'occ-mid' : 'occ-bad';

  const verdict =
    result.rev <= 0
      ? 'Enter your monthly revenue to see your occupancy cost ratio.'
      : result.ratio < 6
        ? `Healthy. At ${result.ratio.toFixed(1)}%, occupancy cost is well within range — you have room in the P&L.`
        : result.ratio <= 10
          ? `Manageable, but watch it. ${result.ratio.toFixed(1)}% sits in the typical 6–10% range; tightening rent or growing sales builds cushion.`
          : `High. At ${result.ratio.toFixed(1)}%, occupancy is eating too much of sales — most operators aim for under 10%. To hit ${result.target}%, rent would need to be about ${usd(result.maxRent)}/month, or you'd need higher sales.`;

  return (
    <>
      <SeoHead
        title="Restaurant Occupancy Cost Ratio Calculator | What % of Sales Is Your Rent?"
        description="Free restaurant occupancy cost calculator. Enter your monthly sales, rent, and occupancy costs to see your occupancy cost ratio, whether it's in the healthy range, and the maximum rent your sales can support."
        canonicalPath="/restaurant-occupancy-cost-calculator"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Occupancy Cost Calculator', path: '/restaurant-occupancy-cost-calculator' },
        ]}
      />
      <main className="page-main">
        <div className="page-content">
          <section className="occ-hero">
            <p className="occ-eyebrow">Free Restaurant Tool</p>
            <h1>Restaurant Occupancy Cost Ratio Calculator</h1>
            <p className="occ-lede">
              Rent is one of a restaurant&apos;s biggest fixed costs. The occupancy cost ratio tells you what share of
              sales goes to rent and occupancy — and whether it&apos;s sustainable. Enter your numbers to see your ratio,
              how it compares to the healthy range, and the most rent your sales can support.
            </p>
          </section>

          <section className="occ-section">
            <div className="occ-card">
              <form onSubmit={onSubmit} className="occ-grid">
                <div className="occ-field">
                  <label htmlFor="occ-rev">Monthly sales / revenue ($)</label>
                  <input id="occ-rev" inputMode="decimal" value={revenue} onChange={(e) => setRevenue(e.target.value)} placeholder="e.g., 80,000" />
                </div>
                <div className="occ-field">
                  <label htmlFor="occ-rent">Monthly base rent ($)</label>
                  <input id="occ-rent" inputMode="decimal" value={rent} onChange={(e) => setRent(e.target.value)} placeholder="e.g., 6,000" />
                </div>
                <div className="occ-field">
                  <label htmlFor="occ-other">Other occupancy costs ($/mo)</label>
                  <input id="occ-other" inputMode="decimal" value={other} onChange={(e) => setOther(e.target.value)} placeholder="e.g., 1,500" />
                  <small>CAM, property insurance, property tax, common-area charges.</small>
                </div>
                <div className="occ-field">
                  <label htmlFor="occ-target">Target ratio (%)</label>
                  <input id="occ-target" inputMode="decimal" value={target} onChange={(e) => setTarget(e.target.value)} placeholder="e.g., 8" />
                  <small>Most operators aim for 6–10%.</small>
                </div>
                <div className="occ-field occ-field-full">
                  <button type="submit" className="occ-btn">Calculate My Ratio</button>
                </div>
              </form>

              <div className="occ-results">
                <div className={`occ-headline ${band}`}>
                  <div className="occ-ratio">{result.ratio > 0 ? `${result.ratio.toFixed(1)}%` : '—'}</div>
                  <div className="occ-ratio-l">Occupancy cost ratio</div>
                </div>
                <p className="occ-verdict">{verdict}</p>
                <div className="occ-rows">
                  <div className="occ-row"><span>Monthly occupancy cost</span><span>{usd(result.occ)}</span></div>
                  <div className="occ-row"><span>As % of monthly sales</span><span>{result.ratio > 0 ? `${result.ratio.toFixed(1)}%` : '—'}</span></div>
                  <div className="occ-row"><span>Max rent at {result.target}% target</span><span>{usd(result.maxRent)}</span></div>
                </div>
              </div>
            </div>
          </section>

          <article className="occ-content">
            <h2>What is a restaurant occupancy cost ratio?</h2>
            <p>
              Your occupancy cost ratio is total occupancy cost (base rent plus CAM, property insurance, property taxes,
              and common-area charges) divided by sales. It&apos;s one of the fastest checks of whether a location is
              financially sustainable:
            </p>
            <ul>
              <li><strong>Under 6%</strong> — healthy. You have room in the P&amp;L for labor, food cost, and profit.</li>
              <li><strong>6%–10%</strong> — typical range. Workable, but leaves less cushion when sales dip.</li>
              <li><strong>Over 10%</strong> — high. Rent is squeezing margins; it&apos;s a common reason a busy restaurant still struggles to profit.</li>
            </ul>
            <h2>Why it matters for cash flow and funding</h2>
            <p>
              A high occupancy cost ratio is one of the structural reasons restaurants run short on cash even with strong
              sales — fixed rent doesn&apos;t flex when a slow month hits. If your ratio is high, the fix is usually growing
              sales per square foot, renegotiating the lease, or bridging seasonal gaps with the right funding rather than a
              high-cost cash advance. See our guides on{' '}
              <a href="/blog/restaurant-occupancy-cost-ratio">restaurant occupancy cost</a> and{' '}
              <a href="/restaurant-working-capital">restaurant working capital</a>.
            </p>
            <p className="occ-disclaim">
              This calculator provides estimates for educational purposes only and is not financial advice. Healthy ratios
              vary by concept, market, and service model. Use it as a directional check, not a lending decision.
            </p>
          </article>

          <section className="occ-cta">
            <h2>Tight on cash between strong months?</h2>
            <p>
              If rent and seasonality are squeezing your cash flow, we can help you find funding that fits — without locking
              you into an expensive cash advance.
            </p>
            <LeadCaptureForm source="occupancy-calculator" />
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
