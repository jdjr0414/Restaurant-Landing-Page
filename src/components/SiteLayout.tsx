import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import { Footer } from './Footer';
import { FIND_MATCH_URL } from '../config';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Cash Flow Guide', href: '/restaurant-cash-advance' },
  { label: 'Working Capital', href: '/restaurant-working-capital' },
  { label: 'Funding Options', href: '/restaurant-funding' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'All Topics', href: '/sitemap' },
];

export function SiteLayout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-header__logo">
            Restaurant Owner&apos;s Guide
          </Link>
          <nav className={`site-header__nav ${mobileNavOpen ? 'site-header__nav--open' : ''}`} aria-label="Main">
            <ul className="site-header__list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link to={href} className="site-header__link" onClick={() => setMobileNavOpen(false)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a href={FIND_MATCH_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary site-header__cta">
            Find options
          </a>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={mobileNavOpen}
            aria-label="Toggle menu"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
