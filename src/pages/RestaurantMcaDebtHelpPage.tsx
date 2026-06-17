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
    q: 'What is restaurant MCA debt restructuring?',
    a: 'MCA debt restructuring is a negotiated process where a third party works directly with your MCA lenders to reduce the total amount owed, extend the repayment period, or lower the daily holdback percentage. Unlike refinancing — which pays off one advance with another — restructuring modifies the terms of what you already owe without adding new debt.',
  },
  {
    q: 'What happens if a restaurant stops paying a merchant cash advance?',
    a: 'MCA contracts are not loans, which means lenders have different legal tools than banks. Most MCA agreements include a Confession of Judgment (COJ) clause — a pre-signed document that lets the lender obtain a court judgment against you without a trial. This can lead to bank account freezing, UCC liens on receivables, and aggressive collection. Stopping payments without a plan or professional representation is extremely high-risk.',
  },
  {
    q: 'What is MCA stacking and why is it dangerous for restaurants?',
    a: 'MCA stacking happens when a restaurant takes a second or third advance before paying off the first. Each advance adds another daily holdback, compounding the cash drain. A restaurant with three stacked MCAs might be remitting 30–50% of daily card revenue before paying any other expense. This is the most common path to an unsustainable MCA situation.',
  },
  {
    q: 'Can MCA debt be negotiated down?',
    a: 'Yes. MCA lenders have significant incentive to negotiate — they prefer partial recovery over a defaulted position, especially on restaurants in distress. Professional MCA debt mediators negotiate directly with lenders and have achieved reductions of 40–70% on the remaining balance in many cases. Self-negotiation is possible but lenders are practiced at these conversations and outcomes are generally better with professional representation.',
  },
  {
    q: 'How long does MCA debt restructuring take?',
    a: 'Most professional MCA restructuring programs achieve initial resolution in 2–6 weeks from program start. The timeline depends on the number of MCA positions, the lenders involved, and how far behind payments are. Restaurants actively in collections may move faster because lenders are more motivated to settle.',
  },
  {
    q: 'Is MCA debt restructuring the same as bankruptcy?',
    a: 'No. MCA debt restructuring is a private negotiation process that does not appear on public records, does not require a court filing, and does not carry the long-term consequences of bankruptcy. Most restaurant owners in MCA distress are not bankruptcy candidates — they need their obligations restructured, not eliminated. Restructuring keeps the business operating while reducing the daily payment burden to a manageable level.',
  },
  {
    q: 'What does a Confession of Judgment mean in my MCA contract?',
    a: 'A Confession of Judgment (COJ) is a clause in most MCA agreements that authorizes the lender to enter a court judgment against you without filing a lawsuit or notifying you in advance. Once entered, they can freeze your bank accounts and seize receivables immediately. COJs are legal in most states. This is why professional representation before you default — or immediately after — is critical.',
  },
];

export function RestaurantMcaDebtHelpPage() {
  const meta = getMeta('/restaurant-mca-debt-help')!;
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
        ]}
      />
      <BlogFaqSchema items={faqItems} urlPath="/restaurant-mca-debt-help" />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Restaurant MCA Debt Help: When Merchant Cash Advance Payments Are Crushing Your Cash Flow</h1>
          <p className="page-lead">
            If your daily MCA holdbacks are consuming 20–40% of your revenue and you can't see a path out, you're not alone — and you're not out of options.
            Merchant cash advance debt has become one of the biggest financial crises for restaurant owners. This guide explains what's happening, what your options are, and when professional help makes sense.
          </p>

          <section className="prose-block">
            <h2>How Restaurants End Up in MCA Trouble</h2>
            <p>
              Most restaurant owners didn't plan to be buried in MCA debt. It starts with a legitimate problem — a slow month, a broken piece of equipment, a gap before a busy season — and a cash advance that solved it. The advance funded in 24–48 hours, was repaid from daily card sales, and felt manageable.
            </p>
            <p>
              The second one happened when cash was tight again. Maybe food costs spiked, or a slow January wiped out the reserves. The third happened because the second advance increased the daily holdback, which tightened cash flow further, which made the next gap worse. This is how <Link to="/restaurant-mca-stacking">MCA stacking</Link> compounds: each new advance adds another daily payment on top of the ones already running.
            </p>
            <p>
              By the time a restaurant owner realizes the situation is unsustainable, they may be remitting 30–50% of daily card revenue before paying a single vendor, employee, or rent check. The business is generating revenue but the MCA payments are consuming cash faster than the restaurant can operate. That's when the question shifts from "how do I grow?" to "how do I get out of this?"
            </p>
          </section>

          <section className="prose-block">
            <h2>Signs Your Restaurant MCA Situation Is Unsustainable</h2>
            <p>
              Not every restaurant with an active MCA is in trouble. These are the signs that the situation has crossed from manageable to dangerous:
            </p>
            <ul>
              <li><strong>Your MCA holdbacks exceed 15–20% of daily card revenue.</strong> The standard "safe" holdback is 10–15%. Above that threshold, the daily payment starts to compress every other budget line.</li>
              <li><strong>You have two or more active MCAs running simultaneously.</strong> Stacked advances mean stacked holdbacks. A restaurant with three MCAs may be remitting 30–40% of card revenue before any other expense is paid.</li>
              <li><strong>You are taking new advances to cover the payments on old ones.</strong> This is the MCA debt spiral. A new advance covers a gap created by the previous advance's payments. Total debt grows; the problem doesn't resolve.</li>
              <li><strong>You have missed payments or are at risk of missing them.</strong> Late or missed MCA payments trigger default provisions that can move fast. Most MCA contracts include Confession of Judgment clauses that allow lenders to freeze bank accounts without a court hearing.</li>
              <li><strong>You have no free cash after MCA payments, payroll, and rent.</strong> If there is nothing left for food cost, utilities, or an equipment repair after your three highest obligations, the business is technically operating on a deficit funded by more debt.</li>
            </ul>
            <p>
              If two or more of these apply, the situation warrants professional review — not more advances.
            </p>
          </section>

          <section className="prose-block">
            <h2>What Happens If You Stop Paying a Merchant Cash Advance</h2>
            <p>
              Stopping MCA payments without a plan or professional representation is one of the riskiest moves a restaurant owner can make. MCA agreements are structured as "purchase of future receivables," not loans — which means they are not subject to standard consumer lending protections and operate under different legal rules.
            </p>
            <p>
              Most MCA contracts contain a <strong>Confession of Judgment (COJ)</strong> clause. This is a document you signed at closing that pre-authorizes the lender to obtain a court judgment against you — without filing a lawsuit, without notice to you, and without a trial. When you miss payments, a lender with a COJ can:
            </p>
            <ul>
              <li>Enter a judgment in a state court (often New York, where most MCAs are governed) within days</li>
              <li>Freeze your business bank accounts immediately</li>
              <li>File UCC liens against your receivables, which can prevent you from getting any other financing</li>
              <li>Place holds on your merchant processing account</li>
            </ul>
            <p>
              A frozen bank account means you cannot pay payroll, vendors, or rent — even if customers are still dining and revenue is coming in. This is why the moment you know you cannot make a payment, you need to act proactively, not reactively.
            </p>
            <p>
              See <Link to="/restaurant-mca-default">what happens when a restaurant defaults on an MCA</Link> for the full timeline and your options at each stage.
            </p>
          </section>

          <section className="prose-block">
            <h2>MCA Debt Restructuring: What It Is and How It Works</h2>
            <p>
              MCA debt restructuring is a negotiated process — typically handled by a professional mediator — that works directly with your MCA lenders to modify the terms of what you owe. This is different from refinancing, which replaces one debt with another. Restructuring changes the existing obligation.
            </p>
            <p>
              In a restaurant MCA restructuring:
            </p>
            <ul>
              <li>A mediator reviews all active MCA positions, the original contracts, and the remaining balances</li>
              <li>They negotiate with each lender to reduce the remaining payback amount, extend the repayment period, lower the daily or weekly holdback, or some combination of all three</li>
              <li>The restaurant makes structured payments to the mediator, who distributes them to the lenders under the new terms</li>
              <li>This process typically runs 2–6 weeks for initial resolution</li>
            </ul>
            <p>
              The critical advantage over self-negotiation is that professional mediators have established relationships with MCA lenders and know what each lender will and won't accept. Lenders are also more willing to negotiate seriously when they know they are dealing with a structured program rather than a single desperate restaurant owner.
            </p>
            <p>
              We work with MCA debt specialists who handle exactly this kind of situation for restaurants. <Link to="/consultation">Schedule a free consultation</Link> to review your contracts and understand what restructuring would look like for your specific positions.
            </p>
          </section>

          <section className="prose-block">
            <h2>MCA Stacking: How Restaurants Get Buried</h2>
            <p>
              MCA stacking — taking multiple advances simultaneously — is the most common cause of unsustainable MCA debt for restaurants. It happens in steps:
            </p>
            <p>
              A restaurant takes a $30,000 advance to cover a slow quarter. The holdback is 15% of daily card revenue. Six weeks later, cash is tight again because the 15% holdback is reducing available operating cash. They take a second advance to fill the gap — which adds another 12% holdback. Now 27% of daily card revenue is going to MCA payments before any other expense. Three months later, they take a third position.
            </p>
            <p>
              MCA lenders do not always disclose all active positions to each other. Some third-party lenders specifically target restaurants already in MCA positions, offering new capital to owners in distress. The new advance buys temporary relief; the compounding holdbacks make the underlying problem worse.
            </p>
            <p>
              See <Link to="/restaurant-mca-stacking">restaurant MCA stacking: what it is and how to get out</Link> for the detailed breakdown and exit options.
            </p>
          </section>

          <section className="prose-block">
            <h2>MCA Exit Options Compared</h2>
            <p>
              Not all MCA exit paths are equal. This comparison covers the five most common approaches restaurant owners consider:
            </p>
            <div style={{ overflowX: 'auto', margin: '1rem 0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr style={{ background: 'var(--color-ink)', color: 'var(--color-white)' }}>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Exit Path</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Reduces Balance?</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Adds New Debt?</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>COJ / Freeze Risk</th>
                    <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Time to Relief</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ background: 'var(--color-white)', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Professional Restructuring</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Yes — 40–70%</td>
                    <td style={{ padding: '0.75rem 1rem' }}>No</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Managed by mediator</td>
                    <td style={{ padding: '0.75rem 1rem' }}>2–6 weeks</td>
                  </tr>
                  <tr style={{ background: 'var(--color-cream)', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>MCA Consolidation</td>
                    <td style={{ padding: '0.75rem 1rem' }}>No (often increases total)</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Yes</td>
                    <td style={{ padding: '0.75rem 1rem' }}>None (new lender)</td>
                    <td style={{ padding: '0.75rem 1rem' }}>24–48 hours</td>
                  </tr>
                  <tr style={{ background: 'var(--color-white)', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Direct Self-Negotiation</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Rarely</td>
                    <td style={{ padding: '0.75rem 1rem' }}>No</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Moderate</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Weeks–months</td>
                  </tr>
                  <tr style={{ background: 'var(--color-cream)', borderBottom: '1px solid var(--color-cream-dark)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Stopping Payments (Unmanaged)</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Potentially</td>
                    <td style={{ padding: '0.75rem 1rem' }}>No</td>
                    <td style={{ padding: '0.75rem 1rem', color: '#c53030', fontWeight: 600 }}>Very High</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Immediate — but freeze risk</td>
                  </tr>
                  <tr style={{ background: 'var(--color-white)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Chapter 11 Bankruptcy</td>
                    <td style={{ padding: '0.75rem 1rem' }}>Yes</td>
                    <td style={{ padding: '0.75rem 1rem' }}>No</td>
                    <td style={{ padding: '0.75rem 1rem' }}>No (automatic stay)</td>
                    <td style={{ padding: '0.75rem 1rem' }}>6–18 months</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              For most restaurants still operating, professional restructuring offers the best combination of balance reduction, no new debt, and managed risk. Consolidation is appropriate only when the problem is the number of payments rather than the total debt burden. Stopping payments without professional representation in place is the highest-risk move available.
            </p>
          </section>

          <section className="prose-block">
            <h2>The Difference Between Refinancing MCA and Restructuring It</h2>
            <p>
              Many restaurant owners in MCA trouble are approached by lenders offering to "consolidate" or "refinance" their advances. Understanding the difference between this and true restructuring matters:
            </p>
            <p>
              <strong>MCA refinancing / consolidation</strong> means a new lender pays off your existing MCAs with a new, larger advance. You go from multiple positions to one — but the total amount owed typically increases (because the new lender adds their factor rate on top of the remaining balances), and you are still in an MCA. If cash flow was already too tight to handle the existing advances, a larger single advance at a higher total cost does not solve the structural problem.
            </p>
            <p>
              <strong>MCA restructuring</strong> means a mediator negotiates with your existing lenders to reduce what you owe and modify the terms of current agreements. No new debt is added. The goal is to reduce the daily cash drain to a level the restaurant can sustain while continuing to operate.
            </p>
            <p>
              For restaurants where the cash advance model itself is the problem — not just the number of positions — refinancing into another MCA is unlikely to lead to a different outcome. Restructuring or relief through a professional mediator is the appropriate solution.
            </p>
          </section>

          <section className="prose-block">
            <h2>How to Talk to an MCA Lender Before You Default</h2>
            <p>
              If you are currently current on payments but can see that you will not be able to continue, contacting your lender proactively is almost always better than missing a payment without notice. MCA lenders have more flexibility before default than after. Options that may be available include:
            </p>
            <ul>
              <li><strong>Temporary holdback reduction:</strong> Some lenders will temporarily reduce the holdback percentage during a documented slow period (providing bank statements showing the revenue drop).</li>
              <li><strong>Payment pause or deferral:</strong> A small number of lenders offer short pauses for operators who communicate proactively and have a history of on-time payments.</li>
              <li><strong>Early payoff discount:</strong> If you have access to capital from another source, some lenders will accept a reduced payoff — paying 70–85 cents on the dollar to close the position — if it settles the advance immediately.</li>
            </ul>
            <p>
              These options are not guaranteed and require documentation. Many lenders will decline. But contacting them before you miss a payment preserves your negotiating position in a way that a missed payment does not.
            </p>
            <p>
              If you are already behind, or the holdback is already consuming more than your business can sustain, self-negotiation is unlikely to reach terms that actually solve the problem. That is when professional MCA mediation produces meaningfully better outcomes than going directly to the lender on your own. <Link to="/consultation">Talk to our team</Link> to understand what a negotiated resolution looks like for your situation.
            </p>
          </section>

          <section className="prose-block">
            <h2>When Professional MCA Debt Help Makes Sense</h2>
            <p>
              Professional MCA debt restructuring is not for every restaurant. It makes the most sense when:
            </p>
            <ul>
              <li>You have two or more active MCA positions and cannot sustain the combined holdbacks</li>
              <li>You have missed payments or are within 30 days of being unable to make them</li>
              <li>You have received a default notice or been contacted about a Confession of Judgment filing</li>
              <li>You have already tried self-negotiation and the lender is not offering workable terms</li>
              <li>The daily holdback amount has reduced your operating cash to the point where you cannot cover payroll or vendor payments</li>
            </ul>
            <div className="outcome-callout" style={{ background: 'var(--color-surface)', border: '2px solid var(--color-primary)', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '1.5rem 0' }}>
              <strong>Typical results from professional MCA mediation:</strong> Professional mediators typically achieve 40–70% reductions on remaining MCA balances, and daily holdback rates are reduced to a sustainable 10–15% of card revenue. Results vary based on lender, balance, and payment history — but partial recovery is almost always preferable to a default from the lender's perspective.
            </div>
            <p>
              If you are in any of these situations,{' '}
              <Link to="/consultation">schedule a free consultation</Link>{' '}
              to review your MCA positions and understand what restructuring might look like for your specific situation. There is no obligation — the goal is to understand your options before you are in a position where options narrow.
            </p>
            <p>
              You can also call us directly at <a href={PHONE_HREF}>{PHONE_NUMBER}</a> to speak with someone who has handled restaurant MCA situations specifically.
            </p>
          </section>

          <section className="prose-block">
            <h2>Related Restaurant MCA Guides</h2>
            <ul>
              <li><Link to="/how-to-get-out-of-merchant-cash-advance">How to Get Out of a Merchant Cash Advance: Every Exit Path</Link></li>
              <li><Link to="/merchant-cash-advance-settlement">Merchant Cash Advance Settlement: What to Expect &amp; How to Negotiate</Link></li>
              <li><Link to="/restaurant-mca-debt-relief">Restaurant MCA Debt Relief: Who Qualifies and How It Works</Link></li>
              <li><Link to="/restaurant-mca-stacking">Restaurant MCA Stacking: When Multiple Advances Stack Up</Link></li>
              <li><Link to="/cant-pay-restaurant-mca">Can't Pay Your Restaurant MCA? What to Do Right Now</Link></li>
              <li><Link to="/restaurant-mca-default">Restaurant MCA Default: What Happens and What to Do</Link></li>
              <li><Link to="/restaurant-mca-payments-too-high">Your Restaurant's MCA Payments Are Too High — Here's Why</Link></li>
              <li><Link to="/restaurant-mca-confession-of-judgment">Confession of Judgment in MCAs: What It Means by State</Link></li>
              <li><Link to="/restaurant-mca-calculator">MCA Holdback Calculator: See Your Burden &amp; What You'd Save</Link></li>
              <li><Link to="/blog/restaurant-mca-debt-restructuring">How Restaurant MCA Debt Restructuring Works</Link></li>
              <li><Link to="/blog/restaurant-signs-too-much-mca-debt">7 Signs Your Restaurant Has Too Much MCA Debt</Link></li>
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
            <p>
              <strong>If your restaurant is struggling with MCA debt,</strong>{' '}
              <Link to="/consultation">schedule a free consultation</Link>{' '}
              or call <a href={PHONE_HREF}>{PHONE_NUMBER}</a> to discuss your options with no obligation.
            </p>
          </section>

          <section className="prose-block">
            <h2>Get a Free MCA Debt Review</h2>
            <p>
              Tell us about your situation and we'll connect you with someone who handles restaurant MCA restructuring. No obligation, no sales pressure — just a clear picture of what your options are.
            </p>
            <LeadCaptureForm source="mca-debt-help" submitLabel="Request a Free MCA Review" />
          </section>
        </div>
      </main>
    </>
  );
}
