import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        <div className="top-bar-item">
          <MapPin size={14} color="#38BDF8" />
          <span>Building 52 Bin Omran, Doha, Qatar</span>
        </div>
        <div className="top-bar-item">
          <Clock size={14} color="#38BDF8" />
          <span>Daily • Weekly • Monthly • Yearly Contracts</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <a href="tel:+97477756100" className="top-bar-item" style={{ textDecoration: 'none' }}>
          <Phone size={14} color="#38BDF8" />
          <span>+974 7775 6100</span>
        </a>
        <a href="tel:+97471456777" className="top-bar-item" style={{ textDecoration: 'none' }}>
          <Phone size={14} color="#38BDF8" />
          <span>+974 7145 6777</span>
        </a>
      </div>
    </div>
  );
}
