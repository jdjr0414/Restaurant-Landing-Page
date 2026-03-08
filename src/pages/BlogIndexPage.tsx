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
        title="Restaurant Cash Flow & Funding Blog | Tips & Guides"
        description="Articles on restaurant cash flow problems, payroll gaps, seasonal slumps, equipment costs, and what options exist. Practical guides for restaurant owners."
        canonicalPath="/blog"
      />
      <BreadcrumbSchema items={[{ name: 'Restaurant Cash Advance', path: '/restaurant-cash-advance' }, { name: 'Blog', path: '/blog' }]} />
      <main className="page-main">
        <div className="page-content">
          <p className="blog-index__hub">
            <Link to="/restaurant-cash-advance">Restaurant Cash Advance</Link> — main guide to options and how they work.
          </p>
          <h1 className="page-title">Restaurant Cash Flow & Funding Blog</h1>
          <p className="page-lead">
            Practical guides on the problems restaurant owners face: cash flow gaps, payroll crunches, seasonal slumps, equipment costs, and what options exist when you need help.
          </p>
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
