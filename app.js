/* ==========================================================================
   Soft Maid Services - Interactive Logic & WhatsApp Integration
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCalculator();
  initFAQ();
  initSmoothScroll();
});

// QAR Rates & Configuration
const CONFIG = {
  hourlyRate: 35, // QAR per hour
  deepCleaningBase: 250, // QAR base deep cleaning
  fullTimeMonthly: 2500, // QAR monthly live-in
  whatsappNumber: '97477123456', // Qatar WhatsApp number placeholder
  discounts: {
    'one-time': 1,
    'weekly': 0.85, // 15% off
    'bi-weekly': 0.90 // 10% off
  }
};

let currentState = {
  service: 'hourly',
  hours: 4,
  frequency: 'one-time',
  materials: false,
  totalQAR: 140
};

function initCalculator() {
  const serviceSelect = document.getElementById('calc-service');
  const hoursSelect = document.getElementById('calc-hours');
  const materialsCheck = document.getElementById('calc-materials');
  const freqChips = document.querySelectorAll('.freq-chip');
  const bookBtn = document.getElementById('calc-book-btn');

  if (!serviceSelect) return;

  serviceSelect.addEventListener('change', (e) => {
    currentState.service = e.target.value;
    updateCalculatorUI();
  });

  hoursSelect.addEventListener('change', (e) => {
    currentState.hours = parseInt(e.target.value) || 4;
    calculateTotal();
  });

  if (materialsCheck) {
    materialsCheck.addEventListener('change', (e) => {
      currentState.materials = e.target.checked;
      calculateTotal();
    });
  }

  freqChips.forEach(chip => {
    chip.addEventListener('click', () => {
      freqChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentState.frequency = chip.dataset.value;
      calculateTotal();
    });
  });

  if (bookBtn) {
    bookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      sendWhatsAppBooking();
    });
  }

  calculateTotal();
}

function updateCalculatorUI() {
  const hoursGroup = document.getElementById('hours-group');
  if (currentState.service === 'deep') {
    if (hoursGroup) hoursGroup.style.display = 'none';
  } else if (currentState.service === 'fulltime') {
    if (hoursGroup) hoursGroup.style.display = 'none';
  } else {
    if (hoursGroup) hoursGroup.style.display = 'block';
  }
  calculateTotal();
}

function calculateTotal() {
  let base = 0;
  const priceDisplay = document.getElementById('calc-total-price');

  if (currentState.service === 'hourly') {
    base = currentState.hours * CONFIG.hourlyRate;
  } else if (currentState.service === 'deep') {
    base = CONFIG.deepCleaningBase;
  } else if (currentState.service === 'fulltime') {
    base = CONFIG.fullTimeMonthly;
  }

  if (currentState.materials && currentState.service === 'hourly') {
    base += (currentState.hours * 10); // +10 QAR/hr for cleaning supplies
  }

  const discount = CONFIG.discounts[currentState.frequency] || 1;
  const finalTotal = Math.round(base * discount);
  currentState.totalQAR = finalTotal;

  if (priceDisplay) {
    priceDisplay.textContent = `${finalTotal} QAR`;
  }
}

function sendWhatsAppBooking() {
  const serviceNames = {
    'hourly': 'Hourly Housekeeping Maid',
    'deep': 'Deep Villa / Apartment Cleaning',
    'fulltime': 'Full-Time Live-in Maid'
  };

  const nameInput = document.getElementById('user-name')?.value || 'Valued Customer';
  const areaInput = document.getElementById('user-area')?.value || 'Doha, Qatar';

  let msg = `Hello Soft Maid Services! 👋\n\nI would like to book a maid in Qatar:\n`;
  msg += `• *Service*: ${serviceNames[currentState.service] || 'Maid Service'}\n`;
  if (currentState.service === 'hourly') {
    msg += `• *Duration*: ${currentState.hours} Hours\n`;
    msg += `• *Cleaning Supplies*: ${currentState.materials ? 'Yes (+10 QAR/hr)' : 'No (Client provides)'}\n`;
  }
  msg += `• *Frequency*: ${currentState.frequency.toUpperCase()}\n`;
  msg += `• *Location*: ${areaInput}\n`;
  msg += `• *Estimated Total*: *${currentState.totalQAR} QAR*\n\n`;
  msg += `Name: ${nameInput}\nPlease contact me to confirm availability!`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
}

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
