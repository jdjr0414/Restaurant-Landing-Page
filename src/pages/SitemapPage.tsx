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
  { path: '/cant-make-restaurant-payroll', title: "When You Can't Make Restaurant Payroll" },
  { path: '/restaurant-equipment-broke-no-money', title: 'The True Cost of Ignoring That Broken Cooler or Oven' },
  { path: '/restaurant-slow-season-cash-flow', title: "When Your Restaurant's Slow Season Lasts Longer Than You Planned" },
  { path: '/restaurant-lease-too-expensive', title: 'Rent, CAM, and Hidden Lease Costs That Squeeze Your Restaurant' },
  { path: '/restaurant-delivery-app-fees-killing-profits', title: 'How Delivery Apps Quietly Eat Your Restaurant Profits' },
  { path: '/restaurant-record-sales-no-profit', title: "Why Your Restaurant's Best Month Still Feels Like a Loss" },
  { path: '/restaurant-discounting-hurting-profits', title: 'The Hidden Cash Flow Danger in Restaurant Discounts and Coupons' },
  { path: '/restaurant-bookkeeping-bad-news', title: 'What to Do When Your Bookkeeper Hands You Bad News' },
  { path: '/restaurant-bar-profitable-restaurant-not', title: "Why Your Bar Sales Aren't Saving Your Restaurant" },
  { path: '/restaurant-tax-bill-cant-pay', title: "Restaurant Tax Bill You Can't Pay? What to Do Next" },
  { path: '/opening-second-restaurant-cash-flow', title: 'The Cash Flow Risk of Opening a Second Restaurant Too Fast' },
  { path: '/behind-on-restaurant-vendor-payments', title: 'Behind on Restaurant Vendor Payments? How to Catch Up Without Losing Suppliers' },
  { path: '/restaurant-manager-quit-now-what', title: 'Your Restaurant Manager Quit Without Notice | What to Do Now' },
  { path: '/restaurant-profitable-on-paper-no-cash', title: 'Restaurant Shows a Profit on Paper But No Cash in the Bank' },
  { path: '/restaurant-payroll-funding-options', title: 'Restaurant Payroll Funding Options | When Payday Is Short' },
  { path: '/war-impact-restaurant-financing', title: 'Global Economic Uncertainty and Restaurant Financing | What Changed' },
  { path: '/restaurant-first-year-cash-flow-surprises', title: 'First-Year Restaurant Cash Flow Surprises | What New Owners Don\'t Expect' },
  { path: '/maxed-out-credit-cards-restaurant', title: 'Running a Restaurant on Maxed-Out Credit Cards | What to Do Instead' },
  { path: '/restaurant-labor-schedule-money-drains', title: 'Restaurant Labor Scheduling Mistakes That Drain Cash | How to Fix Them' },
  { path: '/restaurant-partner-money-problems', title: 'Restaurant Partner Money Disputes | How to Handle Financial Conflicts' },
  { path: '/restaurant-menu-engineering-cash-flow', title: 'Menu Engineering for Restaurant Cash Flow | Pricing Your Way to Profit' },
  { path: '/business-cash-advance', title: 'Business Cash Advance | How It Works, Costs & When to Use It' },
  { path: '/small-business-funding', title: 'Small Business Funding | Fast Options When Banks Say No' },
  { path: '/merchant-cash-advance-for-restaurants', title: 'Merchant Cash Advance for Restaurants | How It Works & What to Watch' },
];

const mcaDebtSitemapEntries: { path: string; title: string }[] = [
  { path: '/restaurant-mca-debt-help', title: 'Restaurant MCA Debt Relief: Restructuring, Settlement & Help' },
  { path: '/restaurant-mca-debt-relief', title: 'Restaurant MCA Debt Relief: Who Qualifies and How It Works' },
  { path: '/how-to-get-out-of-merchant-cash-advance', title: 'How to Get Out of a Merchant Cash Advance: Every Exit Path' },
  { path: '/merchant-cash-advance-settlement', title: 'Merchant Cash Advance Settlement: What to Expect & How to Negotiate' },
  { path: '/cant-pay-restaurant-mca', title: "Can't Pay Merchant Cash Advance? What Happens & What to Do" },
  { path: '/restaurant-mca-default', title: 'Merchant Cash Advance Default: Frozen Account, COJ & Recovery' },
  { path: '/restaurant-mca-payments-too-high', title: 'MCA Payments Too High? Lower Your Restaurant Holdback Rate' },
  { path: '/restaurant-mca-stacking', title: 'MCA Stacking: Multiple Merchant Cash Advances & How to Exit' },
  { path: '/restaurant-mca-confession-of-judgment', title: 'Confession of Judgment in MCAs: What It Means by State' },
  { path: '/restaurant-mca-calculator', title: 'Restaurant MCA Calculator: Free Holdback Rate & Payment Tool' },
  { path: '/mca-bank-account-frozen', title: 'MCA Froze My Bank Account: Emergency Steps in the Next 24 Hours' },
  { path: '/merchant-cash-advance-personal-guarantee', title: 'MCA Personal Guarantee: What Assets Are at Risk' },
  { path: '/restaurant-mca-debt-after-closing', title: 'MCA Debt After Restaurant Closes: What Survives and What to Do' },
  { path: '/merchant-cash-advance-ucc-lien', title: 'MCA UCC Lien: How to Find and Remove Them' },
  { path: '/merchant-cash-advance-consolidation', title: 'MCA Consolidation vs Restructuring: The Math and Red Flags' },
  { path: '/restaurant-mca-debt-help-texas', title: 'Texas MCA Debt Help: Homestead and Wage Protections' },
  { path: '/restaurant-mca-debt-help-california', title: 'California MCA Debt Help: COJ Ban, SB 1235 & Unique Grounds' },
  { path: '/restaurant-mca-debt-help-florida', title: 'Florida MCA Debt Help: Homestead, UEFJA & Wage Rights' },
  { path: '/merchant-cash-advance-attorney', title: 'Merchant Cash Advance Attorney: When You Need One vs. a Mediator' },
  { path: '/merchant-cash-advance-factor-rate', title: 'MCA Factor Rate: True Cost, APR Conversion & Early Payoff Math' },
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
            <h2>MCA Debt Guides</h2>
            <p className="sitemap-section__intro">
              Guides for restaurant owners dealing with merchant cash advance debt, unmanageable payments, stacking, or default.
            </p>
            <ul className="sitemap-list">
              {mcaDebtSitemapEntries.map((entry) => (
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
