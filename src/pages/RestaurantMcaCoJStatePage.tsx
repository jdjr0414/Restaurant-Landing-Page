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
    q: 'Can a COJ be filed against me in a state other than New York?',
    a: 'Most MCA agreements specify New York law and New York courts as the governing jurisdiction — even if you live in Texas, California, or Florida. This means the COJ is filed in a New York court regardless of your location. What varies by state is whether your home state will enforce a foreign judgment obtained via COJ. Most states will enforce the judgment, but some have enacted protections that limit enforcement or require additional steps.',
  },
  {
    q: 'Is a Confession of Judgment legal?',
    a: 'COJs are legal in most states and are specifically legal in New York, where the majority of MCA agreements are governed. Several states — including California, Pennsylvania (for consumer contracts), and Michigan — have laws that limit or prohibit their use. However, since most MCAs specify New York law, these state prohibitions may not protect you unless your attorney successfully challenges the choice-of-law clause.',
  },
  {
    q: 'How do I respond to a Confession of Judgment that has already been filed?',
    a: 'Once a COJ is entered, the window for direct challenge is narrow. You can petition the court to vacate the judgment on limited grounds — typically procedural errors (the COJ was defective or improperly filed) or substantive grounds (the MCA was actually a loan, making the COJ unenforceable under usury law). Both require an attorney. In parallel, negotiating a settlement with the lender to release the restraining notice is often faster and more likely to produce an operational outcome than litigation.',
  },
  {
    q: 'What is a restraining notice and how does it differ from a COJ?',
    a: 'A Confession of Judgment is the court judgment itself. A restraining notice is the document served on your bank after the judgment is entered. It instructs the bank to freeze the named account and not release funds to you. They are two separate steps — the COJ creates the judgment, the restraining notice executes it against your bank account. Both happen very quickly once the lender decides to act.',
  },
];

export function RestaurantMcaCoJStatePage() {
  const meta = getMeta('/restaurant-mca-confession-of-judgment')!;
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
          { name: 'Confession of Judgment by State', path: '/restaurant-mca-confession-of-judgment' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/restaurant-mca-confession-of-judgment" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Confession of Judgment in Restaurant MCAs: What It Means by State</h1>
          <p className="page-lead">
            The Confession of Judgment clause in your MCA contract is the reason your bank account can be frozen within days of a missed payment — and the rules vary significantly by state. Here is what restaurant owners need to know.
          </p>

          <section className="prose-block">
            <h2>What Is a Confession of Judgment?</h2>
            <p>
              When you signed your merchant cash advance agreement, you almost certainly signed a Confession of Judgment (COJ) — often buried deep in the contract. A COJ is a document that pre-authorizes the MCA lender to obtain a court judgment against you without filing a lawsuit, giving you advance notice, or holding a trial. The lender's attorney holds the signed document and files it with the court clerk when you miss payments. No hearing. No opportunity to contest before the judgment is entered.
            </p>
            <p>
              Once the judgment is entered, the lender can immediately serve a restraining notice on your bank, which freezes your account. Most MCA agreements are governed by New York law — meaning the COJ is filed in a New York court regardless of which state your restaurant operates in. The entire process from missed payment to frozen bank account can take less than two weeks.
            </p>
          </section>

          <section className="prose-block">
            <h2>COJ Enforcement by State</h2>
            <p>
              The critical distinction is between <em>where the COJ is filed</em> (usually New York) and <em>whether your state will enforce the resulting judgment</em>. Most states enforce foreign judgments under the Uniform Enforcement of Foreign Judgments Act — meaning a New York judgment can be domesticated in your state and used to pursue local assets. However, individual state laws create varying levels of protection.
            </p>

            <h3>New York — Fully Enforceable</h3>
            <p>
              New York is where the vast majority of MCA COJs are filed, and they are fully enforceable under New York law. The process is fast: the lender's attorney files the COJ with the court clerk, and a restraining notice can be served on your bank the same day or the next business day. New York courts have processed thousands of these filings. If your MCA is governed by New York law (check your contract for "governing law" language), assume a COJ can be filed quickly.
            </p>
            <p>
              Note: In 2019, the New York Times published an investigation into COJ abuse in MCA lending. New York has since tightened filing requirements for out-of-state judgments, but COJs filed within New York for New York-governed contracts remain fully valid.
            </p>

            <h3>California — COJs Prohibited</h3>
            <p>
              California prohibits Confessions of Judgment under Code of Civil Procedure § 1132. However, this does not automatically protect California restaurant owners from MCA COJ enforcement. Because most MCA contracts specify New York as the governing law and New York courts as the jurisdiction, the COJ can still be entered in New York. The question then becomes whether California courts will enforce the New York judgment. California courts have refused to enforce foreign COJ judgments in some cases — but this requires legal action on your part, and outcomes are not guaranteed.
            </p>
            <p>
              If you are in California and your bank account has been frozen via a New York COJ judgment, contact an attorney immediately. California's protections provide more grounds to challenge enforcement than most other states. <Link to="/restaurant-mca-debt-help-california">See the full California MCA debt guide</Link> — including SB 1235, the true lender doctrine, and California's updated homestead exemption.
            </p>

            <h3>Texas — Conditional Enforceability</h3>
            <p>
              Texas does not recognize confessed judgments obtained in other states as automatically enforceable in Texas courts. The lender would need to file a new lawsuit in Texas to domesticate the New York judgment. This creates additional steps and time before a Texas bank account can be frozen — but it does not prevent it. MCA lenders who are highly motivated will pursue Texas domestication, especially for large balances. The COJ can still result in frozen accounts, just with more process. Texas also offers unlimited homestead protection and prohibits wage garnishment for commercial debt. <Link to="/restaurant-mca-debt-help-texas">See the full Texas MCA debt guide</Link>.
            </p>

            <h3>Florida — Enforceable with Filing Requirements</h3>
            <p>
              Florida will enforce foreign judgments including those obtained via COJ in New York, but the lender must properly domesticate the judgment in Florida before pursuing Florida assets. Florida's UEFJA process requires specific filings and notice, and the debtor has 30 days to contest the registration before enforcement proceeds. Once domesticated, the judgment has the same force as a Florida judgment, and bank accounts can be frozen. Florida's unlimited homestead exemption protects your primary residence. <Link to="/restaurant-mca-debt-help-florida">See the full Florida MCA debt guide</Link> — including the UEFJA contest process and wage exemptions.
            </p>

            <h3>Illinois — Enforceable</h3>
            <p>
              Illinois courts enforce foreign judgments under the Uniform Enforcement of Foreign Judgments Act. A New York COJ judgment domesticated in Illinois can result in frozen Illinois bank accounts. Illinois does not have specific statutory protections that would block enforcement of a properly obtained New York COJ.
            </p>

            <h3>Pennsylvania — Mixed (Consumer vs. Business)</h3>
            <p>
              Pennsylvania has prohibited confessions of judgment in consumer contracts, but MCA agreements are business contracts — so the prohibition does not apply directly. However, Pennsylvania courts have shown some skepticism toward foreign COJs obtained without the debtor's ability to contest. The enforceability in Pennsylvania is more contested than in New York or Illinois. An attorney familiar with Pennsylvania commercial law should be consulted if you are facing enforcement there.
            </p>

            <h3>Other States</h3>
            <p>
              Most other states — including Georgia, North Carolina, Arizona, Colorado, Nevada, and others — will enforce foreign judgments domesticated under their version of the Uniform Act. The general pattern: a New York COJ judgment can be used in almost any state, with the timing and process varying. No state reliably blocks a motivated MCA lender from ultimately pursuing bank accounts and assets.
            </p>
          </section>

          <section className="prose-block">
            <h2>What to Do If You Are Facing a COJ Filing</h2>
            <p>
              If you have received notice that a COJ has been filed or is imminent:
            </p>
            <ul>
              <li><strong>If your bank account has already been frozen:</strong> See the complete emergency guide — <Link to="/mca-bank-account-frozen">MCA Bank Account Frozen: What to Do in the Next 24 Hours</Link>. It covers opening a new account, redirecting your processor, what the bank can and cannot do, and how release negotiations work.</li>
              <li><strong>Contact a professional MCA mediator.</strong> Professional mediators have direct relationships with the attorneys who handle COJ filings and can often negotiate a release of the restraining notice in exchange for a structured payment arrangement. This is typically faster and less expensive than litigation. Call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> or <Link to="/consultation">schedule a free consultation</Link> to assess your situation.</li>
              <li><strong>Consult an attorney in your state.</strong> If you believe the COJ was improperly filed, was based on a contract that was actually a loan (subject to usury law), or if you are in California or Pennsylvania where stronger protections may apply, an attorney can evaluate whether challenging the judgment is viable. See <Link to="/merchant-cash-advance-attorney">when you need an MCA attorney vs. a mediator</Link>.</li>
            </ul>
            <p>
              The window between a COJ filing and a frozen account can be extremely short — sometimes 24–48 hours. Acting immediately matters more than acting perfectly.
            </p>
          </section>

          <section className="prose-block">
            <h2>Get Help Now</h2>
            <p>
              If you are dealing with a COJ filing or a frozen bank account from an MCA lender, we work with professional MCA mediators who handle these situations daily and can intervene quickly to negotiate a resolution. Describe your situation below for a free, same-day assessment.
            </p>
            <LeadCaptureForm source="mca-confession-of-judgment" submitLabel="Get Immediate Help — Free" />
          </section>

          <section className="prose-block">
            <h2>Related MCA Guides</h2>
            <ul>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Help: The Complete Guide</Link></li>
              <li><Link to="/restaurant-mca-default">Restaurant MCA Default: What Happens and What to Do</Link></li>
              <li><Link to="/cant-pay-restaurant-mca">Can't Pay Your Restaurant MCA? What to Do Right Now</Link></li>
              <li><Link to="/restaurant-mca-stacking">Restaurant MCA Stacking: When Multiple Advances Stack Up</Link></li>
              <li><Link to="/restaurant-mca-calculator">MCA Holdback Calculator: See Your Burden & Savings</Link></li>
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
