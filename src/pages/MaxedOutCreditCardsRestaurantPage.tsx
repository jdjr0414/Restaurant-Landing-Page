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

export function MaxedOutCreditCardsRestaurantPage() {
  const meta = getMeta('/maxed-out-credit-cards-restaurant')!;
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
          { name: 'Maxed Out Credit Cards', path: '/maxed-out-credit-cards-restaurant' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">When Your Restaurant&apos;s Credit Cards Hit the Limit</h1>
          <p className="page-lead">
            Relying on business or personal cards to cover restaurant expenses can work until the limits are maxed and the minimum payments eat what little cash you have. This guide explains how to stop the cycle: prioritize which debt to tackle, when a cash advance or working capital might be a better move than more card debt, and how to avoid falling back into the same trap.
          </p>

          <section className="prose-block">
            <h2>Why Restaurants Max Out Cards</h2>
            <p>
              Cards are easy: swipe when you need inventory, equipment, or payroll. But high interest rates and minimum payments that never seem to shrink can trap you. When you are already at the limit, one slow week can mean missed payments, fees, and damage to your credit. The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> explains why timing mismatches cause this; here we focus on what to do when the cards are maxed and you still have obligations to meet.
            </p>
            <p>
              Business and personal cards often carry APRs of 18–25% or higher. When you are only paying the minimum, most of that payment goes to interest, not principal—so the balance barely moves. Adding new charges on top of that makes it harder to ever get ahead. The cycle repeats: you need cash, you put it on the card, the minimum goes up, and you have less cash for the next obligation. Breaking the cycle usually requires a combination of prioritizing payments, stopping new card use where possible, and sometimes replacing high-cost card debt with a product that has a structure you can actually pay down.
            </p>
          </section>

          <section className="prose-block">
            <h2>Prioritize: What to Pay First</h2>
            <p>
              Not all debt is equal. Payroll and payroll taxes, rent, and critical vendors should come before card minimums when you must choose. That said, missing card payments hurts your credit and can trigger rate hikes. If you can, pay at least the minimum on every card and put any extra toward the highest-rate balance.
            </p>
            <p>
              If you cannot pay minimums on everything, talk to the card issuers—some offer hardship programs that reduce payments temporarily or lower the interest rate. It is worth a call: a few months of reduced payments can give you room to catch up on other bills or to line up a different funding structure so you are not relying on cards for operating expenses. Document any agreement in writing so there is no confusion later.
            </p>
          </section>

          <section className="prose-block">
            <h2>When a Cash Advance or Working Capital Beats More Card Debt</h2>
            <p>
              Adding more high-interest card debt is rarely a good long-term fix. A <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or <Link to="/restaurant-working-capital">working capital</Link> product has a different structure: you get a lump sum and repay it as a percentage of sales. That can ease the pressure of fixed minimum payments when revenue is uneven. It is not free—there is a cost—but for many owners it is a better fit than another card when they need to cover a gap or consolidate.
            </p>
            <p>
              Compare the total cost and repayment structure before you commit. The <Link to="/restaurant-funding-options">restaurant funding options</Link> and <Link to="/restaurant-loan-alternatives">loan alternatives</Link> pages break down how these products work. Use funding to get through a crunch and then fix the underlying cash flow so you do not refill the cards again.
            </p>
          </section>

          <section className="prose-block">
            <h2>Breaking the Cycle</h2>
            <p>
              Once you have breathing room, build a simple weekly cash forecast so you see gaps before they become emergencies. Reduce reliance on cards for day-to-day operations; use them for planned, short-term needs only if you pay them off quickly. For ongoing cash flow issues, see <Link to="/busy-but-broke-restaurant">why busy restaurants still run out of cash</Link> and <Link to="/restaurant-menu-engineering-cash-flow">menu and labor fixes</Link> so you can free up margin instead of borrowing more.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If your restaurant credit cards are maxed, prioritize essential payments first, then look at your options. For a structure that flexes with sales, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a>. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
