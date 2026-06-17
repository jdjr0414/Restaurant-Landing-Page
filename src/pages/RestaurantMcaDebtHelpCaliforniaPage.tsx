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
    q: 'Is a Confession of Judgment legal in California?',
    a: 'No. California Code of Civil Procedure § 1132 explicitly prohibits confessed judgments in California. A COJ is an agreement where a debtor consents in advance to entry of a judgment without a trial. California law has banned these since 1972 because they were found to deprive debtors of due process. This prohibition is absolute — no contract clause can waive it for California proceedings.',
  },
  {
    q: 'If my MCA says "New York law applies," can I use California\'s COJ prohibition?',
    a: 'Partially. Your MCA lender can still obtain a New York COJ under New York law. However, to enforce that New York judgment in California, they must go through California courts — and California has refused to enforce certain types of judgments on public policy grounds. Several California court decisions have questioned the enforceability of New York COJ judgments obtained without notice to the defendant. This is not a complete defense, but it creates uncertainty and litigation risk for the lender that can be used in settlement negotiations.',
  },
  {
    q: 'What is SB 1235 and how does it affect my MCA?',
    a: 'SB 1235 (effective January 1, 2019) is California\'s commercial financing disclosure law. It requires providers of commercial financing — including MCAs — to disclose the annual percentage rate (or APR-equivalent), the total dollar cost, the total amount financed, and the payment amount. For MCAs funded to California businesses receiving $500,000 or less, these disclosures are required. If your MCA lender did not provide these disclosures, you may have a defense or leverage in any California enforcement action.',
  },
  {
    q: 'What is California\'s homestead exemption?',
    a: 'California AB 1885 (effective January 1, 2021) significantly increased the homestead exemption. The exemption now equals the median sale price for single-family homes in your county for the prior calendar year, with a floor of $300,000 and a ceiling of $600,000. In high-cost counties (like Los Angeles, San Francisco, Orange), the exemption is closer to $600,000. This protects a significant portion of home equity for most California restaurant owners — though high-equity homes in expensive markets may have some exposure above the exemption.',
  },
  {
    q: 'What is the "true lender" or "true sale" doctrine in California MCA cases?',
    a: 'California courts have considered arguments that some MCAs, despite being structured as purchases of future receivables, are actually disguised loans. If an MCA has fixed daily ACH payments regardless of actual sales, includes a personal guarantee, does not include a genuine reconciliation provision, and has an implied fixed term, California courts may be more receptive to arguments that it is a loan subject to usury laws and disclosure requirements. This is a complex legal argument that requires an experienced commercial attorney and is not guaranteed — but it is more viable in California than in most states.',
  },
  {
    q: 'How do I search California UCC filings against my business?',
    a: 'Go to bizfile.sos.ca.gov → Search → Business Programs → UCC. You can search by debtor name (your business legal name). California UCC-1 financing statements are filed with the California Secretary of State and are public record. Search by your exact legal business name and any DBAs. Print results and note the filing date, lapse date (5 years from filing), and secured party name for each active lien.',
  },
];

export function RestaurantMcaDebtHelpCaliforniaPage() {
  const meta = getMeta('/restaurant-mca-debt-help-california')!;
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
          { name: 'California MCA Debt Help', path: '/restaurant-mca-debt-help-california' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/restaurant-mca-debt-help-california" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">California Restaurant MCA Debt Help: Legal Protections Unique to California</h1>
          <p className="page-lead">
            California restaurant owners with MCA debt have legal protections that do not exist in most other states — including an explicit prohibition on confessed judgments, a commercial financing disclosure law, and court precedents that have questioned the enforceability of certain New York MCA judgments. This guide explains what those protections mean practically.
          </p>

          <section className="prose-block">
            <h2>California's COJ Prohibition: The Strongest in the Country</h2>
            <p>
              California Code of Civil Procedure § 1132 states: "Judgment by confession may not be entered." This is an absolute prohibition. No MCA contract can require a California court to enter a confessed judgment — the provision is void as against California public policy.
            </p>
            <p>
              What this means in practice:
            </p>
            <ul>
              <li>An MCA lender cannot file a COJ in California courts, ever.</li>
              <li>A California restaurant owner who signed an MCA with a COJ clause did not waive this protection — California law cannot be contracted away on this point.</li>
              <li>If a lender sues you in California to enforce an MCA, they must file a regular civil action, serve you with process, and wait for a judgment through normal litigation — giving you time to respond and defend.</li>
            </ul>
            <p>
              The limitation: your MCA almost certainly says "governed by New York law" and designates New York courts for any dispute. The lender can obtain a New York COJ under New York law (where it is valid). The question then becomes: can California courts enforce that New York judgment?
            </p>
          </section>

          <section className="prose-block">
            <h2>Can California Courts Refuse a New York MCA Judgment?</h2>
            <p>
              California courts are generally required to give "full faith and credit" to judgments from other states under the U.S. Constitution. This means a valid New York judgment normally must be enforced in California. However, there are public policy exceptions — California courts have occasionally refused to enforce out-of-state judgments that violate fundamental California public policy.
            </p>
            <p>
              Several California trial courts have raised concerns about New York COJ judgments obtained without notice to defendants, on the grounds that they may violate due process. The legal landscape here is not fully settled, and California's higher courts have not issued definitive rulings. But the uncertainty creates real leverage:
            </p>
            <ul>
              <li>A California attorney challenging the enforceability of a New York COJ judgment raises litigation risk that increases the lender's cost of collection.</li>
              <li>Lenders who expect easy enforcement in New York often find that California collection requires more resources and time — which makes settlement more attractive to them.</li>
              <li>SB 1235 disclosure violations (if the lender failed to provide required disclosures) create additional grounds for challenging enforcement.</li>
            </ul>
            <p>
              This is a legal argument that requires a California commercial attorney to evaluate for your specific contract and judgment. It is not a guaranteed defense — but it is a defense that does not exist in most other states.
            </p>
          </section>

          <section className="prose-block">
            <h2>SB 1235: California's Commercial Financing Disclosure Law</h2>
            <p>
              California SB 1235, effective January 1, 2019, created disclosure requirements for commercial financing providers — including MCA lenders — doing business with California-based recipients. For covered transactions (generally commercial financing of $500,000 or less to California businesses), lenders must disclose:
            </p>
            <ul>
              <li>The total amount of funds provided</li>
              <li>The total dollar cost of financing (total repayment minus amount funded)</li>
              <li>The term or estimated term of repayment</li>
              <li>The method, frequency, and amount of each payment</li>
              <li>A description of prepayment policies</li>
              <li>The annualized cost of financing as a rate (APR-equivalent), calculated under a specific formula</li>
            </ul>
            <p>
              If your MCA lender did not provide these disclosures before you signed your agreement, and you are a California business, that is a violation of California law. Violations do not automatically void the contract — but they create regulatory exposure for the lender and potential grounds for challenging enforcement in California courts.
            </p>
            <p>
              Check your MCA documentation: does it include a disclosure document specifically labeled under California SB 1235? If not, and if you received the advance as a California business, note this in any settlement negotiation.
            </p>
          </section>

          <section className="prose-block">
            <h2>The "True Lender" Doctrine: When MCAs May Be Loans</h2>
            <p>
              California courts and regulators have more aggressively examined MCA structures than courts in most other states. The central legal question: is the MCA actually a purchase of future receivables (what lenders call it), or is it a loan in disguise?
            </p>
            <p>
              Courts and scholars have identified factors that suggest an MCA may actually be a loan:
            </p>
            <ul>
              <li><strong>Fixed daily ACH payments</strong> regardless of actual card sales — if the payment does not vary with actual revenue, it looks like a fixed loan payment, not a percentage of future sales.</li>
              <li><strong>Personal guarantee</strong> — a true sale of receivables does not require a personal guarantee because the seller (you) is no longer responsible for whether the receivables are collected. A personal guarantee suggests the funder is protecting against the business failing to pay, which is the structure of a loan, not a sale.</li>
              <li><strong>Reconciliation clause that is never actually used</strong> — most MCAs include a reconciliation provision but few lenders actually adjust payments when sales decline. If reconciliation is contractually available but never exercised, courts may view the fixed payment structure as characteristic of a loan.</li>
              <li><strong>Implied fixed term</strong> — if the total amount divided by the daily payment produces a specific number of days, the advance has a fixed effective term, which is loan-like.</li>
            </ul>
            <p>
              California's usury laws cap interest rates for commercial loans at 10% per year for non-exempt lenders. An MCA with an effective APR of 80–150% could be usurious if reclassified as a loan in California courts. This is a legally complex and uncertain argument — it requires a California commercial attorney and litigation — but California is one of the few states where it has a reasonable basis.
            </p>
          </section>

          <section className="prose-block">
            <h2>California Homestead Exemption: Updated Under AB 1885</h2>
            <p>
              California Assembly Bill 1885 (effective January 1, 2021) dramatically increased California's homestead exemption. Before this law, the exemption was $75,000 for a single person, $100,000 for families, and $175,000 for seniors and disabled individuals.
            </p>
            <p>
              Under AB 1885, the exemption equals the greater of:
            </p>
            <ul>
              <li>$300,000</li>
              <li>The median sale price of single-family homes in your county in the prior calendar year, up to a maximum of $600,000</li>
            </ul>
            <p>
              In practice, this means:
            </p>
            <ul>
              <li>In Los Angeles County, the 2024 exemption was approximately $600,000 (the maximum).</li>
              <li>In Sacramento County, approximately $400,000+.</li>
              <li>In more rural California counties, closer to $300,000.</li>
            </ul>
            <p>
              This is significantly better protection than California offered before 2021, though still not as comprehensive as Texas or Florida's unlimited exemptions. California restaurant owners with substantial home equity above their county's exemption amount should understand the gap and factor it into their assessment of personal guarantee exposure.
            </p>
          </section>

          <section className="prose-block">
            <h2>California Restaurant Owner's MCA Action Plan</h2>
            <ul>
              <li><strong>Step 1:</strong> Check whether a New York COJ has been filed against your business. Search at iapps.courts.state.ny.us using your business name.</li>
              <li><strong>Step 2:</strong> Search California UCC filings at bizfile.sos.ca.gov to inventory all active liens.</li>
              <li><strong>Step 3:</strong> Review your MCA agreement for SB 1235 disclosures. Was a California disclosure document included when you signed?</li>
              <li><strong>Step 4:</strong> Contact a professional MCA mediator who understands California's specific protections. Call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> for a free consultation.</li>
              <li><strong>Step 5:</strong> If your situation involves potential legal challenges to the MCA structure (true lender argument) or challenges to enforcement of a New York judgment, consult a California commercial attorney.</li>
            </ul>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.25rem 0' }}>
              <strong>California restaurant owners have more legal tools than owners in most states.</strong> The COJ prohibition, SB 1235, and the true lender doctrine collectively create negotiating leverage that can translate to significantly reduced settlement amounts. Professional mediators who understand California law use these as explicit negotiating frameworks — not just general pressure.
            </div>
          </section>

          <section className="prose-block">
            <h2>Get a Free California MCA Assessment</h2>
            <LeadCaptureForm source="mca-debt-help-california" submitLabel="Get My Free California MCA Assessment" />
          </section>

          <section className="prose-block">
            <h2>Related MCA Guides</h2>
            <ul>
              <li><Link to="/merchant-cash-advance-personal-guarantee">MCA Personal Guarantee: What California's Homestead Exemption Covers</Link></li>
              <li><Link to="/merchant-cash-advance-attorney">When You Need a California MCA Attorney</Link></li>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Relief: The Complete Guide</Link></li>
              <li><Link to="/merchant-cash-advance-settlement">MCA Settlement: Using Legal Leverage to Reduce Your Balance</Link></li>
              <li><Link to="/restaurant-mca-confession-of-judgment">Confession of Judgment: California's Unique Prohibition</Link></li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Frequently Asked Questions — California</h2>
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
