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

export function RestaurantEquipmentBrokePage() {
  const meta = getMeta('/restaurant-equipment-broke-no-money')!;
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
          { name: 'Equipment Broke, No Money', path: '/restaurant-equipment-broke-no-money' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">The True Cost of Ignoring That Broken Cooler or Oven</h1>
          <p className="page-lead">
            When restaurant equipment breaks and there is no cash set aside, it is tempting to patch it, ignore it, or hope it holds. But delaying repairs usually costs more—in spoilage, downtime, and emergency callouts. This guide explains why waiting hurts, how to decide repair vs replace, and what to do when you have no money in the bank.
          </p>

          <section className="prose-block">
            <h2>Why “We&apos;ll Fix It Later” Backfires</h2>
            <p>
              A walk-in that does not hold temperature wastes product and risks health violations. A broken oven or fryer means you cannot execute the menu. Duct tape fixes might last a week—or fail at the busiest moment. Emergency repairs often cost more than scheduled service, and lost sales during an unexpected closure can wipe out months of margin.
            </p>
            <p>
              The real cost is not just the repair bill. It is spoiled inventory, comped meals, lost shifts, and the stress of scrambling. Understanding that helps you justify finding a way to fund the fix instead of hoping the problem goes away. The <Link to="/restaurant-equipment-financing-guide">restaurant equipment financing guide</Link> covers loans and leases; here we focus on the “broke right now” scenario and fast options like a <Link to="/restaurant-cash-advance">restaurant cash advance</Link>.
            </p>
          </section>

          <section className="prose-block">
            <h2>Repair vs Replace: How to Decide</h2>
            <p>
              Not every breakdown requires a new unit. Get a written quote for repair and, for major items, a quote for replacement. Compare the repair cost to the expected life of the repaired unit. If repair is 50% or more of the replacement cost and the equipment is old, replacement may be the better long-term move—but you still need cash or financing to do it.
            </p>
            <p>
              For critical equipment (refrigeration, cooking), the question is often “how fast can I get back online?” A repair might get you through the week; a replacement might take longer but solve the problem for years. Your <Link to="/restaurant-cash-flow-guide">cash flow</Link> and how much you can access in <Link to="/restaurant-working-capital">working capital</Link> will shape what you can do.
            </p>
          </section>

          <section className="prose-block">
            <h2>When You Have No Reserve: Funding the Fix</h2>
            <p>
              Many restaurant owners do not have an equipment reserve. When something breaks, the only options are cash flow (if you have it), credit cards (often high cost and limited), or short-term funding. A <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or other <Link to="/restaurant-funding">restaurant funding</Link> can provide funds in 24–48 hours, with repayment tied to sales so that slower weeks do not force a fixed payment you cannot meet.
            </p>
            <p>
              Use the money for the repair or replacement, then build a small weekly set-aside so the next breakdown does not put you in the same spot. Even a modest reserve can turn the next emergency into a planned expense. If you are weighing a repair against a replacement and the numbers are close, factor in the cost of another failure: a second breakdown in six months can double your pain. When in doubt, get the repair done now and plan for replacement when you have more time and cash—or when the repaired unit has clearly reached the end of its useful life.
            </p>
          </section>

          <section className="prose-block">
            <h2>What to Do the Day Something Breaks</h2>
            <p>
              As soon as you know you have a problem, get a qualified technician out for a diagnosis and written quote. Do not rely on a verbal estimate—you need a number to decide repair vs replace and to know how much funding you might need. If the equipment is critical (walk-in, main cooking line), ask about lead time for parts or replacement so you can plan for downtime. If you must close or limit service, communicate with staff and regulars so they know what to expect. Then line up funding if you do not have the cash—the sooner you apply, the sooner you can get back to full operation.
            </p>
          </section>

          <section className="prose-block">
            <h2>Preventing the Next Crisis</h2>
            <p>
              After you are back up and running, schedule regular maintenance. Clean coils, check gaskets, and service major equipment on a calendar—not only when something fails. Many problems are cheaper to fix when caught early. If you are constantly putting out fires, read the guide on <Link to="/restaurant-cash-flow-problems">restaurant cash flow problems</Link> and <Link to="/busy-but-broke-restaurant">why busy restaurants still run out of cash</Link> so you can free up margin for reserves and maintenance.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If you have broken equipment and no cash, the worst move is to ignore it. Get a quote, decide repair vs replace, and then look at your options. For fast access to funds, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a> to see what might fit your situation. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
