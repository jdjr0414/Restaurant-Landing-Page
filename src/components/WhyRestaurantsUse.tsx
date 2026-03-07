import '../styles/globals.css';
import '../styles/landing.css';

export function WhyRestaurantsUse() {
  return (
    <section id="why-restaurants-struggle" className="landing-section why-restaurants">
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
    </section>
  );
}
