import type { BlogPostFaqItem } from '../data/blogPosts';

interface BlogFaqSchemaProps {
  items: BlogPostFaqItem[];
}

/** FAQ schema for blog posts. Use route-specific FAQ items, not global. */
export function BlogFaqSchema({ items }: BlogFaqSchemaProps) {
  if (!items?.length) return null;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
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
