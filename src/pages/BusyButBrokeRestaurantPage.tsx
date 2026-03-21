import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { CTA } from '../components/CTA';
import { PageHero } from '../components/PageHero';
import MidPageCTA from '../components/MidPageCTA';
import { FIND_MATCH_URL, AXIANT_LINK_REL } from '../config';
import { getMeta } from '../staticMeta';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

export function BusyButBrokeRestaurantPage() {
  const meta = getMeta('/busy-but-broke-restaurant')!;
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
          { name: 'Busy but Broke', path: '/busy-but-broke-restaurant' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Why Your Busy Restaurant Still Feels Broke</h1>
          <p className="page-lead">
            If your dining room is full but your bank account is empty, you are not alone. Many restaurant owners work
            nonstop, see strong sales, and still feel like there is never enough cash for payroll, vendors, or
            equipment. This guide breaks down why that happens, where the money is really going, and what to do next.
          </p>

          <section className="prose-block">
            <h2>Busy Does Not Always Mean Profitable</h2>
            <p>
              It is easy to assume that a packed dining room means a healthy business. In reality, a busy restaurant can
              still lose money every night. Discounts, high food and labor costs, delivery app commissions, and a lease
              that is too expensive can quietly eat away at every sale. On paper, the top-line revenue looks great.
              What matters for your ability to pay bills is what is left after expenses—and when that cash actually hits
              your account.
            </p>
            <p>
              The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> explains how timing mismatches
              between sales and bills create pressure. Here, we focus on the specific money leaks that make busy
              restaurants feel broke, and how to plug them so that your hard work shows up as real cash.
            </p>
          </section>

          <section className="prose-block">
            <h2>The Biggest Money Drains Hiding in a Full Dining Room</h2>
            <p>
              When you look at your weekly sales report, it might seem like everything is working. But underneath that
              number are costs you may not see clearly from day to day. Common drains include:
            </p>
            <ul>
              <li>
                <strong>Food cost creep</strong> — Ingredient prices rise, portions grow, and waste increases over time.
                If menu prices do not move with costs, your margins shrink quietly each month.
              </li>
              <li>
                <strong>Labor that does not match demand</strong> — Being slightly overstaffed on most shifts can eat as
                much cash as being badly overstaffed once in a while. A few extra hours here and there add up.
              </li>
              <li>
                <strong>Discounts that go too far</strong> — Coupons, happy hours, and delivery promotions can drive
                traffic but sometimes turn profitable orders into break-even or money-losing tickets.
              </li>
              <li>
                <strong>Delivery and third-party fees</strong> — Online orders feel like “found money,” but after
                commissions and packaging costs, the profit may be far lower than dine-in sales.
              </li>
              <li>
                <strong>Lease and fixed costs that are too high</strong> — A great location can also mean rent that
                swallows the profit from each table before you see it as cash.
              </li>
            </ul>
            <p>
              None of these issues mean your concept is broken. They do mean that you need a clear picture of where each
              dollar goes so that a busy dining room translates into real money for payroll, inventory, and equipment.
            </p>
          </section>

          <MidPageCTA />

          <section className="prose-block">
            <h2>Why the Bank Account Is Always Behind the Dining Room</h2>
            <p>
              Even when your restaurant is profitable on paper, cash can lag far behind sales. Credit card processors
              may take days to deposit funds. Vendors want payment on delivery or within a week. Payroll hits every one
              or two weeks, whether sales were strong or soft. Taxes and licensing fees arrive on their own schedule.
            </p>
            <p>
              That timing gap is one reason many owners feel like they are always waiting for the next busy weekend to
              catch up. If you are constantly juggling which bill to pay first, you are dealing with a cash flow
              problem, not just a sales problem. The{' '}
              <Link to="/restaurant-working-capital">restaurant working capital guide</Link> and{' '}
              <Link to="/restaurant-funding">restaurant funding options</Link> pages explain tools that can help bridge
              these gaps.
            </p>
          </section>

          <section className="prose-block">
            <h2>Seven Signs Your “Busy but Broke” Problem Is Getting Worse</h2>
            <p>
              Many owners tell themselves that next month will be better. Watching for early warning signs helps you act
              before the situation becomes a crisis. Common red flags include:
            </p>
            <ul>
              <li>Using credit cards to cover recurring bills like payroll or utilities.</li>
              <li>Paying vendors late and asking for extra time more than once.</li>
              <li>Skipping your own paycheck for weeks at a time.</li>
              <li>Delaying repairs on equipment because there is “never enough” to fix it.</li>
              <li>Relying on daily sales to decide which bills get paid that night.</li>
              <li>Feeling surprised by tax bills or quarterly payments every time they arrive.</li>
              <li>Having no cushion at all for slow weeks or emergencies.</li>
            </ul>
            <p>
              If more than one of these feels familiar, it is time to step back and look at the structure of your cash
              flow, not just your top-line sales.
            </p>
          </section>

          <section className="prose-block">
            <h2>Steps to Turn Busyness into Cash</h2>
            <p>
              You do not need to become a full-time accountant to improve your situation. Small, practical steps can
              create real breathing room. Start with:
            </p>
            <ul>
              <li>
                <strong>Checking contribution margin on best-sellers</strong> — Identify which menu items truly carry
                the restaurant after food and labor. Feature those items and reconsider low-margin favorites that crowd
                the line.
              </li>
              <li>
                <strong>Looking at labor by daypart</strong> — Compare staffing levels to sales by hour. Often, trimming
                or shifting a few hours across the week frees up cash without hurting service.
              </li>
              <li>
                <strong>Running a simple weekly cash forecast</strong> — Map out expected deposits, payroll, rent, and
                vendor payments for the next four weeks so you can spot gaps early.
              </li>
              <li>
                <strong>Re-evaluating discounts and delivery</strong> — If certain promotions or channels lose money,
                adjust pricing or limit them to times when you truly need traffic.
              </li>
            </ul>
            <p>
              These steps are not about cutting everything to the bone. They are about making sure the work you and your
              team already do shows up where it matters most: in the cash you have available to pay people and keep the
              doors open.
            </p>
          </section>

          <section className="prose-block">
            <h2>Why “Just Working Harder” Does Not Fix It</h2>
            <p>
              It is tempting to think that more hours or more promotions will solve a busy-but-broke situation. But if the problem is margin (your best-sellers do not contribute enough) or timing (money comes in after bills are due), working harder often just burns you out without fixing the bank balance. The fix is usually structural: change what you sell, how you schedule, or how you capture and hold cash. That can feel harder than “just grinding,” but it is what actually moves the needle. See <Link to="/restaurant-menu-engineering-cash-flow">menu engineering</Link> and <Link to="/restaurant-labor-schedule-money-drains">labor schedule money drains</Link> for concrete levers.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Short-Term Funding Can Help</h2>
            <p>
              If you already see a gap between upcoming bills and expected cash, you may need more than adjustments to
              menu mix and scheduling. That is where short-term{' '}
              <Link to="/restaurant-working-capital">restaurant working capital</Link> or a{' '}
              <Link to="/restaurant-cash-advance">restaurant cash advance</Link> can help. These options are designed to
              provide quick access to funds, often in 24–48 hours, with repayment tied to your sales.
            </p>
            <p>
              Used carefully, working capital can give you time to fix the underlying issues without missing payroll or
              losing key vendors. The goal is not to mask a broken model forever—it is to create the breathing room you
              need to get your margins and timing under control.
            </p>
          </section>

          <section className="prose-block">
            <h2>What to Do Before You Borrow</h2>
            <p>
              Before taking on any new obligation, even a flexible one, get clear on three things: how much you really
              need, how you expect to repay it, and what you will change with the breathing room it buys you. List the
              specific bills or repairs you are trying to cover, estimate how long it will take for improvements to
              show up in your cash, and think through a worst-case scenario.
            </p>
            <p>
              The pages on <Link to="/restaurant-funding-options">restaurant funding options</Link> and{' '}
              <Link to="/restaurant-loan-alternatives">loan alternatives</Link> walk through structures and tradeoffs.
              If you prefer to talk it through with someone, you can also{' '}
              <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>
                review restaurant financing options
              </a>{' '}
              based on your situation.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps When You Are Working Hard but Still Stressed</h2>
            <p>
              Feeling “busy but broke” does not mean you have failed as an owner. It often means you were never given a
              clear way to connect the work you do each shift to the cash you need each month. By understanding where
              the money leaks out, adjusting how you price, schedule, and promote, and using funding carefully when you
              need it, you can turn a full dining room into the stability you have been working for.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}

