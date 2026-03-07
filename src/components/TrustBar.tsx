import '../styles/globals.css';
import '../styles/landing.css';

const ITEMS = [
  'Cash flow & timing gaps',
  'Payroll & seasonal crunches',
  'Equipment & emergency costs',
  'Understanding your options',
];

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Trust signals">
      <div className="trust-bar__inner trust-bar__inner--strip">
        {ITEMS.map((label) => (
          <span key={label} className="trust-bar__pill">
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}
