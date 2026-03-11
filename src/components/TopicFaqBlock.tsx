import { useState } from 'react';
import type { TopicFaqItem } from '../data/topicPages';

interface TopicFaqBlockProps {
  items: TopicFaqItem[];
}

/** Renders FAQ accordion for topic pages. Uses same styles as FAQ component. */
export function TopicFaqBlock({ items }: TopicFaqBlockProps) {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <dl className="faq__list">
      {items.map((item, i) => (
        <div
          key={item.q}
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
              {item.q}
            </button>
          </dt>
          <dd
            id={`faq-answer-${i}`}
            className="faq__answer"
            role="region"
            aria-labelledby={`faq-question-${i}`}
            hidden={openId !== i}
          >
            {item.a}
          </dd>
        </div>
      ))}
    </dl>
  );
}
