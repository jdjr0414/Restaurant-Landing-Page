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

export function RestaurantDeliveryAppFeesPage() {
  const meta = getMeta('/restaurant-delivery-app-fees-killing-profits')!;
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
          { name: 'Delivery App Fees', path: '/restaurant-delivery-app-fees-killing-profits' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">How Delivery Apps Quietly Eat Your Restaurant Profits</h1>
          <p className="page-lead">
            Third-party delivery can bring orders through the door—but commission fees, packaging, and the mix of orders often leave less profit than you expect. This guide shows how to measure the real cost of delivery apps, when to rebalance channels, and how to protect your cash flow so delivery does not starve the rest of your business.
          </p>

          <section className="prose-block">
            <h2>Why Delivery Feels Like Found Money—Until It Doesn&apos;t</h2>
            <p>
              Delivery orders look like revenue on your sales report. But after the platform’s commission (often 15–30%), packaging, and the fact that many delivery orders are smaller or lower-margin items, the net to your restaurant can be thin or negative. When a large share of your volume runs through these channels, your top-line sales can rise while your cash flow falls. The <Link to="/busy-but-broke-restaurant">busy but broke</Link> guide explains how high volume with low margin hurts; here we focus on delivery specifically.
            </p>
            <p>
              Guests who order via an app may never set foot in your restaurant. That can feel like pure upside—until you notice that your best-margin items (drinks, desserts, add-ons) sell less on delivery, while lower-margin or promo-heavy items dominate. Add in the cost of containers, utensils, and bags, and the “same” $50 check can put half as much in your pocket when it comes through a third-party app. Over a full month, that difference can be thousands of dollars that you expected to have for <Link to="/cant-make-restaurant-payroll">payroll</Link> or <Link to="/behind-on-restaurant-vendor-payments">vendors</Link>.
            </p>
          </section>

          <section className="prose-block">
            <h2>Measuring the Real Cost of Delivery</h2>
            <p>
              Pull a month of delivery sales and subtract: platform commission, packaging, any promo or discount you absorbed, and the incremental labor to pack and hand off orders. Compare that net to the same order value if it had been dine-in or pickup. Many owners are surprised by how little is left.
            </p>
            <p>
              Break it down by platform if you use more than one. Some apps charge a flat commission; others layer on marketing fees, payment processing, or penalties for slow acceptance. Your contract may also include exclusivity or minimum guarantees that affect your flexibility. Once you have the number per order and per platform, you can decide whether to raise delivery prices on the app, limit which items are available for delivery, or reduce reliance on third-party and push pickup and direct ordering instead. Even a small shift—e.g., moving 20% of delivery volume to your own ordering page—can recover meaningful margin.
            </p>
          </section>

          <section className="prose-block">
            <h2>Rebalancing Without Killing Volume</h2>
            <p>
              You do not have to quit delivery. You can raise prices on the platform to offset fees (many customers accept a “delivery fee” or higher menu prices when they understand it covers the app), promote your own online ordering or phone orders for pickup, or run delivery only during slower dayparts where the incremental volume is worth the cost.
            </p>
            <p>
              The goal is to make delivery profitable or at least neutral so it does not drain cash you need for payroll, vendors, or <Link to="/restaurant-equipment-broke-no-money">equipment</Link>. If you cannot make delivery profitable at current commission rates, treat it as a marketing channel: use it to reach new customers, but steer regulars to your own ordering system with a discount or loyalty incentive. Over time, shifting even a portion of repeat orders off the app can improve your overall cash flow without sacrificing awareness.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Delivery Has Already Squeezed Your Cash</h2>
            <p>
              If you are already short because margins were eroded by delivery, fixing the mix will help going forward. For an immediate gap, <Link to="/restaurant-working-capital">restaurant working capital</Link> or a <Link to="/restaurant-cash-advance">cash advance</Link> can bridge until your changes take effect. Use the time to implement pricing and channel shifts so you do not depend on high-cost volume to survive.
            </p>
            <p>
              Funding that repays as a percentage of sales can be a fit when a large share of your revenue still comes from delivery: as you rebalance and improve margin, your payment adjusts with your actual sales. See <Link to="/restaurant-funding-options">restaurant funding options</Link> for how these products work and how to compare speed, cost, and qualification.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If delivery app fees are eating your profits, measure the true net per order, then adjust pricing and channels. If you need short-term cash while you fix the mix, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a>. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
