import '../styles/globals.css';
import '../styles/landing.css';

const STEPS = [
  {
    step: '1',
    title: 'Apply in minutes',
    description: 'Share basic business and revenue details. No lengthy paperwork—we use your sales data to assess fit.',
  },
  {
    step: '2',
    title: 'Get a same-day decision',
    description: 'Our team reviews your application quickly. Most applicants get a decision within one business day.',
  },
  {
    step: '3',
    title: 'Receive funds & repay flexibly',
    description: 'Funds go to your account in as fast as 24–48 hours. Repay as a percentage of daily sales—slower days mean smaller payments.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="landing-section how-it-works">
      <h2 className="section-title">How it works</h2>
      <p className="section-subtitle">
        Three steps from application to funding. No games, no surprises.
      </p>
      <ol className="how-it-works__list">
        {STEPS.map(({ step, title, description }) => (
          <li key={step} className="how-it-works__item">
            <span className="how-it-works__number" aria-hidden>{step}</span>
            <div>
              <h3 className="how-it-works__item-title">{title}</h3>
              <p className="how-it-works__item-desc">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
