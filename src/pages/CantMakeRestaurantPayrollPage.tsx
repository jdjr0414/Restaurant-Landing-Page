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

export function CantMakeRestaurantPayrollPage() {
  const meta = getMeta('/cant-make-restaurant-payroll')!;
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
          { name: "Can't Make Payroll", path: '/cant-make-restaurant-payroll' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">When You Can&apos;t Make Restaurant Payroll</h1>
          <p className="page-lead">
            Few moments are more stressful than realizing payday is here and there is not enough cash to cover it. This
            guide walks through what to do in the next 24–72 hours, how to talk to your team and vendors, and how to
            think about short-term funding so that one bad week does not turn into a permanent crisis.
          </p>

          <section className="prose-block">
            <h2>Start with a Clear Picture, Not Panic</h2>
            <p>
              When you first see the numbers, it is natural to freeze or hope that a few good nights will fix
              everything. The problem is that payroll dates are fixed. Before doing anything else, list exactly how much
              you owe in wages, taxes, and tips, how much cash is in your operating account, and what is expected to hit
              your bank before payroll runs.
            </p>
            <p>
              This simple snapshot tells you whether you are a few hundred dollars short or facing a much larger gap. It
              also helps you decide whether operational changes alone are enough, or whether you should look at{' '}
              <Link to="/restaurant-working-capital">working capital options</Link> or a{' '}
              <Link to="/restaurant-cash-advance">restaurant cash advance</Link> to bridge the difference.
            </p>
          </section>

          <section className="prose-block">
            <h2>Prioritize People and Legal Obligations</h2>
            <p>
              Payroll is not just another bill. Wage laws, overtime rules, and tip regulations all come with penalties
              if you miss or delay payment. Beyond the legal side, staff trust is the foundation of your operation. If
              your team doubts they will be paid on time, they may leave quickly—and take your ability to generate
              revenue with them.
            </p>
            <p>
              When forced to choose between obligations, payroll, payroll taxes, and essential utilities should be at
              the top of the list. Some vendors and lenders can be negotiated with; workers&apos; pay and tax
              obligations are much harder to “catch up” without damage.
            </p>
          </section>

          <section className="prose-block">
            <h2>Talk to Your Team the Right Way</h2>
            <p>
              If there is any chance payroll will be short or late, silence usually makes the situation worse. Rumors
              spread faster than facts. Instead of waiting until paychecks bounce, pull key staff aside and explain what
              is happening, what you are doing about it, and when they can expect clear answers.
            </p>
            <p>
              Be specific: “We are short by this amount; here is the plan for covering it; here is the date by which
              you will be paid in full.” You do not need to share every detail of your finances, but you do need to
              communicate that you take their pay seriously and have a concrete path to fix the problem.
            </p>
          </section>

          <section className="prose-block">
            <h2>Short-Term Moves That Can Help Right Away</h2>
            <p>
              In the very short term, look for levers you can pull without harming the business long term:
            </p>
            <ul>
              <li>Delay nonessential spending such as minor upgrades or discretionary marketing campaigns.</li>
              <li>Talk to select vendors about stretching terms for a week or two while you catch up.</li>
              <li>Pause new hiring, overtime, or extra shifts that are not tied to clear revenue.</li>
              <li>Review your upcoming schedule to align labor more tightly with expected demand.</li>
            </ul>
            <p>
              These changes will not cover a large payroll gap on their own, but they reduce the amount of outside
              capital you may need and show lenders or partners that you are taking the situation seriously.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Working Capital or a Cash Advance Makes Sense</h2>
            <p>
              Payroll gaps are one of the most common reasons restaurant owners look for short-term funding. Products
              like a restaurant cash advance or other forms of{' '}
              <Link to="/working-capital-for-restaurants">working capital for restaurants</Link> are designed for
              situations where revenue is coming, but not fast enough to cover near-term obligations.
            </p>
            <p>
              These options often fund quickly—sometimes within 24–48 hours—with repayment tied to a percentage of your
              sales. That structure can help you avoid fixed payments that are hard to meet during slow weeks. The{' '}
              <Link to="/restaurant-funding-options">restaurant funding options</Link> and{' '}
              <Link to="/restaurant-loan-alternatives">loan alternatives</Link> pages compare structures in more detail.
            </p>
          </section>

          <section className="prose-block">
            <h2>Questions to Ask Before You Borrow to Cover Payroll</h2>
            <p>
              Taking on funding for payroll is a serious decision. Before you sign anything, ask yourself:
            </p>
            <ul>
              <li>Is this a one-time issue, or have I struggled with payroll for several months?</li>
              <li>What changed—sales, costs, staffing, or something else?</li>
              <li>Do I have a clear plan to prevent the same gap from appearing next pay period?</li>
              <li>How will the repayment structure interact with my slower weeks and busy weekends?</li>
              <li>What happens if sales stay flat for the next 60–90 days?</li>
            </ul>
            <p>
              Funding works best when it supports a specific, realistic plan to stabilize the business—not when it simply
              pushes the same problem a few weeks into the future.
            </p>
          </section>

          <section className="prose-block">
            <h2>Fixing the Underlying Cash Flow Pattern</h2>
            <p>
              A payroll shortfall is rarely about a single slow weekend. It is a symptom of deeper timing and margin
              issues: rent that is too high, labor schedules that do not adjust to demand, food costs that have crept up,
              or heavy reliance on high-fee delivery channels. Use this moment as a signal to review your entire cash
              flow.
            </p>
            <p>
              The guides on <Link to="/busy-but-broke-restaurant">busy but broke restaurants</Link>,{' '}
              <Link to="/restaurant-cash-flow-problems">cash flow problems</Link>, and{' '}
              <Link to="/restaurant-menu-engineering-cash-flow">menu design and cash flow</Link> can help you spot where
              money is leaking out so you can rebuild a buffer for future payrolls.
            </p>
          </section>

          <section className="prose-block">
            <h2>Planning Ahead for the Next Payroll Cycle</h2>
            <p>
              Once the immediate crisis is handled, set up a simple process for the next few pay periods. That might
              include weekly check-ins on labor cost, a basic forecast of upcoming sales, and an automatic transfer of a
              percentage of sales into a payroll-only account. Even small cushions can make the difference between a
              stressful pay period and one you barely think about.
            </p>
            <p>
              If you know that certain weeks—like post-holiday slumps—are always tight, consider lining up funding in
              advance rather than waiting until you are days away from payday. Preplanning often gives you more choices
              and better terms. Some owners run a “payroll countdown” each week: how much is in the account, what is expected to deposit before payday, and what is due. When that number looks tight two weeks out, you have time to adjust labor, push a noncritical payment, or apply for working capital instead of scrambling at the last minute. See <Link to="/restaurant-slow-season-cash-flow">slow season cash flow</Link> and <Link to="/restaurant-funding-options">restaurant funding options</Link> for how to plan for seasonal and one-time gaps.
            </p>
          </section>

          <section className="prose-block">
            <h2>You Are Not the Only Owner in This Position</h2>
            <p>
              Many restaurant owners quietly go through a moment where they are not sure how they will cover payroll.
              The difference is whether they treat it as a warning they must respond to or as something to hide and hope
              will never happen again. By facing the numbers, communicating clearly, and using funding carefully when it
              fits, you give yourself and your team the best chance to move past this moment.
            </p>
            <p>
              If you want to see what options might be available based on your revenue and time in business, you can{' '}
              <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>
                review restaurant financing options
              </a>{' '}
              and compare structures, speeds, and requirements without pressure.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}

