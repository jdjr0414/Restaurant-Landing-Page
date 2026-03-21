import { useParams, Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { ArticleSchema } from '../components/ArticleSchema';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { HowToSchema } from '../components/HowToSchema';
import { getBlogPost } from '../data/blogPosts';
import { getBlogContent } from '../data/blogContent';
import { RelatedArticles } from '../components/RelatedArticles';
import { FIND_MATCH_URL, AXIANT_LINK_REL, SITE_NAME, PHONE_NUMBER, PHONE_HREF } from '../config';
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
          title={`Post not found | ${SITE_NAME}`}
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
  const titleTag = post.metaTitle ?? `${post.title} | ${SITE_NAME}`;
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
        noindex={!post.hasCustomContent}
      />
      <ArticleSchema
        headline={post.title}
        description={post.description}
        datePublished={post.publishedDate}
        urlPath={`/blog/${post.slug}`}
        keywords={post.keywords}
        dateModified={post.dateModified}
      />
      {post.faqItems && post.faqItems.length > 0 && (
        <BlogFaqSchema items={post.faqItems} urlPath={`/blog/${post.slug}`} />
      )}
      {post.howToSteps && post.howToSteps.length > 0 && (
        <HowToSchema
          name={post.title}
          description={post.description}
          urlPath={`/blog/${post.slug}`}
          steps={post.howToSteps}
        />
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
              <div className="article__meta">
                <time className="article__date" dateTime={post.publishedDate}>
                  Published: {new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <span className="article__meta-sep" aria-hidden> · </span>
                <span className="article__reviewed">Editorially reviewed</span>
              </div>
            </header>
            <div className="article__body prose" {...(post.faqItems?.length ? { 'data-speakable-faq': '' } : {})}>
              {content}
              <RelatedArticles currentSlug={slug!} />
            </div>
            <footer className="article__footer">
              <div className="article__cta-block">
                <h3 className="article__cta-heading">
                  Ready to explore your options?
                </h3>
                <p className="article__cta-lead">
                  Restaurant owners dealing with payroll gaps, equipment emergencies, or cash flow problems use these
                  guides to understand their options — then take action.
                </p>
                <div className="article__cta-actions">
                  <a
                    href={FIND_MATCH_URL}
                    target="_blank"
                    rel={AXIANT_LINK_REL}
                    className="btn btn-primary"
                  >
                    See What Funding Options Are Available
                  </a>
                  <Link to="/consultation" className="btn btn-secondary">
                    Talk to Someone — Free Call
                  </Link>
                </div>
                <p className="article__cta-phone">
                  Or call directly:{' '}
                  <a href={PHONE_HREF} className="article__cta-phone-link">
                    {PHONE_NUMBER}
                  </a>
                </p>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}
