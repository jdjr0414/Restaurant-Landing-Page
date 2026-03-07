import '../styles/globals.css';
import '../styles/landing.css';

const LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#apply' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <nav className="footer__nav" aria-label="Footer">
          {LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="footer__link">
              {label}
            </a>
          ))}
        </nav>
        <p className="footer__copy">
          © {year} Restaurant Cash Advance. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
