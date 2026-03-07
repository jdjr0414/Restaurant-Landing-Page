import { useState } from 'react';
import '../styles/globals.css';
import '../styles/landing.css';
import { faqItems } from '../data/faq';

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section id="faq" className="landing-section faq">
      <h2 className="section-title">Frequently asked questions</h2>
      <p className="section-subtitle">
        Quick answers to what restaurant owners ask most.
      </p>
      <dl className="faq__list">
        {faqItems.map((item, i) => (
          <div
            key={item.question}
            className={`faq__item ${openId === i ? 'faq__item--open' : ''}`}
          >
            <dt className="faq__question">
              <button
                type="button"
                onClick={() => setOpenId(openId === i ? null : i)}
                aria-expanded={openId === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                {item.question}
              </button>
            </dt>
            <dd
              id={`faq-answer-${i}`}
              className="faq__answer"
              role="region"
              aria-labelledby={`faq-question-${i}`}
              hidden={openId !== i}
            >
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
