/* ─── IMPERVA LOGO ─────────────────────────────── */
// Drop your SVG as "imperva-logo.svg" in this folder  -  it will load automatically.
// If missing, falls back to text.
const LOGO_HTML = (() => {
  const img = new Image();
  img.src = 'imperva-logo.svg';
  return `<img src="imperva-logo.svg" alt="Imperva"
    style="height:22px;object-fit:contain;"
    onerror="this.style.display='none';this.nextElementSibling.style.display='inline'">
    <span style="display:none;font-size:16px;font-weight:700;color:#F5F5F5;letter-spacing:-0.5px;">imperva</span>`;
})();

/* ─── RENDER: TOP NAV ──────────────────────────── */
// variant: 'black' (prod) | 'blue' (stage)
// versionLabel: string like 'V10_11-03-26' when in stage mode
// accountDropdownOpen: true to render Account dropdown pre-open (Screen 03)
function renderNav(id, variant = 'black', versionLabel = null, accountDropdownOpen = false) {
  const el = document.getElementById(id);
  if (!el) return;

  // Version badge + kebob shown only in stage mode
  const stageBadge = versionLabel
    ? `<div class="nav-divider-light"></div>
       <div class="nav-version-badge">
         <span class="version-id">${versionLabel}</span>
         <span class="version-stage">Staging</span>
       </div>
       <div style="position:relative;">
         <button class="nav-kebob" onclick="toggleNavDropdown(this)">
           <span></span><span></span><span></span>
         </button>
         <div class="nav-dropdown" style="display:none;top:40px;left:0;">
           <div class="dd-header">Version actions</div>
           <div class="dd-item" style="font-weight:600;color:#041295;" onclick="showDiffR()">Promote → 4 changes pending</div>
           <div class="dd-item" onclick="exitStageMode()">Exit Stage Mode</div>
           <div class="dd-item" onclick="showScreen('s08')">View Version History</div>
         </div>
       </div>`
    : '';

  // Account dropdown items differ by mode
  const accountItems = versionLabel
    ? `<div class="dd-header">Stage version</div>
       <div class="dd-item" onclick="showDiff()">Review &amp; Promote changes</div>
       <div class="dd-item" onclick="showScreen('s08')">Version History</div>
       <div class="dd-item" onclick="showScreen('s01')">Stage &amp; Version Settings</div>`
    : `<div class="dd-header">Account</div>
       <div class="dd-item" onclick="showScreen('s04')">Switch to Stage Mode</div>
       <div class="dd-item" onclick="showScreen('s08')">Version History</div>
       <div class="dd-item" onclick="showScreen('s01')">Stage &amp; Version Settings</div>`;

  el.innerHTML = `
    <div class="nav-logo">${LOGO_HTML}</div>
    ${stageBadge}
    <div class="nav-spacer"></div>
    <div class="nav-items">
      <div class="nav-item">🔍 Search</div>
      <div class="nav-item">❓ Help</div>
    </div>
    <div class="nav-divider"></div>
    <div class="nav-account">
      <div style="position:relative;">
        <div class="nav-account-btn" onclick="toggleNavDropdown(this)">
          <span>👤</span>
          <span>Account</span>
          <span class="caret">▾</span>
        </div>
        <div class="nav-dropdown" style="display:${accountDropdownOpen ? 'block' : 'none'};top:44px;right:0;left:auto;min-width:240px;">
          ${accountItems}
        </div>
      </div>
    </div>
  `;
}

/* ─── NAV DROPDOWN TOGGLE ──────────────────────── */
function toggleNavDropdown(trigger) {
  const menu = trigger.nextElementSibling;
  const isOpen = menu.style.display === 'block';
  // close all nav dropdowns first
  document.querySelectorAll('.top-nav .nav-dropdown').forEach(m => m.style.display = 'none');
  menu.style.display = isOpen ? 'none' : 'block';
}
document.addEventListener('click', e => {
  if (!e.target.closest('.top-nav')) {
    document.querySelectorAll('.top-nav .nav-dropdown').forEach(m => m.style.display = 'none');
  }
});

/* ─── RENDER: WEBSITES TABLE ───────────────────── */
// Status icon helpers
const STATUS_ICON = {
  active:   `<span style="display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:#D1FAE5;border-radius:50%;color:#065F46;font-size:11px;font-weight:700;">✓</span>`,
  warning:  `<span style="display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:#FEF3C7;border-radius:50%;color:#92400E;font-size:11px;">⚠</span>`,
  inactive: `<span style="display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;background:#F3F4F6;border-radius:50%;color:#9CA3AF;font-size:12px;">⊘</span>`,
};

const WEBSITES_DATA = [
  { name: 'api.acme-corp.com',    id: '123478', bw: '107bps',  humans: '4',  bots: '1.7K', waf: '69',  created: '16 Nov 2025', status: 'active',   clickScreen: 's03' },
  { name: 'shop.acme-corp.com',   id: '756362', bw: '2.5Kbps', humans: '30', bots: '3.2K', waf: '174', created: '28 May 2025', status: 'active' },
  { name: 'auth.acme-corp.com',   id: '991204', bw: '0bps',    humans: '0',  bots: '0',    waf: '0',   created: '16 Nov 2025', status: 'warning' },
  { name: 'cdn.acme-corp.com',    id: '334891', bw: '0bps',    humans: '0',  bots: '10',   waf: '5',   created: '13 Dec 2022', status: 'warning' },
  { name: 'admin.acme-corp.com',  id: '558843', bw: '0bps',    humans: '0',  bots: '0',    waf: '0',   created: '27 Jun 2024', status: 'inactive' },
  { name: 'dev.acme-corp.com',    id: '221043', bw: '0bps',    humans: '0',  bots: '0',    waf: '0',   created: '1 Aug 2022',  status: 'inactive' },
  { name: 'staging.acme-corp.com',id: '889921', bw: '0bps',    humans: '0',  bots: '0',    waf: '0',   created: '25 May 2022', status: 'inactive' },
];

function renderWebsitesTable(tableId, clickOverrides = {}) {
  const table = document.getElementById(tableId);
  if (!table) return;
  table.innerHTML = `
    <thead>
      <tr>
        <th style="width:36px;"><input type="checkbox"/></th>
        <th>Website</th>
        <th>Bandwidth <span style="font-size:11px;font-weight:400;color:#606A73;">(30 days)</span> ⇅</th>
        <th>Human Visits ⇅</th>
        <th>Bot Visits ⇅</th>
        <th>WAF Sessions ⇅</th>
        <th>Creation Date ⇅</th>
        <th style="width:40px;">Status</th>
      </tr>
    </thead>
    <tbody>
      ${WEBSITES_DATA.map((w, idx) => { const cs = clickOverrides[idx] !== undefined ? clickOverrides[idx] : w.clickScreen; return `
        <tr ${cs ? `onclick="showScreen('${cs}')" class="row-clickable"` : ''}>
          <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
          <td><span class="td-real">${w.name}</span><br><span class="td-sub">${w.id}</span></td>
          <td><span class="td-real">${w.bw}</span></td>
          <td><span class="td-real">${w.humans}</span></td>
          <td><span class="td-real">${w.bots}</span></td>
          <td><span class="td-real">${w.waf}</span></td>
          <td><span class="td-real">${w.created}</span></td>
          <td>${STATUS_ICON[w.status]}</td>
        </tr>`;}).join('')}
    </tbody>`;
}

/* ─── RENDER: SIDEBAR ──────────────────────────── */
// variant: 'website-mgmt' | 'application'
// activeItem: id string of the item to highlight, or null
// stageMode: true = staging context — non-flow items show as disabled with tooltip
const NAV_ICONS = {
  globe:           `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" stroke-width="1.4"/><path d="M9 1.5c-2 2.5-3 5-3 7.5s1 5 3 7.5M9 1.5c2 2.5 3 5 3 7.5s-1 5-3 7.5" stroke="currentColor" stroke-width="1.4"/><path d="M1.5 9h15" stroke="currentColor" stroke-width="1.2"/></svg>`,
  arrowLeft:       `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 9H3M8 4L3 9l5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  dashboard:       `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5L2 5v4.5c0 4 3 7.4 7 8.8C13 17 16 13.5 16 9.5V5L9 1.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><circle cx="9" cy="10" r="1.5" stroke="currentColor" stroke-width="1.2"/><path d="M9 8.5V7.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  websiteSettings: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="2" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/><rect x="10" y="2" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/><rect x="2" y="10" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/><rect x="10" y="10" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.4"/></svg>`,
  originNetwork:   `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" stroke-width="1.4"/><path d="M9 1.5v15M1.5 9h15M3 5c1.6.8 3.6 1.3 6 1.3S13.4 5.8 15 5M3 13c1.6-.8 3.6-1.3 6-1.3s4.4.5 6 1.3" stroke="currentColor" stroke-width="1.2"/></svg>`,
  security:        `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5L2 4.5V9c0 4.2 3 7.7 7 9 4-1.3 7-4.8 7-9V4.5L9 1.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M6.5 9.5h5M6.5 7h3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  cdn:             `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 12.5a4 4 0 0 1 .3-7.9A5 5 0 0 1 14 6a3.5 3.5 0 0 1 .5 7" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M9 11v5M7.5 14l1.5 2 1.5-2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  sslTls:          `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M6.5 6.5h5M6.5 9.5h5M6.5 12.5h3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  misc:            `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" stroke-width="1.4"/><circle cx="6" cy="9" r="1.1" fill="currentColor"/><circle cx="9" cy="9" r="1.1" fill="currentColor"/><circle cx="12" cy="9" r="1.1" fill="currentColor"/></svg>`,
  layers:          `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2L2 6l7 4 7-4-7-4z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M2 10l7 4 7-4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  waf:             `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5L2 4.5V9c0 4.2 3 7.7 7 9 4-1.3 7-4.8 7-9V4.5L9 1.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M9 6c-.5 1.8-1.5 3-1.5 4 0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-1-1-2.2-1.5-4z" fill="currentColor"/></svg>`,
  apiSecurity:     `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5.5 6.5L3 9l2.5 2.5M12.5 6.5L15 9l-2.5 2.5M10.5 5l-3 8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  botMgmt:         `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="6.5" width="12" height="9" rx="2" stroke="currentColor" stroke-width="1.4"/><circle cx="6.5" cy="11" r="1.2" fill="currentColor"/><circle cx="11.5" cy="11" r="1.2" fill="currentColor"/><path d="M9 6.5V4M7.5 4h3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  clientSide:      `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="3.5" stroke="currentColor" stroke-width="1.4"/><path d="M1.5 9a7.5 7.5 0 0 1 15 0M4 13.5a7.5 7.5 0 0 0 10 0" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  attackAnalytics: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1.5 12L5.5 7.5l3 3.5 2.5-6 5 6.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  securityEvents:  `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3" y="2" width="12" height="14" rx="1.5" stroke="currentColor" stroke-width="1.4"/><path d="M6.5 6.5h5M6.5 9.5h5M6.5 12.5h3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>`,
  troubleshoot:    `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 4.5a6.5 6.5 0 0 0-9 9L2 16l.5.5 2.5-2.5a6.5 6.5 0 0 0 9.5-9.5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  reputation:      `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" stroke-width="1.4"/><path d="M9 5.5v4l2.5 2" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

function renderSidebar(id, variant = 'website-mgmt', activeItem = null, stageMode = false) {
  const el = document.getElementById(id);
  if (!el) return;

  // Build a single nav row. inFlow = always reachable; isExpander = parent toggle (never disabled)
  function navItem({ icon = '', label, screen = null, itemId = null, isSubItem = false, hasChevron = false, inFlow = false, isExpander = false, tooltip = null }) {
    const isActive   = !!(itemId && activeItem === itemId);
    const isDisabled = stageMode && !inFlow && !isExpander;
    const cls = ['sidebar-nav-item', isActive ? 'active' : '', isSubItem ? 'sub-item' : '', isDisabled ? 'disabled' : ''].filter(Boolean).join(' ');
    const onclick   = screen && !isDisabled ? `onclick="showScreen('${screen}')"` : '';
    const chevron   = hasChevron ? `<span class="sidebar-chevron">&#9660;</span>` : '';
    const titleAttr = tooltip ? `title="${tooltip}"` : '';
    return `<div class="${cls}" ${onclick} ${titleAttr}><span class="sidebar-nav-icon">${icon}</span><span class="sidebar-nav-label">${label}</span>${chevron}</div>`;
  }

  let html = '';

  if (variant === 'website-mgmt') {
    html = `
      <div class="sidebar-header">
        <span class="sidebar-header-icon">${NAV_ICONS.globe}</span>
        <span class="sidebar-header-title">Website Management</span>
        <button class="sidebar-collapse-btn" title="Collapse">&#10094;&#10094;</button>
      </div>
      <nav class="sidebar-nav">
        ${navItem({ icon: NAV_ICONS.arrowLeft,       label: 'Websites',          screen: stageMode ? 's04' : 's02', itemId: 'websites',          inFlow: true })}
        ${navItem({ icon: NAV_ICONS.dashboard,       label: 'Dashboards',        itemId: 'dashboards',        hasChevron: true })}
        ${navItem({ icon: NAV_ICONS.websiteSettings, label: 'Website Settings',  itemId: 'website-settings',  hasChevron: true })}
        ${navItem({ icon: NAV_ICONS.originNetwork,   label: 'Origin and Network',itemId: 'origin-network',    hasChevron: true })}
        ${navItem({ icon: NAV_ICONS.security,        label: 'Security',          itemId: 'security',          hasChevron: true, inFlow: true, isExpander: true })}
        ${navItem({ icon: '',                        label: 'Security Rules',    screen: stageMode ? 's05_1_1' : 's03',   itemId: 'security-rules',   isSubItem: true, inFlow: true })}
        ${navItem({ icon: NAV_ICONS.cdn,    label: 'CDN',     itemId: 'cdn',     hasChevron: true, tooltip: stageMode ? 'Not available in stage' : null })}
        ${navItem({ icon: NAV_ICONS.sslTls, label: 'SSL/TLS', itemId: 'ssl-tls', hasChevron: true, tooltip: stageMode ? 'Not available in stage' : null })}
        ${navItem({ icon: NAV_ICONS.misc,   label: 'MISC',    itemId: 'misc',    hasChevron: true })}
      </nav>
      <div class="sidebar-footer">Copyright &copy; 2021 Imperva</div>`;

  } else if (variant === 'application') {
    html = `
      <div class="sidebar-header">
        <span class="sidebar-header-icon">${NAV_ICONS.layers}</span>
        <span class="sidebar-header-title">Application</span>
        <button class="sidebar-collapse-btn" title="Collapse">&#10094;&#10094;</button>
      </div>
      <nav class="sidebar-nav">
        ${navItem({ icon: NAV_ICONS.globe, label: 'Websites', screen: stageMode ? 's04' : 's02', itemId: 'websites', hasChevron: true, inFlow: true })}
        <div class="sidebar-section-label">Services</div>
        ${navItem({ icon: NAV_ICONS.waf,        label: 'WAF',                    itemId: 'waf',          hasChevron: true, inFlow: true, isExpander: true })}
        ${navItem({ icon: '',                   label: 'WAF Policies',           screen: stageMode ? 's05_2' : 's03_1', itemId: 'waf-policies', isSubItem: true, inFlow: true })}
        ${navItem({ icon: NAV_ICONS.apiSecurity,label: 'API Security',           itemId: 'api-security', hasChevron: true })}
        ${navItem({ icon: NAV_ICONS.botMgmt,    label: 'Bot Management',         itemId: 'bot-mgmt',     hasChevron: true })}
        ${navItem({ icon: NAV_ICONS.clientSide, label: 'Client Side Protection', itemId: 'client-side',  hasChevron: true })}
        ${navItem({ icon: NAV_ICONS.sslTls,     label: 'SSL / TLS',              itemId: 'ssl-tls',      hasChevron: true })}
        <div class="sidebar-section-label">Analytics</div>
        ${navItem({ icon: NAV_ICONS.attackAnalytics, label: 'Attack Analytics',        itemId: 'attack-analytics' })}
        ${navItem({ icon: NAV_ICONS.securityEvents,  label: 'Security Events',         screen: 's05_3', itemId: 'security-events', inFlow: true })}
        ${navItem({ icon: NAV_ICONS.troubleshoot,    label: 'Troubleshooting',         itemId: 'troubleshoot' })}
        ${navItem({ icon: NAV_ICONS.reputation,      label: 'Reputation Intelligence', itemId: 'reputation' })}
      </nav>
      <div class="sidebar-footer">Copyright &copy; 2021 Imperva</div>`;
  }

  el.innerHTML = html;
}

/* ─── STAGE BANNER ─────────────────────────────── */
let stageBannerDismissed = false;

const STAGE_BANNER_IDS = ['banner-s04','banner-s05_1','banner-s05_1_1','banner-s05_2','banner-s05_3'];

function renderStageBanners() {
  STAGE_BANNER_IDS.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = `
      ⚠️ <strong>Staging Mode  -  V10_11-03-26</strong> · Changes here are isolated and won't affect production until you promote.
      <button class="btn btn-ghost" style="margin-left:auto;font-size:12px;height:28px;flex-shrink:0;" onclick="showDiffR()">Review &amp; Promote →</button>
      <button onclick="dismissStageBanner()" style="background:none;border:none;color:#92400E;font-size:16px;cursor:pointer;padding:0 4px;line-height:1;flex-shrink:0;" title="Dismiss">✕</button>
    `;
  });
}

function dismissStageBanner() {
  stageBannerDismissed = true;
  document.querySelectorAll('.stage-banner').forEach(b => b.style.display = 'none');
}

/* ─── PROTO NAV COLLAPSE ───────────────────────── */
function toggleProtoNav() {
  const nav = document.querySelector('.proto-nav');
  const btn = document.getElementById('proto-collapse-btn');
  const isCollapsed = nav.classList.toggle('collapsed');
  btn.textContent = isCollapsed ? '▾ Screens' : '✕';
}

/* ─── SCREEN SWITCHING ─────────────────────────── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.proto-nav button').forEach(b => b.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) { target.classList.add('active'); target.scrollTop = 0; }

  const btn = document.querySelector(`.proto-nav button[onclick="showScreen('${id}')"]`);
  if (btn) btn.classList.add('active');

  // close all open menus
  document.querySelectorAll('.row-menu,.nav-dropdown:not(#create-dd)').forEach(m => {
    if (!m.id) m.style.display = 'none';
  });
}

/* ─── ROW ACTION MENUS ─────────────────────────── */
function toggleRowMenu(btn) {
  const menu = btn.nextElementSibling;
  const isOpen = menu.style.display === 'block';
  // close all first
  document.querySelectorAll('.row-menu').forEach(m => m.style.display = 'none');
  menu.style.display = isOpen ? 'none' : 'block';
}

// close menus on outside click
document.addEventListener('click', e => {
  if (!e.target.closest('.row-action-wrap')) {
    document.querySelectorAll('.row-menu').forEach(m => m.style.display = 'none');
  }
});

/* ─── DIFF: TOGGLE SECTIONS ─────────────────────── */
function toggleSection(id) {
  const sec = document.getElementById(id);
  if (sec) sec.classList.toggle('collapsed');
}

/* ─── DIFF: CART ─────────────────────────────────── */
const CART_LABELS = {
  c1:  { icon: 'mod', text: 'WAF Rule: SQL Injection – severity + confidence raised',  cat: 'Security Rules' },
  c2:  { icon: 'mod', text: 'WAF Rule: XSS Detection – exception path updated',        cat: 'Security Rules' },
  c3:  { icon: 'add', text: 'NEW: Geo-Block rule (KP, IR, RU)',                        cat: 'Security Rules' },
  c4:  { icon: 'rem', text: 'REMOVED: Legacy IP Whitelist v1 (WAF-034)',               cat: 'Security Rules' },
  c5:  { icon: 'mod', text: 'Cache TTL /api/v2/* – 300s → 60s',                       cat: 'Cache Settings' },
  c6:  { icon: 'add', text: 'NEW: Cache rule for /static/** (86400s TTL)',             cat: 'Cache Settings' },
  c7:  { icon: 'mod', text: 'Rate Limiting Checkout – 100 → 50 req/min',              cat: 'shop.acme-corp.com' },
  c8:  { icon: 'add', text: 'NEW: Cart Abuse Detection policy (BOT-011)',              cat: 'shop.acme-corp.com' },
  c9:  { icon: 'mod', text: 'Global WAF Policy – Detection → Prevention mode',        cat: 'WAF Policies' },
  c10: { icon: 'add', text: 'NEW: OWASP Top 10 2025 Ruleset (52 rules)',              cat: 'WAF Policies' },
  c11: { icon: 'mod', text: 'Bot Detection API – threshold 85→72, Block→Challenge',   cat: 'Bot Protection Policies' },
  c12: { icon: 'rem', text: 'REMOVED: JS Injection Legacy Config',                    cat: 'Bot Protection Policies' },
};

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const promoteCount = document.getElementById('promote-count');
  if (!cartItems) return;

  const checked = Object.keys(CART_LABELS).filter(id => {
    const el = document.getElementById(id);
    return el && el.checked;
  });

  if (cartCount) cartCount.textContent = checked.length;
  if (promoteCount) promoteCount.textContent = checked.length;

  if (checked.length === 0) {
    cartItems.innerHTML = '<div class="diff-cart-empty">No changes selected.<br>Check items in the diff to include them.</div>';
    return;
  }

  cartItems.innerHTML = checked.map(id => {
    const { icon, text, cat } = CART_LABELS[id];
    return `<div class="diff-cart-item">
      <span class="ci-icon ${icon}">${icon === 'add' ? '＋' : icon === 'rem' ? '－' : '~'}</span>
      <div>
        <div class="ci-text">${text}</div>
        <div class="ci-cat">${cat}</div>
      </div>
    </div>`;
  }).join('');
}

/* ─── DIFF SCREEN ──────────────────────────────── */
function showDiff() {
  document.querySelectorAll('.top-nav .nav-dropdown').forEach(m => m.style.display = 'none');
  showScreen('s07');
  updateCart();
}
function showDiffR() {
  document.querySelectorAll('.top-nav .nav-dropdown').forEach(m => m.style.display = 'none');
  showScreen('s07rb');
  rbUpdateCart();
}
function exitStageMode() {
  document.querySelectorAll('.top-nav .nav-dropdown').forEach(m => m.style.display = 'none');
  showScreen('s02');
}
function saveDraft() {
  document.querySelectorAll('.top-nav .nav-dropdown').forEach(m => m.style.display = 'none');
  // visual-only: nothing persists in the prototype
}

/* ─── PROMOTE CONFIRMATION ──────────────────────── */
function showPromoteConfirm() {
  const modal = document.getElementById('promote-confirm-modal');
  if (modal) modal.style.display = 'flex';
}
function hidePromoteConfirm() {
  const modal = document.getElementById('promote-confirm-modal');
  if (modal) modal.style.display = 'none';
}
function confirmPromote() {
  hidePromoteConfirm();

  // Update V10 row in version history to reflect promotion
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day:'2-digit', month:'2-digit', year:'numeric' })
    + ' ' + now.toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' });

  const statusCell   = document.getElementById('v10-status-cell');
  const byCell       = document.getElementById('v10-promoted-by');
  const dateCell     = document.getElementById('v10-promote-date');
  const actionsCell  = document.getElementById('v10-actions');
  const v10Row       = document.getElementById('v10-row');
  const v9StatusCell = document.getElementById('v9-status-cell');

  if (v9StatusCell) v9StatusCell.innerHTML = '<span class="version-tag" style="background:#F3F4F6;color:#6B7280;">Previous</span>';
  if (statusCell)  statusCell.innerHTML  = '<span class="version-tag prod">Production</span>';
  if (byCell)      byCell.innerHTML      = '<span class="td-real">j.smith@acme.com</span>';
  if (dateCell)    dateCell.innerHTML    = `<span class="td-real">${dateStr}</span>`;
  if (actionsCell) actionsCell.innerHTML = `
    <div style="position:relative;" class="row-action-wrap">
      <button class="btn btn-ghost-sm" onclick="toggleRowMenu(this)">⋯</button>
      <div class="nav-dropdown row-menu" style="display:none;right:0;left:auto;top:36px;">
        <div class="dd-item">View Details</div>
        <div class="dd-item">Duplicate</div>
        <div class="dd-item">Compare to previous</div>
        <div class="dd-item" onclick="showRollbackConfirm()">Rollback to this version</div>
      </div>
    </div>`;
  if (v10Row) v10Row.style.background = '';

  showScreen('s08');
}

/* ─── CHECKBOX HIERARCHY ────────────────────────── */
// Section-level master checkbox — selects/deselects all without collapsing
function sectionCbClick(sectionId, masterCb) {
  const sec = document.getElementById(sectionId);
  if (!sec) return;
  const allCbs = sec.querySelectorAll('.diff-section-body input[type=checkbox]');
  allCbs.forEach(cb => { cb.checked = masterCb.checked; cb.indeterminate = false; });
  updateCart();
}

// Subsection-level checkbox — selects/deselects all row checkboxes in this subsection
function subsectionCbClick(subsecId, masterCb) {
  const subsec = document.getElementById(subsecId);
  if (!subsec) return;
  masterCb.indeterminate = false;
  const rowCbs = subsec.querySelectorAll('.diff-row-check input[type=checkbox]');
  rowCbs.forEach(cb => { cb.checked = masterCb.checked; });
  updateCart();
  syncSectionCb(subsec);
}

// Individual row checkbox change — updates parent subsection and section state
function rowCbChange(rowCb) {
  updateCart();
  const subsec = rowCb.closest('.diff-subsection');
  if (!subsec) return;
  const masterCb = subsec.querySelector('.diff-subsection-header input[type=checkbox]');
  const rowCbs   = Array.from(subsec.querySelectorAll('.diff-row-check input[type=checkbox]'));
  if (masterCb && rowCbs.length) {
    const n = rowCbs.filter(cb => cb.checked).length;
    masterCb.indeterminate = n > 0 && n < rowCbs.length;
    masterCb.checked       = n === rowCbs.length;
  }
  syncSectionCb(subsec);
}

// Delete a diff row and update cart
function deleteRow(btn) {
  const row = btn.closest('.diff-row');
  if (row) {
    row.remove();
    updateCart();
  }
}

// Propagate subsection state up to the section master checkbox
function syncSectionCb(subsec) {
  const sec = subsec.closest('.diff-section');
  if (!sec) return;
  const secCb  = sec.querySelector('.diff-section-header > input[type=checkbox]');
  const rowCbs = Array.from(sec.querySelectorAll('.diff-row-check input[type=checkbox]'));
  if (secCb && rowCbs.length) {
    const n = rowCbs.filter(cb => cb.checked).length;
    secCb.indeterminate = n > 0 && n < rowCbs.length;
    secCb.checked       = n === rowCbs.length;
  }
}

/* ─── ROLLBACK CONFIRM ───────────────────────────── */
function showRollbackConfirm() {
  const overlay = document.getElementById('rollback-overlay');
  if (overlay) overlay.style.display = 'flex';
}
function hideRollbackConfirm() {
  const overlay = document.getElementById('rollback-overlay');
  if (overlay) overlay.style.display = 'none';
}
function confirmRollback() {
  hideRollbackConfirm();

  // Create a new V11 rollback version row and insert it at the top of the table
  const tbody = document.querySelector('#s08 .table-container table tbody');
  if (!tbody) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day:'2-digit', month:'2-digit', year:'numeric' })
    + ' ' + now.toLocaleTimeString('en-GB', { hour:'2-digit', minute:'2-digit' });

  const newRow = document.createElement('tr');
  newRow.style.background = '#FEF3C7';
  newRow.innerHTML = `
    <td><span class="td-real" style="font-weight:600;">V11</span></td>
    <td><span class="td-real">V11_14-04-26 (Rollback from V9)</span></td>
    <td><span class="td-real">8 changes</span></td>
    <td><span class="td-real">j.smith@acme.com</span></td>
    <td><span class="td-real">${dateStr}</span></td>
    <td><span class="version-tag staged">In Stage</span></td>
    <td>
      <div class="vh-row-actions">
        <button class="btn btn-primary" style="font-size:12px;height:30px;padding:0 12px;" onclick="showDiffR()">Promote →</button>
        <button class="btn btn-ghost-sm" onclick="toggleRowMenu(this)">⋯</button>
        <div class="nav-dropdown row-menu" style="display:none;right:0;left:auto;top:36px;">
          <div class="dd-item" onclick="showDiffR()">Review &amp; Promote</div>
          <div class="dd-item">View Details</div>
          <div class="dd-item">Duplicate</div>
        </div>
      </div>
    </td>
  `;
  tbody.insertBefore(newRow, tbody.firstChild);

  showScreen('s08');
}

/* ════════════════════════════════════════════════
   REDESIGNED DIFF (s07r) — all functions prefixed r
════════════════════════════════════════════════ */

// Grouped cart data matching the left-panel hierarchy
const R_CART_GROUPS = [
  {
    group: 'Website Level Changes',
    subs: [
      { sub: 'Security Rules',        ids: ['r-c1','r-c2','r-c3','r-c4'] },
      { sub: 'Cache Settings',        ids: ['r-c5','r-c6'] },
      { sub: 'shop.acme-corp.com',    ids: ['r-c7','r-c8'] },
    ]
  },
  {
    group: 'Account Level Changes',
    subs: [
      { sub: 'WAF Policies',          ids: ['r-c9','r-c10'] },
      { sub: 'Bot Protection Policies', ids: ['r-c11','r-c12'] },
    ]
  }
];

const R_CART_LABELS = {
  'r-c1':  { icon: 'mod', text: 'SQL Injection Block – severity + confidence raised' },
  'r-c2':  { icon: 'mod', text: 'XSS Detection – exception path v1 → v2' },
  'r-c3':  { icon: 'add', text: 'NEW: Geo-Block rule (KP, IR, RU)' },
  'r-c4':  { icon: 'del', text: 'REMOVED: Legacy IP Whitelist v1 (WAF-034)' },
  'r-c5':  { icon: 'mod', text: 'Cache TTL /api/v2/* – 300s → 60s' },
  'r-c6':  { icon: 'add', text: 'NEW: Cache rule for /static/** (86400s)' },
  'r-c7':  { icon: 'mod', text: 'Rate Limiting Checkout – 100 → 50 req/min' },
  'r-c8':  { icon: 'add', text: 'NEW: Cart Abuse Detection (BOT-011)' },
  'r-c9':  { icon: 'mod', text: 'Global WAF Policy – Detection → Prevention' },
  'r-c10': { icon: 'add', text: 'NEW: OWASP Top 10 2025 Ruleset (52 rules)' },
  'r-c11': { icon: 'mod', text: 'Bot Detection API – threshold 85→72, Block→Challenge' },
  'r-c12': { icon: 'del', text: 'REMOVED: JS Injection Legacy Config' },
};

/* ─── Cart + header badge update ── */
function rUpdateCart() {
  const cartItems = document.getElementById('r-cart-items');
  const cartCount = document.getElementById('r-cart-count');

  let total = 0, addN = 0, modN = 0, delN = 0;
  Object.keys(R_CART_LABELS).forEach(id => {
    const el = document.getElementById(id);
    if (el && el.checked) {
      total++;
      const ic = R_CART_LABELS[id].icon;
      if (ic === 'add') addN++;
      else if (ic === 'mod') modN++;
      else delN++;
    }
  });

  if (cartCount) cartCount.textContent = total;
  const pc = document.getElementById('promote-count');
  if (pc) pc.textContent = total;
  const sc = document.getElementById('r-strip-count');
  if (sc) sc.textContent = total;

  // Update header badges
  const ca = document.getElementById('r-count-add');
  const cm = document.getElementById('r-count-mod');
  const cd = document.getElementById('r-count-del');
  if (ca) ca.textContent = addN;
  if (cm) cm.textContent = modN;
  if (cd) cd.textContent = delN;

  if (!cartItems) return;

  if (total === 0) {
    cartItems.innerHTML = '<div class="r-cart-empty">No changes selected.<br>Check items on the left to include them.</div>';
    return;
  }

  let html = '';
  R_CART_GROUPS.forEach(({ group, subs }) => {
    let groupHtml = '';
    subs.forEach(({ sub, ids }) => {
      let subHtml = '';
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.checked) {
          const { icon, text } = R_CART_LABELS[id];
          subHtml += `<div class="r-cart-item">
            <span class="r-ci-badge ${icon}">${icon.toUpperCase()}</span>
            <span class="r-ci-text">${text}</span>
          </div>`;
        }
      });
      if (subHtml) {
        groupHtml += `<div class="r-cart-subgroup-label">${sub}</div>${subHtml}`;
      }
    });
    if (groupHtml) {
      html += `<div class="r-cart-group">
        <div class="r-cart-group-label">${group}</div>
        ${groupHtml}
      </div>`;
    }
  });

  cartItems.innerHTML = html;
}

/* ─── Checkbox hierarchy ── */
function rSectionCbClick(masterCb) {
  const section = masterCb.closest('.r-section');
  if (!section) return;
  section.querySelectorAll(
    '.r-diff-row-check input[type=checkbox], .r-subsection-header input[type=checkbox]'
  ).forEach(cb => { cb.checked = masterCb.checked; cb.indeterminate = false; });
  rUpdateCart();
}

function rSubsectionCbClick(masterCb) {
  const subsec = masterCb.closest('.r-subsection');
  if (!subsec) return;
  masterCb.indeterminate = false;
  subsec.querySelectorAll('.r-diff-row-check input[type=checkbox]')
        .forEach(cb => { cb.checked = masterCb.checked; });
  rUpdateCart();
  rSyncSectionCb(subsec);
}

function rRowCbChange(rowCb) {
  rUpdateCart();
  const subsec = rowCb.closest('.r-subsection');
  if (!subsec) return;
  const masterCb = subsec.querySelector('.r-subsection-header input[type=checkbox]');
  const rowCbs   = Array.from(subsec.querySelectorAll('.r-diff-row-check input[type=checkbox]'));
  if (masterCb && rowCbs.length) {
    const n = rowCbs.filter(cb => cb.checked).length;
    masterCb.indeterminate = n > 0 && n < rowCbs.length;
    masterCb.checked       = n === rowCbs.length;
  }
  rSyncSectionCb(subsec);
}

function rSyncSectionCb(subsec) {
  const section = subsec.closest('.r-section');
  if (!section) return;
  const secCb  = section.querySelector('.r-section-header input[type=checkbox]');
  const rowCbs = Array.from(section.querySelectorAll('.r-diff-row-check input[type=checkbox]'));
  if (secCb && rowCbs.length) {
    const n = rowCbs.filter(cb => cb.checked).length;
    secCb.indeterminate = n > 0 && n < rowCbs.length;
    secCb.checked       = n === rowCbs.length;
  }
}

function rDeleteRow(btn) {
  const row = btn.closest('.r-diff-row');
  if (row) { row.remove(); rUpdateCart(); }
}

/* ─── Filter + search ── */
let rActiveFilter = 'all';
let rSearchTerm   = '';

function rFilterChange(type, btn) {
  rActiveFilter = type;
  document.querySelectorAll('#s07r .r-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
  rApplyFilter();
}

function rSearchChange(val) {
  rSearchTerm = val.toLowerCase().trim();
  rApplyFilter();
}

function rApplyFilter() {
  document.querySelectorAll('#s07r .r-diff-row').forEach(row => {
    const typeMatch   = rActiveFilter === 'all' || row.dataset.type === rActiveFilter;
    const haystack    = (row.dataset.search || '') + ' ' +
                        (row.querySelector('.r-row-title')?.textContent || '').toLowerCase();
    const searchMatch = !rSearchTerm || haystack.includes(rSearchTerm);
    row.classList.toggle('r-hidden', !(typeMatch && searchMatch));
  });
}

/* ─── Three-dot meta popover ── */
function rToggleMeta(popoverId, btn) {
  const popover = document.getElementById(popoverId);
  if (!popover) return;
  const isOpen = popover.classList.contains('open');
  document.querySelectorAll('.r-meta-popover.open').forEach(p => p.classList.remove('open'));
  if (!isOpen) popover.classList.add('open');
}

document.addEventListener('click', e => {
  if (!e.target.closest('.r-row-actions')) {
    document.querySelectorAll('.r-meta-popover.open').forEach(p => p.classList.remove('open'));
  }
});

/* ─── COLLAPSE TOGGLES (s07r) ────────────────────── */
function rToggleSection(headerEl) {
  const section = headerEl.closest('.r-section');
  if (section) section.classList.toggle('r-collapsed');
}
function rToggleSubsection(headerEl) {
  const subsec = headerEl.closest('.r-subsection');
  if (subsec) subsec.classList.toggle('r-collapsed');
}

/* ─── INIT ───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Navbars
  renderNav('nav-s01', 'black');
  renderNav('nav-s02', 'black');
  renderNav('nav-s03',   'black');
  renderNav('nav-s03_1', 'black');
  renderNav('nav-s04', 'blue', 'V10_11-03-26');
  renderNav('nav-s05_1',   'blue', 'V10_11-03-26');
  renderNav('nav-s05_1_1', 'blue', 'V10_11-03-26');
  renderNav('nav-s05_2', 'blue', 'V10_11-03-26');
  renderNav('nav-s05_3', 'blue', 'V10_11-03-26');
  renderNav('nav-s08', 'black');

  // Sidebars — (id, variant, activeItem, stageMode)
  renderSidebar('sidebar-s01',     'application',  null,             false);
  renderSidebar('sidebar-s02',     'application',  'websites',       false);
  renderSidebar('sidebar-s03',     'website-mgmt', 'security-rules', false);
  renderSidebar('sidebar-s03_1',   'application',  'waf-policies',   false);
  renderSidebar('sidebar-s04',     'application',  'websites',       true);
  renderSidebar('sidebar-s05_1',   'application',  'websites',       true);
  renderSidebar('sidebar-s05_1_1', 'website-mgmt', 'security-rules', true);
  renderSidebar('sidebar-s05_2',   'application',  'waf-policies',   true);
  renderSidebar('sidebar-s05_3',   'application',  'security-events',true);
  renderSidebar('sidebar-s08',     'application',  null,             false);

  // Stage banners  -  same content across all staging screens
  renderStageBanners();

  // Websites table  -  same data stamped into all three screens
  renderWebsitesTable('websites-table-s02');
  renderWebsitesTable('websites-table-s04');

  // Init cart (original s07)
  updateCart();

  // Init redesigned cart (s07r)
  rUpdateCart();

  // Init API-abuse task scenario cart (s07rb)
  rbUpdateCart();
});

/* ════════════════════════════════════════════════
   SCREEN 07R-B  —  API Abuse Task Scenario
   2-diff version: rb-c1 (security rule) + rb-c2 (WAF policy)
════════════════════════════════════════════════ */

// Each subsection checkbox id → the changes it controls
const RB_SUBSECTION_CHANGES = {
  'rb-sub-cb-security-rules': { add: 1, mod: 1, del: 0 }, // rb-c1 (ADD), rb-c3 (MOD)
  'rb-sub-cb-waf-policies':   { add: 1, mod: 0, del: 1 }, // rb-c2 (ADD), rb-c4 (DEL)
};

function rbUpdateCart() {
  let total = 0, addN = 0, modN = 0, delN = 0;
  Object.entries(RB_SUBSECTION_CHANGES).forEach(([cbId, counts]) => {
    const el = document.getElementById(cbId);
    if (el && el.checked) {
      addN  += counts.add;
      modN  += counts.mod;
      delN  += counts.del;
      total += counts.add + counts.mod + counts.del;
    }
  });
  const sc = document.getElementById('rb-strip-count');
  if (sc) sc.textContent = total;
  const ca = document.getElementById('rb-count-add');
  const cm = document.getElementById('rb-count-mod');
  const cd = document.getElementById('rb-count-del');
  if (ca) ca.textContent = addN;
  if (cm) cm.textContent = modN;
  if (cd) cd.textContent = delN;
}

function rbSectionCbClick(masterCb) {
  const section = masterCb.closest('.r-section');
  if (!section) return;
  section.querySelectorAll('.r-subsection-header input[type=checkbox]')
         .forEach(cb => { cb.checked = masterCb.checked; cb.indeterminate = false; });
  rbUpdateCart();
}

function rbSubsectionCbClick(masterCb) {
  masterCb.indeterminate = false;
  // Update parent section checkbox state
  const section = masterCb.closest('.r-section');
  if (section) {
    const sectionCb = section.querySelector('.r-section-header > input[type=checkbox]');
    const subCbs = Array.from(section.querySelectorAll('.r-subsection-header input[type=checkbox]'));
    if (sectionCb && subCbs.length) {
      const n = subCbs.filter(cb => cb.checked).length;
      sectionCb.indeterminate = n > 0 && n < subCbs.length;
      sectionCb.checked       = n === subCbs.length;
    }
  }
  rbUpdateCart();
}

let rbActiveFilter = 'all';
let rbSearchTerm   = '';

function rbFilterChange(type, btn) {
  rbActiveFilter = type;
  document.querySelectorAll('#s07rb .r-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
  rbApplyFilter();
}

function rbSearchChange(val) {
  rbSearchTerm = val.toLowerCase().trim();
  rbApplyFilter();
}

function rbApplyFilter() {
  document.querySelectorAll('#s07rb .r-diff-row').forEach(row => {
    const typeMatch   = rbActiveFilter === 'all' || row.dataset.type === rbActiveFilter;
    const haystack    = (row.dataset.search || '') + ' ' +
                        (row.querySelector('.r-row-title')?.textContent || '').toLowerCase();
    const searchMatch = !rbSearchTerm || haystack.includes(rbSearchTerm);
    row.classList.toggle('r-hidden', !(typeMatch && searchMatch));
  });
}
