import '../styles/globals.css';
import '../styles/landing.css';

const SECTION_IMAGE = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=95';

export function WhyRestaurantsUse() {
  return (
    <section id="why-restaurants-struggle" className="landing-section why-restaurants">
      <div className="why-restaurants__layout">
        <div className="why-restaurants__content">
          <h2 className="section-title">Why Restaurants Run Into Cash Flow Problems</h2>
      <p className="section-subtitle">
        Restaurant owners often hit the same walls: revenue that doesn’t line up with when bills are due, seasonal dips, equipment breakdowns, and payroll that can’t wait. Understanding why this happens helps you see what options might fit your situation.
      </p>
      <ul className="why-restaurants__list">
        <li>Slow seasons and uneven cash flow</li>
        <li>Payroll gaps and staffing spikes</li>
        <li>Equipment replacement and repairs</li>
        <li>Walk-in cooler, oven, or fryer breakdowns</li>
        <li>Inventory before holidays or events</li>
        <li>Patio or dining room upgrades</li>
        <li>Bridge funding during delayed receivables</li>
      </ul>
        </div>
        <figure className="why-restaurants__figure">
          <img src={SECTION_IMAGE} alt="Restaurant kitchen and staff during service - representing the daily pressures of running a food business" width={1200} height={800} className="why-restaurants__img" />
        </figure>
      </div>
    </section>
  );
}
