import '../styles/globals.css';
import '../styles/landing.css';

export function Comparison() {
  return (
    <section className="landing-section comparison">
      <h2 className="section-title">Restaurant Cash Advance vs Traditional Loan</h2>
      <p className="section-subtitle">
        Understanding the differences helps you choose the right option. Here’s how they compare so you can decide what might fit your situation.
      </p>
      <div className="comparison__content">
        <ul className="comparison__list">
          <li>
            <strong>Speed</strong> — A restaurant cash advance typically offers faster decisions and funding than a traditional bank loan, which can take weeks.
          </li>
          <li>
            <strong>Qualification</strong> — Cash advances often emphasize revenue and sales history rather than credit score alone. Traditional loans usually rely more heavily on credit and collateral.
          </li>
          <li>
            <strong>Repayment</strong> — Repayment is often tied to a percentage of daily sales, so payments flex with your revenue. Traditional loans usually have fixed monthly payments.
          </li>
          <li>
            <strong>Best fit</strong> — A cash advance may be a better fit for short-term working capital needs, seasonal gaps, or when you need funds quickly. A traditional loan may suit longer-term, larger investments when you qualify and prefer fixed terms.
          </li>
        </ul>
        <p className="comparison__disclaimer">
          Terms vary by provider and product. Not all applicants qualify. Reviewing all options and speaking with a provider can help you find the best fit for your restaurant.
        </p>
      </div>
    </section>
  );
}
