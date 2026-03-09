import { SITE_URL, SITE_NAME, SITE_LOGO } from '../config';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  urlPath: string;
  /** Optional section/category for topical relevance */
  articleSection?: string;
  /** Optional keywords for topical relevance (3-5 terms) */
  keywords?: string[];
  /** Optional modified date; defaults to datePublished */
  dateModified?: string;
}

export function ArticleSchema({ headline, description, datePublished, urlPath, articleSection = 'Restaurant Cash Flow & Funding', keywords, dateModified }: ArticleSchemaProps) {
  const modified = dateModified ?? datePublished;
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: description.slice(0, 200),
    datePublished,
    dateModified: modified,
    url: `${SITE_URL}${urlPath}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}${urlPath}` },
    articleSection,
    author: [
      {
        '@type': 'Person',
        name: 'Editorial Team',
        jobTitle: 'Editor',
        worksFor: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
      },
      {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
    ],
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
  if (keywords && keywords.length > 0) {
    schema.keywords = keywords.join(', ');
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
