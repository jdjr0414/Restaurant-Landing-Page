import { useLocation, Navigate, Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { CTA } from '../components/CTA';
import { FundingEstimator } from '../components/FundingEstimator';
import { PageHero } from '../components/PageHero';
import { WebPageSchema } from '../components/WebPageSchema';
import { getPillarPage, pillarPagesConfig } from '../data/pillarPages';
import { getMeta } from '../staticMeta';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

export function PillarPage() {
  const { pathname } = useLocation();
  const page = getPillarPage(pathname);

  if (!page) {
    return <Navigate to="/" replace />;
  }

  const meta = getMeta(pathname);
  const idx = pillarPagesConfig.findIndex((p) => p.path === page.path);
  const relatedPillars = [...pillarPagesConfig.slice(idx + 1), ...pillarPagesConfig.slice(0, idx)].slice(0, 6);
  return (
    <>
      <SeoHead
        title={meta?.title ?? page.title}
        description={meta?.description ?? page.description}
        canonicalPath={page.path}
        image={meta?.image}
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: page.h1, path: page.path }]} />
      <WebPageSchema name={page.h1} description={page.description} urlPath={page.path} />
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content">
          <h1 className="page-title">{page.h1}</h1>
          {page.sections.map((section) => (
            <section key={section.h2} className="prose-block">
              <h2>{section.h2}</h2>
              {section.content}
            </section>
          ))}
          <FundingEstimator />
          <section className="prose-block">
            <h2>Related restaurant funding guides</h2>
            <ul>
              {relatedPillars.map((p) => (
                <li key={p.path}>
                  <Link to={p.path}>{p.h1}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <CTA />
    </>
  );
}
