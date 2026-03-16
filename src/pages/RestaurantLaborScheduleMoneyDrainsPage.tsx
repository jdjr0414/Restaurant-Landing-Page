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

export function RestaurantLaborScheduleMoneyDrainsPage() {
  const meta = getMeta('/restaurant-labor-schedule-money-drains')!;
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
          { name: 'Labor Schedule Money Drains', path: '/restaurant-labor-schedule-money-drains' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">5 Money Drains Hiding in Your Restaurant Schedule</h1>
          <p className="page-lead">
            Labor is one of the biggest costs in a restaurant—and one of the easiest to let creep. Overstaffing, understaffing, and schedule mistakes can drain cash without you noticing until the payroll report lands. This guide walks through the most common labor-related money drains and how to fix them so your schedule supports both service and cash flow.
          </p>

          <section className="prose-block">
            <h2>Why Labor Costs Sneak Up on You</h2>
            <p>
              Restaurant labor is not just hourly wages. It is overtime, training time, overlap between shifts, and the cost of being slightly overstaffed “just in case.” A few extra hours per day across a week can add up to hundreds or thousands of dollars. When revenue is good, it is easy to miss; when sales dip, that same labor percentage can push you into the red.
            </p>
            <p>
              The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> explains how fixed and variable costs affect your bank balance. Here we focus on labor: the five schedule-related drains that hurt margins and what to do about them. If you are already short on cash and labor is part of the problem, see <Link to="/restaurant-working-capital">restaurant working capital</Link> and <Link to="/cant-make-restaurant-payroll">when you cannot make payroll</Link> for immediate options.
            </p>
          </section>

          <section className="prose-block">
            <h2>1. Overstaffing “Just in Case”</h2>
            <p>
              Many owners schedule extra bodies for busy nights or to cover no-shows. Sometimes that cushion is necessary; often it is habit. Compare your labor hours and sales by daypart. If you are consistently overstaffed for the traffic you get, trim an hour or two per shift and see if service holds. You may find you can cut cost without hurting the guest experience.
            </p>
          </section>

          <section className="prose-block">
            <h2>2. Understaffing That Burns Cash in Other Ways</h2>
            <p>
              Cutting labor too aggressively has its own cost: slow service, mistakes, comped meals, and lost repeat business. The goal is not to slash hours blindly but to match staffing to demand. Use historical sales and covers to build a labor model—e.g., X hours per $Y in revenue—and adjust as you learn. Understaffing can cost more in lost sales and stress than a few extra hours of pay.
            </p>
          </section>

          <section className="prose-block">
            <h2>3. Overtime That Could Have Been Avoided</h2>
            <p>
              Unplanned overtime is expensive. When someone stays late or comes in on a day off, the premium adds up fast. Reduce it by planning coverage in advance, cross-training so more people can cover key roles, and setting clear expectations about when shifts end. A little planning often eliminates the need for last-minute overtime.
            </p>
          </section>

          <section className="prose-block">
            <h2>4. Overlap and Handoff Time</h2>
            <p>
              Shift overlaps—when the next person arrives before the previous one leaves—are sometimes necessary. They can also become a default: 30 minutes of overlap every shift, every day, adds up. Review whether you need full overlap or whether a shorter handoff or better documentation can reduce paid time that does not directly serve guests.
            </p>
          </section>

          <section className="prose-block">
            <h2>5. Training and Ramp-Up That Never Gets Measured</h2>
            <p>
              New hires and menu changes require training time. That labor is real, but it often is not tracked separately. If you are always “training,” ask whether your onboarding can be tighter and whether you are retaining people long enough to get a return. High turnover makes labor cost soar; see <Link to="/restaurant-manager-quit-now-what">when key staff leave</Link> for how to stabilize during transitions.
            </p>
          </section>

          <section className="prose-block">
            <h2>Building a Labor Model That Fits Your Sales</h2>
            <p>
              A simple labor model ties hours to revenue: for example, target 25–30% of sales as labor cost, then back into how many hours you can afford at your average wage. Compare that to your actual schedule. If you are consistently over that target, you have room to trim—but do it by shift and daypart, not across the board. Some shifts may be overstaffed while others are tight. Use your POS or sales data to see which dayparts drive revenue and which are slow; align staffing so that busy periods are covered and slow periods are lean. Revisit the model every few months as wages or sales mix change.
            </p>
          </section>

          <section className="prose-block">
            <h2>Turning Schedule Fixes into Cash Flow</h2>
            <p>
              Even modest labor savings can create breathing room. Use that room to build a small reserve, catch up on vendor payments, or pay down high-cost debt. If you have already optimized labor and still face a cash gap, <Link to="/restaurant-funding-options">restaurant funding options</Link> may help you bridge a slow period or cover a one-time need. <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>Review restaurant financing options</a> to see what might fit. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
