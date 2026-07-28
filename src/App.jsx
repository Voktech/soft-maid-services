import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQAccordion from './components/FAQAccordion';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <TopBar />
      <Navbar />
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <Testimonials />
      <FAQAccordion />
      <Footer />
      <a
        href="https://wa.me/97477756100?text=Hello%20Soft%20Maid%20Services%2C%20I%20would%20like%20to%20book%20a%20maid."
        className="floating-wa"
        target="_blank"
        rel="noreferrer"
        title="Chat on WhatsApp (+974 7775 6100)"
        style={{ padding: 0, overflow: 'hidden' }}
      >
        <img src="/whatsapp-icon.png" alt="WhatsApp Chat" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
      </a>
    </div>
  );
}
