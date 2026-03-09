import { Link } from 'react-router-dom';
import '../styles/globals.css';
import '../styles/landing.css';

export function RestaurantCashFlowChallenges() {
  return (
    <section className="landing-section cash-flow-challenges">
      <h2 className="section-title">Restaurant Cash Flow Challenges</h2>
      <p className="section-subtitle">
        Many restaurant owners face the same cash flow problems: revenue that doesn’t line up with when bills are due, seasonal dips, and unexpected expenses. The <Link to="/restaurant-cash-flow-guide">restaurant cash flow guide</Link> explains these challenges in depth. Here’s how funding can help.
      </p>
      <ul className="cash-flow-challenges__list">
        <li><strong>Seasonal slowdowns</strong> — Revenue drops in off-peak months while rent, payroll, and utilities stay the same. Working capital can bridge the gap until traffic picks up.</li>
        <li><strong>Payroll before the rush</strong> — You need to staff up before a busy season or event, but cash is tight. Funding can cover labor costs until revenue arrives.</li>
        <li><strong>Equipment emergencies</strong> — A broken walk-in or oven can’t wait. Fast funding can help you repair or replace equipment without draining reserves.</li>
        <li><strong>Inventory spikes</strong> — Stocking up for the holidays or a big catering job requires cash upfront. A restaurant cash advance can fund inventory when you need it.</li>
        <li><strong>Delayed receivables</strong> — When payments from caterings, events, or partners are slow, you still have to pay suppliers and staff. Short-term funding can cover the gap.</li>
      </ul>
    </section>
  );
}
