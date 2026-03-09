import { SITE_URL } from '../config';

interface HowToStep {
  name: string;
  text: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  urlPath: string;
  steps: HowToStep[];
}

/** HowTo schema for step-by-step guides. Supports rich results and voice search. */
export function HowToSchema({ name, description, urlPath, steps }: HowToSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description: description.slice(0, 200),
    url: `${SITE_URL}${urlPath}`,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
