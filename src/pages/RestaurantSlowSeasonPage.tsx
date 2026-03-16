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

export function RestaurantSlowSeasonPage() {
  const meta = getMeta('/restaurant-slow-season-cash-flow')!;
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
          { name: 'Slow Season Cash Flow', path: '/restaurant-slow-season-cash-flow' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">When Your Restaurant&apos;s Slow Season Lasts Longer Than You Planned</h1>
          <p className="page-lead">
            Every restaurant has slow months—January, post-holiday, or summer in some markets. What nobody warns you about is when that slow season stretches into six or eight weeks and the cash runs out before traffic returns. This guide covers how to plan for the dip, what to cut (and what not to), and when short-term funding can help you make it to the other side.
          </p>

          <section className="prose-block">
            <h2>Why Slow Seasons Hit Restaurants So Hard</h2>
            <p>
              Rent, utilities, insurance, and loan payments do not drop when sales do. Labor can be trimmed, but only so far before service suffers. So when revenue falls for weeks, the gap between what comes in and what goes out can drain your reserve fast. The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> explains the timing mismatch; here we focus on what to do when the slow period is already here and lasting longer than you expected.
            </p>
            <p>
              Some markets see a clear seasonal pattern—January and February slow after the holidays, or summer quiet in a tourist town. Others get hit by a one-off: construction nearby, a competitor opening, or a weather event. Whatever the cause, the financial effect is the same: fixed costs keep going while revenue drops. If you did not build a reserve during the strong months, you can find yourself with only a few weeks of runway before you must make hard choices about payroll, rent, or vendors.
            </p>
          </section>

          <section className="prose-block">
            <h2>Plan Ahead: Map the Next 90 Days</h2>
            <p>
              Even a simple forecast helps. List your fixed costs (rent, insurance, debt service) and estimate labor and food for the next three months based on last year or a conservative sales estimate. Compare that to expected revenue. If you see a shortfall, you have time to reduce hours, negotiate with vendors, or line up <Link to="/restaurant-working-capital">working capital</Link> before you are in crisis. Many owners only look when the account is already empty—by then options are fewer.
            </p>
          </section>

          <section className="prose-block">
            <h2>What to Cut—and What to Protect</h2>
            <p>
              Trimming labor and nonessential spending is logical, but avoid cuts that hurt the guest experience or your ability to reopen strong. Letting maintenance slide can mean a bigger bill later. Cutting marketing to zero may extend the slow period. Focus on overlap, overtime, and discretionary spend first; protect quality, safety, and the things that bring people back when the season turns.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Working Capital Can Bridge the Gap</h2>
            <p>
              If you have already cut what you can and still face a gap before traffic returns, short-term funding may be appropriate. A <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or other <Link to="/restaurant-funding">restaurant funding</Link> can provide funds quickly, with repayment often tied to sales—so when you are slow, payments are lower. That structure can make it easier to get through the dip without missing rent or payroll.
            </p>
            <p>
              Use the money to cover essential costs during the slow period, not to expand or take on new debt. The goal is to reach the other side with your team and key vendor relationships intact. For more on comparing options, see <Link to="/restaurant-funding-options">restaurant funding options</Link> and <Link to="/restaurant-loan-alternatives">loan alternatives</Link>.
            </p>
          </section>

          <section className="prose-block">
            <h2>Learning for Next Year</h2>
            <p>
              Once you are through, build a slow-season reserve. Set aside a percentage of strong-month revenue so that next year you have a cushion. If you run a seasonal business, see <Link to="/restaurant-first-year-cash-flow-surprises">first-year cash flow surprises</Link> and <Link to="/restaurant-profitable-on-paper-no-cash">profitable on paper but no cash</Link> for more on timing and reserves.
            </p>
            <p>
              Many owners target 4–8 weeks of fixed costs in reserve before the slow period begins. That may sound like a lot, but it is the difference between riding out a bad stretch and going into crisis mode. Automate the save if you can: a weekly or monthly transfer from operating to a reserve account right after payday makes it easier to stick to the plan. When the slow season arrives, you will have options—trim labor and nonessentials by choice, not because the account is empty.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If your slow season has stretched and cash is tight, do not wait until the last moment. Forecast, cut smart, and—if you need a bridge—explore <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>restaurant financing options</a>. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
