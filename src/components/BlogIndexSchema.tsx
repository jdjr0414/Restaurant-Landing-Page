import { SITE_URL } from '../config';

interface BlogIndexSchemaProps {
  posts: { slug: string; title: string; publishedDate: string }[];
}

/** ItemList schema for blog index - helps search engines and AI understand article collection. */
export function BlogIndexSchema({ posts }: BlogIndexSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        name: post.title,
        url: `${SITE_URL}/blog/${post.slug}`,
        datePublished: post.publishedDate,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
