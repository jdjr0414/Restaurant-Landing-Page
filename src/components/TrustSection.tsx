/**
 * Trust/credibility section for E-E-A-T. Explains editorial approach and signals expertise.
 */
export function TrustSection() {
  return (
    <section className="trust-section" aria-labelledby="trust-section-title">
      <h2 id="trust-section-title" className="trust-section__title">
        About This Guide
      </h2>
      <div className="trust-section__content">
        <p>
          <strong>Lender-neutral information.</strong> We explain restaurant cash flow problems and funding options so you can understand what&apos;s going on and decide what fits your situation. We don&apos;t favor any particular lender or product.
        </p>
        <p>
          Content is reviewed for accuracy and updated regularly. Not all applicants qualify for any product; terms vary by provider. This site is for information only—not an offer of credit or a guarantee of approval.
        </p>
      </div>
    </section>
  );
}
