import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { PageHero } from '../components/PageHero';
import { getMeta } from '../staticMeta';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { PHONE_NUMBER, PHONE_HREF } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const faqItems = [
  {
    q: 'What is MCA stacking?',
    a: 'MCA stacking means carrying two or more active merchant cash advances simultaneously. Each advance adds its own daily or weekly holdback on card revenue. A restaurant with three stacked MCAs may be remitting 30–50% of daily card revenue to MCA payments before paying rent, payroll, or food costs.',
  },
  {
    q: 'Is MCA stacking illegal?',
    a: 'Stacking itself is not illegal for the restaurant owner. However, most MCA contracts prohibit taking additional advances without lender consent — stacking without disclosure can trigger default provisions in existing contracts. The practice is also associated with predatory lending, where third-party lenders specifically target businesses already in MCA positions.',
  },
  {
    q: 'How do I get out of stacked MCAs?',
    a: 'Three paths: (1) Professional MCA debt restructuring — a mediator negotiates simultaneously with all lenders to reduce total obligations and lower combined holdbacks. (2) MCA consolidation — a single lender pays off all positions with one new advance, though this often increases total cost. (3) Default and restructuring — stopping payments and working with a professional mediator to negotiate settlements on all positions at once. Option 1 is the least damaging for a restaurant that is still operating.',
  },
  {
    q: 'Can I take a new MCA to pay off stacked ones?',
    a: 'A consolidation advance pays off multiple positions with one new advance. This reduces the number of daily deductions but typically does not reduce the total amount owed — because the new lender adds their factor rate on top of the remaining balances. If the original stacking created the cash flow problem, a consolidation MCA often delays rather than solves it.',
  },
];

export function RestaurantMcaStackingPage() {
  const meta = getMeta('/restaurant-mca-stacking')!;
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
          { name: 'Home', path: '/' },
          { name: 'Restaurant MCA Debt Help', path: '/restaurant-mca-debt-help' },
          { name: 'Restaurant MCA Stacking', path: '/restaurant-mca-stacking' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/restaurant-mca-stacking" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Restaurant MCA Stacking: When Multiple Cash Advances Stack Up and Crush Cash Flow</h1>
          <p className="page-lead">
            MCA stacking — carrying two, three, or more active merchant cash advances simultaneously — is the single fastest path to unsustainable MCA debt for restaurants. Here is how it happens, what it costs, and how to get out.
          </p>

          <section className="prose-block">
            <h2>How Restaurant MCA Stacking Happens</h2>
            <p>
              Stacking rarely starts as a plan. The first advance made sense: $25,000 to cover a slow January, repaid over eight months at 15% daily holdback. The payments were manageable during spring.
            </p>
            <p>
              By summer, the 15% holdback was compressing operating cash. A second advance helped — but added another 12% holdback. Now 27% of every day's card revenue goes to MCA payments before the restaurant pays a single vendor. Food costs still hit on net-7. Payroll is every two weeks. Rent is the first. By fall, a third position is offered and accepted.
            </p>
            <p>
              Three MCAs, three daily deductions. The restaurant generates $80,000/month in card revenue. After MCA holdbacks — 38% combined — only $49,600 reaches the operating account. Fixed costs alone (rent, minimum labor, insurance) run $45,000/month. There is $4,600 left for food, utilities, and everything else before the restaurant earns a dollar of cash flow.
            </p>
            <p>
              This is what stacked MCA debt looks like in practice. The restaurant is open. Customers are coming. Revenue is real. But the MCA holdbacks consume the margin between revenue and fixed costs, leaving nothing for variable operations.
            </p>
          </section>

          <section className="prose-block">
            <h2>Why MCA Lenders Allow — and Encourage — Stacking</h2>
            <p>
              MCA lenders profit from each advance. A second or third advance generates another factor rate return on capital. Many alternative MCA providers specifically market to businesses that already carry active MCA positions — they know the customer is cash-constrained and needs money now. The product is designed for fast decisions, not deep underwriting.
            </p>
            <p>
              Most first-position MCA contracts include a clause prohibiting additional advances without written consent. But enforcement varies, and many restaurant owners do not re-read the original contract before taking a second position. By the time the third advance is in place, all three lenders may have conflicting UCC lien positions on the same receivables.
            </p>
          </section>

          <section className="prose-block">
            <h2>How Stacking Lenders Find You</h2>
            <p>
              It is not random. When a business takes an MCA, the lender files a UCC-1 financing statement against the business's receivables. These filings are public record — searchable by any lender who wants to find businesses already in MCA positions. Third-party stacking lenders run systematic searches on UCC databases, looking specifically for restaurants with active MCA filings. They know these businesses have already demonstrated they will take a cash advance, are likely cash-constrained, and may not think carefully about contract terms under pressure.
            </p>
            <p>
              The solicitation often arrives as a phone call or email offering "additional working capital" with no mention that the caller can see your existing MCA position. They may reference your card volume (pulled from the same data trail) and offer an amount that sounds like relief. The pitch is fast, the funding is fast, and the daily holdback question gets minimized in the conversation.
            </p>
            <p>
              If you have active MCAs and are receiving unsolicited calls offering more capital, you are on these target lists. The call is not a coincidence.
            </p>
          </section>

          <section className="prose-block">
            <h2>The Math of Stacked MCA Payments</h2>
            <p>
              Understanding the combined holdback math makes the unsustainability visible:
            </p>
            <ul>
              <li><strong>MCA #1:</strong> $30,000 advance, 15% holdback, 8-month term → $1,500/day on $10,000 in daily card revenue</li>
              <li><strong>MCA #2:</strong> $20,000 advance, 12% holdback → $1,200/day additional</li>
              <li><strong>MCA #3:</strong> $15,000 advance, 10% holdback → $1,000/day additional</li>
              <li><strong>Combined holdback:</strong> $3,700/day on $10,000 in daily card revenue = 37% before any operating expense</li>
            </ul>
            <p>
              On a restaurant with $300,000/month in revenue and $285,000/month in expenses (a realistic 5% net margin), a 37% MCA holdback removes $111,000/month from available operating cash — more than the restaurant's entire margin, even on a good month. The math collapses regardless of how well the restaurant performs.
            </p>
            <p>
              What makes this particularly insidious is that the problem is invisible in day-to-day operations. Revenue looks fine. The dining room is full. But the holdbacks are draining the account before the owner sees the deposit, making it impossible to pinpoint the damage by looking at the checking balance. Owners often first notice the problem when they cannot cover a vendor payment or make payroll — not when the stacking itself happened.
            </p>
          </section>

          <section className="prose-block">
            <h2>The UCC Lien Problem: How Stacking Blocks Future Options</h2>
            <p>
              Each MCA lender typically files a UCC-1 lien against your receivables at origination. With three active MCAs, you have three UCC liens stacked against the same revenue stream. This has a consequence beyond the daily holdback: it makes you effectively unbankable.
            </p>
            <p>
              A bank or SBA lender considering a loan will search UCC filings before approving. Multiple MCA liens signal that your receivables are already claimed — a bank lender cannot get a clean first-lien position, so they decline. Equipment lenders, invoice factoring companies, and most conventional financing sources see the same thing. You are locked into the MCA ecosystem specifically because the MCA lenders filed liens that block alternatives.
            </p>
            <p>
              This is one reason why restructuring stacked MCAs — rather than simply trying to pay them down — often requires professional help. The lien release process, the negotiation sequence (which lender gets addressed first matters), and the timing of new UCC termination filings are not intuitive, and mistakes in the order of operations can create new problems. For the complete guide to searching your state's UCC database, understanding UCC-1 vs. UCC-3 termination, and lien priority between multiple MCA positions, see <Link to="/merchant-cash-advance-ucc-lien">Merchant Cash Advance UCC Liens: How to Find and Remove Them</Link>.
            </p>
          </section>

          <section className="prose-block">
            <h2>How to Get Out of Stacked Restaurant MCAs</h2>
            <p>
              There are three meaningful paths out of stacked MCA positions. The right one depends on how far behind you are and whether the restaurant is still viable at normal MCA payment levels.
            </p>
            <p>
              <strong>Path 1: Professional MCA debt restructuring.</strong> A mediator works with all three lenders simultaneously — negotiating reduced balances, lower holdback rates, or extended terms for each position. This is the highest-recovery path because it does not add new debt and negotiates on all positions at once. Lenders often prefer negotiated restructuring over a default situation, which makes them more willing to accept reduced terms. Professional programs typically achieve resolution in 2–6 weeks. <Link to="/consultation">Schedule a free consultation</Link> to see what this looks like for your situation.
            </p>
            <p>
              <strong>Path 2: MCA consolidation.</strong> A single lender pays off all existing MCAs with one new advance at a single holdback rate. This reduces the complexity of multiple daily deductions to one. However, consolidation typically does not reduce the total amount owed — the new lender adds their factor rate on the remaining balances, which can increase total cost. Consolidation is most useful when the problem is multiple payment deductions rather than total debt burden.
            </p>
            <p>
              <strong>Path 3: Managed default and settlement.</strong> If the holdbacks are so high that the restaurant cannot operate while making payments on any of the positions, stopping payments and working through a professional mediator to negotiate settlements on all positions is sometimes the only viable path. This triggers default provisions and lenders will use their contractual tools — but a professional mediator can often negotiate settlements for 40–60 cents on the dollar when the alternative is full collection action on an insolvent restaurant.
            </p>
          </section>

          <section className="prose-block">
            <h2>What to Do Now If You Are Stacked</h2>
            <p>
              If you currently have two or more active MCA positions:
            </p>
            <ul>
              <li>Pull all contracts and calculate your combined daily holdback as a percentage of daily card revenue. If the combined holdback exceeds 20%, you are in the yellow zone. Above 30%, the situation is structurally unsustainable. Use the <Link to="/restaurant-mca-calculator">MCA holdback calculator</Link> to run these numbers.</li>
              <li>Run a UCC search on your business name to confirm exactly how many liens are filed and by whom. Your secretary of state's website has a UCC search tool. The results may show lenders you have forgotten about or positions you did not realize were still active.</li>
              <li>Do not take another advance, even to cover payments on existing ones. This deepens the problem and adds another UCC lien, further blocking your future options.</li>
              <li>Get a professional assessment. <Link to="/consultation">Schedule a free consultation</Link> to review all your MCA positions and understand what restructuring would look like for your specific situation. You can also call us at <a href={PHONE_HREF}>{PHONE_NUMBER}</a>.</li>
            </ul>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1rem 0 1.25rem' }}>
              <strong>What professional restructuring typically achieves for stacked positions:</strong> Professional mediators typically negotiate 40–70% reductions across all positions simultaneously — eliminating multiple UCC liens and reducing the combined daily holdback to a level the restaurant can operate with. Lenders in a stacked situation are often more willing to settle because they know their recovery position is weaker than a first-lien holder's.
            </div>
            <p>
              The full guide on <Link to="/restaurant-mca-debt-help">restaurant MCA debt help</Link> covers the restructuring process in detail, including the difference between refinancing and restructuring, and what happens if you default.
            </p>
          </section>

          <section className="prose-block">
            <h2>Get Free Help With Stacked MCAs</h2>
            <p>
              Share your situation and we will review all of your MCA positions, calculate your combined holdback burden, and explain what simultaneous restructuring across all lenders would look like for your restaurant.
            </p>
            <LeadCaptureForm source="restaurant-mca-stacking" submitLabel="Get Help With My Stacked MCAs — Free" />
          </section>

          <section className="prose-block">
            <h2>Related Guides in This Series</h2>
            <ul>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Help: The Complete Guide</Link></li>
              <li><Link to="/cant-pay-restaurant-mca">Can't Pay Your Restaurant MCA? What to Do Right Now</Link></li>
              <li><Link to="/restaurant-mca-default">Restaurant MCA Default: What Happens and What to Do</Link></li>
              <li><Link to="/restaurant-mca-payments-too-high">Your Restaurant MCA Payments Are Too High — Here's Why</Link></li>
              <li><Link to="/restaurant-mca-calculator">MCA Holdback Calculator: See Your Burden &amp; Savings</Link></li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Frequently Asked Questions</h2>
            {faqItems.map((item) => (
              <div key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
