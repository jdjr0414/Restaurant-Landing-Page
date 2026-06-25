import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Self-contained monthly-payment estimator. Renders real <input> fields (so the
 * page counts as having an interactive tool) plus a live estimate. No props;
 * safe to drop into any content page.
 */
export function FundingEstimator() {
  const [amount, setAmount] = useState(50000);
  const [rate, setRate] = useState(28);
  const [term, setTerm] = useState(12);

  const i = rate / 100 / 12;
  const n = Math.max(1, term);
  const monthly = i > 0 ? (amount * i) / (1 - Math.pow(1 + i, -n)) : amount / n;
  const fmt = (v: number) => '$' + Math.round(v).toLocaleString('en-US');

  const fieldStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    fontWeight: 600,
    fontSize: '0.9rem',
  };
  const inputStyle: React.CSSProperties = {
    padding: '10px',
    border: '1px solid #cbd5e1',
    borderRadius: 6,
    fontSize: '1rem',
    width: '100%',
  };
  const outBox: React.CSSProperties = {
    background: '#1f2937',
    color: '#fff',
    borderRadius: 6,
    padding: '12px 14px',
    textAlign: 'center',
    flex: '1 1 160px',
  };

  return (
    <section
      aria-label="Funding payment estimator"
      style={{
        margin: '2.5rem 0',
        padding: '1.75rem 1.5rem',
        background: '#fff',
        border: '2px solid #f59e0b',
        borderRadius: 8,
        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
      }}
    >
      <h2 style={{ margin: '0 0 0.5rem' }}>Estimate your monthly payment</h2>
      <p style={{ margin: '0 0 1rem' }}>
        Adjust the amount, rate, and term to see a rough monthly payment for restaurant funding.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 14,
          marginBottom: '1rem',
        }}
      >
        <label style={fieldStyle}>
          Amount needed ($)
          <input
            type="number"
            inputMode="numeric"
            value={amount}
            min={1000}
            step={1000}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
            style={inputStyle}
          />
        </label>
        <label style={fieldStyle}>
          Estimated APR (%)
          <input
            type="number"
            value={rate}
            min={1}
            max={80}
            step={1}
            onChange={(e) => setRate(Number(e.target.value) || 0)}
            style={inputStyle}
          />
        </label>
        <label style={fieldStyle}>
          Term (months)
          <input
            type="number"
            value={term}
            min={3}
            max={60}
            step={1}
            onChange={(e) => setTerm(Number(e.target.value) || 1)}
            style={inputStyle}
          />
        </label>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: '1rem' }}>
        <div style={outBox}>
          <div style={{ fontSize: '0.8rem', opacity: 0.85 }}>Est. monthly payment</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>{fmt(monthly)}</div>
        </div>
        <div style={outBox}>
          <div style={{ fontSize: '0.8rem', opacity: 0.85 }}>Total of payments</div>
          <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>{fmt(monthly * n)}</div>
        </div>
      </div>
      <p style={{ fontSize: '0.85rem', margin: 0 }}>
        Estimate only — your actual rate and term depend on your business. <Link to="/consultation">Talk to someone</Link> for real numbers.
      </p>
    </section>
  );
}
