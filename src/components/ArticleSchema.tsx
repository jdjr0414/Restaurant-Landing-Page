import { SITE_URL, SITE_NAME, SITE_LOGO } from '../config';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  urlPath: string;
  /** Optional section/category for topical relevance */
  articleSection?: string;
}

export function ArticleSchema({ headline, description, datePublished, urlPath, articleSection = 'Restaurant Cash Flow & Funding' }: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: description.slice(0, 200),
    datePublished,
    dateModified: datePublished,
    url: `${SITE_URL}${urlPath}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${urlPath}` },
    articleSection,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: SITE_LOGO,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
