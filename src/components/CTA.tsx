import '../styles/globals.css';
import '../styles/landing.css';
import { FIND_MATCH_URL } from '../config';

export function CTA() {
  return (
    <>
      <section id="apply" className="cta">
        <div className="cta__inner">
          <h2 className="cta__title">Ready to See What’s Out There?</h2>
          <p className="cta__subtitle">
            If you’re facing a cash flow crunch, payroll gap, or need to cover equipment or inventory, you can explore options that match your situation. No obligation to proceed.
          </p>
          <a href={FIND_MATCH_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary cta__btn">
            Find options that may help
          </a>
        </div>
      </section>
      <div className="cta-sticky" aria-hidden>
        <a href={FIND_MATCH_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-sticky__btn">
          Find options that may help
        </a>
      </div>
    </>
  );
}
