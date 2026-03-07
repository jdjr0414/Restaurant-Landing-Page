import '../styles/globals.css';
import '../styles/landing.css';

const STEPS = [
  {
    step: '1',
    title: 'Tell us about your restaurant',
    description: 'Share basic business and revenue details so providers can understand your needs and fit.',
  },
  {
    step: '2',
    title: 'Review your options',
    description: 'We present funding options tailored to your situation. No obligation to proceed.',
  },
  {
    step: '3',
    title: 'Receive funding and use it for business needs',
    description: 'Once approved, funds go to your account quickly. Use them for payroll, inventory, equipment, or other operating needs.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="landing-section how-it-works">
      <h2 className="section-title">How a Restaurant Cash Advance Works</h2>
      <p className="section-subtitle">
        A simple process from application to funding. Many providers keep it straightforward so you can focus on your restaurant.
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
