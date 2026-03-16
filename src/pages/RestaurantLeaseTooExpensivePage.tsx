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

export function RestaurantLeaseTooExpensivePage() {
  const meta = getMeta('/restaurant-lease-too-expensive')!;
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
          { name: 'Lease Too Expensive', path: '/restaurant-lease-too-expensive' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Rent, CAM, and Hidden Lease Costs That Squeeze Your Restaurant</h1>
          <p className="page-lead">
            When your restaurant lease or rent eats a huge chunk of revenue every month, it can feel like you are working for the landlord. This guide explains how to read your lease (including CAM and pass-throughs), when and how to renegotiate, and when short-term funding can help you bridge the gap until you can reduce or relocate.
          </p>

          <section className="prose-block">
            <h2>Why Restaurant Rent Feels Unbearable</h2>
            <p>
              Base rent is only part of the story. CAM (common area maintenance), property taxes, insurance pass-throughs, and percentage rent clauses can push your total occupancy cost far above what you budgeted. When sales dip, that fixed cost does not—so a lease that felt manageable at opening can strangle cash flow later. The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> covers fixed vs variable costs; here we focus on what you can do about rent and lease terms.
            </p>
            <p>
              Industry benchmarks often suggest that rent and occupancy cost should stay within a certain percentage of revenue (e.g., 6–10% for rent alone, depending on concept). If your total occupancy cost has crept to 15% or 20% of sales because of CAM reconciliations, tax pass-throughs, or a percentage-rent clause that kicks in during good months, you are left with less for labor, food, and profit. Recognizing that your lease is the problem is the first step; the next is understanding exactly what you are paying and what can be changed.
            </p>
          </section>

          <section className="prose-block">
            <h2>Understanding Your Lease: CAM and Pass-Throughs</h2>
            <p>
              CAM charges cover shared areas—parking, landscaping, common utilities. They are often estimated at the start of the year and reconciled later; if the estimate was low, you get a bill. Property tax and insurance pass-throughs work similarly. Review your lease and last year’s reconciliation so you know what you are really paying. If you have not read the lease in a while, do it—many owners discover clauses they forgot or never understood.
            </p>
            <p>
              Look for caps or limits on CAM and pass-through increases. Some leases cap how much CAM can rise year over year; others do not. If you are in a multi-tenant building, ask whether your share of CAM is calculated fairly (e.g., by square footage or usage). Disputes over CAM reconciliation are common; if the numbers seem wrong, request backup and consider having an attorney or consultant review. Even a one-time correction can free up cash and set a better precedent for future years.
            </p>
          </section>

          <section className="prose-block">
            <h2>When and How to Renegotiate</h2>
            <p>
              Landlords would rather keep a paying tenant than chase a vacancy. If you are in distress, some will agree to a short-term rent reduction, deferred payment, or abatement in exchange for an extended term or other concessions. Come with a clear ask: “I need X months at Y% reduction to get through [specific situation].” Show that you have a plan (cost cuts, <Link to="/restaurant-working-capital">working capital</Link>, or both) so they see you as a going concern, not a default risk.
            </p>
            <p>
              Timing matters. Approaching the landlord when you are current on rent and can show a realistic path to recovery is more effective than waiting until you are behind. Put your request in writing and be prepared to share high-level financials if they ask. Some landlords will agree to a short abatement (e.g., 2–3 months at 50% rent) in exchange for a one-year extension or a personal guarantee. Get any agreement in writing and have it incorporated into the lease or as an amendment so there is no confusion later.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Funding Can Bridge the Gap</h2>
            <p>
              If you need time to renegotiate or to build cash for a move, short-term <Link to="/restaurant-funding">restaurant funding</Link> can help you make rent while you fix the underlying problem. A <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or working capital product can cover a few months of rent so you are not in default while you negotiate or search for a new space.
            </p>
            <p>
              Use it as a bridge, not a permanent fix—if rent is unsustainable, you need a new lease or a new location. Funding that ties repayment to sales can ease the burden when you are already stretched; see <Link to="/restaurant-funding-options">restaurant funding options</Link> for how these products work. Not all applicants qualify; terms vary by provider.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If rent is killing your margins, get clear on your full occupancy cost, then decide: renegotiate, reduce costs elsewhere, or plan an exit. If you need a short-term bridge, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a>. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
