import { Link } from 'react-router-dom';
import { PHONE_NUMBER, PHONE_HREF } from '../config';

/**
 * Inclusive callout for MCA relief pages. The pages target restaurant search intent
 * (titles/H1s keep "restaurant"), but MCA debt relief works the same in every industry —
 * this note reassures non-restaurant business owners that the same help applies to them
 * and gives them a direct way to reach out, so we don't lose those leads.
 */
export function AllIndustriesNote() {
  return (
    <aside
      className="all-industries-note"
      aria-label="We help businesses in every industry"
      style={{
        background: 'var(--color-surface)',
        borderLeft: '4px solid var(--color-primary)',
        borderRadius: '8px',
        padding: '1rem 1.25rem',
        margin: '1.25rem 0',
      }}
    >
      <p style={{ margin: 0 }}>
        <strong>Not a restaurant? We help all businesses.</strong> This guide is written for
        restaurant owners, but merchant cash advance debt works the same in every industry —
        trucking, construction, retail, medical, auto, salons, and more. If MCA payments are
        crushing your cash flow, the options here apply to your business too.{' '}
        <Link to="/consultation">Request a free consultation</Link> or call{' '}
        <a href={PHONE_HREF}>{PHONE_NUMBER}</a>.
      </p>
    </aside>
  );
}
