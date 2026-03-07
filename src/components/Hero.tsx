import '../styles/globals.css';
import '../styles/landing.css';
import { FIND_MATCH_URL } from '../config';

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__inner">
        <h1 className="hero__title">Restaurant Cash Flow Problems? Get Clear on Your Options</h1>
        <p className="hero__subtitle">
          Struggling with payroll gaps, seasonal slumps, equipment breakdowns, or bills that don’t line up with revenue? You’re not alone. This guide helps you understand what’s going on and what options exist—so you can decide your next step.
        </p>
        <div className="hero__actions">
          <a href={FIND_MATCH_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Find options that may help
          </a>
          <a href="#why-restaurants-struggle" className="btn btn-secondary">
            Learn what others face
          </a>
        </div>
        <ul className="hero__trust-strip" aria-label="What this guide covers">
          <li>Cash flow and timing gaps</li>
          <li>Payroll and seasonal crunches</li>
          <li>Equipment and emergency costs</li>
          <li>Understanding your options</li>
        </ul>
      </div>
    </header>
  );
}
