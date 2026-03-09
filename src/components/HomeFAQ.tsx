import { useState } from 'react';
import { homeFaqItems } from '../data/homeFaq';
import '../styles/globals.css';
import '../styles/landing.css';
import '../styles/blog.css';

export function HomeFAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="home-faq" aria-labelledby="home-faq-title" data-speakable-home-faq>
      <h2 id="home-faq-title" className="section-title">Common Questions Restaurant Owners Ask</h2>
      <p className="section-subtitle">
        Real answers to the questions restaurant owners ask most about cash flow, working capital, and funding options.
      </p>
      <dl className="home-faq__list">
        {homeFaqItems.map((item, i) => (
          <div
            key={item.question}
            className={`home-faq__item ${openId === i ? 'home-faq__item--open' : ''}`}
          >
            <dt className="home-faq__question">
              <button
                type="button"
                onClick={() => setOpenId(openId === i ? null : i)}
                aria-expanded={openId === i}
                aria-controls={`home-faq-answer-${i}`}
                id={`home-faq-question-${i}`}
              >
                {item.question}
              </button>
            </dt>
            <dd
              id={`home-faq-answer-${i}`}
              className="home-faq__answer"
              role="region"
              aria-labelledby={`home-faq-question-${i}`}
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
