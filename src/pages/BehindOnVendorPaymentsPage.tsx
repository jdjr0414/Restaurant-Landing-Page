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

export function BehindOnVendorPaymentsPage() {
  const meta = getMeta('/behind-on-restaurant-vendor-payments')!;
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
          { name: 'Behind on Vendor Payments', path: '/behind-on-restaurant-vendor-payments' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Vendors Calling, Bills Piling Up: What to Do When You&apos;re Behind</h1>
          <p className="page-lead">
            When restaurant vendor payments stack up and the phone keeps ringing, it is easy to avoid the conversation—but silence usually makes things worse. This guide walks through how to prioritize who gets paid, how to talk to suppliers so you keep relationships intact, and when short-term funding can help you get back on track.
          </p>

          <section className="prose-block">
            <h2>Why Restaurants Fall Behind on Vendor Payments</h2>
            <p>
              Restaurant cash flow is lumpy. Sales spike on weekends and holidays, then dip. Rent is due the first of the month. Payroll hits every two weeks. Vendors often want payment on delivery or within a short window. When revenue does not line up with those dates, even successful restaurants can slip behind on food, beverage, or supply invoices.
            </p>
            <p>
              Once you are behind, the cycle can worsen: you pay the vendor who is threatening to cut you off, then another bill slips. Or you stretch one supplier to net-30 while another demands COD. The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> explains the timing mismatch in depth. Here, the focus is on what to do when you are already behind: how to triage, communicate, and—when it makes sense—use <Link to="/restaurant-working-capital">restaurant working capital</Link> or a <Link to="/restaurant-cash-advance">cash advance</Link> to catch up without burning bridges.
            </p>
          </section>

          <section className="prose-block">
            <h2>Prioritize Before You Pick Up the Phone</h2>
            <p>
              Not all past-due bills are equal. List every vendor you owe, the amount, how late you are, and whether they are critical to daily operations. Meat, produce, and dairy suppliers that deliver multiple times a week are often non-negotiable: if they cut you off, you cannot open. Specialty or secondary suppliers may allow more flexibility.
            </p>
            <p>
              Also separate true vendor debt from other obligations. Payroll and payroll taxes, rent, and utilities have different consequences if missed. Knowing the full picture helps you decide how much you need to free up and whether <Link to="/restaurant-funding-options">restaurant funding options</Link> are part of the solution.
            </p>
          </section>

          <section className="prose-block">
            <h2>How to Talk to Vendors When You Are Behind</h2>
            <p>
              Most suppliers would rather get a clear timeline and partial payment than hear nothing. Call or email before they have to chase you. Be direct: say you are behind, why (e.g., slow month, unexpected repair), and what you can do this week or this month. Propose a concrete amount and date—e.g., “I can pay 50% by Friday and the rest in two weeks.”
            </p>
            <p>
              Ask whether they can extend terms temporarily or accept a payment plan. Some will say no; others will work with you if you have a history of paying and you are honest. Avoid promising dates you cannot keep—that erodes trust faster than a late payment.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Short-Term Funding Can Help You Catch Up</h2>
            <p>
              If the gap is too large to fix with payment plans alone, short-term capital can buy you time. A <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or <Link to="/restaurant-working-capital">working capital</Link> product can provide funds in 24–48 hours, often with repayment tied to your daily sales. That can help you clear the most critical past-due invoices and get back to normal terms.
            </p>
            <p>
              Use funding to get current, then fix the underlying cause. If you were behind because of a one-time event (equipment failure, slow season), a single bridge may be enough. If you are chronically short, you need to address <Link to="/busy-but-broke-restaurant">margins and costs</Link> or <Link to="/restaurant-labor-schedule-money-drains">labor and scheduling</Link> so the problem does not repeat.
            </p>
          </section>

          <section className="prose-block">
            <h2>Protecting Relationships for the Long Term</h2>
            <p>
              Vendors remember who communicated and who disappeared. Even when you cannot pay in full, staying in contact and honoring any agreement you make goes a long way. Once you are current, consider asking for slightly better terms (e.g., net 14 instead of COD) in exchange for consistency—many suppliers will work with you if they see a plan and follow-through.
            </p>
            <p>
              If you had to make hard choices about who got paid first, do not leave the others in the dark. A brief “we are catching up and you are next on our list” can prevent a good relationship from turning into a collections call. Long-term, the goal is to get back to a rhythm where you pay on time without relying on crisis funding. That may mean building a small reserve during strong months, tightening <Link to="/restaurant-menu-engineering-cash-flow">menu and labor</Link> to improve margin, or using a line of credit or working capital only for planned gaps (e.g., pre-holiday inventory) rather than catch-up.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If you are behind on vendor payments, the worst move is to ignore it. Prioritize who must be paid first, talk to suppliers with a clear proposal, and—if you need a bridge—explore <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>restaurant financing options</a> that fit your revenue and timeline. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
