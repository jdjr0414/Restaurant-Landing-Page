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

export function RestaurantPartnerMoneyProblemsPage() {
  const meta = getMeta('/restaurant-partner-money-problems')!;
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
          { name: 'Partner Money Problems', path: '/restaurant-partner-money-problems' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">When Restaurant Partners Stop Agreeing About Money</h1>
          <p className="page-lead">
            Disagreements over draws, reinvestment, and whether to take on funding can tear a restaurant partnership apart. This guide offers a framework for having the money conversation: how to align on what the business can afford, when funding might help (or hurt), and how to decide together so the business—and the partnership—survives.
          </p>

          <section className="prose-block">
            <h2>Why Money Breaks Partnerships</h2>
            <p>
              One partner may want to take more out; the other may want to reinvest. One may be willing to take on a <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or <Link to="/restaurant-working-capital">working capital</Link> to bridge a gap; the other may see it as too risky. Without a clear process for deciding, those differences turn into resentment and deadlock. The goal here is not to tell you who is right but to give you a way to talk about money so both partners understand the numbers and the options.
            </p>
            <p>
              Money disagreements often surface when the business is under stress—slow sales, a big repair, or a tax bill. At that moment, one partner may want to take a draw to cover personal bills while the other wants to plow every dollar back in. Or one may want to borrow to make payroll while the other fears adding debt. These are legitimate differences in risk tolerance and personal situation; the key is to address them before they become ultimatums or silent resentment.
            </p>
          </section>

          <section className="prose-block">
            <h2>Get on the Same Page About the Numbers</h2>
            <p>
              Before you debate draws or funding, both partners need to see the same picture: cash flow, upcoming obligations, and what the business can realistically afford to pay out or borrow. Schedule a regular “money meeting” where you review the books together. If one partner handles the finances, the other should still see summaries and have a chance to ask questions. Misalignment often comes from one person having information the other does not.
            </p>
            <p>
              Use the meeting to agree on a few basics: What is our minimum cash reserve? When do we need to agree before either partner takes a draw above a certain amount? What are our top three obligations in the next 90 days? Putting these in writing—even in a simple one-page operating agreement addendum—reduces surprises and gives you a reference when disagreements arise.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Funding Is on the Table</h2>
            <p>
              If the business needs short-term capital, both partners should understand what it is for, how it will be repaid, and what happens if revenue does not improve. A <Link to="/restaurant-funding-options">restaurant funding option</Link> that ties repayment to sales can ease the burden during slow periods, but it is still a commitment. Agree in advance: we are borrowing to cover X, and we will cut Y if we need to.
            </p>
            <p>
              Document who is responsible for monitoring repayment and what triggers a conversation if things change (e.g., if revenue drops more than 15%, we revisit). If one partner is the primary signer or guarantor, the other should still understand the terms and the plan. Surprises about debt are one of the fastest ways to erode trust in a partnership.
            </p>
          </section>

          <section className="prose-block">
            <h2>When You Cannot Agree</h2>
            <p>
              If you are stuck, consider a neutral third party—an accountant, consultant, or mediator—who can help you both see the tradeoffs. Sometimes the issue is not the numbers but different risk tolerance or personal financial pressure. Acknowledging that can make it easier to find a compromise (e.g., smaller draws for six months, or funding with a clear exit plan).
            </p>
            <p>
              In some cases, the only path forward is to agree to disagree on the ideal outcome but agree on a process: “We will try your approach for 90 days and reassess,” or “We will get a third-party opinion and both abide by it.” For more on cash flow and options, see <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> and <Link to="/restaurant-loan-alternatives">loan alternatives</Link>.
            </p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>
              If you and your partner are at odds over money, start with a shared view of the numbers and a clear discussion of what the business needs. If funding is part of the solution, <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>review restaurant financing options</a> together. Not all applicants qualify; terms vary by provider.
            </p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
