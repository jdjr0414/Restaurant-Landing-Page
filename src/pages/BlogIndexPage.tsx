import { Link, useParams } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { blogPostsSortedByDate } from '../data/blogPosts';
import { FIND_MATCH_URL } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const POSTS_PER_PAGE = 12;

/** Featured guides: mix of blog posts and topic pages. */
const FEATURED_GUIDES = [
  { path: '/blog/restaurant-refrigeration-emergency', title: 'Restaurant Refrigeration Emergency', description: 'What to do when your refrigerator or walk-in cooler fails. Immediate steps, repair costs, and funding options.' },
  { path: '/restaurant-payroll-funding', title: 'Restaurant Payroll Funding', description: "Can't make payroll? Options when revenue is slow but payday isn't. Fast funding for restaurant owners." },
  { path: '/restaurant-seasonal-cash-flow', title: 'Restaurant Seasonal Cash Flow', description: 'Survive slow seasons. How to bridge the gap when traffic drops but rent and payroll don\'t.' },
  { path: '/restaurant-cash-advance-vs-loan', title: 'Restaurant Cash Advance vs Loan', description: 'Compare speed, qualification, and repayment. Which fits your situation?' },
];

function getTotalPages(): number {
  return Math.ceil(blogPostsSortedByDate.length / POSTS_PER_PAGE);
}

function getPostsForPage(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  return blogPostsSortedByDate.slice(start, start + POSTS_PER_PAGE);
}

export function BlogIndexPage() {
  const { page } = useParams<{ page: string }>();
  const currentPage = page ? Math.max(1, parseInt(page, 10) || 1) : 1;
  const totalPages = getTotalPages();
  const safePage = Math.min(currentPage, totalPages) || 1;
  const posts = getPostsForPage(safePage);
  const isFirstPage = safePage === 1;
  const canonicalPath = isFirstPage ? '/blog' : `/blog/page/${safePage}`;

  return (
    <>
      <SeoHead
        title={isFirstPage ? "Restaurant Cash Flow & Funding Guides | Tips & Articles" : `Blog Page ${safePage} | Restaurant Cash Flow & Funding Guides`}
        description="Articles on restaurant cash flow problems, payroll gaps, seasonal slumps, equipment costs, and what options exist. Practical guides for restaurant owners."
        canonicalPath={canonicalPath}
      />
      <BreadcrumbSchema items={[{ name: 'Restaurant Cash Advance', path: '/restaurant-cash-advance' }, { name: 'Blog', path: '/blog' }]} />
      <main className="page-main page-main--blog">
        <div className="blog-index__layout">
          <div className="blog-index__main">
          <nav className="blog-index__key-guides" aria-label="Key guides">
            <Link to="/restaurant-cash-advance">Restaurant Cash Advance</Link>
            <span className="blog-index__key-sep" aria-hidden> · </span>
            <Link to="/restaurant-working-capital">Restaurant Working Capital</Link>
            <span className="blog-index__key-sep" aria-hidden> · </span>
            <Link to="/restaurant-funding">Restaurant Funding Options</Link>
          </nav>
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

          <section className="blog-index__featured" aria-labelledby="featured-guides-title">
            <h2 id="featured-guides-title" className="blog-index__featured-title">Featured Guides</h2>
            <ul className="blog-featured-list">
              {FEATURED_GUIDES.map((guide) => (
                <li key={guide.path} className="blog-featured-list__item">
                  <Link to={guide.path} className="blog-featured-list__link">
                    <span className="blog-featured-list__title">{guide.title}</span>
                    <span className="blog-featured-list__desc">{guide.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="blog-index__list" aria-labelledby="all-articles-title">
            <h2 id="all-articles-title" className="blog-index__list-title">All Articles</h2>
            <ul className="blog-list">
              {posts.map((post) => (
                <li key={post.slug} className="blog-list__item">
                  <Link to={`/blog/${post.slug}`} className="blog-list__link">
                    <span className="blog-list__title">{post.title}</span>
                    <span className="blog-list__meta">{new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </Link>
                  <p className="blog-list__desc">{post.description}</p>
                </li>
              ))}
            </ul>

            {totalPages > 1 && (
              <nav className="blog-pagination" aria-label="Blog pagination">
                <ul className="blog-pagination__list">
                  {safePage > 1 && (
                    <li className="blog-pagination__item">
                      <Link
                        to={safePage === 2 ? '/blog' : `/blog/page/${safePage - 1}`}
                        className="blog-pagination__link blog-pagination__link--prev"
                        rel="prev"
                      >
                        ← Previous
                      </Link>
                    </li>
                  )}
                  <li className="blog-pagination__item blog-pagination__item--info">
                    <span className="blog-pagination__info">
                      Page {safePage} of {totalPages}
                    </span>
                  </li>
                  {safePage < totalPages && (
                    <li className="blog-pagination__item">
                      <Link
                        to={`/blog/page/${safePage + 1}`}
                        className="blog-pagination__link blog-pagination__link--next"
                        rel="next"
                      >
                        Next →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </section>

          <div className="page-cta blog-index__cta">
            <p><strong>Facing cash flow problems or need to cover payroll, inventory, or equipment?</strong></p>
            <p>Read our guides on <Link to="/restaurant-cash-advance">restaurant cash advance</Link>, <Link to="/restaurant-working-capital">restaurant working capital</Link>, and <Link to="/restaurant-funding">restaurant funding options</Link> first. When you&apos;re ready: <a href={FIND_MATCH_URL} target="_blank" rel="sponsored noopener noreferrer" className="btn btn-primary">Check Funding Options</a> — no obligation.</p>
          </div>
          </div>
          <aside className="blog-index__sidebar" aria-label="Quick guides">
            <div className="blog-index__sidebar-card">
              <h3 className="blog-index__sidebar-title">Start here</h3>
              <ul className="blog-index__sidebar-links">
                <li><Link to="/restaurant-cash-advance">Restaurant Cash Advance</Link></li>
                <li><Link to="/restaurant-working-capital">Restaurant Working Capital</Link></li>
                <li><Link to="/restaurant-funding">Restaurant Funding Options</Link></li>
              </ul>
            </div>
            <div className="blog-index__sidebar-card blog-index__sidebar-card--trust">
              <p className="blog-index__sidebar-p">Practical guides for restaurant owners. No fluff—just what you need to understand your options.</p>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
