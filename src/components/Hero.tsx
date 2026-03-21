import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/landing.css';
import { FIND_MATCH_URL, AXIANT_LINK_REL, PHONE_NUMBER, PHONE_HREF } from '../config';
import { TrustBadge } from './TrustBadge';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=95';

export function Hero() {
  return (
    <header className="hero hero--with-bg">
      <div className="hero__bg-wrap" aria-hidden>
        <img src={HERO_IMAGE} alt="Restaurant dining room with warm lighting, representing the daily reality of running a restaurant business" className="hero__bg-img" />
        <div className="hero__bg-overlay" />
      </div>
      <div className="hero__inner">
        <h1 className="hero__title">
          Restaurant Cash Flow Emergency? We Help Restaurant Owners Find Funding — Fast.
        </h1>
        <p className="hero__subtitle">
          Payroll due Friday. Walk-in broke last night. Vendors calling. Whatever the crisis — restaurant owners use this guide to understand their options and take action.{' '}
          Some see funding in 24–48 hours.
        </p>
        <div className="hero__actions">
          <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL} className="btn btn-primary">
            Explore Restaurant Funding Options
          </a>
          <Link to="/consultation" className="btn btn-secondary">
            Talk to Someone — Free Call
          </Link>
        </div>
        <p className="hero__phone">
          Or call now:{' '}
          <a href={PHONE_HREF} className="hero__phone-link">
            {PHONE_NUMBER}
          </a>
          {' '}— we answer
        </p>
        <ul className="hero__trust-strip" aria-label="What this guide covers">
          <li>Cash flow and timing gaps</li>
          <li>Payroll and seasonal crunches</li>
          <li>Equipment and emergency costs</li>
          <li>Understanding your options</li>
        </ul>
        <TrustBadge />
        <p className="hero__social-proof">Join other restaurant owners who've already explored their options—no obligation, just clarity.</p>
      </div>
    </header>
  );
}
