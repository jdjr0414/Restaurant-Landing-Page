import { SITE_URL } from '../config';

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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
