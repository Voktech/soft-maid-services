import React from 'react';
import { Heart, Sparkles, ShieldCheck, Home, Baby, Building2, Calendar, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Heart,
    name: 'Elderly Care & Senior Assistance',
    desc: 'Compassionate, trained caregivers providing companionship, mobility support, medication reminders, and daily elder care.',
    tag: 'Dedicated Care',
    image: '/elderly-care.jpg'
  },
  {
    icon: Sparkles,
    name: 'Hourly & Daily Housekeeping',
    desc: 'Flexible hourly maids for home cleaning, kitchen sanitization, laundry, and routine maintenance.',
    tag: 'Daily / Weekly'
  },
  {
    icon: ShieldCheck,
    name: 'Deep Villa & Apartment Cleaning',
    desc: 'Intensive scrubbing, tile degreasing, bathroom disinfection, and detailed turn-over cleaning.',
    tag: 'Deep Clean'
  },
  {
    icon: Home,
    name: 'Monthly & Yearly Live-in Maids',
    desc: 'Experienced full-time housekeepers and maids for long-term domestic assistance across Qatar.',
    tag: 'Long-term Contract'
  },
  {
    icon: Baby,
    name: 'Nanny & Babysitting Services',
    desc: 'Patient, background-checked nannies for childcare assistance, meal prep, and infant care.',
    tag: 'Family Favorite'
  },
  {
    icon: Building2,
    name: 'Commercial & Hospitality Staffing',
    desc: 'Professional cleaning & hospitality solutions for offices, hotels, cafes, and events in Doha.',
    tag: 'Business Rates'
  }
];

export default function ServicesGrid() {
  return (
    <section className="section" id="services">
      <div className="section-header">
        <span className="section-tag">Soft Maid Cleaning & Hospitality</span>
        <h2 className="section-title">Our Complete Care & Maid Services</h2>
        <p className="section-desc">From daily housekeeping to specialized elderly care and long-term contracts in Qatar.</p>
      </div>

      <div className="cards-grid">
        {services.map((s, idx) => {
          const IconComp = s.icon;
          const waUrl = `https://wa.me/97477756100?text=Hi%20Soft%20Maid%20Services%2C%20I%20want%20to%20book%20${encodeURIComponent(s.name)}.`;
          return (
            <div key={idx} className="modern-card" style={{ padding: s.image ? '0' : '36px', overflow: 'hidden' }}>
              {s.image ? (
                <div style={{ position: 'relative' }}>
                  <img src={s.image} alt={s.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: '#0084C7', color: '#FFF', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>
                    {s.tag}
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <div style={{ background: '#F0F9FF', color: '#0084C7', padding: '8px', borderRadius: '8px' }}>
                        <IconComp size={20} />
                      </div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#06233B' }}>{s.name}</h3>
                    </div>
                    <p style={{ color: '#526B82', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.6 }}>{s.desc}</p>
                    <a href={waUrl} className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }} target="_blank" rel="noreferrer">
                      <MessageSquare size={16} /> Book Elderly Care
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <div className="card-icon-box" style={{ marginBottom: 0 }}>
                        <IconComp size={28} />
                      </div>
                      <span style={{ background: '#F0F9FF', color: '#0084C7', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700 }}>
                        {s.tag}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#06233B' }}>{s.name}</h3>
                    <p style={{ color: '#526B82', fontSize: '0.95rem', marginBottom: '24px' }}>{s.desc}</p>
                  </div>
                  <div>
                    <a href={waUrl} className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }} target="_blank" rel="noreferrer">
                      Inquire on WhatsApp
                    </a>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
