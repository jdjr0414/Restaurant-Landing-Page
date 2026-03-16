import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { CTA } from '../components/CTA';
import { PageHero } from '../components/PageHero';
import { FIND_MATCH_URL, AXIANT_LINK_REL } from '../config';
import { getMeta } from '../staticMeta';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

export function RestaurantBarProfitableNotPage() {
  const meta = getMeta('/restaurant-bar-profitable-restaurant-not')!;
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
          { name: 'Restaurant Cash Advance', path: '/restaurant-cash-advance' },
          { name: 'Bar Profitable, Restaurant Not', path: '/restaurant-bar-profitable-restaurant-not' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Why Your Bar Sales Aren&apos;t Saving Your Restaurant</h1>
          <p className="page-lead">
            If your bar is busy and your kitchen is not—or the bar is profitable on paper but the restaurant as a whole still struggles—the issue is often how costs and revenue are mixed. This guide explains how to look at bar vs kitchen contribution, why strong bar sales alone may not fix cash flow, and what to adjust so the whole operation supports your bank account.
          </p>

          <section className="prose-block">
            <h2>Bar vs Kitchen: Different Margins, One P&amp;L</h2>
            <p>
              Beverage margins are often higher than food: less labor per dollar of sales, lower food cost. So when the bar is doing well, it can look like you are in good shape. But if the kitchen is losing money or barely breaking even, the combined result can still be weak. Rent, utilities, and labor are shared—so the real question is whether total revenue, after all costs, leaves enough cash. The <Link to="/restaurant-profitable-on-paper-no-cash">profitable on paper but no cash</Link> guide touches on this; here we focus on bar vs restaurant mix and allocation.
            </p>
            <p>
              Many full-service restaurants see 25–35% of revenue from the bar. If that segment is profitable but the overall P&amp;L is thin or negative, the kitchen side is consuming more than it contributes. That does not mean you should shut the kitchen—it means you need to either improve food contribution (through <Link to="/restaurant-menu-engineering-cash-flow">menu engineering</Link>, pricing, or cost control) or accept that the bar is subsidizing the dining room and decide whether that is sustainable. Getting clear on the numbers is the first step.
            </p>
          </section>

          <section className="prose-block">
            <h2>Where the Leaks Are</h2>
            <p>
              Common issues: kitchen food cost or labor is too high for the food revenue; bar is carrying the P&amp;L but not enough to cover fixed costs; or spillage, comps, and pour variance are eating bar margin without showing up clearly. Run separate contribution margins for bar and kitchen (even if rough) so you see which side is pulling its weight.
            </p>
            <p>
              Then look at allocation of rent and utilities—some operators split by square footage or revenue. The goal is to know whether the problem is the kitchen, the bar, or the way costs are assigned. If the bar is truly profitable and the kitchen is not, focus on food cost and labor in the kitchen before cutting bar hours or inventory. If both are marginal and fixed costs are the issue, see <Link to="/restaurant-lease-too-expensive">lease and rent</Link> and <Link to="/restaurant-labor-schedule-money-drains">labor scheduling</Link> for ways to reduce overhead.
            </p>
          </section>

          <section className="prose-block">
            <h2>Fixing the Mix</h2>
            <p>
              If the kitchen is the weak spot, consider menu engineering, portion control, and labor scheduling so food contribution improves. Raise prices on low-margin best-sellers, feature higher-contribution items, and tighten prep and plating labor. If the bar is strong but overall cash is still short, you may need to grow bar revenue further (happy hour, signature drinks, bottle sales), cut shared costs, or accept that you need a short-term bridge.
            </p>
            <p>
              <Link to="/restaurant-working-capital">Restaurant working capital</Link> or a <Link to="/restaurant-cash-advance">cash advance</Link> can help you cover gaps while you fix the underlying mix—payroll, vendors, or a seasonal dip. Repayment tied to sales can ease the burden when you are already stretched. See <Link to="/restaurant-funding-options">restaurant funding options</Link> and <Link to="/busy-but-broke-restaurant">busy but broke</Link> for more.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If your bar is profitable but the restaurant is not, break out bar and kitchen contribution and shared costs. Fix the side that is dragging, and use the stronger side to support the whole. Revisit the numbers every quarter—as menu mix, wages, and rent change, the balance between bar and kitchen can shift. Staying on top of it helps you catch problems before they become a cash crisis.
            </p>
            <p>
              If you need cash while you adjust, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a>. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
