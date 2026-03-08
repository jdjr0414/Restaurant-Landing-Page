import { SITE_URL, SITE_NAME } from '../config';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  urlPath: string;
}

export function ArticleSchema({ headline, description, datePublished, urlPath }: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description: description.slice(0, 200),
    datePublished,
    dateModified: datePublished,
    url: `${SITE_URL}${urlPath}`,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
