import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import '../styles/globals.css';
import '../styles/layout.css';

export function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found | Restaurant Owner's Guide"
        description="The page you're looking for could not be found."
        canonicalPath="/404"
        noindex
      />
      <main className="page-main">
        <div className="page-content" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <h1 className="page-title">Page Not Found</h1>
          <p style={{ marginTop: '1rem', marginBottom: '1.5rem' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p>
            <Link to="/">Go to homepage</Link>
            {' · '}
            <Link to="/blog">Blog</Link>
            {' · '}
            <Link to="/sitemap">Sitemap</Link>
          </p>
        </div>
      </main>
    </>
  );
}
