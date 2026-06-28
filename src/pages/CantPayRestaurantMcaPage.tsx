import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { AllIndustriesNote } from '../components/AllIndustriesNote';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { PageHero } from '../components/PageHero';
import { getMeta } from '../staticMeta';
import { HowToSchema } from '../components/HowToSchema';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { PHONE_NUMBER, PHONE_HREF } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const faqItems = [
  {
    q: 'What happens immediately when I miss an MCA payment?',
    a: 'Within 1–3 business days of a missed payment, most MCA lenders will contact you by phone and email. If you do not respond or make the payment, the lender may begin default proceedings. Lenders with a Confession of Judgment (COJ) can file for a court judgment without a hearing — this can result in frozen bank accounts within days of the default notice.',
  },
  {
    q: 'Can I negotiate directly with my MCA lender?',
    a: 'Yes, but results vary significantly. MCA lenders negotiate regularly and are practiced at these conversations. Self-negotiation is more likely to result in a short-term payment pause than a meaningful reduction of what you owe. Professional MCA mediators typically achieve better outcomes because they have established lender relationships and know what each provider will accept.',
  },
  {
    q: 'Will missing MCA payments affect my credit?',
    a: 'MCA lenders do not typically report to consumer credit bureaus, so missed payments may not appear on your personal credit report directly. However, a Confession of Judgment filing and subsequent collections activity can result in public records that affect your ability to get financing. UCC liens filed against your receivables are visible to other lenders and can block future funding.',
  },
  {
    q: 'Can I file bankruptcy to get out of MCA debt?',
    a: 'Business bankruptcy (Chapter 7 or Chapter 11) can discharge or restructure MCA obligations, but it carries significant consequences: public records, credit impact, potential personal liability (if you signed a personal guarantee), and operational disruption. Most restaurants in MCA distress are not at the point where bankruptcy is the right tool — professional restructuring through a mediator is usually a better first step.',
  },
];

export function CantPayRestaurantMcaPage() {
  const meta = getMeta('/cant-pay-restaurant-mca')!;
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
          { name: "Can't Pay Restaurant MCA", path: '/cant-pay-restaurant-mca' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/cant-pay-restaurant-mca" />
      <HowToSchema
        name="What to Do When You Can't Pay Your Restaurant MCA"
        description="Step-by-step actions to take in the first 72 hours when you cannot make a merchant cash advance payment."
        urlPath="/cant-pay-restaurant-mca"
        steps={[
          { name: 'Pull your MCA contract and read the default provisions', text: 'Locate the Confession of Judgment clause, the default trigger, and any cure period. The cure period gives you a window to bring the account current before formal default proceedings begin.' },
          { name: 'Calculate exactly how much you are behind', text: 'Determine the total amount needed to bring the account current. This number is essential for every conversation with the lender or a mediator.' },
          { name: 'Contact the lender proactively', text: 'If you are not yet in default, call the lender before missing a payment. A proactive call opens the door to a temporary holdback reduction, short deferral, or payment plan.' },
          { name: 'Consult a professional MCA mediator', text: 'If you are already in default or believe self-negotiation will not produce workable terms, a professional mediator can intervene immediately and negotiate on your behalf. Schedule a free consultation to get a same-day assessment.' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Can't Pay Your Restaurant Merchant Cash Advance? What to Do Right Now</h1>
          <p className="page-lead">
            Missing an MCA payment — or being days away from missing one — triggers a fast-moving set of consequences. Here is the priority order for the next 72 hours and what your actual options are.
          </p>
          <AllIndustriesNote />
          <div className="article__meta">
            <time className="article__date" dateTime="2026-06-02">Updated: June 2, 2026</time>
          </div>

          <section className="prose-block">
            <h2>The Next 72 Hours: What to Do First</h2>
            <p>
              The worst thing you can do when you cannot make an MCA payment is nothing. MCA lenders move quickly, and most contracts include Confession of Judgment clauses that allow lenders to freeze your bank accounts without going to trial. Proactive action — even imperfect action — is almost always better than going silent.
            </p>
            <p>
              In the next 72 hours:
            </p>
            <ul>
              <li><strong>Pull your MCA contract and read the default provisions.</strong> Look for the Confession of Judgment clause, the default trigger (usually one or two missed payments), and any cure period. The cure period — if your contract has one — gives you a window to bring the account current before formal default proceedings begin.</li>
              <li><strong>Calculate exactly how much you are behind and how much you would need to bring the account current.</strong> This number matters for every conversation you will have next.</li>
              <li><strong>Contact the lender proactively if you are not yet in default.</strong> MCA lenders prefer a restaurant that calls before missing a payment over one that goes silent. A proactive call opens the door to a temporary holdback reduction, a short deferral, or a payment plan to get current.</li>
              <li><strong>Consult a professional MCA mediator.</strong> If you are already in default, have received a default notice, or believe negotiation will not produce workable terms, a professional mediator can intervene immediately and negotiate on your behalf. <Link to="/consultation">Schedule a free consultation</Link> to get a same-day assessment of your situation.</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>What MCA Lenders Can and Cannot Do</h2>
            <p>
              Understanding the lender's tools helps you understand the urgency — and the opportunity — in your situation.
            </p>
            <p>
              <strong>What they can do quickly (if your contract has a COJ):</strong>
            </p>
            <ul>
              <li>File a Confession of Judgment in a state court — often New York — to obtain a judgment against you without a hearing or trial</li>
              <li>Serve a restraining notice on your bank, which freezes your account — sometimes within days of the judgment</li>
              <li>Notify your merchant processor to redirect receivables directly to the lender</li>
              <li>File UCC liens against your business assets and receivables</li>
            </ul>
            <p>
              <strong>What they cannot do without a court process (if no COJ):</strong>
            </p>
            <ul>
              <li>Seize your bank accounts without a judgment</li>
              <li>Garnish wages of employees</li>
              <li>Physically close your restaurant</li>
            </ul>
            <p>
              Whether your contract has a COJ is the single most important piece of information in this situation. Check your agreement now if you do not know.
            </p>
          </section>

          <section className="prose-block">
            <h2>Your Options When You Cannot Make MCA Payments</h2>
            <p>
              You have more options than it may feel like right now. The viability of each depends on how far behind you are and how many MCA positions you carry.
            </p>
            <p>
              <strong>1. Negotiate directly with the lender.</strong> If you are not yet in default and the lender is willing to discuss terms, you may be able to get a temporary holdback reduction, a short payment pause, or a structured catch-up plan. This works best when you have a documented reason for the shortfall (seasonal dip, equipment failure) and a clear plan for how you will resume regular payments. MCA lenders will ask for bank statements.
            </p>
            <p>
              <strong>2. Professional MCA debt restructuring.</strong> A professional mediator negotiates with your lenders on your behalf — typically achieving reductions of the total amount owed, lower daily payments, or extended terms. This is the most effective path for restaurants with multiple MCA positions or with lenders who are not negotiating in good faith directly. <Link to="/consultation">Schedule a free consultation</Link> to see what restructuring would look like for your situation.
            </p>
            <p>
              <strong>3. Use available capital to cure the default.</strong> If you have access to a line of credit, a personal reserve, or a partner contribution, bringing the account current during the cure period stops the default clock. This buys time to restructure or resolve the underlying cash flow problem.
            </p>
            <p>
              <strong>4. Legal defense.</strong> In some cases — particularly if the MCA was structured in a way that courts might classify as a loan rather than a receivables purchase — an attorney can challenge the COJ or the lender's collection methods. This is a slower and costlier path but may be appropriate in specific situations, particularly where the lender's practices were predatory or the contract terms were materially misrepresented.
            </p>
          </section>

          <section className="prose-block">
            <h2>If Your Bank Account Is Already Frozen</h2>
            <p>
              A frozen bank account is a different emergency that requires its own playbook. Call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> immediately — then see the step-by-step guide: <Link to="/mca-bank-account-frozen">MCA Bank Account Frozen: What to Do in the Next 24 Hours</Link>. That guide covers opening a new account at a different institution, redirecting your merchant processor, what the bank legally can and cannot do, and how the release negotiation works.
            </p>
          </section>

          <section className="prose-block">
            <h2>How to Prioritize When You Have Multiple MCAs and Cannot Pay All of Them</h2>
            <p>
              If you carry two or three active MCA positions and do not have enough cash to make all of them, the order in which you address them matters. This is not a situation where you can treat all lenders equally and hope for the best.
            </p>
            <p>
              <strong>Prioritize the lender most likely to use a COJ first.</strong> Check each contract for a Confession of Judgment clause. The lender most likely to act quickly is the one with a COJ who is already past the cure period. A lender without a COJ has to sue you first — that takes months. A lender with a COJ can have your account frozen in days. If you can only make one payment, make it to the lender with the most aggressive enforcement tools and the shortest timeline.
            </p>
            <p>
              <strong>Communicate with every lender, even if you cannot pay all of them.</strong> Calling each lender to explain the situation — and providing bank statements showing the cash position — is meaningfully better than going silent. Lenders who believe you are communicating in good faith are less likely to rush to enforcement. Lenders who cannot reach you and who see missed payments with no explanation move faster to protect their position.
            </p>
            <p>
              <strong>Do not assume your lenders do not know about each other.</strong> MCA lenders share data through the UCC filing system. A lender who sees a restraining notice from a competing MCA lender may accelerate their own enforcement to get ahead of it. In a multi-lender situation, the timeline compresses once any lender makes a move.
            </p>
            <p>
              Managing multiple MCA defaults simultaneously is not something most restaurant owners have done before. It is something professional MCA mediators handle regularly — and the order of operations and lender communications matter significantly to the outcome.
            </p>
          </section>

          <section className="prose-block">
            <h2>What to Say When You Call Your MCA Lender</h2>
            <p>
              Most restaurant owners dread this call because they do not know what to say. The lender's collections team hears these calls constantly — vague requests and emotional appeals do not move them. Specific, documented requests get a different response. Here is what to say:
            </p>
            <div className="script-callout">
              <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>Opening:</p>
              <p style={{ margin: '0 0 1rem', fontStyle: 'italic' }}>
                "My name is [Name], I'm the owner of [Restaurant], account number [#]. I'm calling proactively because I want to stay in communication with you — I'm experiencing a cash flow shortfall and I want to discuss options before I miss a payment."
              </p>
              <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>When they ask what you need:</p>
              <p style={{ margin: '0 0 1rem', fontStyle: 'italic' }}>
                "My current holdback is $[X]/day and my card revenue has dropped to $[Y]/month. I need the holdback reduced to $[Z]/day to cover my operating costs. I have bank statements from the last 6 months I can send today to document the revenue change."
              </p>
              <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>If they say they cannot help:</p>
              <p style={{ margin: '0 0 1rem', fontStyle: 'italic' }}>
                "I understand. Can you tell me the escalation path — is there a hardship department or a workout team I can speak with? I want to resolve this cooperatively before it becomes a default situation."
              </p>
              <p style={{ margin: '0 0 0.75rem', fontWeight: 700 }}>What to have ready before you call:</p>
              <ul style={{ margin: '0', paddingLeft: '1.5rem' }}>
                <li>Your account number and original advance amount</li>
                <li>Your current daily deduction amount</li>
                <li>Your last 3 months of bank statements (to send by email immediately after)</li>
                <li>The specific holdback amount you need and why (run the math first)</li>
                <li>A note of the date, time, and name of who you spoke with</li>
              </ul>
            </div>
            <p>
              If the lender does not escalate or offer workable terms after a direct call, that is when professional mediation produces a different conversation. Lenders respond differently to a structured professional engagement than to a single owner calling on their own.
            </p>
          </section>

          <section className="prose-block">
            <h2>What Not to Do</h2>
            <p>
              These actions make the situation significantly worse:
            </p>
            <ul>
              <li><strong>Do not ignore the lender's calls and notices.</strong> Silence is interpreted as non-cooperation and accelerates the default process.</li>
              <li><strong>Do not take another MCA to cover payments on existing MCAs.</strong> This is the stacking trap. A new advance increases your total obligation and adds another daily holdback — the same problem, made worse.</li>
              <li><strong>Do not transfer assets out of the business in anticipation of a judgment.</strong> This is considered fraudulent transfer and can create significant legal liability beyond the MCA debt itself.</li>
              <li><strong>Do not assume the problem will resolve itself.</strong> MCA lenders have legal mechanisms that move faster than most restaurant owners expect. The window between a missed payment and a frozen bank account can be as short as one to two weeks.</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Get Help with Your Restaurant MCA Situation</h2>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1rem 0 1.25rem' }}>
              <strong>What professional mediation typically achieves:</strong> Professional MCA mediators typically negotiate 40–70% reductions on remaining balances, and bring combined holdback rates down to a sustainable 10–15% of card revenue. Results depend on the lenders, your balance, and payment history — but the alternative (default with no representation) almost always produces a worse outcome.
            </div>
            <p>
              If you are at or near default on a merchant cash advance, the path forward requires a clear assessment of your specific contracts, positions, and lender relationships. You can also explore the full <Link to="/restaurant-mca-debt-help">restaurant MCA debt help guide</Link> for more context on restructuring, stacking, and the difference between refinancing and resolving MCA debt.
            </p>
            <LeadCaptureForm source="cant-pay-restaurant-mca" submitLabel="Get Immediate Help — Free Assessment" />
          </section>

          <section className="prose-block">
            <h2>Related Guides in This Series</h2>
            <ul>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Help: The Complete Guide</Link></li>
              <li><Link to="/restaurant-mca-default">Restaurant MCA Default: What Happens and What to Do</Link></li>
              <li><Link to="/restaurant-mca-payments-too-high">Your Restaurant MCA Payments Are Too High — Here's Why</Link></li>
              <li><Link to="/restaurant-mca-stacking">Restaurant MCA Stacking: When Multiple Advances Stack Up</Link></li>
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
