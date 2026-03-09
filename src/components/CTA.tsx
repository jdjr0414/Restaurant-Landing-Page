import '../styles/globals.css';
import '../styles/landing.css';
import { FIND_MATCH_URL, AXIANT_LINK_REL } from '../config';

const CTA_IMAGE = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=90';

export function CTA() {
  return (
    <>
      <section id="apply" className="cta">
        <div className="cta__layout">
          <div className="cta__inner">
          <h2 className="cta__title">Ready to See What’s Out There?</h2>
          <p className="cta__subtitle">
            If you’re facing a cash flow crunch, payroll gap, or need to cover equipment or inventory, you can explore options that match your situation.
          </p>
          <p className="cta__reassurance">No obligation. Many restaurant owners take this step to see what fits. Most see their options in minutes.</p>
          <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL} className="btn btn-primary cta__btn">
            Explore Restaurant Funding Options
          </a>
        </div>
          <figure className="cta__figure" aria-hidden>
            <img src={CTA_IMAGE} alt="" width={800} height={800} className="cta__img" />
          </figure>
        </div>
      </section>
      <div className="cta-sticky" aria-hidden>
        <a href={FIND_MATCH_URL} target="_blank" rel={AXIANT_LINK_REL} className="btn btn-primary cta-sticky__btn">
          See What Restaurant Funding Options May Be Available
        </a>
      </div>
    </>
  );
}
