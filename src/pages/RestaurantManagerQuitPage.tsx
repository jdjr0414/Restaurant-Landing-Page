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

export function RestaurantManagerQuitPage() {
  const meta = getMeta('/restaurant-manager-quit-now-what')!;
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
          { name: 'Key Staff Quit', path: '/restaurant-manager-quit-now-what' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">What Happens When a Key Restaurant Staff Member Walks Out</h1>
          <p className="page-lead">
            When your manager or chef quits with little notice, service can suffer, regulars can drift, and revenue can drop—right when you need it most. This guide walks through how to stabilize operations, protect revenue during the transition, and when short-term funding can help you cover extra labor or lost sales until you are fully staffed again.
          </p>

          <section className="prose-block">
            <h2>Why Losing Key People Hits Cash Flow Fast</h2>
            <p>
              A great manager or chef does more than show up—they run the shift, train others, and hold quality and speed together. When they leave, you may face overtime for remaining staff, temporary help at a premium, or a dip in sales if service slips. Training a replacement takes time and money. All of that can strain cash flow just when you are least prepared. The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> explains how timing and costs interact; here we focus on the “key person left” scenario and how to get through it.
            </p>
            <p>
              The financial hit can show up in several ways: you pay overtime to cover open shifts, you hire a temp or consultant at a higher rate, or you lose sales because ticket times slow down or quality drops and guests do not return. In the worst case, a key departure triggers a spiral—other staff get nervous, service suffers, and revenue falls further. Acting quickly to stabilize and communicate reduces the chance of that spiral.
            </p>
          </section>

          <section className="prose-block">
            <h2>Stabilize First: Cover the Gap Without Burning Out the Team</h2>
            <p>
              Your first job is to keep the restaurant running. That might mean you or a partner stepping in, promoting a strong existing employee, or bringing in temporary help. Be clear with the team about expectations and timelines so they do not assume the chaos is permanent.
            </p>
            <p>
              Communicate with regulars if service might be uneven for a short period—many will stick with you if they know you are addressing it. A brief “we are in a transition and appreciate your patience” can go a long way. Avoid overpromising a timeline for hiring; it is better to say “we are looking for the right person” than to name a date you might miss. In the meantime, document what the departed person did so that when you hire, you have a clear role description and the remaining team is not carrying undocumented responsibilities.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Extra Labor or Lost Sales Strain Cash</h2>
            <p>
              Overtime, temp labor, or a few weeks of lower sales can create a cash gap. If you do not have a reserve, <Link to="/restaurant-working-capital">restaurant working capital</Link> or a <Link to="/restaurant-cash-advance">restaurant cash advance</Link> can help you cover payroll and other costs until the new person is in place and revenue stabilizes.
            </p>
            <p>
              Repayment is often tied to sales, so when you are short-staffed and sales dip, payments can be lower—which can make it easier to manage than a fixed loan payment during the transition. Use the funding to cover the gap, then focus on hiring and training so that revenue and morale recover. See <Link to="/restaurant-funding-options">restaurant funding options</Link> and <Link to="/cant-make-restaurant-payroll">when you cannot make payroll</Link> for more.
            </p>
          </section>

          <section className="prose-block">
            <h2>Reducing the Risk of the Next Surprise Departure</h2>
            <p>
              You cannot prevent every resignation, but cross-training, clear documentation, and fair pay and treatment reduce the chance that one person’s exit cripples the operation. Cross-training means more than one person can run the shift or execute key tasks; documentation (recipes, procedures, vendor contacts) makes it easier for a replacement to get up to speed.
            </p>
            <p>
              For more on labor and cost, see <Link to="/restaurant-labor-schedule-money-drains">labor schedule money drains</Link>. Building a small cash reserve also helps so that the next transition does not force you into a funding decision under pressure. Even a few weeks of operating expenses set aside can give you room to hire carefully instead of filling the role in panic.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If a key staff member just left, focus on stabilizing service and filling the role. If cash is tight during the transition, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a> to see what might help. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
