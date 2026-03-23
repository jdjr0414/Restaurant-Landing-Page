import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { ContactPageSchema } from '../components/ContactPageSchema';
import { PageHero } from '../components/PageHero';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { CONSULTATION_BOOKING_URL, AXIANT_LINK_REL } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

export function ConsultationPage() {
  return (
    <>
      <SeoHead
        title="Free Consultation | Restaurant Cash Flow & Funding | The Restaurant Owners Guide"
        description="Book a free consultation to discuss your restaurant cash flow, payroll gaps, seasonal slumps, or funding options. No obligation—get clarity on what might fit your situation."
        canonicalPath="/consultation"
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Free Consultation', path: '/consultation' }]} />
      <ContactPageSchema />
      <PageHero />
      <main className="page-main">
        <div className="page-content">
          <section className="consultation-section consultation-section--with-form">
            <h1 className="consultation-section__title">Free Consultation</h1>
            <p className="consultation-section__lead">
              Schedule a free call or fill out the form below. We&apos;ll reach out within 1 business day — often same day.
            </p>
            <LeadCaptureForm source="consultation-page" />
            <p className="consultation-section__alt">
              Prefer to schedule a time?{' '}
              <a href={CONSULTATION_BOOKING_URL} target="_blank" rel={AXIANT_LINK_REL} className="consultation-section__alt-link">
                Book a Free Consultation
              </a>
            </p>
            <p className="consultation-section__disclaimer">
              No obligation. Not all applicants qualify. Terms vary by provider.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
