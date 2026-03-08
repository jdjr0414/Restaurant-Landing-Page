import { useParams, Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { ArticleSchema } from '../components/ArticleSchema';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { getBlogPost } from '../data/blogPosts';
import { getBlogContent } from '../data/blogContent';
import { FIND_MATCH_URL } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const META_DESC_MAX = 155;

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return (
      <>
        <SeoHead
          title="Post not found | Restaurant Owner's Guide"
          description="The requested blog post was not found."
          canonicalPath={`/blog/${slug ?? ''}`}
          noindex
        />
        <main className="page-main">
          <div className="page-content">
            <h1>Post not found</h1>
            <p><Link to="/blog">Back to blog</Link></p>
          </div>
        </main>
      </>
    );
  }

  const content = getBlogContent(slug!, post);
  const metaDesc = post.description.length > META_DESC_MAX
    ? post.description.slice(0, META_DESC_MAX).trim().replace(/\s+\S*$/, '') + '…'
    : post.description;
  const titleTag = post.metaTitle ?? `${post.title} | Restaurant Owner's Guide`;
  const breadcrumbItems = [
    { name: 'Restaurant Cash Advance', path: '/restaurant-cash-advance' },
    { name: 'Blog', path: '/blog' },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <SeoHead
        title={titleTag}
        description={metaDesc}
        canonicalPath={`/blog/${post.slug}`}
        ogType="article"
      />
      <ArticleSchema
        headline={post.title}
        description={post.description}
        datePublished={post.publishedDate}
        urlPath={`/blog/${post.slug}`}
      />
      {post.faqItems && post.faqItems.length > 0 && (
        <BlogFaqSchema items={post.faqItems} />
      )}
      <BreadcrumbSchema items={breadcrumbItems} />
      <main className="page-main">
        <article className="article">
          <div className="article__inner">
            <nav className="article__breadcrumb" aria-label="Breadcrumb">
              {breadcrumbItems.map((item, i) => (
                <span key={item.path}>
                  {i > 0 && <span className="article__breadcrumb-sep" aria-hidden> / </span>}
                  {i < breadcrumbItems.length - 1 ? (
                    <Link to={item.path} className="article__breadcrumb-link">{item.name}</Link>
                  ) : (
                    <span className="article__breadcrumb-current">{item.name}</span>
                  )}
                </span>
              ))}
            </nav>
            <header className="article__header">
              <h1 className="article__title">{post.title}</h1>
              <time className="article__date" dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </header>
            <div className="article__body prose">
              {content}
            </div>
            <footer className="article__footer">
              <div className="article__cta-block">
                <p className="article__cta-lead">Emergency expenses like equipment failures can cost thousands. See if your restaurant qualifies for working capital.</p>
                <a href={FIND_MATCH_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary article__cta-btn">
                  Check Funding Options
                </a>
                <p className="article__cta-sub">
                  <Link to="/restaurant-cash-advance">Restaurant cash advance</Link>, <Link to="/restaurant-working-capital">working capital</Link>, and <Link to="/restaurant-funding">funding options</Link> — compare what fits your situation.
                </p>
              </div>
              <p className="article__footer-link"><a href={FIND_MATCH_URL} target="_blank" rel="noopener noreferrer">Find options that may match your situation →</a></p>
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}
