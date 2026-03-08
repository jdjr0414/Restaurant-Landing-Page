import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { CTA } from '../components/CTA';
import { FIND_MATCH_URL } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

export function BusinessCashAdvancePage() {
  return (
    <>
      <SeoHead
        title="What Is a Business Cash Advance? | When It Might Help"
        description="Need money before revenue comes in? Understand what a business cash advance is, how it works, and when it might help with payroll, inventory, or short-term gaps."
        canonicalPath="/business-cash-advance"
      />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Business Cash Advance</h1>
          <p className="page-lead">
            A business cash advance provides upfront capital that you repay as a percentage of your daily sales or revenue. It’s a common option for businesses that need fast access to working capital—including restaurants, retail, and other industries with strong card or revenue volume but uneven cash flow.
          </p>

          <section className="prose-block">
            <h2>What Is a Business Cash Advance?</h2>
            <p>A business cash advance (often called a merchant cash advance or MCA) is not a loan. You receive a lump sum upfront and repay it through a percentage of your daily card sales or revenue. When sales are higher, you pay more; when they’re lower, you pay less. That flexibility can make it easier to manage than a fixed monthly loan payment. Many businesses use it for payroll, inventory, equipment, repairs, or short-term cash flow needs. <Link to="/restaurant-cash-advance">Restaurant cash advance</Link> is one example of this type of funding, tailored to the food service industry.</p>
          </section>

          <section className="prose-block">
            <h2>Why Businesses Use Cash Advances</h2>
            <p>Speed is a major reason. Decisions can come in a day and funds in as little as 24–48 hours. Qualification often focuses on revenue and sales history rather than credit score alone, so businesses that might not qualify for a bank loan may still be eligible. Use of funds is typically flexible—payroll, inventory, equipment, marketing, or other operating needs. For seasonal businesses like restaurants, repayment that flexes with sales can be especially useful.</p>
          </section>

          <section className="prose-block">
            <h2>Business Cash Advance vs Loan</h2>
            <p>Traditional loans have fixed monthly payments and longer terms. They can be better for large, long-term investments when you qualify. A cash advance typically has faster approval and funding, and repayment tied to revenue. It’s often used for short-term working capital rather than multi-year projects. Not all applicants qualify for either; terms and costs vary. It’s important to understand the structure and cost of any product before you commit. <Link to="/restaurant-cash-advance">See how restaurant cash advance works</Link> as one example of this funding type.</p>
          </section>

          <section className="prose-block">
            <h2>Who Qualifies?</h2>
            <p>Eligibility depends on the provider and product. Many cash advance providers look at your business’s revenue, card processing volume, and time in business. They may be more flexible than banks on credit. Business owners—including restaurant owners—can compare options and see what’s typically required. Not all applicants qualify; funding is not available in all states.</p>
          </section>

          <section className="prose-block">
            <h2>Restaurant Cash Advance</h2>
            <p>If you run a restaurant, café, bar, or food truck, a <Link to="/restaurant-cash-advance">restaurant cash advance</Link> is a business cash advance designed for your industry. The same principles apply: fast funding, repayment based on sales, flexible use. Restaurant cash advance products are designed to fit how restaurants operate. <Link to="/restaurant-cash-advance">Explore restaurant cash advance options</Link>.</p>
          </section>

          <section className="prose-block">
            <h2>Exploring Your Options</h2>
            <p>If you need working capital for payroll, inventory, or short-term gaps, understanding what’s available can help. Not all applicants qualify; terms vary. <a href={FIND_MATCH_URL} target="_blank" rel="sponsored noopener noreferrer">Find options that may match your situation</a>.</p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
