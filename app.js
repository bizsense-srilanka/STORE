// ============================================================
//  BIZSENSE STORE — APP JS
// ============================================================

// ── LIVE APPS ─────────────────────────────────────────────────
const LIVE_APPS = [
  {
    id: 'zoho',
    name: 'Zoho Statement Pro',
    tagline: 'Customize every Zoho statement — the way Zoho never let you.',
    description: `Zoho Statement Pro is the one and only custom statement generator for Zoho Books and Zoho Invoice users in Sri Lanka and beyond. Zoho locks you into rigid statement formats — we break every one of those locks. Edit prices item-by-item, customize layouts, add your brand, adjust taxes, change line-item descriptions, reorder columns, and generate stunning PDF statements that look exactly how you want them. What took hours of manual Excel work now takes seconds.`,
    icon: '📄',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    gradStart: '#6366f1',
    featColor: '#6366f1',
    price: 'Rs. 50,000',
    priceSub: 'One-time payment — yours forever',
    badges: ['best', 'live'],
    badgeLabels: ['#1 Zoho Tool', 'Live Now'],
    screenshots: [
      { icon: '📄', label: 'Statement Editor' },
      { icon: '💰', label: 'Price Override' },
      { icon: '🏷️', label: 'Item Customizer' },
      { icon: '📊', label: 'Column Builder' },
      { icon: '🖨️', label: 'PDF Export' },
    ],
    features: [
      'Edit any line-item price, quantity, or description — Zoho doesn\'t even know',
      'Full layout control: columns, fonts, logo placement, colours, page margins',
      'Custom tax breakdowns, inclusive/exclusive, GST/VAT rows',
      'Add custom notes, payment terms, bank details, QR codes',
      'Save unlimited statement templates per customer or project',
      'Bulk generate PDFs for multiple invoices with one click',
      'Auto-fetch data from Zoho via API — no copy-pasting needed',
      'Password-protect and watermark sensitive statements',
      'Works with Zoho Books, Zoho Invoice & Zoho CRM',
      'Lifetime updates included — one payment, forever yours',
    ],
    specs: [
      { val: 'Lifetime', key: 'License' },
      { val: 'Windows', key: 'Platform' },
      { val: '45 MB', key: 'Size' },
      { val: 'Zoho API', key: 'Integration' },
      { val: '24 hrs', key: 'Setup' },
      { val: '24/7', key: 'Support' },
    ],
    whyUnique: 'No other software lets you override Zoho\'s locked invoice data and still generate a professional, branded PDF statement. This is a one-of-a-kind solution built specifically for businesses that outgrow Zoho\'s rigid formatting.',
  },
  {
    id: 'phone',
    name: 'PhoneShop POS',
    tagline: 'The only POS built for how phone shops actually work.',
    description: `PhoneShop POS is built from the ground up for mobile phone retailers — not adapted from some generic retail system. It handles the things that make phone retail different: IMEI-level stock tracking, variant and colour management, trade-ins, repairs, accessories, bundle deals, and customer device history. If you sell phones, this is the system you've been waiting for — and it has features that no Sri Lankan system has dared to build yet.`,
    icon: '📱',
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
    gradStart: '#0ea5e9',
    featColor: '#0ea5e9',
    price: '$14.50',
    priceSub: 'Per month · cancel anytime',
    badges: ['live'],
    badgeLabels: ['Live Now'],
    screenshots: [
      { icon: '📱', label: 'IMEI Tracker' },
      { icon: '🔄', label: 'Trade-In Module' },
      { icon: '🔧', label: 'Repair Jobs' },
      { icon: '📦', label: 'Variant Stock' },
      { icon: '📊', label: 'Sales Dashboard' },
    ],
    features: [
      'IMEI-level inventory — every unit tracked from purchase to sale',
      'Full variant support: model, colour, storage, grade — unlimited custom variants',
      'Customer trade-in valuation with condition grading and price quotes',
      'Repair job management: parts, labour, status tracking, customer SMS alerts',
      'Accessories & bundle deals with automatic discount rules',
      'Device history per IMEI — who sold it, who bought it, any repairs done',
      'Multi-branch stock transfers with approval workflows',
      'Supplier purchase orders with landed cost allocation per IMEI',
      'Warranty tracking per unit with expiry alerts',
      'Customer device records — link a customer to every phone they\'ve bought or repaired',
      'Layaway / installment sale tracking',
      'Powerful daily, monthly & IMEI-level profit reports',
    ],
    specs: [
      { val: '$14.50', key: 'Per Month' },
      { val: 'Win / Web', key: 'Platform' },
      { val: 'Unlimited', key: 'IMEIs' },
      { val: 'Multi-branch', key: 'Branches' },
      { val: '99.9%', key: 'Uptime' },
      { val: '24/7', key: 'Support' },
    ],
    whyUnique: 'Sri Lankan phone shop software has never had IMEI-level tracking, real repair management, and trade-in valuation in a single affordable system. PhoneShop POS does all of this — built here, for here.',
  },
  {
    id: 'bar',
    name: 'Bar POS',
    tagline: 'Modern bar & restaurant POS with features local systems dream about.',
    description: `Bar POS brings world-class hospitality technology to Sri Lankan bars, clubs, restaurants and hotels — at a fraction of the cost. Table management, running tabs, bartender screens, happy hour automation, digital menus, KOT/BOT printing, split bills, multi-floor layouts, and real-time manager dashboards. Everything a modern venue needs, running on affordable hardware, managed by your own staff from day one.`,
    icon: '🍸',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    gradStart: '#f59e0b',
    featColor: '#ef4444',
    price: '$14.50',
    priceSub: 'Per month · cancel anytime',
    badges: ['live'],
    badgeLabels: ['Live Now'],
    screenshots: [
      { icon: '🗺️', label: 'Table Layout' },
      { icon: '🍺', label: 'Bar Screen' },
      { icon: '📋', label: 'Running Tabs' },
      { icon: '🎉', label: 'Happy Hour' },
      { icon: '📊', label: 'Manager View' },
    ],
    features: [
      'Drag-and-drop multi-floor table layout builder',
      'Running tabs — open, merge, transfer between tables or staff',
      'Bartender & waiter dedicated screens with different permissions',
      'Happy hour: schedule automatic price changes by time and day',
      'KOT & BOT printing to multiple kitchen/bar printers simultaneously',
      'Split bills: by item, by seat, or custom amount',
      'Digital menu with QR code ordering (customers order from their phone)',
      'Liquor inventory with bottle-level tracking and variance reports',
      'Age verification prompts for alcoholic items',
      'Void & refund controls with manager approval levels',
      'Real-time manager dashboard: live revenue, open tables, staff performance',
      'End-of-night reports: revenue, covers, average spend, top sellers',
      'Loyalty cards, member pricing and VIP guest profiles',
    ],
    specs: [
      { val: '$14.50', key: 'Per Month' },
      { val: 'Win / Tablet', key: 'Platform' },
      { val: 'Unlimited', key: 'Tables' },
      { val: 'Multi-floor', key: 'Layout' },
      { val: '99.9%', key: 'Uptime' },
      { val: '24/7', key: 'Support' },
    ],
    whyUnique: 'No Sri Lankan bar software has happy hour automation, QR ordering, liquor variance reports, and a multi-floor table builder — all in one system at this price point. Bar POS brings what Lightspeed and Toast offer internationally, built for local venues.',
  },
];

// ── COMING SOON APPS ──────────────────────────────────────────
const COMING_APPS = [
  { id: 'inventory', name: 'StockSense', sub: 'Smart inventory with auto-reorder', icon: '📦', gradient: 'linear-gradient(135deg,#4facfe,#00f2fe)', glow: 'rgba(79,172,254,0.15)' },
  { id: 'crm', name: 'BizCRM', sub: 'AI-powered customer relationship management', icon: '👥', gradient: 'linear-gradient(135deg,#f093fb,#f5576c)', glow: 'rgba(240,147,251,0.15)' },
  { id: 'hr', name: 'PeopleHQ', sub: 'Complete HR & payroll suite', icon: '🏢', gradient: 'linear-gradient(135deg,#43e97b,#38f9d7)', glow: 'rgba(67,233,123,0.15)' },
  { id: 'accounting', name: 'LedgerPro', sub: 'Accounting with one-click tax filing', icon: '💰', gradient: 'linear-gradient(135deg,#fa709a,#fee140)', glow: 'rgba(250,112,154,0.15)' },
  { id: 'analytics', name: 'DataPulse', sub: 'Real-time business analytics & AI insights', icon: '📊', gradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)', glow: 'rgba(161,140,209,0.15)' },
  { id: 'ecommerce', name: 'ShopCentral', sub: 'Omnichannel e-commerce management', icon: '🛍️', gradient: 'linear-gradient(135deg,#f7971e,#ffd200)', glow: 'rgba(247,151,30,0.15)' },
  { id: 'supermarket', name: 'SuperPOS', sub: 'Supermarket & grocery POS', icon: '🛒', gradient: 'linear-gradient(135deg,#11998e,#38ef7d)', glow: 'rgba(17,153,142,0.15)' },
  { id: 'salon', name: 'SalonFlow', sub: 'Salon & spa appointments + POS', icon: '💇', gradient: 'linear-gradient(135deg,#ee9ca7,#ffdde1)', glow: 'rgba(238,156,167,0.15)' },
];

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderLiveApps();
  renderComingApps();
  setupNavScroll();
  setupSearch();
  setupReveal();
  setupModal();
});

// ── RENDER LIVE APPS ─────────────────────────────────────────
function renderLiveApps() {
  const grid = document.getElementById('liveAppsGrid');
  LIVE_APPS.forEach((app, i) => {
    grid.appendChild(buildLiveCard(app, i));
  });
  setTimeout(() => setupReveal(), 50);
}

function buildLiveCard(app, index) {
  const el = document.createElement('div');
  el.className = 'live-app-card reveal';
  el.dataset.id = app.id;
  el.style.transitionDelay = `${index * 0.12}s`;

  const badgesHTML = app.badges.map((b, i) => `
    <span class="lac-badge badge-${b}">${app.badgeLabels[i]}</span>
  `).join('');

  const screenshotsHTML = app.screenshots.map(s => `
    <div class="lac-screenshot" style="--ss-grad: ${app.gradient}">
      <span style="position:relative;z-index:1;font-size:36px">${s.icon}</span>
      <span class="ss-label">${s.label}</span>
    </div>
  `).join('');

  const featuresHTML = app.features.map(f => `<li>${f}</li>`).join('');

  const specsHTML = app.specs.map(s => `
    <div class="lac-spec">
      <div class="ls-val">${s.val}</div>
      <div class="ls-key">${s.key}</div>
    </div>
  `).join('');

  el.innerHTML = `
    <div class="lac-header">
      <div class="lac-icon" style="background:${app.gradient}">${app.icon}</div>
      <div class="lac-info">
        <div class="lac-top">
          <span class="lac-name">${app.name}</span>
          ${badgesHTML}
        </div>
        <div class="lac-tagline">${app.tagline}</div>
      </div>
      <div class="lac-right">
        <div class="lac-price-wrap">
          <div class="lac-price">${app.price}</div>
          <div class="lac-price-sub">${app.priceSub}</div>
        </div>
        <button class="lac-expand-btn" aria-label="Expand" onclick="toggleCard(this)">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </button>
      </div>
    </div>

    <div class="lac-body">
      <div class="lac-body-inner">
        <div class="lac-body-content">

          <div class="lac-screenshots">${screenshotsHTML}</div>

          <div class="lac-two-col">
            <div class="lac-col">
              <h4>About</h4>
              <p class="lac-desc">${app.description}</p>
              ${app.whyUnique ? `<div style="margin-top:16px;padding:14px 16px;background:rgba(${hexToRgb(app.gradStart)},0.06);border-left:3px solid ${app.gradStart};border-radius:0 10px 10px 0"><p style="font-size:13px;color:var(--text-2);line-height:1.6"><strong style="color:var(--text);display:block;margin-bottom:4px">Why it's unique</strong>${app.whyUnique}</p></div>` : ''}
            </div>
            <div class="lac-col">
              <h4>Everything Included</h4>
              <ul class="lac-features" style="--feat-color:${app.featColor}">${featuresHTML}</ul>
            </div>
          </div>

          <div class="lac-specs-row">${specsHTML}</div>

          <div class="lac-cta-row">
            <div class="lcr-text">
              <strong>Ready to get started with ${app.name}?</strong>
              <span>Setup in under 24 hours · Local support · No contracts</span>
            </div>
            <div class="lcr-actions">
              <button class="btn-download primary" onclick="handleGetApp('${app.id}', this)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Get ${app.name}
              </button>
              <button class="btn-download secondary" onclick="handleDemo('${app.id}')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Request Demo
              </button>
              <button class="btn-download outline-accent" onclick="handleWhatsApp('${app.id}')">
                💬 WhatsApp Us
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  `;

  // click on header to toggle
  el.querySelector('.lac-header').addEventListener('click', (e) => {
    if (e.target.closest('.lac-expand-btn')) return;
    toggleCardEl(el);
  });

  return el;
}

// ── TOGGLE CARD ───────────────────────────────────────────────
function toggleCard(btn) {
  const card = btn.closest('.live-app-card');
  toggleCardEl(card);
}

function toggleCardEl(card) {
  const isOpen = card.classList.contains('expanded');
  // close all
  document.querySelectorAll('.live-app-card.expanded').forEach(c => c.classList.remove('expanded'));
  if (!isOpen) {
    card.classList.add('expanded');
    setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);
  }
}

// ── COMING SOON ───────────────────────────────────────────────
function renderComingApps() {
  const grid = document.getElementById('comingGrid');
  COMING_APPS.forEach((app, i) => {
    const el = document.createElement('div');
    el.className = 'coming-card reveal';
    el.style.transitionDelay = `${i * 0.07}s`;
    el.style.setProperty('--card-glow', app.glow);

    el.innerHTML = `
      <div class="cc-icon" style="background:${app.gradient}">${app.icon}</div>
      <div class="cc-info">
        <div class="cc-name">${app.name}</div>
        <div class="cc-sub">${app.sub}</div>
        <span class="cc-badge">Coming Soon</span>
      </div>
    `;
    grid.appendChild(el);
  });
}

// ── ACTIONS ───────────────────────────────────────────────────
function handleGetApp(id, btn) {
  const orig = btn.innerHTML;
  btn.innerHTML = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Request Sent!`;
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.innerHTML = orig;
    btn.style.background = '';
  }, 2400);
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function handleDemo(id) {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

function handleWhatsApp(id) {
  const app = LIVE_APPS.find(a => a.id === id);
  const msg = encodeURIComponent(`Hi! I'm interested in ${app?.name || 'BizSense'}. Can I get more information?`);
  window.open(`https://wa.me/94XXXXXXXXX?text=${msg}`, '_blank');
}

function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.cf-submit');
  const orig = btn.textContent;
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
  }, 3000);
}

// ── SEARCH ───────────────────────────────────────────────────
function setupSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');

  document.getElementById('searchToggle').addEventListener('click', openSearch);

  document.getElementById('searchClose').addEventListener('click', closeSearch);

  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeSearch();
  });

  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeSearch();
  });

  input.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim();
    if (!q) return;
    const match = [...LIVE_APPS, ...COMING_APPS].find(a =>
      a.name.toLowerCase().includes(q) || a.sub?.toLowerCase().includes(q) || a.tagline?.toLowerCase().includes(q)
    );
    if (match) {
      closeSearch();
      const el = document.querySelector(`[data-id="${match.id}"]`);
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); toggleCardEl(el); }
      else document.getElementById('coming-soon').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

function openSearch() {
  document.getElementById('searchOverlay').classList.add('open');
  setTimeout(() => document.getElementById('searchInput').focus(), 80);
}
function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('searchInput').value = '';
}

// ── NAV SCROLL ────────────────────────────────────────────────
function setupNavScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// ── MODAL (unused shell, kept for future) ────────────────────
function setupModal() {
  document.getElementById('modalClose').addEventListener('click', () => {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
  });
}

// ── SCROLL REVEAL ────────────────────────────────────────────
function setupReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

// ── NOTIFY STRIP ─────────────────────────────────────────────
document.addEventListener('click', e => {
  if (e.target.classList.contains('ns-btn')) {
    const input = e.target.previousElementSibling;
    if (!input.value) return;
    e.target.textContent = '✓ You\'re on the list!';
    e.target.style.background = '#22c55e';
    input.value = '';
    setTimeout(() => {
      e.target.textContent = 'Notify Me';
      e.target.style.background = '';
    }, 3000);
  }
});

// ── UTILITY ──────────────────────────────────────────────────
function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return r ? `${parseInt(r[1],16)},${parseInt(r[2],16)},${parseInt(r[3],16)}` : '99,102,241';
}

// expose globals
window.openApp = (id) => {
  const el = document.querySelector(`[data-id="${id}"]`);
  if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'center' }); toggleCardEl(el); }
};
window.toggleCard = toggleCard;
window.handleGetApp = handleGetApp;
window.handleDemo = handleDemo;
window.handleWhatsApp = handleWhatsApp;
window.handleForm = handleForm;
