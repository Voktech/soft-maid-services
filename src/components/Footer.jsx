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
              <div style={{ fontSize: '0.75rem', color: '#B0C4DE' }}>Cleaning & Hospitality</div>
            </div>
          </div>
          <p style={{ color: '#94A3B8', marginBottom: '20px' }}>Qatar's premier professional maid and housekeeping agency delivering pristine cleanliness to homes, villas, and offices.</p>
          <p style={{ color: '#94A3B8' }}>📞 +974 7775 6100 | ✉️ info@softmaid.qa</p>
        </div>

        <div>
          <h4 style={{ marginBottom: '16px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', lineHeight: 2, color: '#94A3B8' }}>
            <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a></li>
            <li><a href="#how-it-works" style={{ color: 'inherit', textDecoration: 'none' }}>How It Works</a></li>
            <li><a href="#testimonials" style={{ color: 'inherit', textDecoration: 'none' }}>Reviews</a></li>
            <li><a href="#faq" style={{ color: 'inherit', textDecoration: 'none' }}>FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '16px' }}>Coverage Areas</h4>
          <ul style={{ listStyle: 'none', lineHeight: 2, color: '#94A3B8' }}>
            <li>Doha & West Bay</li>
            <li>The Pearl-Qatar</li>
            <li>Lusail City</li>
            <li>Al Rayyan & Al Wakra</li>
          </ul>
        </div>

        <div>
          <h4 style={{ marginBottom: '16px' }}>Working Hours</h4>
          <p style={{ color: '#94A3B8' }}>Monday - Sunday<br />8:00 AM - 10:00 PM</p>
        </div>
      </div>

      <div style={{ maxWidth: '1360px', margin: '20px auto 0', textAlign: 'center', color: '#94A3B8', fontSize: '0.875rem' }}>
        &copy; 2026 Soft Maid Cleaning & Hospitality Qatar. All rights reserved. Powered by Voktech.
      </div>
    </footer>
  );
}
