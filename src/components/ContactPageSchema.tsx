import { SITE_URL, SITE_NAME } from '../config';

/** JSON-LD ContactPage for /consultation (rich results). */
const CONTACT_PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Free Restaurant Funding Consultation',
  description:
    'Book a free consultation to discuss restaurant cash flow, payroll gaps, or funding options with a restaurant funding specialist.',
  url: `${SITE_URL}/consultation`,
  mainEntity: {
    '@type': 'Organization',
    name: SITE_NAME,
    telephone: '+19199072611',
    url: SITE_URL,
  },
};

export function ContactPageSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(CONTACT_PAGE_SCHEMA) }}
    />
  );
}
