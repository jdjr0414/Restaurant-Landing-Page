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

export function RestaurantRecordSalesNoProfitPage() {
  const meta = getMeta('/restaurant-record-sales-no-profit')!;
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
          { name: 'Record Sales, No Profit', path: '/restaurant-record-sales-no-profit' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Why Your Restaurant&apos;s Best Month Still Feels Like a Loss</h1>
          <p className="page-lead">
            You just had your best sales month ever—and your bank account does not show it. Record revenue with no profit in the bank is one of the most frustrating experiences in restaurant ownership. This guide explains why it happens (timing, debt, and where the money really went) and what to do so your biggest months turn into real cash.
          </p>

          <section className="prose-block">
            <h2>Sales Are Not the Same as Cash</h2>
            <p>
              Revenue hits your books when you make the sale. Cash hits your bank when the processor deposits it, when you pay yourself, and when you decide what to do with what is left after bills. In a record month you might have paid down past-due vendors, caught up on payroll, made a loan payment, or bought inventory for the next month. All of that is cash out—so the “best month” can leave the account lower than a slower month when you did not have those catch-up expenses. The <Link to="/restaurant-profitable-on-paper-no-cash">profitable on paper but no cash</Link> guide goes deeper on P&amp;L vs bank balance; here we focus on the “record sales” paradox.
            </p>
            <p>
              Credit card processing adds another wrinkle: weekend sales may not hit your account until Tuesday or Wednesday. So even though your “best month” is in the books, the actual cash from the last few days of the month may not arrive until the following month. When you look at your bank balance on the first of the month, you are not seeing the full picture of that record month—you are seeing what had cleared up to that point. Keeping a simple cash log (expected deposits vs actual) can help you see the lag and plan for it.
            </p>
          </section>

          <section className="prose-block">
            <h2>Where the Money Goes in a “Great” Month</h2>
            <p>
              High volume often means higher labor (overtime, extra shifts), more food cost, and more delivery or promo costs. If your margins are thin, a 20% sales increase might only add a small amount to the bottom line—and that might go to debt service, back pay, or inventory. So the feeling of “we killed it and have nothing to show” is often accurate: the money went somewhere, but not into a cushion.
            </p>
            <p>
              Understanding that helps you see whether the issue is timing (one-time catch-up), margin (costs too high for the volume), or structure (debt and fixed costs eating the upside). If it is margin, see <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> and <Link to="/restaurant-menu-engineering-cash-flow">menu engineering</Link> for ways to improve. If it is structure, you may need to pay down debt or renegotiate fixed costs so that future strong months leave more in the account. If it is timing, the fix is building a reserve in good months so you are not playing catch-up every time.
            </p>
          </section>

          <section className="prose-block">
            <h2>Using Good Months to Build a Buffer</h2>
            <p>
              When you do have a strong month, treat part of the surplus as untouchable. Transfer a percentage into a separate account for taxes, reserves, or the next slow period. If you do not, the next dip will wipe out the gain and you will feel like you never get ahead.
            </p>
            <p>
              Building a buffer also reduces the need to rely on <Link to="/restaurant-working-capital">working capital</Link> or <Link to="/restaurant-cash-advance">cash advance</Link> when sales slow—though those options are there when you need them. <Link to="/restaurant-funding-options">Restaurant funding options</Link> and <Link to="/restaurant-slow-season-cash-flow">slow season cash flow</Link> can help you plan for the down months. Even a small automatic transfer (e.g., 5% of weekly sales) into a reserve account can create a cushion over time so that your next “best month” actually shows up in the bank.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If your best months never seem to show up in the bank, trace where the money went: catch-up payments, debt, labor, or cost creep. Then build a habit of setting aside a portion of strong months so you have a cushion when volume drops. If you need a bridge during a dip, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a>. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
