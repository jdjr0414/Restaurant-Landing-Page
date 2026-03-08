import { useParams, Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { ArticleSchema } from '../components/ArticleSchema';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
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

  return (
    <>
      <SeoHead
        title={`${post.title} | Restaurant Owner's Guide`}
        description={metaDesc}
        canonicalPath={`/blog/${post.slug}`}
      />
      <ArticleSchema
        headline={post.title}
        description={post.description}
        datePublished={post.publishedDate}
        urlPath={`/blog/${post.slug}`}
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.title, path: `/blog/${post.slug}` }]} />
      <main className="page-main">
        <article className="article">
          <div className="article__inner">
            <header className="article__header">
              <Link to="/blog" className="article__back">Blog</Link>
              <h1 className="article__title">{post.title}</h1>
              <time className="article__date" dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </header>
            <div className="article__body prose">
              {content}
            </div>
            <footer className="article__footer">
              <p><a href={FIND_MATCH_URL} target="_blank" rel="noopener noreferrer">Find options that may match your situation →</a></p>
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}
