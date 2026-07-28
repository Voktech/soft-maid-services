import React from 'react';
import { Heart, Sparkles, ShieldCheck, Home, Baby, Building2, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: Heart,
    name: 'Elderly Care & Senior Assistance',
    desc: 'Compassionate, trained caregivers providing companionship, mobility support, medication reminders, and daily elder care in Qatar.',
    tag: 'Dedicated Care',
    image: '/elderly-care.jpg',
    btnText: 'Book Elderly Care'
  },
  {
    icon: Sparkles,
    name: 'Hourly & Daily Housekeeping',
    desc: 'Flexible hourly maids for home cleaning, kitchen sanitization, laundry, and routine daily upkeep in Doha & Pearl.',
    tag: 'Daily / Weekly',
    image: '/hourly-housekeeping.jpg',
    btnText: 'Book Hourly Maid'
  },
  {
    icon: ShieldCheck,
    name: 'Deep Villa & Apartment Cleaning',
    desc: 'Intensive scrubbing, tile degreasing, bathroom disinfection, and detailed turn-over cleaning for luxury homes.',
    tag: 'Deep Clean',
    image: '/deep-cleaning.jpg',
    btnText: 'Book Deep Cleaning'
  },
  {
    icon: Home,
    name: 'Monthly & Yearly Live-in Maids',
    desc: 'Experienced full-time housekeepers and maids for long-term domestic assistance across Qatar.',
    tag: 'Long-term Contract',
    image: '/livein-maid.jpg',
    btnText: 'Inquire Maid Contract'
  },
  {
    icon: Baby,
    name: 'Nanny & Babysitting Services',
    desc: 'Patient, background-checked nannies for childcare assistance, meal prep, and attentive infant care.',
    tag: 'Family Favorite',
    image: '/babysitting-nanny.jpg',
    btnText: 'Book Nanny / Babysitter'
  },
  {
    icon: Building2,
    name: 'Commercial & Hospitality Staffing',
    desc: 'Professional cleaning & hospitality solutions for offices, hotels, cafes, and corporate events in Doha.',
    tag: 'Business Rates',
    image: '/commercial-office.jpg',
    btnText: 'Inquire Office Cleaning'
  }
];

export default function ServicesGrid() {
  return (
    <section className="section" id="services">
      <div className="section-header">
        <span className="section-tag">Soft Maid Cleaning & Hospitality</span>
        <h2 className="section-title">Our Complete Care & Housekeeping Services</h2>
        <p className="section-desc">From daily housekeeping to specialized elderly care, nannies, and long-term contracts in Qatar.</p>
      </div>

      <div className="cards-grid">
        {services.map((s, idx) => {
          const IconComp = s.icon;
          const waUrl = `https://wa.me/97477756100?text=Hi%20Soft%20Maid%20Services%2C%20I%20want%20to%20book%20${encodeURIComponent(s.name)}.`;
          return (
            <div key={idx} className="modern-card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ position: 'relative' }}>
                <img src={s.image} alt={s.name} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', top: '14px', right: '14px', background: 'rgba(0, 132, 199, 0.9)', backdropFilter: 'blur(8px)', color: '#FFF', padding: '4px 14px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
                  {s.tag}
                </div>
              </div>
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <div style={{ background: '#F0F9FF', color: '#0084C7', padding: '8px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconComp size={22} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#06233B', lineHeight: 1.2 }}>{s.name}</h3>
                  </div>
                  <p style={{ color: '#526B82', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.6 }}>{s.desc}</p>
                </div>
                <a href={waUrl} className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }} target="_blank" rel="noreferrer">
                  <MessageSquare size={16} /> {s.btnText}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
