import { SITE_URL } from '../config';

/**
 * WebPage schema for pillar and guide pages. Supports AEO (Answer Engine Optimization)
 * by helping search engines understand page type and content.
 */
interface WebPageSchemaProps {
  name: string;
  description: string;
  urlPath: string;
  datePublished?: string;
  dateModified?: string;
}

export function WebPageSchema({ name, description, urlPath, datePublished, dateModified }: WebPageSchemaProps) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url: `${SITE_URL}${urlPath}`,
  };
  if (datePublished) schema.datePublished = datePublished;
  if (dateModified) schema.dateModified = dateModified;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
