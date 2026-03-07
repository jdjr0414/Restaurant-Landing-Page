import '../styles/globals.css';
import '../styles/landing.css';

export function Qualifications() {
  return (
    <section className="landing-section qualifications">
      <h2 className="section-title">What Lenders Usually Review</h2>
      <p className="section-subtitle">
        Qualification depends on the provider and product. Not all applicants qualify. Here’s what many lenders look at when evaluating restaurant funding requests.
      </p>
      <ul className="qualifications__list">
        <li><strong>Business revenue and sales history</strong> — Consistent card sales or revenue over recent months</li>
        <li><strong>Time in business</strong> — Some products require a minimum operating history</li>
        <li><strong>Bank statements</strong> — To verify cash flow and business health</li>
        <li><strong>Outstanding obligations</strong> — Existing debt or advances may be considered</li>
      </ul>
      <h3 className="qualifications__subtitle">How much can you qualify for?</h3>
      <p className="qualifications__p">
        Many lenders base the advance amount on your average monthly card sales or revenue. They often look at your last several months of processing or deposits, average that to a monthly figure, and offer a percentage or multiple of that amount—so higher, consistent sales can mean access to more working capital. Exact ranges (from a few thousand dollars up to six figures or more) and the percentage used vary by provider, product, and state. Checking with a provider is the way to see what you may qualify for.
      </p>
      <p className="qualifications__disclaimer">
        Terms and eligibility vary by provider and product. Understanding what’s typically needed can help you see whether you may qualify.
      </p>
    </section>
  );
}
