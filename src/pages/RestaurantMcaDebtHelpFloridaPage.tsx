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
    q: 'Does Florida protect my home from MCA judgment creditors?',
    a: 'Yes — Florida has one of the strongest homestead protections in the United States. Article X, Section 4 of the Florida Constitution provides an unlimited homestead exemption for a permanent primary residence. The property cannot be forced to be sold to satisfy debts, regardless of how much equity it holds. The size limit is 0.5 acres in a municipality or 160 contiguous acres outside a municipality. For virtually every Florida restaurant owner, this means your home is completely protected from MCA judgment creditors.',
  },
  {
    q: 'How long does it take for a New York MCA judgment to be enforced in Florida?',
    a: 'Typically 30–90 days from when the lender files the judgment in Florida courts. Under the Florida Uniform Enforcement of Foreign Judgments Act (F.S. § 55.501–55.509), a creditor files an authenticated copy of the out-of-state judgment with a Florida court and provides notice to the debtor. The debtor has 30 days from mailing of notice to contest the registration. If no contest is filed, enforcement can proceed. This 30+ day notice period — versus the near-immediate enforcement possible in New York — gives Florida restaurant owners time to negotiate before enforcement begins.',
  },
  {
    q: 'Can MCA lenders garnish my wages in Florida?',
    a: 'Florida provides a head-of-household wage exemption that is more protective than most states. Under Florida Statutes § 222.11, if you are the head of a family providing more than half the financial support for a dependent, your disposable earnings of $750 per week or less are completely exempt from garnishment. Disposable earnings above $750 per week can only be garnished up to 25%. If you are not a head of household, more of your wages are potentially reachable, though some exemptions still apply.',
  },
  {
    q: 'What is the Florida Uniform Enforcement of Foreign Judgments Act?',
    a: 'The Florida UEFJA (F.S. § 55.501–55.509) governs how out-of-state court judgments — like a New York Confession of Judgment — are registered and enforced in Florida. A creditor must file the authenticated judgment with a Florida circuit court, file an affidavit with the debtor\'s last known address, and mail notice to the debtor. The debtor then has 30 days to file a motion to vacate, stay, or modify the judgment on grounds recognized under Florida law. After this contest window, enforcement proceeds if no motion is filed.',
  },
  {
    q: 'Can I contest a New York MCA COJ judgment in Florida courts?',
    a: 'Yes — you can file a motion to contest registration of the foreign judgment in Florida circuit court within 30 days of notice. Grounds recognized in Florida include: (1) the original New York court lacked personal jurisdiction over you; (2) the New York judgment was obtained by fraud; (3) enforcement would violate Florida public policy; (4) you were not properly served in the original proceeding. The COJ process — where judgment is entered without any notice to or participation by the defendant — has been challenged on due process grounds in multiple states. Consult a Florida commercial attorney promptly if you receive UEFJA notice.',
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
            Florida restaurant owners with MCA debt have significant legal protections: an unlimited homestead exemption for their primary residence, strong wage garnishment protections for heads of household, and a 30-day window to contest enforcement of New York judgments in Florida courts. This guide explains how to use these protections in MCA negotiations.
          </p>

          <section className="prose-block">
            <h2>Florida's Constitutional Homestead Exemption</h2>
            <p>
              The Florida homestead exemption is written directly into the Florida Constitution — Article X, Section 4. This makes it unusually powerful: it cannot be changed by the legislature without a constitutional amendment, and it cannot be waived by contract in most circumstances.
            </p>
            <p>
              The protection: your Florida primary residence cannot be forced to be sold to satisfy most judgment debts, regardless of how much the property is worth or how much equity you have. There is no dollar cap. A modest $200,000 home and a $3,000,000 waterfront property receive identical protection.
            </p>
            <p>
              The size limits for the exemption:
            </p>
            <ul>
              <li>Within a municipality: 0.5 acres (approximately 21,780 square feet)</li>
              <li>Outside a municipality: 160 contiguous acres</li>
            </ul>
            <p>
              For virtually every Florida restaurant owner, these limits are not a practical constraint. Your primary residence — whether a single-family home, condo, or townhouse — is protected.
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
              The 30-day contest window is your most important immediate protection. If you receive UEFJA notice from a Florida court — a legal document in the mail or via process server — you must act within 30 days. Do not ignore it. Even if you cannot ultimately defeat the judgment, contesting it forces the lender to respond and creates delay that gives you time to negotiate a settlement.
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
              <li><strong>Lack of personal jurisdiction.</strong> If the New York court did not have proper jurisdiction over you personally, the judgment may be void. For a COJ, personal jurisdiction typically arises from the contract itself — but the method of service or the contract's jurisdictional provisions can be challenged.</li>
              <li><strong>Fraud in obtaining the judgment.</strong> If the COJ was obtained through misrepresentation or fraudulent conduct by the lender.</li>
              <li><strong>Violation of Florida public policy.</strong> If enforcing the judgment would violate Florida's public policy. Florida courts have not definitively ruled on whether New York COJ judgments obtained without notice violate Florida's fundamental public policy, but the argument has been made with some success in other states.</li>
              <li><strong>Judgment already satisfied.</strong> If you have already paid the judgment or it was otherwise discharged.</li>
              <li><strong>Lack of due process in the original proceeding.</strong> A COJ entered without any notice to the defendant in the original New York proceeding has been challenged on federal due process grounds.</li>
            </ul>
            <p>
              Contesting a UEFJA registration requires a Florida attorney. The 30-day window is strict — missing it generally means the judgment is registered and enforceable without further delay.
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
              <li>If you earn more than $750 per week in disposable earnings (gross pay minus mandatory deductions), the amount above $750 per week may be subject to garnishment up to the federal limit of 25%.</li>
              <li>The exemption can be waived in writing — but this must be an explicit, voluntary written waiver, not a contractual provision buried in a commercial contract. MCA contract clauses purporting to waive this exemption may not be enforceable under Florida law.</li>
            </ul>
            <p>
              If you are not a head of household, Florida provides less wage protection, but the federal Consumer Credit Protection Act still limits garnishment to 25% of disposable earnings.
            </p>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.25rem 0' }}>
              <strong>For Florida restaurant owners who are heads of household:</strong> If you pay yourself a salary from your restaurant and support dependents, most or all of your wages are exempt from garnishment. Combined with the unlimited homestead exemption, this means a judgment creditor's primary tool in Florida is business bank account enforcement — a significantly narrower target than in states like Georgia or Illinois.
            </div>
          </section>

          <section className="prose-block">
            <h2>What MCA Lenders Can Still Pursue in Florida</h2>
            <p>
              Florida's protections are strong but not complete. What creditors can still reach:
            </p>
            <ul>
              <li><strong>Business bank accounts.</strong> Once a UEFJA judgment is registered and the 30-day window passes, a judgment creditor can serve a writ of garnishment on Florida business bank accounts.</li>
              <li><strong>Business assets.</strong> Inventory, equipment, receivables, and other business assets can be reached through a judgment lien.</li>
              <li><strong>Non-homestead real estate.</strong> Investment properties, commercial properties, and second homes are not protected by the homestead exemption.</li>
              <li><strong>Personal bank accounts.</strong> Once a judgment is domesticated, personal bank accounts can be restrained — subject to any exemptions for wages or protected funds.</li>
              <li><strong>Wages above the head-of-household threshold.</strong> Disposable earnings above $750 per week (if you are a head of household) or 25% of all disposable earnings (if you are not) can be garnished.</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Florida Restaurant Owner MCA Action Plan</h2>
            <ul>
              <li><strong>Step 1:</strong> Check for any New York COJ filed against your business (iapps.courts.state.ny.us).</li>
              <li><strong>Step 2:</strong> Search Florida UCC filings at search.sunbiz.org for active liens against your business.</li>
              <li><strong>Step 3:</strong> If you receive UEFJA notice, contact a professional mediator and a Florida commercial attorney within 24 hours — the 30-day clock is running.</li>
              <li><strong>Step 4:</strong> Engage professional MCA mediation before enforcement begins. The UEFJA timeline gives Florida restaurant owners more time to negotiate than most other states, but it is not unlimited.</li>
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
