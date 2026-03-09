import '../styles/globals.css';
import '../styles/landing.css';

const HOW_IT_WORKS_IMAGE = 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=90';

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
      <figure className="how-it-works__figure">
        <img src={HOW_IT_WORKS_IMAGE} alt="Team discussion and planning - a straightforward process from application to funding" width={800} height={533} className="how-it-works__img" />
      </figure>
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
