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

export function RestaurantDiscountingHurtingProfitsPage() {
  const meta = getMeta('/restaurant-discounting-hurting-profits')!;
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
          { name: 'Discounting Hurting Profits', path: '/restaurant-discounting-hurting-profits' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">The Hidden Cash Flow Danger in Restaurant Discounts and Coupons</h1>
          <p className="page-lead">
            Discounts and coupons can fill the dining room—but when they are too deep or too broad, they starve your cash flow. This guide explains how discounting hurts restaurant profits, how to run the math so promotions support margin instead of killing it, and what to do when you need traffic without giving away the house.
          </p>

          <section className="prose-block">
            <h2>Why Discounting Feels Necessary—and When It Backfires</h2>
            <p>
              Slow nights, new openings, and competition push owners toward coupons, BOGOs, and happy-hour deals. The idea is to bring people in and hope they return at full price. But when the discount is large or applies to your best-margin items, you can end up with a busy restaurant and no money left for <Link to="/cant-make-restaurant-payroll">payroll</Link>, <Link to="/behind-on-restaurant-vendor-payments">vendors</Link>, or reserves. The <Link to="/busy-but-broke-restaurant">busy but broke</Link> guide covers that trap; here we focus on how to discount smarter so you protect cash flow.
            </p>
            <p>
              The trap is that discounting can become a habit: you run a promo to fill seats, it works, so you run another. Over time, a growing share of your revenue comes from discounted checks, and your average ticket and margin drop. When you try to pull back, you fear empty tables—so you keep discounting. Breaking that cycle requires running the numbers and being willing to test smaller or fewer promotions so you can see what happens to traffic and margin when you are not giving away the house.
            </p>
          </section>

          <section className="prose-block">
            <h2>Running the Math on Every Promotion</h2>
            <p>
              Before you run a promotion, know your food and labor cost for the items involved. If a 20% off deal pushes your margin below your break-even, you are losing money on every discounted ticket. Limit discounts to specific items or dayparts where you have room, or use a smaller discount so you still keep a margin.
            </p>
            <p>
              Track redemption and repeat visits so you know whether the promo actually brought back full-price customers or just one-time bargain hunters. If most of your discounted traffic never returns at full price, the promotion is not building loyalty—it is just cutting margin. Use a simple spreadsheet: cost per cover at discounted vs full price, number of covers, and whether you saw an uptick in full-price visits in the following weeks. That data will tell you which promotions are worth keeping and which to drop.
            </p>
          </section>

          <section className="prose-block">
            <h2>Alternatives That Drive Traffic Without Killing Margin</h2>
            <p>
              Not every promotion has to be a deep discount. Consider add-ons (free dessert with entrée), time-based offers (early-bird or late-night at a smaller discount), or loyalty that rewards repeat visits instead of slashing price for everyone. The goal is to fill seats and build habit without training guests to only show up when there is a coupon.
            </p>
            <p>
              For more on how menu mix affects cash, see <Link to="/restaurant-menu-engineering-cash-flow">menu engineering and cash flow</Link>. A “buy one get one half off” on a high-margin item can cost you less than “20% off everything,” and a loyalty punch card that rewards the fifth visit at full price can drive repeat business without training guests to wait for a deal. Test one change at a time so you can see what actually moves the needle.
            </p>
          </section>

          <section className="prose-block">
            <h2>When You Are Already Short Because of Discounting</h2>
            <p>
              If you have been discounting heavily and now cannot cover bills, the first step is to tighten or end the promotions that are losing money. Then look at whether you need a short-term bridge: <Link to="/restaurant-working-capital">restaurant working capital</Link> or a <Link to="/restaurant-cash-advance">cash advance</Link> can help you get through the transition while you rebuild margin.
            </p>
            <p>
              Use the breathing room to fix your pricing and promo strategy so you do not depend on loss-leading traffic. <Link to="/restaurant-funding-options">Restaurant funding options</Link> explains how these products work. Repayment tied to sales can ease the burden as you shift away from heavy discounting—when your mix improves and margin recovers, you will have more cash to repay and to build a reserve so you are not forced back into desperate promotions next slow season.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If discounting is hurting your profits, run the numbers on each promotion and limit deals to items and times where you keep margin. If you need cash while you adjust, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a>. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
