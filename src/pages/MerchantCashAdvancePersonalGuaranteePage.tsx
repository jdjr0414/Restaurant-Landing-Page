import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
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
    q: 'Does an LLC protect me from a merchant cash advance personal guarantee?',
    a: 'No. The personal guarantee explicitly bypasses your LLC\'s limited liability protection. An LLC normally separates your personal assets from business debts — but when you sign a personal guarantee, you are agreeing that the MCA lender can pursue you personally if the business cannot pay. The guarantee is a contractual waiver of the LLC protection for this specific obligation. Your home, personal bank accounts, and personal assets can be at risk regardless of your business entity structure.',
  },
  {
    q: 'Can my home be seized to satisfy an MCA personal guarantee?',
    a: 'It depends on your state\'s homestead exemption. Texas and Florida offer unlimited homestead exemptions for primary residences — your home cannot be seized for business debt regardless of equity. Most other states have limited exemptions ($25,000–$500,000 depending on the state). If your home equity exceeds your state\'s exemption amount and there is no federal homestead protection available, a judgment creditor could potentially force a sale — though this is rare and complex in practice. Consult an attorney in your state if your home equity significantly exceeds your state\'s exemption.',
  },
  {
    q: 'What is the difference between a limited and unlimited personal guarantee?',
    a: 'An unlimited personal guarantee means you are personally liable for the full amount owed plus any fees, interest, and collection costs — with no cap. A limited personal guarantee caps your personal liability at a specific amount (for example, 50% of the original advance, or a fixed dollar amount). Most MCA agreements use unlimited personal guarantees. Review your contract for "limited guarantee" or "guaranty not to exceed" language — if it is not there, assume it is unlimited.',
  },
  {
    q: 'Can a personal guarantee be released as part of an MCA settlement?',
    a: 'Yes — and it should be. A properly structured MCA settlement should explicitly include a release of the personal guarantee as part of the closing documentation. Settlement agreements that reduce the balance but do not release the personal guarantee leave you personally exposed for any disputed amount. Always confirm that the settlement agreement includes: (1) a satisfaction of the judgment, (2) UCC-3 lien termination, and (3) a full release of the personal guarantee. If the lender\'s proposed agreement is missing any of these, do not sign.',
  },
  {
    q: 'Does the personal guarantee survive if my business closes?',
    a: 'Yes — this is the most important and most misunderstood fact about personal guarantees. Closing your restaurant, dissolving your LLC, or filing business bankruptcy does not eliminate a personal guarantee. The guarantee is your personal promise to pay, independent of the business entity\'s existence. If the business closes with unsatisfied MCA debt, the lender can still pursue you personally under the guarantee. This is the primary reason why simply closing the restaurant is not a strategy for eliminating MCA debt.',
  },
  {
    q: 'What happens to my personal guarantee if the business files Chapter 7 bankruptcy?',
    a: 'A business Chapter 7 bankruptcy discharges the business\'s liability for the MCA debt, but it does not discharge your personal guarantee. The lender\'s claim against you personally survives the business bankruptcy. To discharge a personal guarantee, you would need to file a personal bankruptcy — either Chapter 7 (liquidation) or Chapter 13 (reorganization). Personal bankruptcy has significant credit and practical consequences and should only be considered after other options are exhausted.',
  },
];

export function MerchantCashAdvancePersonalGuaranteePage() {
  const meta = getMeta('/merchant-cash-advance-personal-guarantee')!;
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
          { name: 'MCA Personal Guarantee', path: '/merchant-cash-advance-personal-guarantee' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/merchant-cash-advance-personal-guarantee" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Merchant Cash Advance Personal Guarantee: What It Means for Your Assets</h1>
          <p className="page-lead">
            Most restaurant owners who signed an MCA agreement also signed a personal guarantee — often without fully understanding that it makes them personally liable for the debt if the business cannot pay. This guide explains exactly what assets are at risk, how homestead laws protect you (or don't), and what happens to a personal guarantee in settlement or bankruptcy.
          </p>

          <section className="prose-block">
            <h2>What Personal Guarantee Language Looks Like in an MCA Contract</h2>
            <p>
              Personal guarantee clauses are typically found toward the end of an MCA agreement, often on a separate signature page. The language usually reads something like:
            </p>
            <div style={{ background: 'var(--color-cream-dark)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1rem 0', fontStyle: 'italic', borderLeft: '4px solid var(--color-ink-muted)' }}>
              "In consideration of Merchant's execution of this Agreement, the undersigned guarantor(s) hereby unconditionally, absolutely, and irrevocably guarantee the full, prompt and complete payment, performance and fulfillment of all of Merchant's obligations under this Agreement..."
            </div>
            <p>
              The words "unconditionally," "absolutely," and "irrevocably" are the critical terms. They mean the lender does not have to exhaust remedies against the business first — they can pursue you personally without first proving the business cannot pay. They also mean there are no conditions under which the guarantee is voided: not business closure, not the lender's own behavior, not changes in your personal financial situation.
            </p>
            <p>
              Many restaurant owners sign this page alongside the business entity signatures, not realizing it creates separate personal liability entirely independent of what the business owes.
            </p>
          </section>

          <section className="prose-block">
            <h2>What Assets a Personal Guarantee Actually Puts at Risk</h2>
            <p>
              A personal guarantee means a judgment creditor can pursue your personal assets — not just the business's assets. What is actually at risk depends on your state's exemption laws, but the categories of personal assets that can be pursued include:
            </p>
            <ul>
              <li><strong>Personal bank accounts.</strong> Checking, savings, money market accounts in your personal name. Unlike business accounts, which are restrained via a business COJ, personal accounts can be reached through a separate enforcement action against you personally.</li>
              <li><strong>Personal real estate (beyond homestead exemption).</strong> A primary residence is protected by homestead laws in most states — but investment properties, vacation homes, and second properties typically are not.</li>
              <li><strong>Personal vehicles</strong> (beyond your state's vehicle exemption, usually $2,500–$10,000).</li>
              <li><strong>Investment and brokerage accounts</strong> (stocks, mutual funds, bonds in personal accounts).</li>
              <li><strong>Business interests in other entities</strong> you personally own.</li>
              <li><strong>Future wages</strong> — though wage garnishment is limited in many states and prohibited for commercial debt in Texas.</li>
            </ul>
            <p>
              Assets that are typically <em>not</em> reachable:
            </p>
            <ul>
              <li>Primary residence up to your state's homestead exemption amount</li>
              <li>Qualified retirement accounts (401k, IRA) — protected under ERISA from most judgment creditors</li>
              <li>Life insurance cash value in many states</li>
              <li>Assets held in a properly structured irrevocable trust (though transfers made after the guarantee was signed may constitute fraudulent transfer)</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Homestead Exemption Protections by State</h2>
            <p>
              Your primary residence is likely your most significant personal asset. Whether it is protected depends on where it is located:
            </p>
            <ul>
              <li><strong>Texas:</strong> Unlimited homestead exemption for primary residence (up to 10 acres in a city, up to 200 acres in a rural area). Among the strongest protections in the country. An MCA judgment cannot force the sale of your Texas primary home regardless of equity. Texas also prohibits wage garnishment for commercial debt. <Link to="/restaurant-mca-debt-help-texas">Full Texas MCA protection guide →</Link></li>
              <li><strong>Florida:</strong> Unlimited homestead exemption for primary residence (no size or value limit for a 0.5-acre urban parcel). Florida homestead protection is constitutional — some of the most powerful in the US. Florida also has a 30-day UEFJA contest window for foreign judgments. <Link to="/restaurant-mca-debt-help-florida">Full Florida MCA protection guide →</Link></li>
              <li><strong>California:</strong> $300,000–$600,000 depending on county median home price (increased under AB 1885, effective 2021). California also prohibits COJs and has SB 1235 disclosure requirements. <Link to="/restaurant-mca-debt-help-california">Full California MCA protection guide →</Link></li>
              <li><strong>Georgia:</strong> $21,500 ($43,000 for married couples). Limited — most homes with meaningful equity are partially exposed.</li>
              <li><strong>New York:</strong> $89,975–$179,950 depending on county. Limited relative to New York home values.</li>
              <li><strong>Illinois:</strong> $15,000 ($30,000 for married couples). Very limited.</li>
              <li><strong>Most other states:</strong> Range from $0 (no homestead exemption, like New Jersey and Pennsylvania for judgment creditors) to $500,000+ (Massachusetts). Check your state's specific exemption amount.</li>
            </ul>
            <p>
              The practical reality: most MCA lenders focus on business bank accounts and merchant processing for immediate recovery, not personal real estate — which is difficult and expensive to execute against. But if the business has no assets and the owner has significant unprotected personal equity, the personal guarantee creates meaningful exposure.
            </p>
          </section>

          <section className="prose-block">
            <h2>Does Forming an LLC Actually Protect You?</h2>
            <p>
              This is the most common misconception among restaurant owners with MCA debt. The answer is no — not from an obligation you personally guaranteed.
            </p>
            <p>
              An LLC's limited liability protection shields members from the business's debts by default. If your restaurant LLC fails to pay a vendor, that vendor cannot come after your personal assets — because the LLC separates them. This protection is real and valuable in general business operations.
            </p>
            <p>
              But a personal guarantee is a contractual agreement to waive that protection for a specific obligation. By signing the MCA personal guarantee, you told the lender: "I know I have LLC protection, and I am agreeing not to use it against you." The guarantee is specifically designed to override the entity protection. MCA lenders require personal guarantees precisely because they know restaurant LLCs can dissolve quickly.
            </p>
            <p>
              The only way an LLC protects you from MCA debt is if the MCA agreement itself does not include a personal guarantee — which is rare. Review your contract. If there is no separate personal guarantee signature page, confirm in writing with the lender that your liability is limited to the business entity.
            </p>
          </section>

          <section className="prose-block">
            <h2>Can a Personal Guarantee Be Negotiated Away in a Settlement?</h2>
            <p>
              Yes — and this is one of the most valuable elements of a professionally negotiated MCA settlement. Lenders include personal guarantees as leverage; they use them as negotiating tools as much as enforcement tools. A settlement that resolves the business obligation should also include a full, written release of the personal guarantee.
            </p>
            <p>
              What a full settlement package should include:
            </p>
            <ul>
              <li><strong>Satisfaction of the business judgment</strong> (if a COJ was filed)</li>
              <li><strong>UCC-3 termination</strong> of all financing statements</li>
              <li><strong>Written release of the personal guarantee</strong> — the specific document should state that the guarantor (you) is released from all obligations under the guarantee agreement</li>
              <li><strong>No-deficiency language</strong> — confirming the lender waives any remaining balance above the settled amount</li>
            </ul>
            <p>
              Never accept a settlement that reduces the business balance but does not address the personal guarantee. A lender that settles the business MCA for $40,000 but retains the personal guarantee for the remaining $60,000 has not truly settled your liability — they have just shifted the collection target from the business to you personally.
            </p>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.25rem 0' }}>
              <strong>What professional mediation achieves on personal guarantees:</strong> Professional MCA mediators routinely negotiate settlements that include full personal guarantee releases as a condition of the agreement — not as a separate negotiation after the fact. This is standard in properly structured settlements and one of the key reasons professional representation produces better outcomes than self-negotiation.
            </div>
          </section>

          <section className="prose-block">
            <h2>Review Your MCA Contract Right Now: What to Look For</h2>
            <p>
              If you are not sure whether your MCA includes a personal guarantee, here is what to look for:
            </p>
            <ul>
              <li>Search the document for the words "guarantee," "guaranty," "personal guarantee," or "guarantor."</li>
              <li>Look for a separate signature page at the end of the agreement with your personal name (not your business name).</li>
              <li>Check whether the guaranty is described as "limited" (capped at an amount) or "unlimited" (full balance plus costs).</li>
              <li>Look for "joint and several" language — if there are multiple business owners and the guarantee is joint and several, each guarantor can be pursued for the full amount independently.</li>
              <li>Check whether the guarantee is "continuing" — meaning it applies to any future advances under the same agreement, not just the initial advance.</li>
            </ul>
            <p>
              <Link to="/consultation">Schedule a free consultation</Link> or call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> to have your MCA contracts reviewed. Understanding your personal exposure is the first step in building a resolution strategy.
            </p>
          </section>

          <section className="prose-block">
            <h2>Get a Free MCA Contract Review</h2>
            <p>
              Share your situation and we will help you understand your personal guarantee exposure and what a structured settlement — including personal guarantee release — would look like for your MCA positions.
            </p>
            <LeadCaptureForm source="mca-personal-guarantee" submitLabel="Get My Free MCA Contract Review" />
          </section>

          <section className="prose-block">
            <h2>Related MCA Guides</h2>
            <ul>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Relief: The Complete Guide</Link></li>
              <li><Link to="/restaurant-mca-debt-after-closing">What Happens to MCA Debt If Your Restaurant Closes</Link></li>
              <li><Link to="/merchant-cash-advance-settlement">MCA Settlement: Reducing Your Balance and Releasing Liens</Link></li>
              <li><Link to="/restaurant-mca-debt-help-texas">Texas MCA Debt Help: Stronger Protections for Texas Restaurant Owners</Link></li>
              <li><Link to="/restaurant-mca-debt-help-florida">Florida MCA Debt Help: Homestead and Wage Protections</Link></li>
              <li><Link to="/restaurant-mca-debt-help-california">California MCA Debt Help: Unique Legal Protections</Link></li>
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
