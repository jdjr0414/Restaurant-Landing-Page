import { Link } from 'react-router-dom';
import { getRelatedPosts } from '../data/relatedPosts';
import { BlogPostMeta } from '../data/blogPosts';

interface RelatedArticlesProps {
  currentSlug: string;
}

export function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
  const related = getRelatedPosts(currentSlug, 4);

  if (related.length === 0) return null;

  return (
    <section className="related-articles" aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading" className="related-articles__title">
        Related Articles
      </h2>
      <ul className="related-articles__list">
        {related.map((post: BlogPostMeta) => (
          <li key={post.slug} className="related-articles__item">
            <Link to={`/blog/${post.slug}`} className="related-articles__link">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
