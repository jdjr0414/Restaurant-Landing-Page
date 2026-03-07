import '../styles/globals.css';
import '../styles/landing.css';

const TYPES = [
  'Restaurants',
  'Cafés',
  'Bars',
  'Bakeries',
  'Food trucks',
  'Pizzerias',
  'Franchises',
  'Quick-service restaurants',
  'Fine dining',
  'Catering businesses',
];

export function RestaurantTypes() {
  return (
    <section className="landing-section restaurant-types">
      <h2 className="section-title">Restaurant Types That Often Qualify</h2>
      <p className="section-subtitle">
        Lenders and providers often work with a wide range of food and beverage businesses—from independent operators to small chains, including food trucks.
      </p>
      <ul className="restaurant-types__list">
        {TYPES.map((type) => (
          <li key={type} className="restaurant-types__item">{type}</li>
        ))}
      </ul>
    </section>
  );
}
