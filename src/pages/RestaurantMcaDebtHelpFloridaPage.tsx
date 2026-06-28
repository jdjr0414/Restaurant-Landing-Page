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
    q: 'Does Florida protect my home from MCA judgment creditors?',
    a: 'Yes. Florida\'s homestead protection ranks among the strongest in the country. Article X, Section 4 of the Florida Constitution grants an unlimited homestead exemption on a permanent primary residence, so no creditor can force a sale to satisfy debts no matter how much equity has built up. The only catch is size: 0.5 acres inside a municipality, or 160 contiguous acres outside one. For nearly every Florida restaurant owner, that puts the family home fully out of reach of MCA judgment creditors.',
  },
  {
    q: 'How long does it take for a New York MCA judgment to be enforced in Florida?',
    a: 'Usually 30 to 90 days from the moment the lender files the judgment in a Florida court. Under the Florida Uniform Enforcement of Foreign Judgments Act (F.S. § 55.501 to 55.509), the creditor files an authenticated copy of the out-of-state judgment with a Florida court and notifies the debtor. You then get 30 days from the mailing of that notice to contest the registration. No contest, and enforcement moves ahead. That 30-plus-day notice period is a real gift compared with the near-instant enforcement New York allows, because it buys Florida restaurant owners time to negotiate before anything gets seized.',
  },
  {
    q: 'Can MCA lenders garnish my wages in Florida?',
    a: 'Florida provides a head-of-household wage exemption that is more protective than most states. Under Florida Statutes § 222.11, if you are the head of a family providing more than half the financial support for a dependent, your disposable earnings of $750 per week or less are completely exempt from garnishment. Disposable earnings above $750 per week can only be garnished up to 25%. If you are not a head of household, more of your wages are potentially reachable, though some exemptions still apply.',
  },
  {
    q: 'What is the Florida Uniform Enforcement of Foreign Judgments Act?',
    a: 'The Florida UEFJA (F.S. § 55.501 to 55.509) sets the rules for how an out-of-state judgment, such as a New York Confession of Judgment, gets registered and enforced inside Florida. The creditor has to file the authenticated judgment with a Florida circuit court, file an affidavit listing the debtor\'s last known address, and mail notice to the debtor. From there, you have 30 days to file a motion to vacate, stay, or modify the judgment on any ground Florida law recognizes. Once that window closes with no motion on file, enforcement goes forward.',
  },
  {
    q: 'Can I contest a New York MCA COJ judgment in Florida courts?',
    a: 'Yes. You can file a motion in Florida circuit court to contest registration of the foreign judgment, as long as you do it within 30 days of notice. Florida recognizes several grounds: (1) the original New York court lacked personal jurisdiction over you; (2) the New York judgment was obtained by fraud; (3) enforcement would offend Florida public policy; (4) you were never properly served in the original case. The COJ process, where a judgment gets entered with no notice to the defendant and no chance to participate, has drawn due process challenges in a number of states. If a UEFJA notice lands in your mailbox, get a Florida commercial attorney on the phone fast.',
  },
  {
    q: 'How do I search Florida UCC filings against my business?',
    a: 'Go to search.sunbiz.org → Search for Business Entity → then navigate to UCC Search. You can search by debtor name (your business legal name). Florida UCC-1 financing statements are filed with the Florida Division of Corporations (part of the Secretary of State\'s office). Search by your exact legal business name and any trade names. Print all active filings and note the filing date, lapse date, and secured party for each active lien.',
  },
];

export function RestaurantMcaDebtHelpFloridaPage() {
  const meta = getMeta('/restaurant-mca-debt-help-florida')!;
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
          { name: 'Florida MCA Debt Help', path: '/restaurant-mca-debt-help-florida' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/restaurant-mca-debt-help-florida" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Florida Restaurant MCA Debt Help: Homestead Protection, Wage Exemptions, and UEFJA Rights</h1>
          <p className="page-lead">
            If you run a restaurant in Florida and you're carrying MCA debt, the law gives you real cover: an unlimited homestead exemption on your primary residence, strong wage protections for heads of household, and a 30-day window to fight enforcement of a New York judgment in Florida courts. This guide shows you how to put each of those protections to work in MCA negotiations.
          </p>
          <AllIndustriesNote />
          <div className="article__meta">
            <time className="article__date" dateTime="2026-03-20">Updated: March 20, 2026</time>
          </div>

          <section className="prose-block">
            <h2>Florida's Constitutional Homestead Exemption</h2>
            <p>
              Florida's homestead exemption lives in the state constitution itself, at Article X, Section 4. That is what makes it so hard to crack. The legislature can't trim it without a constitutional amendment, and in most situations you can't sign it away by contract either.
            </p>
            <p>
              Here is the protection in plain terms. No one can force the sale of your Florida primary residence to satisfy most judgment debts, no matter what the property is worth or how much equity is sitting in it. There is no dollar ceiling. A modest $200,000 home and a $3,000,000 waterfront property get exactly the same shield.
            </p>
            <p>
              The size limits for the exemption:
            </p>
            <ul>
              <li>Within a municipality: 0.5 acres (approximately 21,780 square feet)</li>
              <li>Outside a municipality: 160 contiguous acres</li>
            </ul>
            <p>
              For almost every Florida restaurant owner, those acreage limits never come into play. Your primary residence is protected whether it is a single-family home, a condo, or a townhouse.
            </p>
            <p>
              What the Florida homestead exemption does NOT protect:
            </p>
            <ul>
              <li>Investment properties or second homes</li>
              <li>Commercial real estate</li>
              <li>A primary residence that was purchased with funds fraudulently transferred from creditors (under the Florida Uniform Fraudulent Transfer Act)</li>
              <li>Property on which the lender holds a mortgage lien (the lender can still foreclose on the mortgage, just not on the homestead exemption)</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>The Florida UEFJA Process: Your 30-Day Window</h2>
            <p>
              When a New York MCA lender wants to enforce a COJ judgment in Florida, they must follow the Florida Uniform Enforcement of Foreign Judgments Act (F.S. § 55.501–55.509). This process:
            </p>
            <ul>
              <li>The lender's Florida attorney files an authenticated copy of the New York judgment with the clerk of a Florida circuit court.</li>
              <li>The attorney files an affidavit stating the name and last known address of the judgment debtor (you).</li>
              <li>The clerk files the judgment as a Florida judgment.</li>
              <li>The lender must mail notice to you at your last known address within 3 business days of filing.</li>
              <li>You have 30 days from the date of mailing of notice to file a motion to vacate, stay, or modify the judgment.</li>
            </ul>
            <p>
              That 30-day contest window is your single most important short-term protection. When a UEFJA notice reaches you from a Florida court, whether it arrives by mail or by process server, the clock starts and you have 30 days to act. Don't let it sit. Even if you can't ultimately beat the judgment, filing a contest forces the lender to respond and buys you the delay you need to negotiate a settlement.
            </p>
            <p>
              Call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> immediately if you receive a UEFJA notice. A professional mediator can help you assess whether to contest and negotiate simultaneously.
            </p>
          </section>

          <section className="prose-block">
            <h2>Grounds for Contesting a New York COJ in Florida</h2>
            <p>
              Florida courts will consider motions to vacate a registered foreign judgment on the following grounds:
            </p>
            <ul>
              <li><strong>Lack of personal jurisdiction.</strong> If the New York court never had proper jurisdiction over you personally, the judgment may be void. With a COJ, that jurisdiction usually flows from the contract itself, but you can still challenge how you were served or what the contract's jurisdictional clauses actually say.</li>
              <li><strong>Fraud in obtaining the judgment.</strong> If the COJ was obtained through misrepresentation or fraudulent conduct by the lender.</li>
              <li><strong>Violation of Florida public policy.</strong> If enforcing the judgment would violate Florida's public policy. Florida courts have not definitively ruled on whether New York COJ judgments obtained without notice violate Florida's fundamental public policy, but the argument has been made with some success in other states.</li>
              <li><strong>Judgment already satisfied.</strong> If you have already paid the judgment or it was otherwise discharged.</li>
              <li><strong>Lack of due process in the original proceeding.</strong> A COJ entered without any notice to the defendant in the original New York proceeding has been challenged on federal due process grounds.</li>
            </ul>
            <p>
              Contesting a UEFJA registration takes a Florida attorney. And the 30-day window is unforgiving. Miss it and the judgment is typically registered and enforceable with nothing left to slow it down.
            </p>
          </section>

          <section className="prose-block">
            <h2>Florida Head-of-Household Wage Exemption</h2>
            <p>
              Florida Statutes § 222.11 provides wage garnishment protection for heads of household — persons who are providing more than half of the financial support for a dependent (child, spouse, parent, sibling, or other dependent).
            </p>
            <p>
              If you qualify as a head of household:
            </p>
            <ul>
              <li>Your disposable earnings of $750 per week or less are completely exempt from garnishment.</li>
              <li>If your disposable earnings (gross pay minus mandatory deductions) top $750 a week, only the portion above $750 can be garnished, and even then no more than the federal cap of 25%.</li>
              <li>You can waive the exemption, but only through an explicit, voluntary written waiver. A clause buried in a commercial contract doesn't count, and MCA contract language claiming to waive this exemption may not hold up under Florida law.</li>
            </ul>
            <p>
              If you are not a head of household, Florida provides less wage protection, but the federal Consumer Credit Protection Act still limits garnishment to 25% of disposable earnings.
            </p>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.25rem 0' }}>
              <strong>For Florida restaurant owners who are heads of household:</strong> If you draw a salary from your restaurant and support dependents, most or all of those wages stay exempt from garnishment. Pair that with the unlimited homestead exemption and a judgment creditor in Florida is left with one main lever, business bank account enforcement, a far narrower target than what they have in states like Georgia or Illinois.
            </div>
          </section>

          <section className="prose-block">
            <h2>What MCA Lenders Can Still Pursue in Florida</h2>
            <p>
              Florida's protections are strong but not complete. What creditors can still reach:
            </p>
            <ul>
              <li><strong>Business bank accounts.</strong> Once the UEFJA judgment is registered and the 30-day window closes, a creditor can serve a writ of garnishment on your Florida business accounts.</li>
              <li><strong>Business assets.</strong> Inventory, equipment, receivables, and the rest of your business property can be reached through a judgment lien.</li>
              <li><strong>Non-homestead real estate.</strong> Investment properties, commercial buildings, and second homes get no cover from the homestead exemption.</li>
              <li><strong>Personal bank accounts.</strong> After the judgment is domesticated, personal accounts can be frozen, though wage exemptions and other protected funds still apply.</li>
              <li><strong>Wages above the head-of-household threshold.</strong> A creditor can garnish disposable earnings over $750 a week if you are a head of household, or up to 25% of all disposable earnings if you are not.</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Florida Restaurant Owner MCA Action Plan</h2>
            <ul>
              <li><strong>Step 1:</strong> Check for any New York COJ filed against your business (iapps.courts.state.ny.us).</li>
              <li><strong>Step 2:</strong> Search Florida UCC filings at search.sunbiz.org for active liens against your business.</li>
              <li><strong>Step 3:</strong> If a UEFJA notice arrives, call a professional mediator and a Florida commercial attorney within 24 hours, because the 30-day clock is already running.</li>
              <li><strong>Step 4:</strong> Bring in professional MCA mediation before enforcement starts. The UEFJA timeline hands Florida restaurant owners more breathing room than most states, but it still runs out.</li>
            </ul>
            <p>
              Call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> for a free assessment of your Florida MCA situation.
            </p>
          </section>

          <section className="prose-block">
            <h2>Get a Free Florida MCA Assessment</h2>
            <LeadCaptureForm source="mca-debt-help-florida" submitLabel="Get My Free Florida MCA Assessment" />
          </section>

          <section className="prose-block">
            <h2>Related MCA Guides</h2>
            <ul>
              <li><Link to="/merchant-cash-advance-personal-guarantee">MCA Personal Guarantee: Florida's Homestead and Other Protections</Link></li>
              <li><Link to="/merchant-cash-advance-attorney">When You Need a Florida MCA Attorney</Link></li>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Relief: The Complete Guide</Link></li>
              <li><Link to="/merchant-cash-advance-settlement">MCA Settlement: How to Negotiate Before Enforcement Begins</Link></li>
              <li><Link to="/mca-bank-account-frozen">MCA Bank Account Frozen: Emergency Response Guide</Link></li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Frequently Asked Questions — Florida</h2>
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
