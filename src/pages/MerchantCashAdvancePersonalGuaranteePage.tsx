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
    q: 'Does an LLC protect me from a merchant cash advance personal guarantee?',
    a: 'No. The personal guarantee deliberately steps around your LLC\'s limited liability. An LLC normally walls off your personal assets from business debts. Sign a personal guarantee, though, and you have told the MCA lender it can come after you personally the day the business stops paying. The guarantee is a contractual waiver of LLC protection for this one obligation. Your home, your personal bank accounts, and your personal assets can all be on the table no matter how the business is structured.',
  },
  {
    q: 'Can my home be seized to satisfy an MCA personal guarantee?',
    a: 'That hinges on your state\'s homestead exemption. Texas and Florida offer unlimited homestead exemptions on a primary residence, so your home stays out of reach for business debt no matter how much equity sits in it. Most other states cap the exemption somewhere between $25,000 and $500,000. If your home equity tops your state\'s exemption and no federal homestead protection applies, a judgment creditor could in theory force a sale, though in practice that path is rare, slow, and expensive. When your equity sits well above the exemption, talk to an attorney in your state before assuming you are safe.',
  },
  {
    q: 'What is the difference between a limited and unlimited personal guarantee?',
    a: 'An unlimited personal guarantee puts you on the hook for the whole balance owed plus every fee, interest charge, and collection cost, with no ceiling at all. A limited personal guarantee caps what you can owe personally at a set figure, say 50% of the original advance or a flat dollar amount. Most MCA agreements run unlimited. Comb your contract for "limited guarantee" or "guaranty not to exceed" wording. If you don\'t find it, treat the guarantee as unlimited.',
  },
  {
    q: 'Can a personal guarantee be released as part of an MCA settlement?',
    a: 'Yes, and it should be. A properly built MCA settlement spells out a release of the personal guarantee right in the closing paperwork. Agreements that knock down the balance but stay silent on the guarantee leave you personally exposed for anything still in dispute. Before you sign, confirm the settlement includes all three of these: (1) a satisfaction of the judgment, (2) UCC-3 lien termination, and (3) a full release of the personal guarantee. Miss any one and you are not done. If the lender\'s draft leaves one out, hold off on signing.',
  },
  {
    q: 'Does the personal guarantee survive if my business closes?',
    a: 'Yes, and this is the single most misunderstood fact about personal guarantees. Closing the restaurant, dissolving the LLC, or filing business bankruptcy does nothing to erase it. The guarantee is your own promise to pay, and it stands whether or not the business entity still exists. If the doors close with MCA debt still unpaid, the lender can keep coming after you personally under that guarantee. That is exactly why "just close the restaurant" is not a plan for getting rid of MCA debt.',
  },
  {
    q: 'What happens to my personal guarantee if the business files Chapter 7 bankruptcy?',
    a: 'A business Chapter 7 wipes out the business\'s liability for the MCA debt, but it leaves your personal guarantee untouched. The lender\'s claim against you personally rides right through the business bankruptcy. To clear a personal guarantee, you would have to file your own bankruptcy, either Chapter 7 (liquidation) or Chapter 13 (reorganization). That carries heavy credit and practical fallout, so it belongs at the bottom of the list, after you have worked through every other option.',
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
            Most restaurant owners who signed an MCA agreement also signed a personal guarantee, usually without grasping that it puts them on the hook for the debt the moment the business can't pay. This guide lays out which assets are actually at risk, how homestead laws protect you (or leave you exposed), and what becomes of a personal guarantee once you reach settlement or bankruptcy.
          </p>
          <AllIndustriesNote />
          <div className="article__meta">
            <time className="article__date" dateTime="2026-04-22">Updated: April 22, 2026</time>
          </div>

          <section className="prose-block">
            <h2>What Personal Guarantee Language Looks Like in an MCA Contract</h2>
            <p>
              Personal guarantee clauses are typically found toward the end of an MCA agreement, often on a separate signature page. The language usually reads something like:
            </p>
            <div style={{ background: 'var(--color-cream-dark)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1rem 0', fontStyle: 'italic', borderLeft: '4px solid var(--color-ink-muted)' }}>
              "In consideration of Merchant's execution of this Agreement, the undersigned guarantor(s) hereby unconditionally, absolutely, and irrevocably guarantee the full, prompt and complete payment, performance and fulfillment of all of Merchant's obligations under this Agreement..."
            </div>
            <p>
              The words "unconditionally," "absolutely," and "irrevocably" are the ones that matter. They mean the lender does not have to chase the business first. It can come straight at you personally without ever proving the business can't pay. They also mean nothing voids the guarantee: not closing your doors, not the lender's own conduct, not a turn in your personal finances.
            </p>
            <p>
              Many restaurant owners sign this page alongside the business entity signatures, not realizing it creates separate personal liability entirely independent of what the business owes.
            </p>
          </section>

          <section className="prose-block">
            <h2>What Assets a Personal Guarantee Actually Puts at Risk</h2>
            <p>
              A personal guarantee opens the door for a judgment creditor to go after your personal assets, not only the business's. What is genuinely at risk turns on your state's exemption laws, but the personal assets a creditor can reach include:
            </p>
            <ul>
              <li><strong>Personal bank accounts.</strong> Checking, savings, and money market accounts in your name. Business accounts get frozen through a business COJ, but personal accounts come under fire in a separate enforcement action aimed at you.</li>
              <li><strong>Personal real estate beyond the homestead exemption.</strong> Most states shield a primary residence under homestead law. Investment properties, vacation homes, and second properties usually get no such cover.</li>
              <li><strong>Personal vehicles</strong> above your state's vehicle exemption, which typically runs $2,500 to $10,000.</li>
              <li><strong>Investment and brokerage accounts</strong> holding stocks, mutual funds, or bonds in your personal name.</li>
              <li><strong>Business interests in other entities</strong> you personally own.</li>
              <li><strong>Future wages,</strong> though garnishment is limited in many states and flat-out banned for commercial debt in Texas.</li>
            </ul>
            <p>
              Assets that usually stay out of reach:
            </p>
            <ul>
              <li>Your primary residence up to the state's homestead exemption amount</li>
              <li>Qualified retirement accounts like a 401k or IRA, which ERISA shields from most judgment creditors</li>
              <li>Life insurance cash value in many states</li>
              <li>Assets inside a properly built irrevocable trust, keeping in mind that transfers made after you signed the guarantee can be challenged as fraudulent</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Homestead Exemption Protections by State</h2>
            <p>
              Your primary residence is likely your most significant personal asset. Whether it is protected depends on where it is located:
            </p>
            <ul>
              <li><strong>Texas:</strong> Unlimited homestead exemption for primary residence (up to 10 acres in a city, up to 200 acres in a rural area). Among the strongest protections in the country. An MCA judgment cannot force the sale of your Texas primary home regardless of equity. Texas also prohibits wage garnishment for commercial debt. <Link to="/restaurant-mca-debt-help-texas">Full Texas MCA protection guide →</Link></li>
              <li><strong>Florida:</strong> Unlimited homestead exemption for a primary residence (no size or value limit on a 0.5-acre urban parcel). Florida's homestead protection is written into the state constitution, making it some of the most powerful in the country. Florida also gives you a 30-day UEFJA contest window for foreign judgments. <Link to="/restaurant-mca-debt-help-florida">Full Florida MCA protection guide →</Link></li>
              <li><strong>California:</strong> $300,000–$600,000 depending on county median home price (increased under AB 1885, effective 2021). California also prohibits COJs and has SB 1235 disclosure requirements. <Link to="/restaurant-mca-debt-help-california">Full California MCA protection guide →</Link></li>
              <li><strong>Georgia:</strong> $21,500 ($43,000 for married couples). Limited, so most homes with meaningful equity are partially exposed.</li>
              <li><strong>New York:</strong> $89,975–$179,950 depending on county. Limited relative to New York home values.</li>
              <li><strong>Illinois:</strong> $15,000 ($30,000 for married couples). Very limited.</li>
              <li><strong>Most other states:</strong> Anywhere from $0 (no homestead exemption, as in New Jersey and Pennsylvania for judgment creditors) up past $500,000 (Massachusetts). Look up the specific exemption amount for your state.</li>
            </ul>
            <p>
              Here is how it usually plays out. Most MCA lenders chase business bank accounts and merchant processing first, because that is where the fast money is. Personal real estate is a slog to execute against, so they rarely start there. But when the business is stripped of assets and the owner is sitting on a pile of unprotected home equity, the personal guarantee turns into real exposure.
            </p>
          </section>

          <section className="prose-block">
            <h2>Does Forming an LLC Actually Protect You?</h2>
            <p>
              This is the misconception we hear most often from restaurant owners buried in MCA debt. The honest answer is no, not on an obligation you personally guaranteed.
            </p>
            <p>
              By default, an LLC's limited liability shields its members from the company's debts. If your restaurant LLC stiffs a vendor, that vendor can't reach into your personal accounts, because the LLC keeps the two sides apart. In day-to-day operations, that protection is real and worth having.
            </p>
            <p>
              A personal guarantee is a contract that hands that protection back for one specific debt. When you signed the MCA personal guarantee, you essentially told the lender, "I know I have LLC protection, and I agree not to raise it against you." The whole point of the document is to punch through the entity shield. Lenders insist on personal guarantees because they know a struggling restaurant LLC can be dissolved in an afternoon.
            </p>
            <p>
              The one scenario where an LLC actually keeps you safe from MCA debt is when the agreement carries no personal guarantee at all, and that is uncommon. So read your contract. If you find no separate personal guarantee signature page, get written confirmation from the lender that your liability stops at the business entity.
            </p>
          </section>

          <section className="prose-block">
            <h2>Can a Personal Guarantee Be Negotiated Away in a Settlement?</h2>
            <p>
              Yes, and it is one of the most valuable pieces of a professionally negotiated MCA settlement. Lenders write in personal guarantees for leverage, and they wield them as bargaining chips just as much as enforcement weapons. Any settlement that clears the business obligation should also carry a full, written release of the personal guarantee.
            </p>
            <p>
              What a full settlement package should include:
            </p>
            <ul>
              <li><strong>Satisfaction of the business judgment</strong> (if a COJ was filed)</li>
              <li><strong>UCC-3 termination</strong> of all financing statements</li>
              <li><strong>Written release of the personal guarantee.</strong> The document should say plainly that the guarantor (you) is released from every obligation under the guarantee agreement.</li>
              <li><strong>No-deficiency language</strong> confirming the lender waives any balance left above the settled amount.</li>
            </ul>
            <p>
              Never sign a settlement that trims the business balance but says nothing about the personal guarantee. A lender that settles the business MCA for $40,000 while keeping the personal guarantee alive for the other $60,000 hasn't actually settled your liability. It has just moved the collection target off the business and onto you.
            </p>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.25rem 0' }}>
              <strong>What professional mediation achieves on personal guarantees:</strong> Skilled MCA mediators routinely build full personal guarantee releases right into the settlement as a condition of the deal, rather than circling back to fight for them later. That is the norm in a properly structured settlement, and it is one of the big reasons professional representation tends to beat going it alone.
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
              Tell us where things stand and we'll help you size up your personal guarantee exposure and show what a structured settlement, personal guarantee release included, would look like across your MCA positions.
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
