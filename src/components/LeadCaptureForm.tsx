import { FormEvent, useState } from 'react';

const FORMSPREE_ACTION = 'https://formspree.io/f/xbdzbqjw';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface LeadCaptureFormProps {
  source?: string;
  submitLabel?: string;
}

export function LeadCaptureForm({
  source = 'restaurantownersguide',
  submitLabel = "Get Help Now — We'll Call You Back",
}: LeadCaptureFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('_source', source);

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
      <input type="hidden" name="_source" value={source} />

      <div className="lead-form__row lead-form__row--2">
        <div className="lead-form__field">
          <label htmlFor={`${source}-first-name`} className="lead-form__label">
            First Name
          </label>
          <input
            id={`${source}-first-name`}
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            className="lead-form__input"
          />
        </div>
        <div className="lead-form__field">
          <label htmlFor={`${source}-last-name`} className="lead-form__label">
            Last Name
          </label>
          <input
            id={`${source}-last-name`}
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            className="lead-form__input"
          />
        </div>
      </div>

      <div className="lead-form__field">
        <label htmlFor={`${source}-phone`} className="lead-form__label">
          Best Phone Number
        </label>
        <input
          id={`${source}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          className="lead-form__input"
        />
      </div>

      <div className="lead-form__field">
        <label htmlFor={`${source}-email`} className="lead-form__label">
          Email
        </label>
        <input
          id={`${source}-email`}
          name="email"
          type="email"
          autoComplete="email"
          required
          className="lead-form__input"
        />
      </div>

      <div className="lead-form__field">
        <label htmlFor={`${source}-revenue`} className="lead-form__label">
          Monthly Revenue
        </label>
        <select id={`${source}-revenue`} name="monthlyRevenue" required className="lead-form__select">
          <option value="">Select a range</option>
          <option value="Under $10K">Under $10K</option>
          <option value="$10K-$25K">$10K-$25K</option>
          <option value="$25K-$50K">$25K-$50K</option>
          <option value="$50K-$100K">$50K-$100K</option>
          <option value="Over $100K">Over $100K</option>
        </select>
      </div>

      <div className="lead-form__field">
        <label htmlFor={`${source}-help`} className="lead-form__label">
          What do you need help with?
        </label>
        <textarea
          id={`${source}-help`}
          name="helpNeed"
          rows={5}
          required
          className="lead-form__textarea"
          placeholder="Example: Payroll is due Friday and I am $8,000 short. Or: My walk-in broke last night and need repair funding."
        />
      </div>

      {status === 'error' && (
        <p className="lead-form__error" role="alert">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button type="submit" className="btn btn-primary lead-form__submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : submitLabel}
      </button>
    </form>
  );
}
