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

export function RestaurantBookkeepingBadNewsPage() {
  const meta = getMeta('/restaurant-bookkeeping-bad-news')!;
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
          { name: 'Bookkeeping Bad News', path: '/restaurant-bookkeeping-bad-news' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">What to Do When Your Bookkeeper Hands You Bad News</h1>
          <p className="page-lead">
            Finding out your restaurant is losing money or that the numbers do not add up can feel like a punch in the gut. This guide walks through how to triage the situation: understand what the books are actually telling you, fix what is fixable (errors, timing, categorization), and when to consider short-term funding while you get back on track.
          </p>

          <section className="prose-block">
            <h2>First: Separate Panic from Facts</h2>
            <p>
              Bad news from the bookkeeper might mean true losses, or it might mean a timing issue, a miscategorized expense, or a one-time hit you had forgotten. Before you make big decisions, get a clear picture: What period are we looking at? Are there one-time items (equipment, repairs, taxes) that skewed the result? Is cash flow different from profit? The <Link to="/restaurant-profitable-on-paper-no-cash">profitable on paper but no cash</Link> guide explains how P&amp;L and bank balance can tell different stories. Here we focus on what to do when the report in front of you is ugly.
            </p>
            <p>
              Take a breath and schedule a follow-up with your bookkeeper or accountant to walk through the report line by line. Write down every question: “Why did labor jump in this month?” “Is this repair in the right category?” “Did we miss recording any deposits?” Getting answers before you act prevents you from “fixing” something that was never broken—or missing the real problem because it was buried in a single line item.
            </p>
          </section>

          <section className="prose-block">
            <h2>Triage: Errors vs Real Problems</h2>
            <p>
              Ask your bookkeeper to double-check for duplicate entries, wrong categories, or missed income. Sometimes “we lost money” is actually “we had a big repair and it was coded to the wrong month.” If the numbers are correct, then identify the main drivers: labor too high? Food cost up? Sales down? One big expense? That tells you whether the fix is operational (scheduling, menu, pricing) or a one-time cash need (see <Link to="/restaurant-cash-flow-problems">restaurant cash flow problems</Link> and <Link to="/restaurant-working-capital">working capital</Link>).
            </p>
            <p>
              Common bookkeeping mistakes that distort the picture include: recording a large expense in one month when it should be amortized, mixing personal and business expenses so the P&amp;L looks worse than it is, or missing a deposit so revenue appears lower. If your books are done in-house, consider a one-time review by a qualified accountant. If they are done by a pro, ask for a reconciliation of the last three months so you can spot trends—is this one bad month or a pattern?
            </p>
          </section>

          <section className="prose-block">
            <h2>When the Numbers Are Correct: Facing Real Losses</h2>
            <p>
              If the triage shows that the numbers are right and the business really lost money, the next step is to pinpoint why. Compare the bad period to a stronger one: what changed? Labor hours, labor rate, food cost percentage, sales mix, or occupancy cost? Often one or two drivers explain most of the gap. For example, if food cost jumped and sales stayed flat, the issue may be waste, portion creep, or supplier price increases. If labor spiked, look at <Link to="/restaurant-labor-schedule-money-drains">scheduling and labor drains</Link>. If sales dropped, the cause may be seasonal—see <Link to="/restaurant-slow-season-cash-flow">slow season cash flow</Link>—or something else entirely, like a key staff departure or a drop in marketing.
            </p>
          </section>

          <section className="prose-block">
            <h2>Turning the Report Into a Plan</h2>
            <p>
              Use the bad month or quarter as a baseline. List the top three cost or revenue issues and assign one concrete action to each—e.g., “reduce labor by 5% by tightening the schedule,” “raise prices on these five items,” “renegotiate with this vendor.” Set a date to review again so you know if the plan is working.
            </p>
            <p>
              Share the plan with anyone who needs to execute it: your manager, your bookkeeper, your key vendors. If you are the only one who can make changes, block time each week to track progress. Without a clear owner and a deadline, the same report will show up again next quarter. If you need time to execute the plan and cash is short, a <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or <Link to="/restaurant-funding">restaurant funding</Link> can provide a bridge so you can pay bills while you implement changes. See <Link to="/restaurant-funding-options">restaurant funding options</Link> for how these work.
            </p>
          </section>

          <section className="prose-block">
            <h2>Preventing the Next Bad Surprise</h2>
            <p>
              Once you are back on track, set up a simple monthly review: P&amp;L and bank balance, with a quick comparison to the prior month and the same month last year. Catching a dip early gives you time to adjust before it becomes a crisis. Many owners only look at the books when tax time or a loan application forces them to—by then, a small problem may have grown. A 15-minute review once a month can save you from the next “bad news” conversation.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              Bad bookkeeping news is a signal to act, not to freeze. Verify the numbers, identify the causes, and make a plan. If you need short-term cash to execute it, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a>. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
