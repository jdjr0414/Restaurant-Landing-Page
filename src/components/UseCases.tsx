import '../styles/globals.css';
import '../styles/landing.css';

const CASES = [
  { title: 'Payroll', description: 'Cover labor during slow weeks or when you need extra staff for a rush.' },
  { title: 'Inventory purchases', description: 'Stock up before busy seasons, holidays, or large events.' },
  { title: 'Equipment replacement', description: 'Replace or upgrade kitchen equipment when it fails or holds you back.' },
  { title: 'Emergency repairs', description: 'Handle walk-in cooler, oven, fryer, or other breakdowns fast.' },
  { title: 'Expansion / second location', description: 'Prepare for a new location or major renovation.' },
  { title: 'Seasonal cash flow gaps', description: 'Bridge slow periods until traffic and sales pick up again.' },
  { title: 'Marketing promotions', description: 'Fund campaigns or offers to bring in more customers.' },
  { title: 'Outdoor dining upgrades', description: 'Improve patios, seating, or outdoor service capacity.' },
];

export function UseCases() {
  return (
    <section className="landing-section use-cases">
      <h2 className="section-title">Common Problems Restaurant Owners Face</h2>
      <p className="section-subtitle">
        These are the situations that push restaurant owners to look for help. Knowing what others deal with can help you see whether your situation is similar and what options might exist.
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
