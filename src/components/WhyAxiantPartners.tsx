import '../styles/globals.css';
import '../styles/landing.css';

export function WhyAxiantPartners() {
  return (
    <section className="landing-section why-axiant">
      <h2 className="section-title">Why Restaurant Owners Choose Axiant Partners</h2>
      <p className="section-subtitle">
        We connect restaurant operators with funding options that fit how you run your business—fast decisions, clear terms, and support when you need it.
      </p>
      <ul className="why-axiant__grid">
        <li className="why-axiant__card">
          <span className="why-axiant__icon" aria-hidden>✓</span>
          <strong>Restaurant expertise</strong>
          <span>We understand seasonal sales, payroll cycles, and the costs of running a food business.</span>
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
        <a href="/about">Learn more about Axiant Partners</a> and how we help restaurants access working capital.
      </p>
    </section>
  );
}
