import React from 'react';
import { Sparkles, ShieldCheck, Home, Shirt, Building2, PackageCheck } from 'lucide-react';

const services = [
  { icon: Sparkles, name: 'Hourly Housekeeping', desc: 'Flexible hourly maids for dusting, mopping, kitchen cleanup, and routine home care.', price: 'From 35 QAR / Hour' },
  { icon: ShieldCheck, name: 'Deep Cleaning', desc: 'Heavy-duty villa and apartment scrubbing, tile degreasing, bathroom sanitization, and window cleaning.', price: 'From 250 QAR' },
  { icon: Home, name: 'Full-Time / Live-in Maids', desc: 'Experienced, English-speaking housekeepers for daily cooking assistance, childcare, and full home maintenance.', price: 'From 2,500 QAR / Month' },
  { icon: Shirt, name: 'Laundry & Ironing', desc: 'Professional garment washing, delicate fabric care, steam ironing, and wardrobe organization.', price: 'Included in Hourly' },
  { icon: Building2, name: 'Office & Commercial', desc: 'Daily or scheduled office cleaning, desk sanitization, and pantry maintenance for businesses in Qatar.', price: 'Custom Corporate Rates' },
  { icon: PackageCheck, name: 'Move-In / Move-Out', desc: 'Comprehensive turnover cleaning before moving into your new Pearl or Lusail residence.', price: 'From 300 QAR' }
];

export default function ServicesGrid() {
  return (
    <section className="section" id="services">
      <div className="section-header">
        <span className="section-tag">High Quality Cleaning</span>
        <h2 className="section-title">Our Premium Services in Qatar</h2>
        <p className="section-desc">Tailored, reliable housekeeping solutions to match your family's lifestyle and schedule.</p>
      </div>

      <div className="cards-grid">
        {services.map((s, idx) => {
          const IconComp = s.icon;
          return (
            <div key={idx} className="modern-card">
              <div>
                <div className="card-icon-box">
                  <IconComp size={28} />
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', color: '#0F172A' }}>{s.name}</h3>
                <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '24px' }}>{s.desc}</p>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#2563EB', marginBottom: '16px' }}>{s.price}</div>
                <a href="#calculator" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                  Book Service
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
