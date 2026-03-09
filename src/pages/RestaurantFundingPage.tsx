import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { CTA } from '../components/CTA';
import { PageHero } from '../components/PageHero';
import { FIND_MATCH_URL, AXIANT_LINK_REL } from '../config';
import { getMeta } from '../staticMeta';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

export function RestaurantFundingPage() {
  const meta = getMeta('/restaurant-funding')!;
  return (
    <>
      <SeoHead
        title="Restaurant Funding Options When You’re Struggling | Guide"
        description={meta.description}
        canonicalPath={meta.canonicalPath}
        image={meta.image}
      />
      <BreadcrumbSchema items={[{ name: 'Restaurant Cash Advance', path: '/restaurant-cash-advance' }, { name: 'Funding Options', path: '/restaurant-funding' }]} />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">Restaurant Funding Options When You’re Struggling</h1>
          <p className="page-lead">
            When revenue doesn’t cover payroll, inventory, or equipment costs, restaurant owners look for ways to bridge the gap. This guide explains the main funding options—what they are, when they might help, and how to think about your situation.
          </p>

          <section className="prose-block">
            <h2>Why Restaurants Seek Funding</h2>
            <p>Restaurant owners look for funding to cover payroll, buy inventory, repair or replace equipment, handle seasonal cash flow gaps, or fund expansion. Sometimes the need is urgent—a broken walk-in or a missed payroll—and sometimes it’s planned, like stocking up for the holidays or opening a second location. Understanding your options helps you choose the right type of <Link to="/restaurant-cash-advance">restaurant funding</Link> for your situation. The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> explains why these gaps occur. For a full comparison, see <Link to="/restaurant-funding-options">restaurant funding options</Link>.</p>
          </section>

          <section className="prose-block">
            <h2>Restaurant Cash Advance</h2>
            <p>A restaurant cash advance provides upfront capital that you repay as a percentage of your daily sales. It’s one of the faster options: many providers offer same-day or next-day decisions and funding in as little as 24–48 hours. Because qualification often focuses on revenue rather than credit alone, it can be accessible to owners who might not qualify for a bank loan. Funds can be used for payroll, inventory, equipment, repairs, or other business needs. <Link to="/restaurant-cash-advance">Explore restaurant cash advance options</Link>.</p>
          </section>

          <section className="prose-block">
            <h2>Restaurant Working Capital</h2>
            <p>Working capital products are designed for short-term operating needs. They can include cash advances, lines of credit, or short-term loans. The goal is to give you access to funds when revenue is uneven or when you need to act quickly. Many restaurant owners use working capital to cover payroll during slow weeks, purchase inventory before a busy season, or handle unexpected expenses. <Link to="/restaurant-working-capital">Learn more about restaurant working capital</Link>.</p>
          </section>

          <section className="prose-block">
            <h2>Restaurant Equipment Financing</h2>
            <p>Equipment financing is geared toward purchasing or leasing ovens, refrigeration, point-of-sale systems, and other gear. The equipment often secures the financing. This can be a good fit when you need to buy or replace specific assets and want to spread the cost over time. For faster, more flexible funding that you can use for equipment or anything else, a restaurant business cash advance is another option.</p>
          </section>

          <section className="prose-block">
            <h2>Comparing Restaurant Financing Options</h2>
            <p>When comparing options, consider speed, qualification requirements, repayment structure, and cost. Cash advances and some working capital products offer speed and sales-based repayment. Traditional loans may offer lower rates for those who qualify but often take longer and require stronger credit. There’s no single “best” option—only the one that fits your needs and situation. Understanding and comparing <Link to="/restaurant-cash-advance">restaurant financing options</Link> helps you make an informed decision.</p>
          </section>

          <section className="prose-block">
            <h2>Who Often Qualifies</h2>
            <p>Providers often work with full-service restaurants, cafés, bars, food trucks, bakeries, pizzerias, quick-service restaurants, fine dining, catering businesses, and franchises. Whether you need funding for payroll, inventory, equipment, or growth, exploring options can help you find what fits your business.</p>
          </section>

          <section className="prose-block">
            <h2>Next Steps</h2>
            <p>If you’re facing a cash flow problem or need to cover a specific expense, understanding your options is the first step. Not all applicants qualify; terms vary by provider. <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL}>Review Restaurant Financing Options</a>.</p>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
