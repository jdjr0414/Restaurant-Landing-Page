import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { WebPageSchema } from '../components/WebPageSchema';
import { PageHero } from '../components/PageHero';
import { topicPagesConfig } from '../data/topicPages';
import { pillarPagesConfig } from '../data/pillarPages';
import { blogPosts } from '../data/blogPosts';
import { getMeta } from '../staticMeta';
import '../styles/globals.css';

/** Problem-focused / pain-point guides. No overlap with pillar (concept hubs) or topic (product/funding) pages. */
const painPointSitemapEntries: { path: string; title: string }[] = [
  { path: '/busy-but-broke-restaurant', title: 'Why Your Busy Restaurant Still Feels Broke' },
  { path: '/restaurant-first-year-cash-flow-surprises', title: "7 Cash Flow Surprises That Blindside First-Year Restaurant Owners" },
  { path: '/cant-make-restaurant-payroll', title: "When You Can't Make Restaurant Payroll" },
  { path: '/behind-on-restaurant-vendor-payments', title: 'Vendors Calling, Bills Piling Up: What to Do When You\'re Behind' },
  { path: '/restaurant-equipment-broke-no-money', title: 'The True Cost of Ignoring That Broken Cooler or Oven' },
  { path: '/restaurant-labor-schedule-money-drains', title: '5 Money Drains Hiding in Your Restaurant Schedule' },
  { path: '/restaurant-slow-season-cash-flow', title: "When Your Restaurant's Slow Season Lasts Longer Than You Planned" },
  { path: '/restaurant-lease-too-expensive', title: 'Rent, CAM, and Hidden Lease Costs That Squeeze Your Restaurant' },
  { path: '/maxed-out-credit-cards-restaurant', title: "When Your Restaurant's Credit Cards Hit the Limit" },
  { path: '/restaurant-delivery-app-fees-killing-profits', title: 'How Delivery Apps Quietly Eat Your Restaurant Profits' },
  { path: '/restaurant-record-sales-no-profit', title: "Why Your Restaurant's Best Month Still Feels Like a Loss" },
  { path: '/restaurant-discounting-hurting-profits', title: 'The Hidden Cash Flow Danger in Restaurant Discounts and Coupons' },
  { path: '/restaurant-bookkeeping-bad-news', title: 'What to Do When Your Bookkeeper Hands You Bad News' },
  { path: '/restaurant-partner-money-problems', title: 'When Restaurant Partners Stop Agreeing About Money' },
  { path: '/restaurant-menu-engineering-cash-flow', title: 'How Menu Design Can Make or Break Your Restaurant Cash Flow' },
  { path: '/restaurant-manager-quit-now-what', title: 'What Happens When a Key Restaurant Staff Member Walks Out' },
  { path: '/restaurant-bar-profitable-restaurant-not', title: "Why Your Bar Sales Aren't Saving Your Restaurant" },
  { path: '/restaurant-profitable-on-paper-no-cash', title: "When Your Accountant Says You Made Money but You Feel Broke" },
  { path: '/restaurant-tax-bill-cant-pay', title: "Restaurant Tax Bill You Can't Pay? What to Do Next" },
  { path: '/opening-second-restaurant-cash-flow', title: 'The Cash Flow Risk of Opening a Second Restaurant Too Fast' },
];
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

export function SitemapPage() {
  const meta = getMeta('/sitemap')!;
  return (
    <>
      <SeoHead
        title={meta.title}
        description={meta.description}
        canonicalPath={meta.canonicalPath}
        image={meta.image}
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Sitemap', path: '/sitemap' }]} />
      <WebPageSchema name="Sitemap: All Guides & Topics" description={meta.description} urlPath="/sitemap" />
      <PageHero />
      <main className="page-main">
        <div className="page-content">
          <h1 className="page-title">Sitemap: All Guides & Topics</h1>
          <p className="page-lead">
            Every guide and topic on this site. Use this page to find exactly what you need—restaurant cash flow, funding options, payroll, equipment, seasonal issues, and more. <a href="/sitemap.xml" className="page-lead__link">XML sitemap for search engines</a>.
          </p>

          <section className="sitemap-section">
            <h2>For Search Engines</h2>
            <ul className="sitemap-list">
              <li><a href="/sitemap.xml">XML Sitemap (sitemap.xml)</a></li>
            </ul>
          </section>

          <section className="sitemap-section">
            <h2>Main Guides</h2>
            <ul className="sitemap-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/restaurant-cash-advance">Restaurant Cash Flow Guide (Cash Advance)</Link></li>
              <li><Link to="/restaurant-working-capital">Working Capital When You Need It</Link></li>
              <li><Link to="/restaurant-funding">Restaurant Funding Options</Link></li>
              <li><Link to="/consultation">Free Consultation</Link></li>
              <li><Link to="/business-cash-advance">Business Cash Advance Explained</Link></li>
              <li><Link to="/small-business-funding">Small Business Funding</Link></li>
              <li><Link to="/faq">FAQ: Restaurant Cash Flow & Funding</Link></li>
            </ul>
          </section>

          <section className="sitemap-section">
            <h2>Pillar Guides</h2>
            <ul className="sitemap-list">
              {pillarPagesConfig.map((page) => (
                <li key={page.path}>
                  <Link to={page.path}>{page.h1}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="sitemap-section">
            <h2>Problem-Focused Guides</h2>
            <p className="sitemap-section__intro">
              Guides focused on specific pain points: what&apos;s blocking you, what to do next, and when funding may help.
            </p>
            <ul className="sitemap-list">
              {painPointSitemapEntries.map((entry) => (
                <li key={entry.path}>
                  <Link to={entry.path}>{entry.title}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="sitemap-section">
            <h2>Topic Guides</h2>
            <ul className="sitemap-list">
              {topicPagesConfig.map((page) => (
                <li key={page.path}>
                  <Link to={page.path}>{page.h1}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="sitemap-section">
            <h2>Blog</h2>
            <ul className="sitemap-list">
              <li><Link to="/blog">Blog index</Link></li>
              {blogPosts.filter((post) => post.hasCustomContent).map((post) => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
