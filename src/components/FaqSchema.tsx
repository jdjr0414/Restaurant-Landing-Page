import { SITE_URL } from '../config';
import { faqItems } from '../data/faq';

interface FaqSchemaProps {
  /** Base path for @id when FAQ is on a non-FAQ page (e.g. /restaurant-cash-advance). Defaults to /faq. */
  basePath?: string;
}

export function FaqSchema({ basePath = '/faq' }: FaqSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${basePath}${basePath === '/faq' ? '#faqpage' : '#faq'}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['[data-speakable-faq]'],
    },
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
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
