import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#FFFFFF' }}>✨ Soft Maid Services</h3>
          <p style={{ color: '#94A3B8', marginBottom: '20px' }}>Qatar's premier professional maid and housekeeping agency delivering pristine cleanliness to homes, villas, and offices.</p>
          <p style={{ color: '#94A3B8' }}>📞 +974 7712 3456 | ✉️ info@softmaidqatar.com</p>
        </div>

        <div>
          <h4 style={{ marginBottom: '16px' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', lineHeight: 2, color: '#94A3B8' }}>
            <li><a href="#calculator" style={{ color: 'inherit', textDecoration: 'none' }}>Price Estimator</a></li>
            <li><a href="#services" style={{ color: 'inherit', textDecoration: 'none' }}>Services</a></li>
            <li><a href="#how-it-works" style={{ color: 'inherit', textDecoration: 'none' }}>How It Works</a></li>
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

      <div style={{ maxWidth: '1280px', margin: '20px auto 0', textAlign: 'center', color: '#94A3B8', fontSize: '0.875rem' }}>
        &copy; 2026 Soft Maid Services Qatar. All rights reserved. Powered by Voktech.
      </div>
    </footer>
  );
}
