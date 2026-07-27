import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, Calculator } from 'lucide-react';
import HeroCard from './HeroCard';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-pill">
          <Star size={16} fill="#2563EB" color="#2563EB" />
          <span>Qatar's Top Rated Housekeeping Agency</span>
        </div>
        <h1 className="hero-title">
          Professional & Vetted <span>Maid Services</span> in Qatar
        </h1>
        <p className="hero-desc">
          Enjoy a spotlessly clean home with our trusted, background-checked housekeepers. Premium hourly maids, deep cleaning, and live-in assistance tailored for Qatar families.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
          <a href="#calculator" className="btn btn-primary">
            <Calculator size={18} /> Estimate QAR Price
          </a>
          <a href="https://wa.me/97477123456?text=Hi!%20I%20need%20a%20maid%20in%20Doha%20today." className="btn btn-whatsapp" target="_blank" rel="noreferrer">
            <MessageSquare size={18} /> Book via WhatsApp (+974)
          </a>
        </div>

        <div style={{ display: 'flex', gap: '24px', paddingTop: '24px', borderTop: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.9rem' }}>
            <CheckCircle2 size={18} color="#2563EB" /> Police Cleared
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.9rem' }}>
            <CheckCircle2 size={18} color="#2563EB" /> Same-Day Available
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '0.9rem' }}>
            <ShieldCheck size={18} color="#2563EB" /> 100% Guaranteed
          </div>
        </div>
      </div>

      <HeroCard />
    </section>
  );
}
