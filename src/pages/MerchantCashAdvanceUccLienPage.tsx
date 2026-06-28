import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { AllIndustriesNote } from '../components/AllIndustriesNote';
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
    q: 'How do I find all UCC liens filed against my business?',
    a: 'Search your Secretary of State\'s UCC filing database using your business name and EIN. Most states have free online search tools. Texas: sos.state.tx.us. California: bizfile.sos.ca.gov. Florida: search.sunbiz.org. New York: appext20.dos.ny.gov/pls/ucc_public/web_search.main_frame. Search by both your exact business legal name AND any trade names (DBAs). Results show every active UCC-1 financing statement, the filing date, and the secured party (lender). Print or save these results — you\'ll need them for any settlement or financing negotiation.',
  },
  {
    q: 'What does "all assets" mean in an MCA UCC lien?',
    a: 'An "all assets" UCC lien (sometimes written as "all business assets" or "all assets of debtor") means the lender has claimed a security interest in everything your business owns — current and future. This includes accounts receivable, card settlements, inventory, equipment, fixtures, intellectual property, and any other business property. It also typically includes "after-acquired property" — assets you acquire after the lien is filed. Most MCA UCC liens use all-assets language, which is the most aggressive lien position available.',
  },
  {
    q: 'Can two MCA lenders have liens on the same receivables?',
    a: 'Yes, and this is the UCC stacking problem. Each MCA lender that files a UCC-1 gets a security interest in the same pool of receivables. Priority is determined by order of filing: the first lender to file has "first lien position." A second or third lender is in a subordinate position — they only collect after the first-lien lender is satisfied. In practice, when all positions are in default, lenders race to enforce their positions. The first-lien holder has the strongest claim.',
  },
  {
    q: 'How long does a UCC-1 financing statement last?',
    a: 'A UCC-1 financing statement is effective for 5 years from the date of filing. If the lender files a UCC continuation statement before the 5-year mark, the lien is extended for another 5 years. Lenders with active or disputed positions almost always file continuations. A terminated lien (via UCC-3) ends immediately. A lien that expires without continuation also ends — but you cannot rely on this: most MCA lenders actively maintain their filings.',
  },
  {
    q: 'Will removing UCC liens let me get a bank loan or SBA loan?',
    a: 'UCC lien removal is typically a prerequisite for bank and SBA financing, but not the only factor. A bank or SBA lender needs a clean first-lien position on whatever collateral secures the new loan. Active MCA UCC liens — especially "all assets" liens — prevent this. After liens are released, the lender will also evaluate your credit score, revenue, profitability, personal financial statements, and business history. Lien removal opens the door; it does not guarantee approval. But without lien removal, approval is essentially impossible regardless of other factors.',
  },
  {
    q: 'What do I do if an MCA lender refuses to file a UCC-3 termination after settlement?',
    a: 'This is uncommon with properly documented settlements but does occur. Your remedies: (1) Confirm in writing that the settlement agreement included a UCC-3 termination obligation, then send a formal written demand to the lender\'s attorney citing the agreement. (2) If the lender refuses, you may petition the court in the jurisdiction where the UCC was filed to order the termination. (3) In some states, if you can demonstrate the secured obligation has been satisfied, you can file an amended statement yourself noting satisfaction. Consult an attorney if the lender is non-responsive after written demand.',
  },
];

export function MerchantCashAdvanceUccLienPage() {
  const meta = getMeta('/merchant-cash-advance-ucc-lien')!;
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
          { name: 'MCA UCC Lien', path: '/merchant-cash-advance-ucc-lien' },
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/merchant-cash-advance-ucc-lien" />
      <HowToSchema
        name="How to Find and Remove UCC Liens from a Merchant Cash Advance"
        description="Step-by-step guide to searching for UCC liens filed by MCA lenders and getting them properly released."
        urlPath="/merchant-cash-advance-ucc-lien"
        steps={[
          { name: 'Search your Secretary of State UCC database', text: 'Go to your state\'s Secretary of State website and search the UCC filing database using your business legal name and any trade names. Print all active UCC-1 financing statements. Note the filing date, secured party name, and collateral description for each.' },
          { name: 'Identify which liens are from active MCA positions', text: 'Match each UCC filing to your active MCA contracts. Some filings may be from paid-off positions that were never released (the lender should have filed a UCC-3 but may not have). Separate active positions from potentially satisfied positions.' },
          { name: 'Negotiate settlement or payoff for each active position', text: 'UCC lien termination comes as part of settling or satisfying each MCA position. Negotiate each lender directly or through a professional mediator. Ensure the settlement agreement explicitly includes a UCC-3 termination as a condition.' },
          { name: 'Confirm UCC-3 termination filings', text: 'After each settlement closes, verify that the lender has filed a UCC-3 termination statement with the appropriate Secretary of State. Search the database again 30–60 days after settlement to confirm the termination appears. Do not assume it was filed — verify it.' },
          { name: 'Request a payoff letter for any positions you can pay in full', text: 'If any MCA position can be paid in full, request a written payoff letter from the lender confirming the total amount due and the commitment to file a UCC-3 termination upon receipt. Get this in writing before sending payment.' },
        ]}
      />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Merchant Cash Advance UCC Liens: What They Are, How They Block You, and How to Get Them Released</h1>
          <p className="page-lead">
            Every merchant cash advance comes with a UCC lien filed against your business. Most restaurant owners with active MCAs have no idea how many liens are on record, what they cover, or how severely they block future financing. This guide explains the UCC filing system, what your liens actually say, and the proper process for getting them removed.
          </p>
          <AllIndustriesNote />
          <div className="article__meta">
            <time className="article__date" dateTime="2026-04-17">Updated: April 17, 2026</time>
          </div>

          <section className="prose-block">
            <h2>What a UCC Lien Is and Why MCA Lenders File Them</h2>
            <p>
              UCC stands for Uniform Commercial Code — a standardized framework of commercial law adopted by all 50 states. Article 9 of the UCC governs secured transactions: situations where a creditor takes a security interest in a debtor's assets as collateral for an obligation.
            </p>
            <p>
              When an MCA lender funds your advance, they file a UCC-1 Financing Statement with your state's Secretary of State. This is a public filing that puts the world on notice: "We have a security interest in this business's assets." The filing gives the lender priority over other creditors and creates a public record visible to anyone who searches your business name.
            </p>
            <p>
              Why do MCA lenders file these? Three reasons:
            </p>
            <ul>
              <li><strong>To establish lien priority.</strong> In the event of default, the first-filed lender has first claim on business assets. Filing quickly is part of the lender's protection strategy.</li>
              <li><strong>To block other financing.</strong> Active UCC liens signal to banks and equipment lenders that your receivables are already claimed, which often disqualifies you from conventional financing.</li>
              <li><strong>To identify other MCA-funded businesses.</strong> UCC databases are publicly searchable. Third-party stacking lenders specifically search for businesses with active MCA filings to target for additional advances. Your UCC filing is a marketing list for predatory lenders.</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>How to Find Every UCC Lien Filed Against Your Business</h2>
            <p>
              Most restaurant owners are surprised by how many UCC liens are on record when they search. Here is how to search, state by state:
            </p>
            <ul>
              <li><strong>Texas:</strong> sos.state.tx.us → Business Services → UCC Search. Search by debtor name (your business legal name) and by debtor name (individual, if applicable).</li>
              <li><strong>California:</strong> bizfile.sos.ca.gov → UCC Search. Search by exact business name — variations matter.</li>
              <li><strong>Florida:</strong> search.sunbiz.org → UCC Inquiry. Use your exact legal business name.</li>
              <li><strong>New York:</strong> appext20.dos.ny.gov/pls/ucc_public → Search by organization name.</li>
              <li><strong>All other states:</strong> Search "[State] Secretary of State UCC search" — every state has a public search tool.</li>
            </ul>
            <p>
              Search using every variation of your business name — exact legal name, trade name (DBA), common abbreviations. MCA lenders sometimes make filing errors that list your name slightly differently. Print or save all results.
            </p>
            <p>
              For each filing, note: the filing date, the secured party name (lender), the collateral description (what the lien covers), and the lapse date (when the 5-year term expires). This is your lien inventory.
            </p>
          </section>

          <section className="prose-block">
            <h2>UCC-1 vs. UCC-3: Filing vs. Termination</h2>
            <p>
              Two UCC form types matter for MCA debt:
            </p>
            <p>
              <strong>UCC-1 (Financing Statement)</strong> — This is the initial filing that creates the lien. It includes: debtor information (your business), secured party information (the MCA lender), and collateral description (what is covered). Once filed, it is effective for 5 years. This is what appears in the search results when someone looks up your business.
            </p>
            <p>
              <strong>UCC-3 (Amendment)</strong> — This form can do several things: terminate a lien, amend its terms, or assign it to a new party. The most important use for MCA debt purposes is termination. When an MCA lender files a UCC-3 with "termination" checked, the financing statement is immediately terminated and no longer appears as an active lien. This is what you want as part of every MCA settlement.
            </p>
            <p>
              The critical failure point: many MCA settlements — especially self-negotiated ones — resolve the payment obligation but never address the UCC lien. The lender accepts payment, stops collecting, and considers the matter closed — but never files a UCC-3 termination. The lien stays on record. Future lenders see it. Your financing options remain blocked even though the debt was paid.
            </p>
            <p>
              Always, always require a UCC-3 termination as a written condition of any MCA settlement before making final payment.
            </p>
          </section>

          <section className="prose-block">
            <h2>How Multiple UCC Liens Block Future Financing</h2>
            <p>
              This is the most practically damaging consequence of MCA stacking that restaurant owners don't fully appreciate until they try to access other capital.
            </p>
            <p>
              When a bank, SBA lender, or equipment financing company considers extending credit to your business, one of their first steps is a UCC lien search. What they are looking for: is the collateral they would need to secure a new loan already claimed by someone else?
            </p>
            <p>
              If you have three active "all assets" MCA UCC liens, the answer is: yes, everything is already claimed — three times over. A bank that wants to take a first-lien position on your accounts receivable to secure a working capital line cannot do so, because three MCA lenders have already claimed those receivables. The bank will decline.
            </p>
            <p>
              The same logic applies to:
            </p>
            <ul>
              <li><strong>SBA loans:</strong> SBA lenders require a clean lien position. Multiple MCA liens typically disqualify you entirely.</li>
              <li><strong>Equipment financing:</strong> Equipment lenders need a first-lien position on the equipment. An "all assets" MCA lien may include your equipment.</li>
              <li><strong>Invoice factoring:</strong> Factoring companies need clean receivables to factor. "All assets" MCA liens cover receivables.</li>
              <li><strong>Business lines of credit:</strong> Same as working capital loans — lien position is required.</li>
            </ul>
            <p>
              This is why restaurants with active MCA stacks are effectively locked into the MCA ecosystem — not just because they owe money, but because the liens make every other financing option structurally unavailable.
            </p>
          </section>

          <section className="prose-block">
            <h2>How Lenders Use UCC Databases to Target Stacked Businesses</h2>
            <p>
              UCC filings are public records, freely searchable. MCA lenders — particularly third-party stacking lenders — run systematic searches on these databases looking for businesses that already have active MCA filings. The logic: a business that already has an MCA has demonstrated it will take one. It is likely cash-constrained. It may not scrutinize terms carefully under pressure.
            </p>
            <p>
              These searches are automated and run continuously. Within days of your first MCA lender filing a UCC-1, your business name is on target lists at a dozen competing lenders. The solicitation calls offering "additional working capital" are not coincidences — they are the direct result of your UCC filing being visible in the public database.
            </p>
            <p>
              Understanding this changes how you interpret those calls. A lender calling to offer you more capital after you already have an MCA is not doing you a favor — they found you specifically because you are already in debt and may take more. Each new advance adds another lien, further locking you into a position where conventional financing becomes impossible.
            </p>
          </section>

          <section className="prose-block">
            <h2>Lien Priority: Why the Order of Filing Matters in Default</h2>
            <p>
              When multiple creditors have UCC liens on the same collateral, lien priority determines who gets paid first from the available assets. Under Article 9, priority is generally determined by the order of filing: the first creditor to file a UCC-1 has first-lien priority.
            </p>
            <p>
              In a restaurant MCA stack, the first MCA lender (chronologically) typically holds the first-lien position. Subsequent lenders are in second, third, or lower positions. In a default or liquidation scenario, the first-lien holder gets paid before subordinate lien holders — meaning that in a race to enforce, being first matters.
            </p>
            <p>
              This also affects settlement negotiations in a stacked situation: a first-lien holder may demand a higher settlement percentage because their recovery position is stronger. A second-lien holder may accept a lower settlement because their alternative — collecting behind the first-lien holder in a liquidation — could produce very little. Professional mediators understand these dynamics and sequence negotiations accordingly.
            </p>
          </section>

          <section className="prose-block">
            <h2>How to Get MCA UCC Liens Released</h2>
            <p>
              Lien release happens through two paths:
            </p>
            <p>
              <strong>Path 1: Settlement or full payoff with UCC-3 termination.</strong> This is the standard path. You negotiate a settlement (or pay the full remaining balance), and the settlement agreement requires the lender to file a UCC-3 termination within a specified number of days after final payment. Verify the filing actually occurred — do not assume.
            </p>
            <p>
              <strong>Path 2: Lien lapse.</strong> A UCC-1 expires after 5 years if not renewed. If an MCA lender files a lien and then goes out of business, is acquired, or simply fails to renew, the lien lapses. This is rare and unreliable — do not wait for lapse if you need the lien removed for financing purposes. But if you are reviewing old filings and find one from a lender you cannot locate, the lapse date on the filing tells you when it expires automatically.
            </p>
            <p>
              <Link to="/consultation">Schedule a free consultation</Link> or call <a href={PHONE_HREF}>{PHONE_NUMBER}</a>. A professional MCA mediator can review your full lien inventory, negotiate settlements that include UCC-3 terminations, and verify the filings are completed properly.
            </p>
          </section>

          <section className="prose-block">
            <h2>Get Help Removing MCA UCC Liens</h2>
            <LeadCaptureForm source="mca-ucc-lien" submitLabel="Get a Free MCA Lien Review" />
          </section>

          <section className="prose-block">
            <h2>Related MCA Guides</h2>
            <ul>
              <li><Link to="/restaurant-mca-stacking">Restaurant MCA Stacking: How Multiple Liens Block Your Options</Link></li>
              <li><Link to="/merchant-cash-advance-settlement">MCA Settlement: Ensuring UCC Termination Is Part of the Deal</Link></li>
              <li><Link to="/restaurant-mca-debt-help">Restaurant MCA Debt Relief: The Complete Guide</Link></li>
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
