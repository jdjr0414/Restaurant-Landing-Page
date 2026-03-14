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
