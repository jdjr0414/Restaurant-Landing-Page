import '../styles/globals.css';
import '../styles/landing.css';

const ROWS = [
  { feature: 'Same-day decision', us: 'Yes', others: 'Often 1–2 weeks' },
  { feature: 'Repayment tied to sales', us: 'Yes', others: 'Fixed monthly' },
  { feature: 'No collateral required', us: 'Yes', others: 'Sometimes' },
  { feature: 'Transparent fees', us: 'Yes', others: 'Varies' },
];

export function Comparison() {
  return (
    <section className="landing-section comparison">
      <h2 className="section-title">Why restaurant cash advance</h2>
      <p className="section-subtitle">
        Compared to traditional loans and other financing, we’re built for the way restaurants actually run.
      </p>
      <div className="comparison__table-wrap">
        <table className="comparison__table">
          <thead>
            <tr>
              <th scope="col">Feature</th>
              <th scope="col">Us</th>
              <th scope="col">Banks & others</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(({ feature, us, others }) => (
              <tr key={feature}>
                <td>{feature}</td>
                <td className="comparison__us">{us}</td>
                <td className="comparison__others">{others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
