import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
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
      <main className="page-main">
        <div className="page-content">
          <section className="consultation-section">
            <h1 className="consultation-section__title">Free Consultation</h1>
            <p className="consultation-section__lead">
              Schedule a free call to discuss your restaurant cash flow, payroll gaps, seasonal slumps, or funding options. No obligation—just clarity on what might fit your situation.
            </p>
            <a
              href={CONSULTATION_BOOKING_URL}
              target="_blank"
              rel={AXIANT_LINK_REL}
              className="btn btn-primary consultation-section__btn"
            >
              Book a Free Consultation
            </a>
            <p className="consultation-section__sub">
              Pick a time that works for you. The consultation is free and typically takes 15–20 minutes. You&apos;ll leave with a clearer picture of your options.
            </p>
            <div className="consultation-section__links">
              <p>Before or after your call, explore our guides:</p>
              <ul>
                <li><Link to="/restaurant-cash-flow-guide">Restaurant Cash Flow Guide</Link></li>
                <li><Link to="/restaurant-funding-options">Restaurant Funding Options</Link></li>
                <li><Link to="/restaurant-working-capital-guide">Restaurant Working Capital Guide</Link></li>
                <li><Link to="/restaurant-cash-advance">Restaurant Cash Advance</Link></li>
                <li><Link to="/restaurant-funding">Restaurant Funding</Link></li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
