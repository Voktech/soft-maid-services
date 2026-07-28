import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div style={{ display: 'flex', gap: '24px' }}>
        <div className="top-bar-item">
          <MapPin size={14} color="#38BDF8" />
          <span>Doha, Pearl-Qatar, Lusail, West Bay & Al Wakra</span>
        </div>
        <div className="top-bar-item">
          <Clock size={14} color="#38BDF8" />
          <span>Working Hours: 8:00 AM - 10:00 PM (Daily)</span>
        </div>
      </div>
      <div>
        <a href="tel:+97477756100" className="top-bar-item" style={{ textDecoration: 'none' }}>
          <Phone size={14} color="#38BDF8" />
          <span>+974 7775 6100</span>
        </a>
      </div>
    </div>
  );
}
