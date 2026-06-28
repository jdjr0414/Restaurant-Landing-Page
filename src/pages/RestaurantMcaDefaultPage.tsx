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
    q: 'How quickly can an MCA lender freeze my bank account after I default?',
    a: 'In states where Confessions of Judgment are enforceable — including New York, where most MCAs are governed — a bank account can be frozen within 3–7 business days of a default notice if the lender acts immediately. The timeline from missed payment to frozen account has been as short as one week in documented cases. This is faster than almost any legal response you can organize on your own.',
  },
  {
    q: 'Can I open a new bank account if my existing one is frozen?',
    a: 'Yes. A judgment restraining notice (which freezes the account) applies to the specific account named, not to all accounts you may open at other banks. Opening a new business checking account immediately at a different bank moves future deposits to an accessible account. This is a legitimate and common response to a frozen account — it is not illegal.',
  },
  {
    q: 'Does defaulting on an MCA appear on my credit report?',
    a: 'MCA lenders typically do not report to credit bureaus, so a default may not appear on your personal credit report directly. However, a COJ judgment is a public record, UCC liens are visible to other lenders, and some collection activity may appear. Future MCA providers and some alternative lenders check UCC filings and public judgments, so a default has real consequences for future access to capital.',
  },
  {
    q: 'What is the difference between a UCC lien and a Confession of Judgment?',
    a: 'A UCC (Uniform Commercial Code) lien is filed against your business assets and receivables — it gives the MCA lender a security interest in your future card revenue and other business assets. It does not freeze your account but limits your ability to get other financing. A Confession of Judgment is a court judgment that can immediately result in bank account freezing. Most MCA agreements include both.',
  },
];

export function RestaurantMcaDefaultPage() {
  const meta = getMeta('/restaurant-mca-default')!;
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
          { name: 'Restaurant MCA Default', path: '/restaurant-mca-default' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/restaurant-mca-default" />
      <HowToSchema
        name="What to Do If Your Restaurant Is in MCA Default"
        description="Priority actions to take when you have missed MCA payments or are facing default proceedings on a merchant cash advance."
        urlPath="/restaurant-mca-default"
        steps={[
          { name: 'Open a new business bank account at a different institution', text: 'Do this immediately if your account has been restrained or if a restraining notice is imminent. Future deposits to a new account at a different bank are not covered by the existing restraining notice.' },
          { name: 'Contact a professional MCA mediator', text: 'Self-negotiation with a lender that has already begun default proceedings is difficult. A professional mediator can contact the lender\'s legal team immediately and negotiate a release of the bank restraint in exchange for a payment arrangement.' },
          { name: 'Do not stop operating', text: 'A frozen bank account is disruptive but does not require you to close. Open a new account, redirect merchant processor deposits, and continue serving customers while the situation is resolved. Closing eliminates the revenue that makes any settlement possible.' },
          { name: 'Gather all MCA contracts and financial documents', text: 'Pull all MCA contracts, bank statements from the past 6 months, and card processing statements. Any professional representing you will need these immediately — having them ready reduces the time to intervention.' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Restaurant MCA Default: What Happens and What to Do Before Your Account Is Frozen</h1>
          <p className="page-lead">
            Defaulting on a merchant cash advance triggers consequences that move faster than most restaurant owners expect. Here is exactly what happens at each stage and what your options are at each point in the timeline.
          </p>
          <AllIndustriesNote />
          <div className="article__meta">
            <time className="article__date" dateTime="2026-05-27">Updated: May 27, 2026</time>
          </div>

          <section className="prose-block">
            <h2>The MCA Default Timeline for Restaurants</h2>
            <p>
              Unlike a bank loan default — which involves formal notices, waiting periods, and lengthy legal processes — an MCA default can move from missed payment to frozen bank account in under two weeks. This is by design: MCA agreements are structured to give lenders fast enforcement tools, primarily because they are not classified as loans under federal lending law.
            </p>
            <p>
              Here is the typical timeline:
            </p>
            <ul>
              <li><strong>Day 0–1:</strong> Payment is missed. The MCA lender's system flags the account. Calls and emails begin immediately, sometimes within hours of a missed daily deduction.</li>
              <li><strong>Day 2–5:</strong> Lender issues a formal default notice via email and certified mail. This notice typically triggers the "cure period" — a window (usually 3–10 days) in which you can bring the account current and stop the default process.</li>
              <li><strong>Day 5–10:</strong> If the account is not cured, the lender's legal team prepares a Confession of Judgment filing. In New York (where most MCAs are governed), this is filed with the court clerk — it does not require a hearing.</li>
              <li><strong>Day 10–14:</strong> A restraining notice is served on your bank. The bank freezes the account — sometimes the same day, sometimes within 24–48 hours. You can no longer access deposited funds.</li>
              <li><strong>Day 14+:</strong> If the MCA had a UCC lien on receivables, the lender may also notify your merchant processor to redirect card settlements. Payroll, vendor payments, and rent all stop.</li>
            </ul>
            <p>
              This timeline is not hypothetical — it reflects how MCA enforcement actually works for thousands of small businesses annually. Restaurants that wait to see what happens often find their accounts frozen before they have had a chance to respond.
            </p>
          </section>

          <section className="prose-block">
            <h2>What a Confession of Judgment Actually Means</h2>
            <p>
              When you signed your MCA agreement, you almost certainly signed a Confession of Judgment (COJ) — a document that authorizes the lender to obtain a court judgment against you without filing a lawsuit, giving you notice in advance, or holding a trial. The COJ is completed in advance and held by the lender's attorney. When you miss payments, they file it with the court clerk. No hearing. No opportunity to respond before the judgment is entered.
            </p>
            <p>
              After the judgment is entered, the lender can:
            </p>
            <ul>
              <li>Serve a restraining notice on your bank (freezing the account)</li>
              <li>Serve an information subpoena requiring you to disclose all bank accounts and assets</li>
              <li>Garnish non-exempt business assets</li>
              <li>Redirect card processing settlements if your contract allows it</li>
            </ul>
            <p>
              There are limited legal defenses to a COJ after it has been filed. The most common are procedural challenges (the COJ was filed incorrectly) or substantive challenges (the MCA was actually a loan, in which case the COJ may be unenforceable). These require an attorney and time — time you may not have if your account is already frozen.
            </p>
          </section>

          <section className="prose-block">
            <h2>What to Do If You Are in Default Right Now</h2>
            <p>
              If you have already missed one or more MCA payments, these are the highest-priority actions:
            </p>
            <p>
              <strong>1. Open a new business bank account at a different institution immediately.</strong> Do this today if your original account has been restrained or if you believe a restraining notice is imminent. Future deposits to a new account at a different bank are not covered by the existing restraining notice. This keeps your restaurant operational while you resolve the MCA situation.
            </p>
            <p>
              <strong>2. Contact a professional MCA mediator.</strong> Self-negotiation with a lender that has already begun default proceedings is difficult. MCA lenders are practiced at these conversations; most restaurant owners are not. A professional mediator can contact the lender's legal team immediately, negotiate a release of the bank restraint in exchange for a payment arrangement, and structure a resolution the restaurant can actually sustain. Call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> or <Link to="/consultation">schedule a free consultation</Link> to get help today.
            </p>
            <p>
              <strong>3. Do not stop operating.</strong> A frozen bank account is disruptive but does not require you to close. If you open a new account, redirect your merchant processor deposits to the new account, and have access to even a small operating float, the restaurant can continue serving customers while the legal and financial situation is resolved. Closing eliminates the revenue stream that makes any negotiated settlement possible.
            </p>
            <p>
              <strong>4. Gather all MCA contracts, bank statements from the past 6 months, and card processing statements.</strong> Any professional representing you or negotiating on your behalf will need these documents immediately. Having them ready reduces the time to intervention.
            </p>
          </section>

          <section className="prose-block">
            <h2>Settling an MCA Default: What Lenders Will Accept</h2>
            <p>
              MCA lenders who have entered judgment and frozen accounts are still motivated to settle — a frozen restaurant account generates zero recovery, and collection on a closed restaurant generates pennies. Lenders' incentive is to extract as much repayment as possible from an operating business rather than none from a closed one.
            </p>
            <p>
              Common settlement structures after default include:
            </p>
            <ul>
              <li><strong>Lump sum settlement at a discount.</strong> If you can produce a cash payment — from a partner, investor, or personal funds — some lenders will settle for 50–75 cents on the dollar of the remaining balance to close the file quickly.</li>
              <li><strong>Structured payment plan.</strong> The lender agrees to release the bank restraint in exchange for a negotiated payment schedule — lower than the original holdback, spread over an extended period. The restaurant resumes operations and makes structured payments.</li>
              <li><strong>Reduced balance plus restructured terms.</strong> The lender agrees to reduce the remaining balance and modify the holdback rate in exchange for resuming payments under new terms. This is the most common outcome in professional MCA mediation.</li>
            </ul>
            <p>
              None of these outcomes are guaranteed, and lenders are not uniformly cooperative. Having a professional mediator with established lender relationships negotiate these terms produces meaningfully better outcomes than self-negotiation after default.
            </p>
          </section>

          <section className="prose-block">
            <h2>What Happens to Your Merchant Processor During Default</h2>
            <p>
              Most restaurant owners know that a bank account can be frozen in an MCA default. Fewer know that the merchant processor — the company that handles your credit and debit card settlements — can also be pulled into the situation.
            </p>
            <p>
              Many MCA agreements include a clause that gives the lender the right to notify your processor and instruct them to redirect settlements directly to the MCA lender rather than your business account. This is separate from the bank account freeze — it targets the revenue before it even reaches your account. In practice, this means:
            </p>
            <ul>
              <li>Your restaurant runs credit card transactions and they appear to process normally</li>
              <li>The settlements that would normally appear in your bank account within 1–2 business days are redirected to the MCA lender</li>
              <li>Your bank account balance does not grow even though you are serving customers and taking payments</li>
            </ul>
            <p>
              Whether your lender can actually execute this depends on whether they have a direct relationship with your specific processor and whether your contract authorizes it. Not all MCA lenders can pull this off — it requires coordination and specific contractual language. But for the ones who can, it is more disruptive than a bank freeze because you cannot route around it by opening a new account. The fix in this case is either negotiating directly with the lender for a release, or in some situations, switching processors — which takes time and requires a new merchant account application.
            </p>
            <p>
              If you believe your processor may have been notified, call them directly and ask. Processors are required to tell you if they have received a direction from a third party about your settlements.
            </p>
          </section>

          <section className="prose-block">
            <h2>After the Default Is Resolved: Rebuilding Cash Flow</h2>
            <p>
              Once your MCA default is resolved — through a settlement, restructured payment plan, or professional mediation — the work of rebuilding restaurant cash flow begins. Most restaurants that came through an MCA default need:
            </p>
            <ul>
              <li>A realistic cash flow plan that accounts for any ongoing restructured payments</li>
              <li>A moratorium on new MCA debt — the same product that created the problem should not be the first tool for the next cash gap</li>
              <li>A modest operating reserve built over the next 6–12 months from operational improvements</li>
            </ul>
            <p>
              See <Link to="/restaurant-mca-debt-help">the full restaurant MCA debt help guide</Link> for how to think about the path forward, and <Link to="/restaurant-cash-advance">restaurant cash advance options</Link> to understand how responsible MCA use differs from the stacking patterns that create default situations.
            </p>
          </section>

          <section className="prose-block">
            <h2>Related Guides in This Series</h2>
            <ul>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Help: The Complete Guide</Link></li>
              <li><Link to="/cant-pay-restaurant-mca">Can't Pay Your Restaurant MCA? What to Do Right Now</Link></li>
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

          <section className="prose-block">
            <h2>Get Help With Your MCA Default</h2>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '0 0 1.25rem' }}>
              <strong>Typical outcomes with professional mediation:</strong> Professional MCA mediators typically achieve 40–70% reductions on remaining balances — which is why lenders prefer structured settlements over full default. The window to negotiate from an operating position is better than negotiating from a closed one.
            </div>
            <p>
              Acting before the bank is frozen is almost always better than acting after. Share your situation below for a free, same-day assessment of your MCA default position.
            </p>
            <LeadCaptureForm source="restaurant-mca-default" submitLabel="Get Help With My MCA Default — Free" />
          </section>
        </div>
      </main>
    </>
  );
}
