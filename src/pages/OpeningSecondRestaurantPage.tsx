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

export function OpeningSecondRestaurantPage() {
  const meta = getMeta('/opening-second-restaurant-cash-flow')!;
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
          { name: 'Opening Second Restaurant', path: '/opening-second-restaurant-cash-flow' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">The Cash Flow Risk of Opening a Second Restaurant Too Fast</h1>
          <p className="page-lead">
            Expanding to a second location can stretch your cash thin—build-out, inventory, and double payroll often hit before the new unit earns enough to support itself. This guide explains how expansion drains the first location, how to plan so you do not overextend, and when and how to use restaurant funding to grow without putting both stores at risk.
          </p>

          <section className="prose-block">
            <h2>Why the Second Location Strains Cash Flow</h2>
            <p>
              The first restaurant funds the opening of the second: deposits, build-out, equipment, and initial labor for the new site often come from the original location’s profits. Until the second unit is generating positive cash flow, you are running two operations on the cash flow of one. If the first location has a slow quarter or an unexpected expense, you may not have a cushion—and both locations can suffer. The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> and <Link to="/restaurant-profitable-on-paper-no-cash">profitable on paper but no cash</Link> explain how timing and reinvestment affect cash; here we focus on expansion specifically.
            </p>
            <p>
              Common mistakes include underestimating how long it takes for the second location to ramp (often 6–12 months to reach stability), overestimating how much the first location can spare, and forgetting to budget for double rent, double payroll, and double inventory during the overlap period. Even if the second location eventually succeeds, the cash crunch in the first year can force bad decisions—cutting quality at the first location, missing payments, or taking on more debt than you planned.
            </p>
          </section>

          <section className="prose-block">
            <h2>Planning Before You Sign the Lease</h2>
            <p>
              Model the full cost of opening the second location: build-out, equipment, inventory, labor for the first 90 days, and working capital for both stores. Then stress-test: What if the first location’s sales drop 10%? What if the second location opens two months late? What if the new unit only reaches 70% of projected sales in year one? Having a buffer and a clear timeline for when the new unit must contribute reduces the chance that you run out of cash mid-expansion.
            </p>
            <p>
              See <Link to="/restaurant-funding-by-business-type">restaurant funding by business type</Link> and <Link to="/restaurant-expansion-funding">expansion funding</Link> for how different concepts and growth stages affect options; <Link to="/restaurant-funding-options">restaurant funding options</Link> and <Link to="/restaurant-working-capital">working capital</Link> explain how capital can support growth. The goal is to have a plan that survives bad-case scenarios, not just the optimistic one.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Funding Supports Expansion</h2>
            <p>
              A <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or <Link to="/restaurant-working-capital">working capital</Link> can provide the lump sum or line you need to open the second location without starving the first. Repayment tied to sales can ease the burden when the new unit is still ramping. Use funding for the expansion plan you modeled—not to cover ongoing losses at the first location.
            </p>
            <p>
              If the first location is not solid, fixing that before expanding is usually the better move. <Link to="/restaurant-loan-alternatives">Restaurant loan alternatives</Link> and <Link to="/restaurant-funding">restaurant funding</Link> compare structures. Not all applicants qualify; terms vary by provider. The best use of expansion funding is to cover the one-time and ramp costs you planned for—not to plug ongoing gaps at either location.
            </p>
          </section>

          <section className="prose-block">
            <h2>Protecting the First Location</h2>
            <p>
              Do not strip the first restaurant of reserves, equipment maintenance, or marketing to fund the second. If the first location struggles, you may need to pour cash back into it—and if you have already stretched both stores, you have no room to maneuver.
            </p>
            <p>
              Keep the first location healthy: that is your proof of concept and your fallback if the second location takes longer to ramp. Many multi-unit operators say the first location is the foundation—if it wobbles, the whole structure is at risk. Schedule regular check-ins on the first location’s P&amp;L and cash flow during the expansion so you catch problems early instead of discovering them when both stores are in trouble.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If you are considering a second location, model the full cash need and stress-test the plan. If you need capital to expand without overextending, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a>. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
