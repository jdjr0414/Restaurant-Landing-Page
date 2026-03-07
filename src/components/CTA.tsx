import '../styles/globals.css';
import '../styles/landing.css';

export function CTA() {
  return (
    <section id="apply" className="cta">
      <div className="cta__inner">
        <h2 className="cta__title">Ready to get funded?</h2>
        <p className="cta__subtitle">
          See your offer in minutes. No impact on your credit score.
        </p>
        <a href="#apply" className="btn btn-primary cta__btn">
          Check your rate
        </a>
      </div>
    </section>
  );
}
