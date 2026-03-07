import '../styles/globals.css';
import '../styles/landing.css';

const TYPES = [
  'Full-service restaurants',
  'Quick service & fast casual',
  'Bars & breweries',
  'Catering companies',
  'Food trucks',
  'Bakeries & cafés',
];

export function RestaurantTypes() {
  return (
    <section className="landing-section restaurant-types">
      <h2 className="section-title">Built for every kind of restaurant</h2>
      <p className="section-subtitle">
        We work with independent operators and small chains across the food and beverage industry.
      </p>
      <ul className="restaurant-types__list">
        {TYPES.map((type) => (
          <li key={type} className="restaurant-types__item">{type}</li>
        ))}
      </ul>
    </section>
  );
}
