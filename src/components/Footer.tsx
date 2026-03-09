import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/landing.css';
import { SITE_NAME } from '../config';
import { topicPagesConfig } from '../data/topicPages';

const MAIN_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Restaurant Cash Flow Guide', href: '/restaurant-cash-flow-guide' },
  { label: 'Restaurant Funding Options', href: '/restaurant-funding-options' },
  { label: 'Working Capital', href: '/restaurant-working-capital' },
  { label: 'Restaurant Funding', href: '/restaurant-funding' },
  { label: 'Free Consultation', href: '/consultation' },
  { label: 'Business Cash Advance', href: '/business-cash-advance' },
  { label: 'Small Business Funding', href: '/small-business-funding' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'All Topics', href: '/sitemap' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__nav" aria-label="Footer navigation">
          {MAIN_LINKS.map(({ label, href }) => (
            <Link key={href} to={href} className="footer__link">
              {label}
            </Link>
          ))}
        </nav>
        <div className="footer__topics">
          <span className="footer__topics-label">More topics:</span>
          <div className="footer__topics-list">
            {topicPagesConfig.map((page) => (
              <Link key={page.path} to={page.path} className="footer__link footer__link--small">
                {page.h1.split(':')[0].trim()}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer__disclosure">
          <p>
            <strong>Disclaimer:</strong> This site is for information only. Not all applicants qualify for any product. Approval and terms depend on the provider. Funding is not available in all states. This is not an offer of credit or a guarantee of approval.
          </p>
        </div>
        <p className="footer__copy">
          © {year} {SITE_NAME}. Informational use only.
        </p>
      </div>
    </footer>
  );
}
