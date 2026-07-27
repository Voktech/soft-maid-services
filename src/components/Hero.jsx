import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, Phone, Sparkles, Clock, MapPin } from 'lucide-react';

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
          <a href="https://wa.me/97477123456?text=Hi!%20I%20would%20like%20to%20book%20a%20maid%20in%20Qatar." className="btn btn-whatsapp" target="_blank" rel="noreferrer">
            <MessageSquare size={18} /> Book via WhatsApp (+974)
          </a>
          <a href="tel:+97477123456" className="btn btn-outline">
            <Phone size={18} /> Direct Call (+974)
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

      {/* Visual Service Highlights Card replacing calculator */}
      <div className="glass-calculator" style={{ padding: '36px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EFF6FF', color: '#2563EB', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '16px' }}>
          <Sparkles size={14} /> Quick Booking Overview
        </div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '8px', color: '#0F172A' }}>
          Qatar Housekeeping Services
        </h3>
        <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '24px' }}>
          Instant dispatch to Doha, The Pearl, Lusail, West Bay & Al Wakra.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#F8FAFC', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <div style={{ background: '#EFF6FF', color: '#2563EB', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Clock size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Hourly Maids</div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Flexible booking starting from 35 QAR/hr</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#F8FAFC', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <div style={{ background: '#EFF6FF', color: '#2563EB', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Deep Villa Cleaning</div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>Complete scrubbing & sanitization</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#F8FAFC', padding: '14px 16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
            <div style={{ background: '#EFF6FF', color: '#2563EB', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <MapPin size={20} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>Coverage Areas</div>
              <div style={{ fontSize: '0.8rem', color: '#64748B' }}>All major residential sectors in Qatar</div>
            </div>
          </div>
        </div>

        <a href="https://wa.me/97477123456?text=Hi!%20I%20would%20like%20to%20book%20a%20maid%20in%20Qatar." className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }} target="_blank" rel="noreferrer">
          <MessageSquare size={18} /> Book Housekeeper Now
        </a>
      </div>
    </section>
  );
}
