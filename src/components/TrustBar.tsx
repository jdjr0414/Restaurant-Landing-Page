import '../styles/globals.css';
import '../styles/landing.css';

const STATS = [
  { value: '24–48hr', label: 'Funding speed' },
  { value: '$50M+', label: 'Funded to date' },
  { value: '1,200+', label: 'Restaurants helped' },
];

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Key stats">
      <div className="trust-bar__inner">
        {STATS.map(({ value, label }) => (
          <div key={label} className="trust-bar__item">
            <span className="trust-bar__value">{value}</span>
            <span className="trust-bar__label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
