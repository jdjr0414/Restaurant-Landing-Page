import { Link } from 'react-router-dom';
import { PHONE_NUMBER, PHONE_HREF } from '../config';
import '../styles/globals.css';
import '../styles/landing.css';

/** Inline callout for high-intent pages — call or book consultation mid-content. */
function MidPageCTA() {
  return (
    <aside className="mid-page-cta" aria-label="Get help now">
      <h3 className="mid-page-cta__heading">Need Help Right Now?</h3>
      <p className="mid-page-cta__line">
        Call us directly:{' '}
        <a href={PHONE_HREF} className="mid-page-cta__phone-link">
          {PHONE_NUMBER}
        </a>
      </p>
      <p className="mid-page-cta__line">Or fill out the form — we call you back within 1 business day</p>
      <div className="mid-page-cta__btn-wrap">
        <Link to="/consultation" className="btn btn-primary">
          Get Free Help Now
        </Link>
      </div>
      <p className="mid-page-cta__disclaimer">No obligation. Free consultation.</p>
    </aside>
  );
}

export default MidPageCTA;
