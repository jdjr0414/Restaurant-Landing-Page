import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { HomeFAQ } from '../components/HomeFAQ';
import { HomeFaqSchema } from '../components/HomeFaqSchema';
import { WebSiteSchema } from '../components/WebSiteSchema';
import { FIND_MATCH_URL } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80';
const KITCHEN_IMAGE = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1000&q=80';
const EQUIPMENT_IMAGE = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1000&q=80';

export function HomePage() {
  return (
    <>
      <SeoHead
        title="Restaurant Cash Flow Problems? Get Answers & See Your Options | The Restaurant Owners Guide"
        description="Running out of cash? Restaurant cash flow problems are the #1 reason restaurants fail. Learn why it happens, what restaurant funding and working capital options exist, and what to do next. Practical guide for restaurant owners."
        canonicalPath="/"
      />
      <HomeFaqSchema />
      <WebSiteSchema />
      <main className="home-page">
        {/* Hero: psychology (relief + hope) + keywords */}
        <header className="home-hero">
          <div className="home-hero__image-wrap">
            <img
              src={HERO_IMAGE}
              alt="Restaurant dining room with warm lighting and empty tables, representing the daily reality of running a restaurant business"
              className="home-hero__image"
              width={1200}
              height={800}
            />
            <div className="home-hero__overlay" aria-hidden />
          </div>
          <div className="home-hero__content">
            <h1 className="home-hero__title">
              Running Your Restaurant Shouldn&apos;t Mean Running Out of Cash
            </h1>
            <p className="home-hero__tagline">
              Restaurant cash flow problems are the leading reason restaurants close—even when sales look good. If payroll, vendors, or equipment costs have you stressed, you&apos;re in the right place. Understand why it happens and what restaurant funding and working capital options exist so you can decide your next move.
            </p>
            <a href={FIND_MATCH_URL} target="_blank" rel="sponsored noopener noreferrer" className="btn btn-primary home-hero__cta">
              See what options might work for you
            </a>
          </div>
        </header>

        <div className="page-content home-content">
          {/* Section 1: Problem (empathy + keywords) */}
          <section className="home-section">
            <h2 className="home-section__title">The Problem Most Restaurant Owners Face</h2>
            <p className="home-section__p">
              If you&apos;ve ever wondered why you&apos;re short on cash despite a busy weekend or a full dining room, you&apos;re not alone. <strong>Restaurant cash flow problems</strong> don&apos;t always mean your business is failing—they often mean money is coming in and going out at different times. Rent is due the first of the month. Payroll hits every two weeks. Vendors want payment on delivery. But your revenue might be strongest on Friday night or during the holiday rush. That timing mismatch is one of the biggest causes of <strong>restaurant cash flow</strong> stress. Add in seasonal slumps, a broken walk-in cooler, or a slow January, and even successful restaurant owners can find themselves needing <strong>restaurant working capital</strong> or other <strong>restaurant funding options</strong> to bridge the gap.
            </p>
            <p className="home-section__p">
              Understanding what&apos;s going on is the first step. This guide exists to help you make sense of <strong>restaurant cash flow problems</strong>, learn what <strong>restaurant funding</strong> and working capital mean, and see what options might fit your situation—so you can stop guessing and take a clear next step.
            </p>
          </section>

          {/* Image block 1 */}
          <figure className="home-figure">
            <img
              src={KITCHEN_IMAGE}
              alt="Commercial restaurant kitchen with stainless steel equipment, representing the high cost of restaurant equipment and repairs"
              className="home-figure__img"
              width={1000}
              height={667}
              loading="lazy"
            />
            <figcaption className="home-figure__cap">Equipment breakdowns and repairs are one of the most common triggers for restaurant cash flow problems.</figcaption>
          </figure>

          {/* Section 2: What happens when cash flow breaks */}
          <section className="home-section">
            <h2 className="home-section__title">What Happens When Restaurant Cash Flow Breaks Down</h2>
            <p className="home-section__p">
              When <strong>restaurant cash flow</strong> doesn&apos;t match your expenses, the effects show up fast. You might delay payroll, push off a vendor payment, or skip an equipment repair until it becomes an emergency. Over time, that stress affects your team, your suppliers, and your ability to run the business the way you want. The good news: you don&apos;t have to figure it out alone. Many restaurant owners use <strong>restaurant working capital</strong> or a <strong>restaurant cash advance</strong> to smooth out these gaps—covering payroll during a slow week, stocking up before a busy season, or fixing equipment when it breaks. Knowing that these <strong>restaurant funding options</strong> exist can make it easier to plan and breathe a little easier.
            </p>
            <ul className="home-section__list">
              <li><strong>Payroll gaps</strong> — When revenue is down but payday isn&apos;t. Restaurant funding can help you make payroll when you need it.</li>
              <li><strong>Seasonal slumps</strong> — Slow months don&apos;t stop rent or bills. Working capital for restaurants can bridge the gap until traffic picks up.</li>
              <li><strong>Equipment emergencies</strong> — A broken oven or cooler can&apos;t wait. Fast restaurant funding options exist for exactly these moments.</li>
              <li><strong>Inventory and growth</strong> — Stocking up or expanding often requires cash upfront. Understanding your options helps you act when the opportunity is there.</li>
            </ul>
          </section>

          {/* Section 3: What you need to know (internal links + CTA) */}
          <section className="home-section">
            <h2 className="home-section__title">Restaurant Funding and Working Capital: What You Need to Know</h2>
            <p className="home-section__p">
              <strong>Restaurant working capital</strong> is the money you use to run your business day to day—payroll, inventory, supplies, repairs. When that money runs short, <strong>restaurant funding</strong> can come in different forms: a <strong>restaurant cash advance</strong> (often repaid as a percentage of your sales), a line of credit, or a traditional loan. Each has different speed, cost, and qualification. The goal of this site is to give you clear, practical information so you can see what might fit your situation. You&apos;ll find detailed guides on <Link to="/restaurant-cash-advance">restaurant cash flow problems and options</Link>, <Link to="/restaurant-working-capital">when you need working capital</Link>, and <Link to="/restaurant-funding">how to compare restaurant funding options</Link>. Plus a <Link to="/blog">blog</Link> full of articles on payroll, seasonal cash flow, equipment costs, and more—written for restaurant owners who are looking for answers, not sales pitches.
            </p>
          </section>

          {/* Image block 2 */}
          <figure className="home-figure">
            <img
              src={EQUIPMENT_IMAGE}
              alt="Chef in restaurant kitchen with professional equipment, symbolizing the investment and costs behind running a restaurant"
              className="home-figure__img"
              width={1000}
              height={667}
              loading="lazy"
            />
            <figcaption className="home-figure__cap">Restaurant equipment and labor are two of the biggest costs—and two of the most common reasons owners look for restaurant funding.</figcaption>
          </figure>

          {/* Guide cards (internal links) */}
          <section className="home-section">
            <h2 className="home-section__title">Where to Go Next</h2>
            <p className="home-section__p">
              Pick the guide that matches what you&apos;re dealing with. Each one is written to help you understand the problem and your options—with no fluff and no pressure.
            </p>
            <nav className="home-links" aria-label="Main guides">
              <Link to="/restaurant-cash-advance" className="home-links__card">
                <span className="home-links__title">Restaurant Cash Flow Guide</span>
                <span className="home-links__desc">Why restaurant cash flow problems happen, what options exist, and how to think about restaurant funding and working capital when revenue doesn&apos;t line up with bills.</span>
              </Link>
              <Link to="/restaurant-working-capital" className="home-links__card">
                <span className="home-links__title">Working Capital When You Need It</span>
                <span className="home-links__desc">When and why restaurants need working capital—and what restaurant funding options are available when you need to cover payroll, inventory, or a seasonal gap.</span>
              </Link>
              <Link to="/restaurant-funding" className="home-links__card">
                <span className="home-links__title">Restaurant Funding Options</span>
                <span className="home-links__desc">Compare restaurant financing options when you&apos;re struggling to cover payroll, inventory, or equipment. Speed, cost, and what to expect.</span>
              </Link>
              <Link to="/blog" className="home-links__card">
                <span className="home-links__title">Blog: Cash Flow, Payroll &amp; More</span>
                <span className="home-links__desc">Articles on restaurant cash flow problems, payroll stress, seasonal slumps, equipment funding, and what other restaurant owners are asking.</span>
              </Link>
            </nav>
          </section>

          {/* FAQ */}
          <HomeFAQ />

          {/* Final CTA: psychology (relief + action) */}
          <section className="home-section home-cta-section">
            <h2 className="home-section__title">You&apos;re Not Alone—Here&apos;s What to Do Next</h2>
            <p className="home-section__p">
              Thousands of restaurant owners face the same cash flow and funding questions. The difference is whether you have clear information and a path forward. You can keep reading our guides and blog, or you can take the next step and see what options might actually work for your situation. Either way, you&apos;re in a better place than when you were just wondering what to do.
            </p>
            <a href={FIND_MATCH_URL} target="_blank" rel="sponsored noopener noreferrer" className="btn btn-primary home-cta-section__btn">
              See what options might work for you
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
