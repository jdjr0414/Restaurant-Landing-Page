import { FormEvent, useState } from 'react';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { ContactPageSchema } from '../components/ContactPageSchema';
import { PageHero } from '../components/PageHero';
import { CONSULTATION_BOOKING_URL, AXIANT_LINK_REL } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

const FORMSPREE_ACTION = 'https://formspree.io/f/xbdzbqjw';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

function ConsultationForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ACTION, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="lead-form lead-form--success" role="status">
        <p className="lead-form__success-text">
          We got your message. Someone will call you within 1 business day — often same day.
        </p>
      </div>
    );
  }

  return (
    <form className="lead-form" method="POST" action={FORMSPREE_ACTION} onSubmit={handleSubmit}>
      <input type="hidden" name="_source" value="restaurantownersguide" />

      <div className="lead-form__row lead-form__row--2">
        <div className="lead-form__field">
          <label htmlFor="consult-first-name" className="lead-form__label">
            First Name
          </label>
          <input
            id="consult-first-name"
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className="lead-form__input"
          />
        </div>
        <div className="lead-form__field">
          <label htmlFor="consult-last-name" className="lead-form__label">
            Last Name
          </label>
          <input
            id="consult-last-name"
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className="lead-form__input"
          />
        </div>
      </div>

      <div className="lead-form__field">
        <label htmlFor="consult-phone" className="lead-form__label">
          Best Phone Number
        </label>
        <input
          id="consult-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className="lead-form__input"
        />
      </div>

      <div className="lead-form__field">
        <label htmlFor="consult-email" className="lead-form__label">
          Email
        </label>
        <input
          id="consult-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="lead-form__input"
        />
      </div>

      <div className="lead-form__field">
        <label htmlFor="consult-revenue" className="lead-form__label">
          Monthly Revenue
        </label>
        <select id="consult-revenue" name="monthlyRevenue" required className="lead-form__select">
          <option value="">Select a range</option>
          <option value="Under $10K">Under $10K</option>
          <option value="$10K-$25K">$10K-$25K</option>
          <option value="$25K-$50K">$25K-$50K</option>
          <option value="$50K-$100K">$50K-$100K</option>
          <option value="Over $100K">Over $100K</option>
        </select>
      </div>

      <div className="lead-form__field">
        <label htmlFor="consult-help" className="lead-form__label">
          What do you need help with?
        </label>
        <textarea
          id="consult-help"
          name="helpNeed"
          rows={5}
          required
          className="lead-form__textarea"
          placeholder='Example: Payroll is due Friday and I am $8,000 short. Or: My walk-in broke last night and need repair funding.'
        />
      </div>

      {status === 'error' && (
        <p className="lead-form__error" role="alert">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button type="submit" className="btn btn-primary lead-form__submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : "Get Help Now — We'll Call You Back"}
      </button>
    </form>
  );
}

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
            <ConsultationForm />
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
