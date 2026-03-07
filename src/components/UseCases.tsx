import '../styles/globals.css';
import '../styles/landing.css';

const CASES = [
  {
    title: 'Payroll & staffing',
    description: 'Cover labor before the busy season or when a big catering order lands.',
  },
  {
    title: 'Inventory & supplies',
    description: 'Stock up on food, beverage, or equipment without draining your account.',
  },
  {
    title: 'Repairs & maintenance',
    description: 'Fix the walk-in, replace the hood, or handle emergencies fast.',
  },
  {
    title: 'Expansion & renovations',
    description: 'Refresh the dining room, add a patio, or open a second location.',
  },
];

export function UseCases() {
  return (
    <section className="landing-section use-cases">
      <h2 className="section-title">Use your advance your way</h2>
      <p className="section-subtitle">
        No restrictions on how you spend the funds. Here’s how other operators use them.
      </p>
      <ul className="use-cases__grid">
        {CASES.map(({ title, description }) => (
          <li key={title} className="use-cases__card">
            <h3 className="use-cases__card-title">{title}</h3>
            <p className="use-cases__card-desc">{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
