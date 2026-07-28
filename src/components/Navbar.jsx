import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar" id="home">
      <a href="#home" className="logo">
        <img src="/logo.png" alt="Soft Maid Logo" className="logo-img" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ lineHeight: 1.1 }}>Soft Maid</span>
          <span style={{ fontSize: '0.75rem', color: '#526B82', fontWeight: 600, letterSpacing: '0.5px' }}>
            Cleaning & Hospitality
          </span>
        </div>
      </a>
      <ul className="nav-links">
        <li><a href="#services">Our Services</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <div>
        <a href="https://wa.me/97477756100?text=Hi%20Soft%20Maid%20Services%2C%20I%20want%20to%20inquire%20about%20booking%20a%20maid." className="btn btn-whatsapp" target="_blank" rel="noreferrer">
          💬 WhatsApp Booking
        </a>
      </div>
    </nav>
  );
}
