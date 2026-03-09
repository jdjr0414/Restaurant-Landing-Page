import { SITE_URL } from '../config';
import type { BlogPostFaqItem } from '../data/blogPosts';

interface BlogFaqSchemaProps {
  items: BlogPostFaqItem[];
  /** Optional URL path for this page (e.g. /blog/restaurant-payroll-gap) for speakable cssSelector. */
  urlPath?: string;
}

/** FAQ schema for blog posts. Use route-specific FAQ items, not global. Includes SpeakableSpecification for AEO. */
export function BlogFaqSchema({ items, urlPath }: BlogFaqSchemaProps) {
  if (!items?.length) return null;
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    ...(urlPath && {
      '@id': `${SITE_URL}${urlPath}#faq`,
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['[data-speakable-faq]'],
      },
    }),
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
