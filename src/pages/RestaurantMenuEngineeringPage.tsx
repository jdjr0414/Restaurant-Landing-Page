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

export function RestaurantMenuEngineeringPage() {
  const meta = getMeta('/restaurant-menu-engineering-cash-flow')!;
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
          { name: 'Menu Engineering & Cash Flow', path: '/restaurant-menu-engineering-cash-flow' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">How Menu Design Can Make or Break Your Restaurant Cash Flow</h1>
          <p className="page-lead">
            Your best-sellers might be your worst margin items—and that mix can quietly starve your cash flow. This guide explains the basics of menu engineering: how to see which items actually make money, how to adjust your menu so sales turn into cash, and why fixing the mix often does more for your bank account than cutting labor or raising prices across the board.
          </p>

          <section className="prose-block">
            <h2>Why Popular Items Can Lose Money</h2>
            <p>
              A dish that sells a lot is not automatically profitable. If food and labor cost are high and the price is low, you can be busy and still lose money on every order. Menu engineering is the practice of looking at each item’s contribution (price minus direct costs) and volume, then grouping items into stars (high margin, high volume), plowhorses (low margin, high volume), puzzles (high margin, low volume), and dogs (low margin, low volume). The <Link to="/busy-but-broke-restaurant">busy but broke</Link> guide describes the overall trap; here we focus on fixing the menu so your mix supports cash flow.
            </p>
            <p>
              Plowhorses—items that sell well but have low contribution—are the silent killers. They make your sales report look strong while your bank account stays thin. The fix is not always to delete them; often it is to raise the price slightly, reduce the portion or swap a costly ingredient, or pair them with a high-margin add-on (e.g., a drink or dessert) so the combined ticket contributes more. Stars are your best friends: keep them visible and easy to order. Puzzles need a push—better placement, a server suggestion, or a small discount to introduce them to more guests.
            </p>
          </section>

          <section className="prose-block">
            <h2>Simple Steps to Improve Your Mix</h2>
            <p>
              You do not need complex software to start. List your top 10–15 items by sales. For each, estimate food cost and the labor to make it (if you have recipe and labor data, use it). Compare that to the price. Items with low contribution that sell a lot are dragging your margin—consider raising the price, reducing portion or cost, or promoting higher-margin alternatives instead.
            </p>
            <p>
              Items with high contribution that do not sell might need better placement or description on the menu. Small shifts in mix can free up meaningful cash without a full menu overhaul. Try one change at a time (e.g., raise the price on one plowhorse by 10%, or add a “server favorite” callout for a puzzle) and track the result. If sales hold and margin improves, you have found a lever you can use elsewhere.
            </p>
          </section>

          <section className="prose-block">
            <h2>Menu and Cash Flow: How They Connect</h2>
            <p>
              When more of your sales come from higher-contribution items, each dollar of revenue puts more cash in your pocket. That can reduce your need for <Link to="/restaurant-working-capital">working capital</Link> or help you pay down existing obligations faster. For owners who feel they are always short, menu engineering is often an underused lever—especially compared to cutting labor (which can hurt service) or discounting (which can train guests to wait for a deal).
            </p>
            <p>
              See <Link to="/restaurant-discounting-hurting-profits">discounting and profits</Link> and <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> for more context. The goal is not to turn every item into a star overnight but to shift the mix enough that your average contribution per cover improves. Even a 2–3% improvement in food margin, sustained over a year, can add up to thousands of dollars in cash flow.
            </p>
          </section>

          <section className="prose-block">
            <h2>When You Need Cash Before the Menu Changes Pay Off</h2>
            <p>
              Improving your menu mix takes time. If you need cash now—for <Link to="/cant-make-restaurant-payroll">payroll</Link>, <Link to="/behind-on-restaurant-vendor-payments">vendors</Link>, or <Link to="/restaurant-equipment-broke-no-money">equipment</Link>—short-term <Link to="/restaurant-funding">restaurant funding</Link> can bridge the gap. Use the breathing room to implement the menu and pricing changes, then use the improved margin to repay and build a reserve. <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>Review restaurant financing options</a> to see what might fit. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
