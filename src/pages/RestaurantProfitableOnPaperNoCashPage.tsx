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

export function RestaurantProfitableOnPaperNoCashPage() {
  const meta = getMeta('/restaurant-profitable-on-paper-no-cash')!;
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
          { name: 'Profitable on Paper, No Cash', path: '/restaurant-profitable-on-paper-no-cash' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">When Your Accountant Says You Made Money but You Feel Broke</h1>
          <p className="page-lead">
            Your P&amp;L shows a profit, but your bank account is empty. That disconnect is one of the most confusing and frustrating experiences in restaurant ownership. This guide explains why profit and cash are not the same thing, how to read your numbers so you see the gap, and what to do—including when working capital can help—so you can align the books with the money you actually have.
          </p>

          <section className="prose-block">
            <h2>Profit vs Cash: Why They Diverge</h2>
            <p>
              Profit is calculated on an accrual basis: revenue when earned, expenses when incurred. Cash is what actually moves in and out of your bank account. You might have “earned” revenue on a busy Saturday, but the processor does not deposit it until Tuesday. You might have “incurred” a big expense last month, but you are paying the credit card bill this month. Depreciation shows up on the P&amp;L but does not take cash out; loan principal does not show up as an expense but it does take cash out. So you can be “profitable” and still have no cash—or have cash in a given month when the P&amp;L says you lost money. The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> goes deeper on timing; here we focus on what to do when the accountant’s report and your bank balance do not match.
            </p>
          </section>

          <section className="prose-block">
            <h2>Common Causes of “Profitable but Broke”</h2>
            <p>
              Debt principal payments (you are paying down a loan, which is not an expense but uses cash). Inventory buildup (you bought more than you sold, so cash went out but cost of goods might not reflect it all yet). Paying down past-due vendors or taxes (catch-up payments use cash but may relate to prior periods). Large one-time purchases (equipment, repairs) that hit cash in one month but are depreciated or expensed over time. Growth or expansion (you are reinvesting every dollar). Once you identify which of these is driving the gap, you can plan: build a cash forecast, set aside a percentage of revenue for debt and taxes, or consider <Link to="/restaurant-working-capital">working capital</Link> to smooth the timing. See <Link to="/restaurant-record-sales-no-profit">record sales no profit</Link> and <Link to="/restaurant-tax-bill-cant-pay">tax bill you cannot pay</Link> for related issues.
            </p>
          </section>

          <section className="prose-block">
            <h2>Using a Simple Cash Forecast</h2>
            <p>
              A cash forecast is different from a P&amp;L: it shows when money actually hits the bank and when it leaves. List expected deposits (card settlements, etc.) and expected outflows (payroll, rent, vendors, loan payments, taxes) by week or month. That will show you when gaps appear so you can cut spending, accelerate collections, or arrange <Link to="/restaurant-cash-advance">restaurant funding</Link> in advance instead of in crisis. Many owners who feel “profitable but broke” have never run a cash forecast—doing it once often clarifies everything.
            </p>
            <p>
              Start with a blank spreadsheet or a simple template: one column for each week or month, rows for “deposits,” “payroll,” “rent,” “vendors,” “debt service,” “taxes,” and “other.” Fill in what you know from your calendar and last year’s pattern. The first time you do it, the numbers will be rough—that is fine. The goal is to see the timing: “In week three we have payroll and a big vendor payment but only two days of deposits.” Once you see that, you can move money, delay a payment, or line up funding before the gap hits.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Working Capital Can Help</h2>
            <p>
              If the business is genuinely profitable but cash is tied up in timing (e.g., you are waiting on deposits while bills are due), a <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or <Link to="/restaurant-funding-options">other funding</Link> can bridge the gap. Repayment tied to sales can make it easier to manage when revenue is uneven. Use it to smooth cash flow, not to hide ongoing losses.
            </p>
            <p>
              If you are “profitable” only on paper and actually losing cash over time, the fix is operational and financial structure, not more debt. Look at <Link to="/busy-but-broke-restaurant">why busy restaurants run out of cash</Link>, <Link to="/restaurant-menu-engineering-cash-flow">menu engineering</Link>, and <Link to="/restaurant-labor-schedule-money-drains">labor scheduling</Link> to improve margin and timing. Funding can buy you time to implement those changes, but it cannot replace them.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If your P&amp;L says profit but your bank says otherwise, build a cash forecast and identify where the gap comes from. Then address timing (reserves, payment schedules) or consider a short-term bridge. <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>Review restaurant financing options</a> to see what might fit. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
