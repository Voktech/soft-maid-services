import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <img src="/logo.png" alt="Soft Maid Logo" style={{ height: '48px', width: 'auto', borderRadius: '50%' }} />
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', lineHeight: 1.1 }}>Soft Maid</h3>
              <div style={{ fontSize: '0.75rem', color: '#B0C4DE' }}>Cleaning & Hospitality Services</div>
            </div>
          </div>
          <p style={{ color: '#94A3B8', marginBottom: '16px' }}>
            Soft Maid Cleaning and Hospitality Services. Daily, Weekly, Monthly, & Yearly housekeeping and elderly care in Qatar.
          </p>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginBottom: '8px' }}>📍 Building 52 Bin Omran, Doha, Qatar</p>
          <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>📞 +974 7775 6100 | +974 7145 6777</p>
        </div>

        <div>
          <h4 style={{ marginBottom: '16px' }}>Services</h4>
          <ul style={{ listStyle: 'none', lineHeight: 2, color: '#94A3B8' }}>
            <li>Elderly Care Assistance</li>
            <li>Hourly Housekeeping</li>
            <li>Deep Villa Cleaning</li>
            <li>Live-in Maids & Nannies</li>
            <li>Commercial Hospitality</li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '16px' }}>Contract Types</h4>
          <ul style={{ listStyle: 'none', lineHeight: 2, color: '#94A3B8' }}>
            <li>Daily Bookings</li>
            <li>Weekly Cleaning</li>
            <li>Monthly Housekeeping</li>
            <li>Yearly Maid Contracts</li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '16px' }}>Social & Contact</h4>
          <p style={{ color: '#94A3B8', marginBottom: '8px' }}>Instagram: @soft.maid.service</p>
          <p style={{ color: '#94A3B8', marginBottom: '8px' }}>Facebook: Soft Maid Services</p>
          <p style={{ color: '#94A3B8' }}>Working Hours: Daily 8am - 10pm</p>
        </div>
      </div>

      <div style={{ maxWidth: '1360px', margin: '20px auto 0', textAlign: 'center', color: '#94A3B8', fontSize: '0.875rem' }}>
        &copy; 2026 Soft Maid Cleaning & Hospitality Services Qatar. All rights reserved. Powered by Voktech.
      </div>
    </footer>
  );
}
