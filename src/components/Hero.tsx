import '../styles/globals.css';
import '../styles/landing.css';

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">
          Cash when you need it.
          <span className="hero__title-accent"> Not when the bank says so.</span>
        </h1>
        <p className="hero__subtitle">
          Restaurant cash advances designed for real operators. Same-day decisions, flexible repayments, and no hidden fees—so you can cover payroll, inventory, or repairs without the runaround.
        </p>
        <div className="hero__actions">
          <a href="#apply" className="btn btn-primary">
            Check your rate
          </a>
          <a href="#how-it-works" className="btn btn-secondary">
            How it works
          </a>
        </div>
      </div>
      <div className="hero__badge">Funding from $5K – $500K</div>
    </header>
  );
}
