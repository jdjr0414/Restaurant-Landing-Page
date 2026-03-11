import { useLocation, Navigate } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';
import { BreadcrumbSchema } from '../components/BreadcrumbSchema';
import { WebPageSchema } from '../components/WebPageSchema';
import { FaqSchema } from '../components/FaqSchema';
import { BlogFaqSchema } from '../components/BlogFaqSchema';
import { TopicFaqBlock } from '../components/TopicFaqBlock';
import { CTA } from '../components/CTA';
import { PageHero } from '../components/PageHero';
import { getTopicPage } from '../data/topicPages';
import { getMeta } from '../staticMeta';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/layout.css';
import '../styles/blog.css';

export function TopicPage() {
  const { pathname } = useLocation();
  const page = getTopicPage(pathname);

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
      <WebPageSchema name={page.h1} description={page.description} urlPath={page.path} datePublished={page.datePublished} dateModified={page.dateModified} />
      {pathname === '/faq' && <FaqSchema />}
      {page.faqItems?.length ? <BlogFaqSchema items={page.faqItems} urlPath={page.path} /> : null}
      <PageHero />
      <main className="page-main supporting-page">
        <div className="page-content" {...(pathname === '/faq' && { 'data-speakable-faq': '' })}>
          <h1 className="page-title">{page.h1}</h1>
          <p className="page-lead">{page.lead}</p>
          {page.sections.map((section) => (
            <section key={section.h2} className="prose-block">
              <h2>{section.h2}</h2>
              {section.content}
            </section>
          ))}
          {page.faqItems?.length ? (
            <section className="prose-block" id="faq">
              <h2>Frequently Asked Questions</h2>
              <TopicFaqBlock items={page.faqItems} />
            </section>
          ) : null}
        </div>
      </main>
      <CTA />
    </>
  );
}
