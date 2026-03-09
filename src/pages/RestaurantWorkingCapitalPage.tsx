import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { CTA } from '../components/CTA';
import { FIND_MATCH_URL, AXIANT_LINK_REL } from '../config';
import { getMeta } from '../staticMeta';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

export function RestaurantWorkingCapitalPage() {
  const meta = getMeta('/restaurant-working-capital')!;
  return (
    <>
      <SeoHead
        title={meta.title}
        description="Struggling with payroll, inventory, or seasonal gaps? Understand what restaurant working capital is and what options exist when revenue doesn’t line up with bills."
        canonicalPath="/restaurant-working-capital"
      />
      <BreadcrumbSchema items={[{ name: 'Restaurant Cash Advance', path: '/restaurant-cash-advance' }, { name: 'Working Capital', path: '/restaurant-working-capital' }]} />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">When You Need Restaurant Working Capital</h1>
          <p className="page-lead">
            Many restaurant owners hit a wall: bills and payroll are due, but revenue hasn’t caught up. Working capital is the money you need to run day-to-day—payroll, inventory, supplies. This guide explains the problem and what options exist when you need help.
          </p>

          <section className="prose-block">
            <h2>What Is Restaurant Working Capital?</h2>
            <p>Working capital is the money you use to operate your business from one day to the next. For restaurants, that means paying staff, buying food and beverage inventory, covering utilities, and handling repairs and maintenance. When your cash flow doesn’t match your expenses—because of seasonality, a slow month, or a big opportunity—you need access to capital. A <Link to="/restaurant-cash-advance">restaurant cash advance</Link> or other working capital product can provide that access quickly, often with repayment tied to your sales so that slower periods mean smaller payments.</p>
          </section>

          <section className="prose-block">
            <h2>Why Restaurants Need Working Capital</h2>
            <p>Restaurants face unique cash flow challenges. Revenue can swing with the weather, holidays, and local events. Fixed costs like rent and labor don’t stop when traffic drops. Many owners need working capital to cover payroll during slow weeks, stock up before a busy season, replace or repair equipment, or take on a renovation or expansion. Small business funding for restaurants isn’t just for emergencies—it’s a tool for managing the natural ups and downs of the business and for funding growth when the opportunity is there.</p>
          </section>

          <section className="prose-block">
            <h2>How Restaurant Working Capital Works</h2>
            <p>Restaurant working capital can come in different forms. A cash advance provides a lump sum upfront; you repay it as a percentage of your daily card sales or revenue. That structure can be easier to manage when sales vary. Other options include lines of credit or short-term loans. Qualification often focuses on your restaurant’s revenue and sales history rather than credit alone, which can make it possible to get funding even when a bank might say no. Terms and eligibility vary by provider. Not all applicants qualify.</p>
          </section>

          <section className="prose-block">
            <h2>Common Uses for Restaurant Working Capital</h2>
            <ul>
              <li><strong>Payroll and labor</strong> — Cover wages during slow periods or staff up for busy seasons.</li>
              <li><strong>Inventory and supplies</strong> — Stock up before holidays, events, or peak seasons.</li>
              <li><strong>Equipment</strong> — Repair or replace ovens, refrigeration, and other kitchen equipment.</li>
              <li><strong>Seasonal cash flow</strong> — Bridge the gap between slow and busy periods.</li>
              <li><strong>Expansion and renovations</strong> — Fund a second location, patio, or dining room upgrade.</li>
            </ul>
          </section>

          <section className="prose-block">
            <h2>Restaurant Working Capital vs Loans</h2>
            <p>Traditional restaurant loans typically offer fixed monthly payments and longer terms. They can be a good fit for large, long-term investments when you qualify. Working capital products like a restaurant cash advance often offer faster decisions and funding, and repayment that flexes with your sales. Choosing between them depends on your timeline, how you prefer to repay, and what you qualify for. <Link to="/restaurant-cash-advance">Compare restaurant cash advance and working capital options</Link> to see what fits your situation.</p>
          </section>

          <section className="prose-block">
            <h2>Who Qualifies for Restaurant Working Capital?</h2>
            <p>Eligibility depends on the provider and product. Many working capital and cash advance products look at your restaurant’s revenue, card sales, and time in business. They may be more accessible than traditional loans for owners whose credit isn’t perfect but whose business has steady sales. Understanding your options and what’s typically required can help you see if you may qualify. Not all applicants qualify; terms vary.</p>
          </section>

          <section className="prose-block">
            <h2>Exploring Your Options</h2>
            <p>If you’re facing a payroll gap, inventory crunch, or seasonal shortfall, understanding what’s available can help. Not all options fit every situation; terms and eligibility vary. <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>Review Restaurant Financing Options</a>.</p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
