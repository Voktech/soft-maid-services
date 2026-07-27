import React, { useState } from 'react';
import { Sparkles, Clock, MapPin, Calculator, Check, MessageSquare } from 'lucide-react';

export default function HeroCard() {
  const [service, setService] = useState('hourly');
  const [hours, setHours] = useState(4);
  const [frequency, setFrequency] = useState('one-time');
  const [area, setArea] = useState('');

  const services = [
    { id: 'hourly', name: 'Hourly Maid', rate: '35 QAR/hr', icon: Sparkles },
    { id: 'deep', name: 'Deep Cleaning', rate: 'Base 250 QAR', icon: Calculator },
    { id: 'fulltime', name: 'Full-Time Live-in', rate: '2,500 QAR/mo', icon: Clock }
  ];

  const hourOptions = [
    { hrs: 3, label: '3 Hrs', price: '105 QAR' },
    { hrs: 4, label: '4 Hrs (Popular)', price: '140 QAR' },
    { hrs: 6, label: '6 Hrs', price: '210 QAR' },
    { hrs: 8, label: '8 Hrs (Full Day)', price: '280 QAR' }
  ];

  const freqOptions = [
    { id: 'one-time', label: 'One-Time' },
    { id: 'weekly', label: 'Weekly (15% OFF)' },
    { id: 'bi-weekly', label: 'Bi-Weekly (10% OFF)' }
  ];

  const calculateTotal = () => {
    let base = 0;
    if (service === 'hourly') base = hours * 35;
    else if (service === 'deep') base = 250;
    else if (service === 'fulltime') base = 2500;

    const discountMap = { 'one-time': 1, 'weekly': 0.85, 'bi-weekly': 0.90 };
    return Math.round(base * (discountMap[frequency] || 1));
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const serviceMap = {
      hourly: 'Hourly Housekeeping Maid',
      deep: 'Deep Villa / Apartment Cleaning',
      fulltime: 'Full-Time Live-in Maid'
    };
    const total = calculateTotal();
    let msg = `Hello Soft Maid Services! 👋\n\nI want to book a housekeeper in Qatar:\n`;
    msg += `• *Service*: ${serviceMap[service]}\n`;
    if (service === 'hourly') msg += `• *Duration*: ${hours} Hours\n`;
    msg += `• *Frequency*: ${frequency.toUpperCase()}\n`;
    msg += `• *Location*: ${area || 'Doha, Qatar'}\n`;
    msg += `• *Estimated Total*: *${total} QAR*\n\nPlease confirm availability!`;

    window.open(`https://wa.me/97477123456?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="glass-calculator" id="calculator">
      <div className="calc-header">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#EFF6FF', color: '#2563EB', padding: '4px 12px', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '12px' }}>
          <Sparkles size={12} /> Instant QAR Quote
        </div>
        <h3>Instant QAR Price Calculator</h3>
        <p style={{ color: '#64748B', fontSize: '0.9rem' }}>Select options below for real-time transparent pricing</p>
      </div>

      <form onSubmit={handleWhatsApp}>
        {/* Service Type Selection Chips */}
        <div className="form-group">
          <label className="form-label">1. Choose Service Type</label>
          <div className="service-options">
            {services.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className={`service-chip ${service === item.id ? 'active' : ''}`}
                  onClick={() => setService(item.id)}
                >
                  <IconComp size={20} color={service === item.id ? '#2563EB' : '#64748B'} style={{ margin: '0 auto' }} />
                  <div className="chip-title">{item.name}</div>
                  <div className="chip-rate">{item.rate}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hours Selector */}
        {service === 'hourly' && (
          <div className="form-group">
            <label className="form-label">2. Select Duration (Hours)</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              {hourOptions.map((opt) => (
                <button
                  type="button"
                  key={opt.hrs}
                  className={`chip-btn ${hours === opt.hrs ? 'active' : ''}`}
                  onClick={() => setHours(opt.hrs)}
                  style={{
                    padding: '10px 6px',
                    border: hours === opt.hrs ? '1.5px solid #2563EB' : '1.5px solid #E2E8F0',
                    background: hours === opt.hrs ? '#EFF6FF' : '#F8FAFC',
                    color: hours === opt.hrs ? '#1D4ED8' : '#0F172A',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    textAlign: 'center'
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Frequency Discount Chips */}
        <div className="form-group">
          <label className="form-label">3. Frequency Discount</label>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
            {freqOptions.map((freq) => (
              <button
                type="button"
                key={freq.id}
                className={`chip-btn ${frequency === freq.id ? 'active' : ''}`}
                onClick={() => setFrequency(freq.id)}
                style={{
                  padding: '10px 8px',
                  border: frequency === freq.id ? '1.5px solid #2563EB' : '1.5px solid #E2E8F0',
                  background: frequency === freq.id ? '#EFF6FF' : '#F8FAFC',
                  color: frequency === freq.id ? '#1D4ED8' : '#0F172A',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  textAlign: 'center'
                }}
              >
                {freq.label}
              </button>
            ))}
          </div>
        </div>

        {/* Area Location Input */}
        <div className="form-group">
          <label className="form-label">4. Your Area in Qatar</label>
          <div style={{ position: 'relative' }}>
            <MapPin size={18} color="#2563EB" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: '42px' }}
              placeholder="e.g. The Pearl, West Bay, Lusail, Al Rayyan"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            />
          </div>
        </div>

        {/* Live Total & WhatsApp Button */}
        <div className="price-display-box">
          <div>
            <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 600 }}>Estimated Total</div>
            <div className="price-num">{calculateTotal()} QAR</div>
          </div>
          <button type="submit" className="btn btn-whatsapp">
            <MessageSquare size={18} /> Confirm on WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
}
