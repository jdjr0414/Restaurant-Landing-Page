import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { AllIndustriesNote } from '../components/AllIndustriesNote';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
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
    q: 'Will closing my restaurant eliminate my MCA debt?',
    a: 'No. Closing your restaurant does not eliminate MCA debt, especially if your agreement includes a personal guarantee. Personal guarantees are your individual promise to pay, independent of whether the business operates or exists. A COJ judgment entered in a New York court remains enforceable regardless of business closure. UCC liens remain filed until released. Debt forgiven by the lender (if any) may be reported as taxable income on a 1099-C. Closure eliminates your revenue stream without eliminating your liability.',
  },
  {
    q: 'What is a 1099-C and will I get one from MCA debt forgiveness?',
    a: 'A 1099-C (Cancellation of Debt) is a tax form issued when a creditor forgives $600 or more of debt. If an MCA lender settles your $100,000 remaining balance for $45,000, they may issue a 1099-C for $55,000 — the amount forgiven. That $55,000 is generally treated as taxable ordinary income in the year of forgiveness. There are exceptions (the insolvency exception allows you to exclude forgiven debt to the extent your liabilities exceeded your assets at the time of forgiveness), but these require documentation and tax professional guidance.',
  },
  {
    q: 'How long does an MCA court judgment stay on my record?',
    a: 'A judgment entered via Confession of Judgment in New York is effective for 20 years (reduced to 10 years for dormancy, but renewable). In most states, a domesticated foreign judgment is enforceable for 10 years and can be renewed for additional 10-year periods. A judgment that is not satisfied remains a lien against any real property you own in the state where it is domesticated and continues to accrue post-judgment interest.',
  },
  {
    q: 'Can I open a new restaurant after an MCA default?',
    a: 'Yes, you can open a new restaurant after MCA default — but the practical obstacles are significant. Outstanding COJ judgments and UCC liens filed against your prior business (and potentially against you personally) will appear in commercial credit searches and lien searches. New MCA lenders will find these. Banks and SBA lenders will see the judgment history. Landlords may run commercial credit checks. Vendors may require cash upfront. Resolving the existing MCA debt before opening a new business produces dramatically better outcomes than trying to start over with unresolved judgments.',
  },
  {
    q: 'Is Chapter 7 or Chapter 11 better for a restaurant owner with MCA debt?',
    a: 'Chapter 7 (liquidation) closes the business and discharges business debts, but does not discharge personal guarantees — you would need a personal Chapter 7 as well. Chapter 11 (reorganization) allows the business to continue operating under a court-approved repayment plan and can modify MCA terms through the bankruptcy process, potentially reducing what is owed. Chapter 11 is expensive (often $50,000+ in legal fees) and complex. For most restaurant owners with MCA debt, professional mediation achieves similar debt reduction results in weeks rather than months, with no public court proceedings and significantly lower cost.',
  },
  {
    q: 'Why is it harder to negotiate MCA debt after closing than before?',
    a: 'MCA lenders negotiate based on the prospect of future recovery. An operating restaurant generates revenue — that revenue is the lender\'s source of repayment. When you negotiate from an operating position, the lender is motivated to reach terms that keep the restaurant open and paying. When the business has closed, the lender\'s only recovery options are judgment enforcement against whatever assets remain. There is no future revenue to negotiate around, so the lender has less reason to offer favorable settlement terms. They may hold out for full collection on the judgment rather than accepting 50 cents on the dollar.',
  },
];

export function RestaurantMcaDebtAfterClosingPage() {
  const meta = getMeta('/restaurant-mca-debt-after-closing')!;
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
          { name: 'MCA Debt After Closing', path: '/restaurant-mca-debt-after-closing' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/restaurant-mca-debt-after-closing" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">What Happens to MCA Debt If Your Restaurant Closes: The Full Picture</h1>
          <p className="page-lead">
            One of the most dangerous assumptions restaurant owners make is that closing their business will make MCA debt disappear. It won't. This guide explains exactly what survives closure, why the debt follows you personally, and why negotiating before closing almost always produces better outcomes than closing first.
          </p>
          <AllIndustriesNote />
          <div className="article__meta">
            <time className="article__date" dateTime="2026-05-07">Updated: May 7, 2026</time>
          </div>

          <section className="prose-block">
            <h2>The Myth: "Closing My Restaurant Will Make the Debt Go Away"</h2>
            <p>
              This belief is understandable but wrong — and acting on it leads to outcomes significantly worse than the MCA problem itself. Here is why closing does not eliminate MCA debt:
            </p>
            <p>
              <strong>Personal guarantees survive closure.</strong> Almost every MCA agreement includes a personal guarantee — your personal promise to pay, independent of the business entity. The guarantee is specifically designed to survive business closure, bankruptcy of the business entity, and dissolution. When the restaurant closes, the lender can still come after you personally.
            </p>
            <p>
              <strong>Court judgments don't expire with the business.</strong> If a Confession of Judgment has been filed, that judgment exists in the court record for up to 20 years in New York, where most MCA COJs are entered. The judgment is against you personally (if a personal guarantee exists) or against the business entity (which can be domesticated into any state). Closing the business does not satisfy the judgment.
            </p>
            <p>
              <strong>UCC liens remain filed.</strong> UCC-1 financing statements filed against your business remain in place until the lender files a UCC-3 termination. A dissolved LLC with active UCC liens still has those liens on record — affecting your ability to use that EIN for any future business purpose.
            </p>
            <p>
              <strong>Forgiven debt may be taxable.</strong> If a lender agrees to forgive a portion of what you owe after closure, they may issue a 1099-C for the forgiven amount. That forgiven debt is generally treated as taxable income — meaning a $60,000 settlement might result in a $15,000+ federal tax bill on top of the settlement amount.
            </p>
          </section>

          <section className="prose-block">
            <h2>What MCA-Related Obligations Survive Business Closure</h2>
            <p>
              Here is a clear breakdown of what happens to each element of MCA debt when a restaurant closes:
            </p>
            <ul>
              <li>
                <strong>The personal guarantee:</strong> Survives fully. The lender can pursue you personally for the entire remaining balance. Closing the LLC does not release the guarantee.
              </li>
              <li>
                <strong>The COJ judgment (if filed):</strong> Survives fully. The judgment is a court order that exists independently of the business. In most states it earns post-judgment interest (typically 9% per year in New York) until paid.
              </li>
              <li>
                <strong>UCC liens:</strong> Remain filed for up to 5 years (auto-renewing if the lender continues to renew them). A dissolved LLC with active UCC liens has those liens on the public record.
              </li>
              <li>
                <strong>The underlying MCA obligation:</strong> Does not disappear with closure. The lender can continue collection efforts against you personally indefinitely.
              </li>
              <li>
                <strong>Daily holdbacks:</strong> These stop when the merchant processor relationship ends — but the underlying balance owed continues to grow with fees and post-judgment interest.
              </li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>The Tax Consequences of Forgiven MCA Debt</h2>
            <p>
              If an MCA lender forgives any portion of what you owe — whether through negotiated settlement, debt discharge, or written-off debt — the forgiven amount may be reported to the IRS on Form 1099-C. This is called cancellation of debt (COD) income.
            </p>
            <p>
              Example: You owe $95,000 remaining on an MCA. The lender agrees to settle for $42,000. The forgiven $53,000 may be reported as income on a 1099-C. If your marginal federal tax rate is 24%, that creates an additional $12,720 federal tax liability in the year of settlement — on top of the $42,000 you paid.
            </p>
            <p>
              <strong>The insolvency exception:</strong> You may be able to exclude some or all forgiven debt from taxable income if you were insolvent at the time of forgiveness — meaning your total liabilities exceeded your total assets. The insolvency calculation is done at the moment the debt was forgiven, not at some other point. This exception requires documentation and should be handled by a tax professional or CPA familiar with COD income.
            </p>
            <p>
              <strong>Business vs. personal bankruptcy discharge:</strong> Debt discharged in bankruptcy is excluded from taxable income. If you go through personal Chapter 7 and discharge your personal liability under the MCA guarantee, that discharged amount is not treated as taxable income. This is one situation where bankruptcy provides a specific tax advantage over negotiated settlement.
            </p>
          </section>

          <section className="prose-block">
            <h2>Why Closing Makes Negotiation Harder</h2>
            <p>
              MCA lenders negotiate based on one primary calculation: what is the most recovery they can extract from this situation? An operating restaurant gives them a clear answer: ongoing revenue they can potentially reach. A closed restaurant gives them a much harder answer: whatever personal assets you have, minus exemptions, minus the cost of collecting.
            </p>
            <p>
              When negotiating from an operating position, you can offer the lender something they want — continued payments from an operating business, potentially structured at a level they can actually receive. A lender who accepts 50 cents on the dollar from an operating restaurant is getting certain recovery today from a viable business.
            </p>
            <p>
              When negotiating after closure, the lender knows:
            </p>
            <ul>
              <li>There are no more future revenues to negotiate around</li>
              <li>Collection requires pursuing personal assets, which is slow and expensive</li>
              <li>The business has no goodwill, equipment value (usually), or receivables worth attaching</li>
              <li>You may be in a financial position where even the personal assets are limited</li>
            </ul>
            <p>
              In this position, some lenders become less willing to negotiate and more focused on whatever they can collect via judgment enforcement. The leverage that made a 55% balance reduction possible while you were operating may not exist once the restaurant is closed.
            </p>
          </section>

          <section className="prose-block">
            <h2>If You Are Considering Closing: What to Do First</h2>
            <p>
              If your restaurant is at the point where closure feels inevitable, the order of operations matters significantly:
            </p>
            <p>
              <strong>1. Get a professional assessment of your MCA obligations before closing.</strong> Understand exactly what personal guarantee exposure you have, whether COJs have been filed, and what UCC liens are outstanding. This takes one conversation and costs nothing if you <Link to="/consultation">schedule a free consultation</Link>.
            </p>
            <p>
              <strong>2. Begin MCA negotiation while the restaurant is still operating.</strong> Even if closure is the end goal, negotiating from an operating position gives you leverage that disappears the day you close. A negotiated settlement or restructuring while operating often produces 40–70% balance reductions that become much harder to achieve post-closure.
            </p>
            <p>
              <strong>3. Understand the 1099-C implications before signing any settlement.</strong> A settlement forgives debt that may be taxable. Know the tax consequence before you agree to terms.
            </p>
            <p>
              <strong>4. Consult a business attorney before dissolving the entity.</strong> The timing and method of LLC dissolution can affect creditor claims in ways that vary by state.
            </p>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.25rem 0' }}>
              <strong>The most important thing to understand:</strong> Closure is a business decision. MCA debt resolution is a separate financial decision. Making the closure decision first eliminates the leverage that makes good debt resolution possible. Make the debt resolution decision first — or at minimum simultaneously — while you still have a revenue stream to negotiate around.
            </div>
          </section>

          <section className="prose-block">
            <h2>Can You Open a New Restaurant After MCA Default?</h2>
            <p>
              Yes — but the outstanding MCA obligations create practical obstacles for the next venture:
            </p>
            <ul>
              <li><strong>New MCA lenders will search UCC filings.</strong> Active UCC liens from prior MCAs will appear and may cause new lenders to decline or require higher factor rates.</li>
              <li><strong>Commercial landlords may run credit checks.</strong> Outstanding judgments appear in commercial credit reports and may require larger security deposits or personal guarantor co-signers for a lease.</li>
              <li><strong>Banks will see the judgment history.</strong> A business banking relationship at a new venture may require explanation of the prior judgment.</li>
              <li><strong>Equipment financing becomes harder.</strong> Equipment lessors check personal and commercial credit.</li>
              <li><strong>The stress is compounding.</strong> Running a new restaurant while managing collection actions from a prior one is operationally and personally taxing.</li>
            </ul>
            <p>
              Fully resolving prior MCA obligations — either through settlement, restructuring, or bankruptcy discharge — before opening a new venture produces significantly cleaner outcomes. Call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> to discuss what resolution looks like for your specific situation.
            </p>
          </section>

          <section className="prose-block">
            <h2>Get a Free Assessment Before Making Any Closure Decision</h2>
            <LeadCaptureForm source="mca-debt-after-closing" submitLabel="Get a Free MCA Closure Assessment" />
          </section>

          <section className="prose-block">
            <h2>Related MCA Guides</h2>
            <ul>
              <li><Link to="/merchant-cash-advance-personal-guarantee">MCA Personal Guarantee: What Your Assets Are Actually At Risk</Link></li>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Relief: The Complete Guide</Link></li>
              <li><Link to="/merchant-cash-advance-settlement">MCA Settlement: Negotiating a Reduced Payoff</Link></li>
              <li><Link to="/merchant-cash-advance-attorney">When You Need an MCA Attorney vs. a Mediator</Link></li>
              <li><Link to="/restaurant-mca-default">Restaurant MCA Default: What Happens and What to Do</Link></li>
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
