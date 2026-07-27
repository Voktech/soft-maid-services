import React from 'react';

const reviews = [
  { text: '"Soft Maid Services has been a lifesaver for our villa in West Bay. The maid arrived right on time, extremely polite and detailed!"', author: 'Fatima Al-Thani', location: 'West Bay, Doha' },
  { text: '"We order weekly 4-hour sessions for our apartment in Pearl-Qatar. Super convenient to book on WhatsApp with transparent QAR pricing!"', author: 'James & Sarah', location: 'The Pearl, Qatar' },
  { text: '"Their deep cleaning before our move to Lusail was phenomenal. Tiles and kitchen cabinets looked brand new!"', author: 'Mohammed K.', location: 'Lusail City' }
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="section-header">
        <h2 className="section-title">Trusted by Families Across Qatar</h2>
        <p style={{ color: '#64748B' }}>Over 1,200+ satisfied clients in Doha, Pearl-Qatar, and West Bay.</p>
      </div>

      <div className="services-grid">
        {reviews.map((r, idx) => (
          <div key={idx} className="service-card">
            <p style={{ fontStyle: 'italic', color: '#64748B', marginBottom: '20px' }}>{r.text}</p>
            <div style={{ fontWeight: 700, color: '#05668D' }}>— {r.author}</div>
            <div style={{ fontSize: '0.85rem', color: '#00A896' }}>{r.location}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
