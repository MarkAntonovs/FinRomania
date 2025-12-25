// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.setAttribute('aria-hidden', isExpanded);
    });
  }
});

// ===== Affiliate Offers Data =====
const OFFERS_RO = [
  {
    id: 'offer-1',
    name: 'Lender A',
    logoSrc: '../preview.png',
    trackingUrl: 'https://example.com/lender-a',
    tags: ['Decizie rapidă'],
    highlights: [
      'Decizii în 10 minute',
      'Până la 5,000 RON',
      'Fără garanții'
    ],
    minAmount: 500,
    maxAmount: 5000,
    currency: 'RON',
    termMinDays: 30,
    termMaxDays: 365,
    decisionMinutes: 10,
    ageMin: 18,
    ageMax: 75,
    isFirstLoanFree: false,
    disclaimerRo: 'Termenii și condițiile complete sunt disponibile pe site-ul lenderului.'
  },
  {
    id: 'offer-2',
    name: 'Lender B',
    logoSrc: '../preview.png',
    trackingUrl: 'https://example.com/lender-b',
    tags: ['Online 100%'],
    highlights: [
      'Proces complet online',
      'Până la 10,000 RON',
      'Rata flexibilă'
    ],
    minAmount: 1000,
    maxAmount: 10000,
    currency: 'RON',
    termMinDays: 60,
    termMaxDays: 720,
    decisionMinutes: 30,
    ageMin: 21,
    ageMax: 80,
    isFirstLoanFree: true,
    disclaimerRo: 'Nu garantez aprobarea. Verificați termenii pe site-ul oficial.'
  }
];

// ===== Render Function =====
function renderOffers(rootEl, offers, locale = 'ro') {
  if (!rootEl || !Array.isArray(offers) || offers.length === 0) {
    return;
  }

  rootEl.innerHTML = '';

  offers.forEach(offer => {
    const article = document.createElement('article');
    article.className = 'offer-card';
    article.id = offer.id;

    // Header
    const header = document.createElement('div');
    header.className = 'offer-head';

    const brand = document.createElement('div');
    brand.className = 'offer-brand';
    brand.textContent = offer.name;

    const pill = document.createElement('div');
    pill.className = 'pill';
    pill.textContent = offer.tags[0] || 'Credit online';

    header.appendChild(brand);
    header.appendChild(pill);

    // Features list
    const featUl = document.createElement('ul');
    featUl.className = 'offer-feat';

    offer.highlights.forEach(highlight => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>•</strong> ${highlight}`;
      featUl.appendChild(li);
    });

    // Additional info (optional structured data)
    const infoDiv = document.createElement('div');
    infoDiv.style.cssText = 'padding:0 18px 6px;font-size:13px;color:#5b6472;';
    infoDiv.innerHTML = `
      <small>
        Sumă: ${offer.minAmount}–${offer.maxAmount} ${offer.currency} | 
        Termen: ${offer.termMinDays}–${offer.termMaxDays} zile
      </small>
    `;

    // CTA section
    const ctaDiv = document.createElement('div');
    ctaDiv.className = 'offer-cta';

    const ctaLink = document.createElement('a');
    ctaLink.className = 'offer-apply';
    ctaLink.href = offer.trackingUrl;
    ctaLink.target = '_blank';
    ctaLink.rel = 'nofollow noopener noreferrer sponsored';
    ctaLink.textContent = 'Vedeți oferta';

    const disclaimer = document.createElement('div');
    disclaimer.className = 'offer-disc';
    disclaimer.textContent = offer.disclaimerRo;

    ctaDiv.appendChild(ctaLink);
    ctaDiv.appendChild(disclaimer);

    // Assemble
    article.appendChild(header);
    article.appendChild(featUl);
    article.appendChild(infoDiv);
    article.appendChild(ctaDiv);

    rootEl.appendChild(article);
  });
}

// ===== Initialize on DOM Ready =====
document.addEventListener('DOMContentLoaded', function() {
  const offersRoot = document.getElementById('offers-root');
  if (offersRoot) {
    renderOffers(offersRoot, OFFERS_RO, 'ro');
  }
});
