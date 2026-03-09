import { useLocation, Navigate } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { CTA } from '../components/CTA';
import { PageHero } from '../components/PageHero';
import { WebPageSchema } from '../components/WebPageSchema';
import { getPillarPage } from '../data/pillarPages';
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
        </div>
      </main>
      <CTA />
    </>
  );
}
