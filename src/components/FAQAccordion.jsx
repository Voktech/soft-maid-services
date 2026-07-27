import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  { q: 'Do I need to provide cleaning supplies and detergents?', a: 'You can provide your own preferred cleaning supplies, or you can opt for our maid to bring complete cleaning materials for an additional +10 QAR/hour.' },
  { q: 'Are your housekeepers background checked and police cleared?', a: 'Yes! 100% of our maids and housekeepers undergo strict criminal background verification, medical health checks, and professional training in Qatar before assignment.' },
  { q: 'What areas in Qatar do you cover?', a: 'We cover all major regions across Qatar including Doha, The Pearl-Qatar, Lusail City, West Bay, Al Rayyan, Al Wakra, Ain Khaled, and Abu Hamour.' },
  { q: 'How do I pay for the service?', a: 'Payment can be made easily via Cash to the housekeeper after service completion, or via online bank transfer / QPAY link upon request.' }
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="section-header">
        <span className="section-tag">Got Questions?</span>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-desc">Everything you need to know about booking housekeepers in Qatar.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`faq-box ${activeIndex === idx ? 'open' : ''}`}>
            <div
              className="faq-q"
              onClick={() => setActiveIndex(activeIndex === idx ? -1 : idx)}
            >
              <span>{faq.q}</span>
              {activeIndex === idx ? <ChevronUp size={20} color="#2563EB" /> : <ChevronDown size={20} color="#64748B" />}
            </div>
            {activeIndex === idx && (
              <div className="faq-a">{faq.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
