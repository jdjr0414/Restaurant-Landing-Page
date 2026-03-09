import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { topicPagesConfig } from '../data/topicPages';
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
      <main className="page-main">
        <div className="page-content">
          <h1 className="page-title">Sitemap: All Guides & Topics</h1>
          <p className="page-lead">
            Every guide and topic on this site. Use this page to find exactly what you need—restaurant cash flow, funding options, payroll, equipment, seasonal issues, and more.
          </p>

          <section className="sitemap-section">
            <h2>Main Guides</h2>
            <ul className="sitemap-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/restaurant-cash-advance">Restaurant Cash Flow Guide</Link></li>
              <li><Link to="/restaurant-working-capital">Working Capital When You Need It</Link></li>
              <li><Link to="/restaurant-funding">Restaurant Funding Options</Link></li>
              <li><Link to="/business-cash-advance">Business Cash Advance Explained</Link></li>
              <li><Link to="/small-business-funding">Small Business Funding</Link></li>
              <li><Link to="/faq">FAQ: Restaurant Cash Flow & Funding</Link></li>
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
              {blogPosts.map((post) => (
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
