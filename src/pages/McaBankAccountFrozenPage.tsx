import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { HowToSchema } from '../components/HowToSchema';
import { PageHero } from '../components/PageHero';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { getMeta } from '../staticMeta';
import { PHONE_NUMBER, PHONE_HREF } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const faqItems = [
  {
    q: 'Can I still accept cash payments if my bank account is frozen by an MCA?',
    a: 'Yes. A bank account restraining notice applies only to the specific bank account named in the notice. It does not affect cash transactions, and it does not prevent customers from paying you. The problem is that cash you deposit into the restrained account is immediately captured. Cash you keep separate, or deposit into a new account at a different bank, remains accessible. Open a new account immediately and direct all cash deposits there.',
  },
  {
    q: 'Will pending ACH deposits already in transit be frozen?',
    a: 'Yes. A restraining notice instructs the bank to freeze the account balance as it exists at the moment of service, plus any future deposits. ACH settlements already in transit — typically 1–2 business days behind — will be captured when they land. This is why opening a new account at a different bank and contacting your merchant processor to redirect future card settlements is urgent.',
  },
  {
    q: 'How long can an MCA bank account restraint stay in place?',
    a: 'A restraining notice has no automatic expiration under New York law, where most MCA COJ judgments are filed. It remains in effect until the judgment is satisfied (paid in full), a court orders it vacated, or the lender voluntarily releases it as part of a negotiated settlement. Most restaurants in this situation resolve the restraint through negotiated payment arrangements with the lender or their attorney — typically within 1–4 weeks when a professional mediator is involved.',
  },
  {
    q: 'What happens to auto-payments and recurring bills set up on the frozen account?',
    a: 'All outgoing automatic payments will fail — rent ACH, payroll direct deposit, vendor payments, insurance premiums, utility auto-pay. The bank will block all outgoing transactions. This means payroll checks will bounce, vendor payments will fail, and you may face late fees or service interruptions across every recurring obligation tied to that account. Address payroll first: print manual checks from a new account or arrange cash payment before the next pay date.',
  },
  {
    q: 'Can the MCA lender garnish my personal bank accounts too?',
    a: 'If your MCA agreement includes a personal guarantee, the judgment obtained through a COJ may be enforceable against personal assets — including personal bank accounts — depending on your state. In Texas and Florida, strong homestead exemptions limit personal asset exposure significantly. In most other states, a judgment creditor can pursue personal accounts if the business judgment is not satisfied. Whether your personal accounts are at risk depends on whether your MCA includes a personal guarantee and which state you are in.',
  },
  {
    q: 'What is the difference between a restraining notice and an account levy?',
    a: 'A restraining notice freezes the account — it prevents you from accessing funds but does not yet transfer money to the lender. A levy (or execution on the account) is the next step, where a sheriff or marshal actually directs the bank to transfer the frozen funds to the court or the judgment creditor. Most MCA lenders start with a restraining notice and use the leverage of frozen funds to negotiate payment. If negotiations fail, they can proceed to levy and take the frozen balance.',
  },
];

export function McaBankAccountFrozenPage() {
  const meta = getMeta('/mca-bank-account-frozen')!;
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
          { name: 'MCA Bank Account Frozen', path: '/mca-bank-account-frozen' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/mca-bank-account-frozen" />
      <HowToSchema
        name="What to Do Immediately When an MCA Freezes Your Bank Account"
        description="Emergency step-by-step response when a merchant cash advance lender has served a restraining notice on your business bank account."
        urlPath="/mca-bank-account-frozen"
        steps={[
          { name: 'Open a new business bank account at a different institution immediately', text: 'Do not wait. A restraining notice applies only to the specific account named — not to accounts at other banks. Walk in or apply online at a different bank today. Bring your EIN, business formation documents, and a government ID. Many banks can open a business account same day.' },
          { name: 'Contact your merchant processor to redirect card settlements', text: 'Call your credit card processor and ask them to redirect future settlements to your new account number. This process takes 1–3 business days. Until it completes, card settlements will continue landing in the frozen account and being captured. Prioritize this call.' },
          { name: 'Contact a professional MCA mediator before calling the lender directly', text: 'A professional mediator can contact the lender\'s legal team immediately to negotiate a release of the restraining notice in exchange for a structured payment arrangement. Lenders who froze accounts regularly release them once a viable payment plan is established — but the terms negotiated by a professional are materially better than those an owner can negotiate alone under duress.' },
          { name: 'Notify payroll and redirect direct deposits', text: 'Communicate with employees before the next payroll run. Redirect direct deposit to your new account. If payroll checks were already printed against the frozen account, they will bounce — have cash or cashier\'s checks ready for employees at your next pay date.' },
          { name: 'Do not transfer funds out of the restrained account', text: 'Once a restraining notice is served, moving funds out of the restrained account — to another account in your name, to a family member, or to any third party — can constitute contempt of court or fraudulent transfer. Do not do this. Only move deposits that arrive after you have redirected to the new account.' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">MCA Froze My Bank Account: What to Do in the Next 24 Hours</h1>
          <p className="page-lead">
            If a merchant cash advance lender has served a restraining notice on your bank account, you have hours — not days — to protect your operating cash and begin the negotiation that releases the freeze. This guide covers the exact steps in the order that matters.
          </p>

          <section className="prose-block">
            <div className="alert-callout">
              <strong style={{ color: '#c53030' }}>If your account was just frozen, call us first:</strong> <a href={PHONE_HREF} style={{ color: '#c53030', fontWeight: 600 }}>{PHONE_NUMBER}</a>. Professional mediators can contact the lender's legal team same day and begin negotiating a release. Every hour matters.
            </div>
          </section>

          <section className="prose-block">
            <h2>What Just Happened: How a Restraining Notice Works</h2>
            <p>
              When you signed your merchant cash advance agreement, you signed a Confession of Judgment (COJ) — a document that authorized the lender to obtain a court judgment against you without a lawsuit, without giving you notice, and without a trial. When you missed payments, the lender's attorney filed that COJ with the court clerk (usually in New York, where most MCAs are governed). The judgment was entered. Then the lender's attorney served a restraining notice on your bank.
            </p>
            <p>
              A restraining notice is a legal document that instructs your bank to freeze the named account. The bank has no discretion — they are legally required to comply immediately upon service. The moment the notice was served, your account balance was locked. No outgoing transfers. No bill payments. No ACH debits. No wire transfers. The account can still receive deposits — but those deposits are also immediately frozen upon arrival.
            </p>
            <p>
              The key distinction from bankruptcy or a court-ordered freeze: this happened without any opportunity for you to respond before the freeze went into effect. The entire process — from the lender's attorney filing the COJ to your account being frozen — can take as little as 24–48 hours. Many restaurant owners learn their account is frozen when a payroll check bounces or a vendor calls about a failed payment.
            </p>
          </section>

          <section className="prose-block">
            <h2>The First 2 Hours: Actions in Priority Order</h2>
            <p>
              The first two hours after you discover your account is frozen are the most important. Here is the exact priority order:
            </p>
            <p>
              <strong>1. Call a professional MCA mediator.</strong> Before you call the bank, before you call the lender, call someone who handles this professionally. Mediators have direct relationships with the attorneys who filed the restraining notice. They can contact the lender's legal team within the hour to signal that a negotiated resolution is being pursued — and most lenders will pause further enforcement action once a professional mediator is involved. The number above is your starting point.
            </p>
            <p>
              <strong>2. Open a new business bank account at a different institution.</strong> Walk in or apply online at any bank other than the one that was restrained. This is the single most important operational action you can take. Bring your EIN, business formation documents, and ID. Many banks open business accounts same-day for established businesses. Once open, this account is your new operational home.
            </p>
            <p>
              <strong>3. Contact your merchant processor.</strong> Call your credit and debit card processor and ask them to redirect future daily settlements from your old account to your new account. This takes 1–3 business days to process. Until it takes effect, card settlements will continue landing in the frozen account. For the in-between period, ask the processor if they have an expedited change process for account emergencies.
            </p>
            <p>
              <strong>4. Call your bank and confirm what is frozen.</strong> Ask the bank specifically: (a) what is the account balance currently restrained, (b) is the account still receiving deposits, and (c) has a levy been served in addition to the restraining notice. The distinction between a restraint and a levy matters — a restraint freezes but does not transfer; a levy is the next step that transfers funds to the court or lender.
            </p>
            <p>
              <strong>5. Notify your payroll system.</strong> If payroll is scheduled within the next 7 days, update the source account immediately. Payroll direct deposits that process against the frozen account will be rejected, and paper checks drawn on the frozen account will bounce. Get ahead of this before it becomes an employee relations emergency on top of a financial one.
            </p>
          </section>

          <section className="prose-block">
            <h2>What the Bank Is and Is Not Allowed to Do</h2>
            <p>
              Banks have specific legal obligations when a restraining notice is served. Understanding what they can and cannot do helps you navigate the situation:
            </p>
            <p>
              <strong>What the bank must do:</strong>
            </p>
            <ul>
              <li>Comply with the restraining notice immediately upon service — they have no discretion</li>
              <li>Continue to receive deposits into the restrained account (the account is not closed)</li>
              <li>Freeze the balance — block outgoing transactions</li>
              <li>Respond to information subpoenas requesting account balance information</li>
            </ul>
            <p>
              <strong>What the bank must tell you:</strong>
            </p>
            <ul>
              <li>That a restraining notice has been served (if you ask — they may not proactively call you)</li>
              <li>The identity of the party who served the notice</li>
              <li>The current restrained balance</li>
            </ul>
            <p>
              <strong>What the bank cannot do:</strong>
            </p>
            <ul>
              <li>Transfer the frozen funds to the lender on their own — only a levy executed by a sheriff or marshal can direct the transfer of funds</li>
              <li>Close your account solely because of the restraining notice</li>
              <li>Prevent you from opening a new account at the same bank (though it may be uncomfortable, and a different bank is cleaner)</li>
              <li>Block transactions on other accounts at the same bank that are not named in the restraining notice</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>How Negotiating a Release of the Restraining Notice Works</h2>
            <p>
              The lender froze your account to get your attention and force payment. A frozen account that belongs to a restaurant still serving customers is worth more to the lender as a negotiating chip than as a seized asset — a closed restaurant generates zero future recovery. This gives you leverage, even in a bad situation.
            </p>
            <p>
              The release negotiation typically works like this:
            </p>
            <p>
              <strong>Step 1.</strong> A professional mediator contacts the lender's attorney and identifies themselves as representing you. This immediately shifts the conversation from "hostile collection" to "structured negotiation." The lender's attorney now has a professional counterparty.
            </p>
            <p>
              <strong>Step 2.</strong> The mediator proposes a structured payment arrangement in exchange for a voluntary release of the restraining notice. This might be: a reduced daily holdback resuming from the new account, a lump-sum payment of a portion of the balance, or a formal restructuring agreement. Lenders almost universally prefer this to a frozen account belonging to a closed restaurant.
            </p>
            <p>
              <strong>Step 3.</strong> Once terms are agreed, the lender's attorney files a release or satisfaction with the bank, and the account is unfrozen. The restaurant resumes operations under the negotiated terms.
            </p>
            <p>
              Professional mediators achieve release of bank restraints in most cases within 1–4 weeks of engagement. The faster you engage one, the better the terms — because the first days after a freeze, the lender believes you may just pay in full to unfreeze. As time passes and they see you are still operating (via your new account), the negotiating dynamic shifts.
            </p>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.25rem 0' }}>
              <strong>What happens during the negotiation:</strong> In most cases, professional mediators negotiate both a release of the bank freeze AND a reduction of the total remaining balance (typically 40–70% reduction). The freeze negotiation and the balance negotiation happen simultaneously — you don't have to unfreeze first and then negotiate the debt separately.
            </div>
          </section>

          <section className="prose-block">
            <h2>What Happens to Deposits Already in Transit</h2>
            <p>
              Card settlements typically arrive in your bank account 1–2 business days after the transaction. Cash deposits made before the freeze are already captured. Here is the breakdown of what happens to deposits already in the pipeline:
            </p>
            <ul>
              <li><strong>Card settlements already submitted:</strong> Will land in the frozen account and be immediately captured by the restraint. These funds are frozen the moment they arrive.</li>
              <li><strong>ACH deposits already initiated:</strong> Same — they will land and be frozen.</li>
              <li><strong>Cash you haven't deposited yet:</strong> Do not deposit it into the frozen account. It will be captured. Hold it separately and deposit it into your new account only.</li>
              <li><strong>Future card settlements after processor redirect:</strong> Once your merchant processor has updated the deposit account, future settlements will go to your new account and are not subject to the existing restraining notice (which names the old account specifically).</li>
            </ul>
            <p>
              The 1–3 day window between opening a new account and the processor redirect completing is when you are most exposed. During that window, use cash only for immediate operational expenses.
            </p>
          </section>

          <section className="prose-block">
            <h2>After the Freeze: Preventing This From Happening Again</h2>
            <p>
              A bank account freeze from an MCA is a symptom, not the underlying problem. Resolving the freeze through negotiation is the immediate fix. Resolving the underlying MCA debt is the permanent fix. Once the restraining notice is released, the work of restructuring or settling the total MCA obligation needs to continue.
            </p>
            <p>
              Restaurants that resolve a bank freeze without addressing the underlying MCA debt are typically frozen again within 30–90 days — either by the same lender who accepted a short-term arrangement, or by a different lender in a stacked position who now files their own COJ.
            </p>
            <p>
              See <Link to="/how-to-get-out-of-merchant-cash-advance">how to get out of a merchant cash advance</Link> for the full exit path options, and <Link to="/merchant-cash-advance-settlement">MCA settlement</Link> for what negotiating the total balance down looks like.
            </p>
          </section>

          <section className="prose-block">
            <h2>Get Help Now — This Is a Same-Day Emergency</h2>
            <p>
              Call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> or fill out the form below. A professional mediator can contact your lender's legal team today and begin the process of releasing the bank restraint. The sooner you engage, the better the outcome.
            </p>
            <LeadCaptureForm source="mca-bank-account-frozen" submitLabel="Get Emergency MCA Help Now" />
          </section>

          <section className="prose-block">
            <h2>Related MCA Guides</h2>
            <ul>
              <li><Link to="/restaurant-mca-default">Restaurant MCA Default: Full Timeline and Recovery Steps</Link></li>
              <li><Link to="/restaurant-mca-confession-of-judgment">Confession of Judgment by State: What It Means and How It Works</Link></li>
              <li><Link to="/merchant-cash-advance-settlement">MCA Settlement: How to Negotiate and What to Expect</Link></li>
              <li><Link to="/cant-pay-restaurant-mca">Can't Pay Your Restaurant MCA? Steps to Take Right Now</Link></li>
              <li><Link to="/how-to-get-out-of-merchant-cash-advance">How to Get Out of a Merchant Cash Advance</Link></li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Frequently Asked Questions</h2>
            {faqItems.map((item) => (
              <div key={item.q} style={{ marginBottom: '1.5rem' }}>
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
