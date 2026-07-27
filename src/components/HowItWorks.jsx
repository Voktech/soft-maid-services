import React from 'react';

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works" style={{ background: '#FFFFFF', borderRadius: '24px' }}>
      <div className="section-header">
        <h2 className="section-title">Book a Maid in 3 Easy Steps</h2>
        <p style={{ color: '#64748B' }}>Fast, hassle-free booking directly via WhatsApp without complex forms.</p>
      </div>

      <div className="steps-grid">
        <div className="step-card">
          <div className="step-num">1</div>
          <h3>Select Your Service</h3>
          <p style={{ color: '#64748B', marginTop: '12px' }}>Choose hourly, deep cleaning, or live-in options in our QAR estimator above.</p>
        </div>

        <div className="step-card">
          <div className="step-num">2</div>
          <h3>Confirm via WhatsApp</h3>
          <p style={{ color: '#64748B', marginTop: '12px' }}>Click to send your pre-filled details to our 24/7 Qatar dispatch coordinator.</p>
        </div>

        <div className="step-card">
          <div className="step-num">3</div>
          <h3>Enjoy a Clean Home</h3>
          <p style={{ color: '#64748B', marginTop: '12px' }}>Our trained housekeeper arrives promptly at your villa or apartment.</p>
        </div>
      </div>
    </section>
  );
}
