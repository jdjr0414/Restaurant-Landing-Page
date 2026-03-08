import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { blogPosts } from '../data/blogPosts';
import { FIND_MATCH_URL } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

export function BlogIndexPage() {
  return (
    <>
      <SeoHead
        title="Restaurant Cash Flow & Funding Guides | Tips & Articles"
        description="Articles on restaurant cash flow problems, payroll gaps, seasonal slumps, equipment costs, and what options exist. Practical guides for restaurant owners."
        canonicalPath="/blog"
      />
      <BreadcrumbSchema items={[{ name: 'Restaurant Cash Advance', path: '/restaurant-cash-advance' }, { name: 'Blog', path: '/blog' }]} />
      <main className="page-main">
        <div className="page-content">
          <p className="blog-index__hub">
            <Link to="/restaurant-cash-advance">Restaurant Cash Advance</Link> — main guide to options and how they work.
          </p>
          <h1 className="page-title">Restaurant Cash Flow &amp; Funding Guides</h1>
          <section className="blog-index__intro">
            <p className="page-lead">
              Restaurant cash flow problems are one of the leading reasons restaurants close—even when sales look good. Revenue comes in unevenly: busy weekends, slow Tuesdays, holiday rushes, and post-holiday slumps. Meanwhile, rent, payroll, and vendor payments hit on fixed schedules. That timing mismatch creates gaps that many owners need to bridge.
            </p>
            <p>
              This blog covers the problems restaurant owners face—payroll gaps, seasonal cash flow, equipment emergencies, vendor payment trouble—and the funding options that can help. Whether you need a <Link to="/restaurant-cash-advance">restaurant cash advance</Link>, <Link to="/restaurant-working-capital">restaurant working capital</Link>, or want to <Link to="/restaurant-funding">compare restaurant funding options</Link>, these articles explain what&apos;s going on and what you can do next.
            </p>
            <p>
              Practical guides, no fluff. Written for restaurant owners who are looking for answers, not sales pitches.
            </p>
          </section>
          <ul className="blog-list">
            {blogPosts.map((post) => (
              <li key={post.slug} className="blog-list__item">
                <Link to={`/blog/${post.slug}`} className="blog-list__link">
                  <span className="blog-list__title">{post.title}</span>
                  <span className="blog-list__meta">{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </Link>
                <p className="blog-list__desc">{post.description}</p>
              </li>
            ))}
          </ul>
          <div className="page-cta blog-index__cta">
            <p><strong>Facing cash flow problems or need to cover payroll, inventory, or equipment?</strong></p>
            <p><a href={FIND_MATCH_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Check Funding Options</a> — no obligation. <Link to="/restaurant-cash-advance">Compare restaurant cash advance and funding options</Link>.</p>
          </div>
        </div>
      </main>
    </>
  );
}
