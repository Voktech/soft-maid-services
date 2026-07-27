import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar" id="home">
      <a href="#home" className="logo">
        <span className="logo-badge">✨</span>
        <span>Soft Maid</span>
      </a>
      <ul className="nav-links">
        <li><a href="#calculator">Price Estimator</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#testimonials">Reviews</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <div>
        <a href="https://wa.me/97477123456?text=Hi%20Soft%20Maid%20Services%2C%20I%20want%20to%20inquire%20about%20booking%20a%20maid." className="btn btn-whatsapp" target="_blank" rel="noreferrer">
          💬 WhatsApp Booking
        </a>
      </div>
    </nav>
  );
}
