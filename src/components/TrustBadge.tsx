/** Trust badge for E-E-A-T: signals lender-neutral, informational content. */
export function TrustBadge() {
  return (
    <p className="trust-badge" role="status" aria-label="Content verification">
      <span className="trust-badge__icon" aria-hidden>✓</span>
      <span className="trust-badge__text">Lender-neutral. Informational only.</span>
    </p>
  );
}
