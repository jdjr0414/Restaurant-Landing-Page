import '../styles/globals.css';
import '../styles/landing.css';
import { FIND_MATCH_URL } from '../config';

export function WhyAxiantPartners() {
  return (
    <section className="landing-section why-axiant">
      <h2 className="section-title">Why Restaurant Owners Explore Funding Options</h2>
      <p className="section-subtitle">
        Many providers connect restaurant operators with funding that fits how you run your business—fast decisions, clear terms, and support when you need it.
      </p>
      <ul className="why-axiant__grid">
        <li className="why-axiant__card">
          <span className="why-axiant__icon" aria-hidden>✓</span>
          <strong>Restaurant expertise</strong>
          <span>Lenders that focus on food service understand seasonal sales, payroll cycles, and the costs of running a restaurant.</span>
        </li>
        <li className="why-axiant__card">
          <span className="why-axiant__icon" aria-hidden>✓</span>
          <strong>Fast, clear process</strong>
          <span>No runaround. You get a decision quickly and know where you stand.</span>
        </li>
        <li className="why-axiant__card">
          <span className="why-axiant__icon" aria-hidden>✓</span>
          <strong>Human support</strong>
          <span>Real people to answer questions and guide you through your options.</span>
        </li>
      </ul>
      <p className="why-axiant__about">
        <a href={FIND_MATCH_URL} target="_blank" rel="sponsored noopener noreferrer">See options that may match your situation</a> and learn how providers help restaurants access working capital.
      </p>
    </section>
  );
}
