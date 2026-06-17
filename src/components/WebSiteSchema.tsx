import { SITE_URL, SITE_NAME, SITE_LOGO, PHONE_NUMBER } from '../config';

/** WebSite + Organization schema for homepage. Helps search engines and AI understand site identity. */
export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description:
          'Practical guides for restaurant owners on cash flow problems, working capital, and funding options. Understand why restaurants run out of cash and what options exist.',
        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: SITE_LOGO,
        },
        telephone: PHONE_NUMBER,
        areaServed: { '@type': 'Country', name: 'United States' },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: PHONE_NUMBER,
          contactType: 'customer support',
          areaServed: 'US',
          availableLanguage: 'English',
        },
        knowsAbout: [
          'restaurant cash flow',
          'restaurant funding',
          'merchant cash advance',
          'restaurant working capital',
          'MCA debt restructuring',
          'restaurant payroll funding',
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
