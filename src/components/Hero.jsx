import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Phone, HeartHandshake, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-pill">
          <Star size={16} fill="#0084C7" color="#0084C7" />
          <span>Soft Maid Cleaning & Hospitality Services 🧹</span>
        </div>
        <h1 className="hero-title">
          Trusted Housekeeping & <span>Elderly Care</span> in Qatar
        </h1>
        <p className="hero-desc">
          Professional, background-checked housekeepers, elderly caregivers, and hospitality specialists. Available for Daily, Weekly, Monthly & Yearly contracts across Doha and all Qatar.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <a href="https://wa.me/97477756100?text=Hi!%20I%20would%20like%20to%20book%20a%20housekeeper%20or%20caregiver%20in%20Qatar." className="btn btn-whatsapp" target="_blank" rel="noreferrer">
            <img src="/whatsapp-icon.png" alt="WhatsApp" style={{ height: '22px', width: '22px', borderRadius: '4px', display: 'inline-block' }} />
            <span>WhatsApp Booking (+974 7775 6100)</span>
          </a>
          <a href="tel:+97471456777" className="btn btn-outline">
            <Phone size={18} />
            <span>Call +974 7145 6777</span>
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', paddingTop: '20px', borderTop: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.85rem' }}>
            <CheckCircle2 size={18} color="#0084C7" /> Police Cleared
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.85rem' }}>
            <Calendar size={18} color="#0084C7" /> Daily to Yearly
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.85rem' }}>
            <ShieldCheck size={18} color="#0084C7" /> Bin Omran Based
          </div>
        </div>
      </div>

      {/* Hero Visual Showcase Image Container */}
      <div style={{ position: 'relative' }}>
        <div style={{
          borderRadius: '28px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 75, 135, 0.25)',
          border: '4px solid #FFFFFF',
          position: 'relative'
        }}>
          <img
            src="/hero-maid.jpg"
            alt="Soft Maid Professional Housekeeper Qatar"
            style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: '#F0F9FF', color: '#0084C7', padding: '10px', borderRadius: '12px' }}>
                <HeartHandshake size={22} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#06233B' }}>Vetted & Trained Caregivers</div>
                <div style={{ fontSize: '0.8rem', color: '#526B82' }}>Housekeeping • Elderly Care • Babysitting</div>
              </div>
            </div>
            <a href="https://wa.me/97477756100" target="_blank" rel="noreferrer" style={{ background: '#25D366', color: '#FFF', padding: '10px 16px', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src="/whatsapp-icon.png" alt="WhatsApp" style={{ height: '18px', width: '18px', borderRadius: '3px' }} />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
