/* Staging v3 prototype — step 1: foundation and navigation */

/* ─── ICONS (from v2) ─────────────────────────── */
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

const UI_ICONS = {
  search:  `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M11 11l3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
  home:    `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.5 7L8 2.5 13.5 7v6.5h-4v-4h-3v4h-4V7z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
  ai:      `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 2l1.2 3.3L10.5 6.5 7.2 7.7 6 11 4.8 7.7 1.5 6.5l3.3-1.2L6 2zM12 9l.6 1.7 1.7.6-1.7.6L12 13.6l-.6-1.7-1.7-.6 1.7-.6L12 9z" fill="currentColor"/></svg>`,
  user:    `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="4.5" r="2.5" fill="currentColor"/><path d="M2 13c.5-3 2.6-4.5 5-4.5s4.5 1.5 5 4.5H2z" fill="currentColor"/></svg>`,
  gear:    `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2.2" stroke="currentColor" stroke-width="1.4"/><path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2M3.4 3.4l1.4 1.4M11.2 11.2l1.4 1.4M3.4 12.6l1.4-1.4M11.2 4.8l1.4-1.4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>`,
  caret:   `<svg width="10" height="10" viewBox="0 0 10 10"><path d="M1.5 3.5L5 7l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  caretSolid: `<svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 3h8L5 8z" fill="currentColor"/></svg>`,
  filter:  `<svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1.5 2.5h11L8.5 7.5v4l-3 1v-5l-4-5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`,
  check:   `<svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6.5L5 9.5 10 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  domains: NAV_ICONS.globe,
  activity: NAV_ICONS.securityEvents,
};

/* ─── LOGO (text fallback, as in v2 the SVG file is not in the folder) ─── */
const LOGO_HTML = `<span class="logo-text">imperva</span>`;

/* ─── GLOBALS (used on every screen) ──────────── */
const ACCOUNT  = { name: 'Acme Corp', id: '314986' };
const USER     = 'alex.morgan@acmecorp.com';     // logged-in user
const TEAMMATE = 'jordan.lee@acmecorp.com';      // another editor in the account
const DEFAULT_HEADER = 'x-imperva-staging';      // Imperva's default selector header name
const defaultExpiry = () => { const d = new Date(); d.setDate(d.getDate() + 30); return d.toISOString().slice(0, 10); };

/* ─── STATE ───────────────────────────────────── */
// One source of truth. Later steps add stage config, changes[] etc. here.
const SEED = (configured = false) => {
  const st = ({
  account: ACCOUNT,
  user: USER,
  currentSiteId: 'berliner',
  // Account-level stage configuration (s01)
  // Routing: header name (Imperva default, can be custom) + a secret Imperva generates as the header value,
  // valid until an expiry date the customer picks. Or a client IP range (CIDR) the customer provides.
  stage: { enabled: true, routing: 'header', cidr: '', headerName: DEFAULT_HEADER, expiry: '2026-11-22',
           secret: { generatedAt: '22 Oct 2026, 10:12', expires: '2026-11-22', value: null } },
  envFilter: 'all',
  sites: [
    { id: 'berliner',     env: 'prod',  name: 'www.berliner.co.il',   siteId: '693737416', bw: '1.4Mbps', humans: '12.1K', bots: '3.2K', waf: '274', created: '16 Nov 2025', status: 'active' },
    { id: 'stg-berliner', env: 'stage', name: 'stage.berliner.co.il', siteId: '693737522', stageOf: 'berliner', stageStatus: 'ready', actions: ['rules'], lastAction: '22 Oct 2026, 10:14', lastUser: USER, bw: '12Kbps', humans: '41', bots: '9', waf: '6', created: '22 Oct 2026', status: 'active' },
    { id: 'shop',         env: 'prod',  name: 'shop.berliner.co.il',  siteId: '693737418', bw: '2.5Kbps', humans: '30', bots: '3.2K', waf: '174', created: '28 May 2025', status: 'active' },
    { id: 'stg-shop',     env: 'stage', name: 'stage.shop.berliner.co.il', siteId: '693737518', stageOf: 'shop', stageStatus: 'ready', actions: ['rules'], lastAction: '22 Oct 2026, 10:14', lastUser: USER, bw: '0bps', humans: '6', bots: '0', waf: '0', created: '22 Oct 2026', status: 'active' },
    { id: 'api',          env: 'prod',  name: 'api.berliner.co.il',   siteId: '693737430', bw: '107bps',  humans: '4',  bots: '1.7K', waf: '69',  created: '16 Nov 2025', status: 'active' },
    { id: 'auth',         env: 'prod',  name: 'auth.berliner.co.il',  siteId: '693737451', bw: '0bps',    humans: '0',  bots: '0',    waf: '0',   created: '16 Nov 2025', status: 'warning' },
    { id: 'cdn',          env: 'prod',  name: 'cdn.berliner.co.il',   siteId: '693737466', bw: '0bps',    humans: '0',  bots: '10',   waf: '5',   created: '13 Dec 2022', status: 'warning' },
    { id: 'admin',        env: 'prod',  name: 'admin.berliner.co.il', siteId: '693737480', bw: '0bps',    humans: '0',  bots: '0',    waf: '0',   created: '27 Jun 2024', status: 'inactive' },
  ],
  // Staged changes, per staging site. Staging rules = production rules + these changes (see stageRules).
  // before/after are rule snapshots; author + time feed the review screen (step 4).
  changes: [
    { id: 'c1', siteId: 'stg-berliner', type: 'ADD', ruleId: 'n1', rule: 'API Rate Abuse Block', before: null,
      after: { id: 'n1', ruleId: '10093201', group: 'Rates', name: 'API Rate Abuse Block', desc: 'If: URL starts with /api && Rate > 100 per minute', hits: '–', enabled: true },
      author: USER, time: '24 Oct 2026, 09:12', comment: '' },
    { id: 'c2', siteId: 'stg-berliner', type: 'MOD', ruleId: 'r3', rule: 'Bot Scraping Detection',
      before: null, // filled from production below
      after: { id: 'r3', ruleId: '10093140', group: 'Security', name: 'Bot Scraping Detection', desc: 'If: ClientType == Bot && (URL contains /products || URL contains /prices)', hits: '892', enabled: true },
      author: TEAMMATE, time: '24 Oct 2026, 14:30', comment: '' },
    { id: 'c3', siteId: 'stg-berliner', type: 'ADD', ruleId: 'n2', rule: 'Strict API Ruleset', before: null,
      after: { id: 'n2', ruleId: '10093202', group: 'Security', name: 'Strict API Ruleset', desc: 'If: API Rate Abuse Block triggered && ASN not in allowlist', hits: '–', enabled: true, dependsOn: ['n1'] },
      author: USER, time: '25 Oct 2026, 08:45', comment: '' },
  ],
  // Production rules per production site; created on first use from the template (rulesTemplate)
  rules: { berliner: rulesTemplate() },
  seq: 10093203,          // next rule ID
  rulesTab: 'All', rulesQuery: '',
  eventsSel: ['allProd'], dashSel: ['allProd'],   // account-level site selection (default: all production)
  review: null,
  prodNoticeClosed: [],                           // production sites whose staging notice was closed                                   // Review and promote overlay: { stgId } while open
  guidanceSeen: false,
  role: 'admin', reviewFilter: 'all', reviewQuery: '', commentEditing: null, lastPromote: null,
  productionChanged: null, // set when someone edits production rules while staging exists (used in step 4)
});
  if (!configured) {
    st.stage = { enabled: false, routing: 'header', cidr: '', headerName: DEFAULT_HEADER, expiry: defaultExpiry(), secret: null };
    st.sites = st.sites.filter(x => x.env !== 'stage');
    st.changes = [];
  }
  st.changes.forEach(c => { if (c.type !== 'ADD') c.before = { ...st.rules.berliner.find(r => r.id === c.ruleId) }; });
  st.draft = draftFrom(st.stage);
  return st;
};
// Production rules every site starts with (same shape as today's Rules page)
function rulesTemplate() {
  return [
    { id: 'r1', ruleId: '10093129', group: 'Rates',    name: 'Count Ruby HTTP client requests in 10sec', desc: 'If: ClientId == 747', hits: '1,204', enabled: true },
    { id: 'r2', ruleId: '10093135', group: 'Rates',    name: 'Block Session when reaching 10 requests', desc: 'If: Rate(Count Ruby HTTP client requests in 10sec) > 10', hits: '318', enabled: true, dependsOn: ['r1'] },
    { id: 'r3', ruleId: '10093140', group: 'Security', name: 'Bot Scraping Detection', desc: 'If: ClientType == Bot && URL contains /products', hits: '892', enabled: true },
    { id: 'r4', ruleId: '10093152', group: 'Security', name: 'Block Tor exit nodes', desc: 'If: IsTorIP == true', hits: '341', enabled: true },
    { id: 'r5', ruleId: '10093160', group: 'Security', name: 'Geo block sanctioned countries', desc: 'If: CountryCode in (KP, IR, SY)', hits: '57', enabled: false },
    { id: 'r6', ruleId: '10093170', group: 'Redirect', name: 'Redirect HTTP to HTTPS', desc: 'If: Scheme == http → https://$host$uri', hits: '9,876', enabled: true },
    { id: 'r7', ruleId: '10093181', group: 'Rewrite Request', name: 'Add X-Forwarded-Proto header', desc: 'Set header X-Forwarded-Proto: https', hits: '24,310', enabled: true },
  ];
}
// Form state for s01; Save commits it, Cancel throws it away
function draftFrom(stage) {
  return { enabled: stage.enabled, routing: stage.routing, cidr: stage.cidr, headerName: stage.headerName, expiry: stage.expiry, sites: [], actions: ['rules'] };
}
let STATE = SEED();

const siteById    = id => STATE.sites.find(s => s.id === id);
const currentSite = () => siteById(STATE.currentSiteId);
const stagingOf   = prod => STATE.sites.find(s => s.stageOf === prod.id);
const activeStagingOf = prod => { const s = stagingOf(prod); return s && s.stageStatus === 'ready' ? s : null; };
const productionOf = stage => siteById(stage.stageOf);
const changesFor  = site => STATE.changes.filter(c => c.siteId === site.id);
const isStage     = site => site && site.env === 'stage';

/* ─── SMALL HELPERS ───────────────────────────── */
const stageChip = () => `<span class="stage-chip">Stage</span>`;
const prodChip  = () => `<span class="prod-chip">Production</span>`;
const envChip   = site => isStage(site) ? stageChip() : prodChip();

// Notifications pop in at the top right (info = blue, success = green), stack, and close on ✕ or after a few seconds
const NOTIFY_ICON = {
  info: `<svg width="18" height="18" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="currentColor"/><path d="M10 9v5M10 6.2v.1" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>`,
  success: `<svg width="18" height="18" viewBox="0 0 20 20"><circle cx="10" cy="10" r="9" fill="currentColor"/><path d="M6 10.2l2.6 2.6L14 7.4" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};
function notify({ type = 'info', title, body = '', action = null }) {
  const stack = document.getElementById('notify');
  const el = document.createElement('div');
  el.className = `notify notify--${type}`;
  el.innerHTML = `
    <span class="notify-icon">${NOTIFY_ICON[type]}</span>
    <div class="notify-main">
      <div class="notify-title">${title}</div>
      ${body ? `<div class="notify-body">${body}</div>` : ''}
      ${action ? `<a class="notify-action" onclick="${action.onclick}">${action.label}</a>` : ''}
    </div>
    <button class="notify-close" aria-label="Close" onclick="this.parentElement.remove()">✕</button>`;
  stack.prepend(el);
  while (stack.children.length > 3) stack.lastElementChild.remove();
  setTimeout(() => el.remove(), action ? 9000 : 6000);
}
const toast = (msg, action = null, type = 'info') => notify({ type, title: msg, action });
const notYet = step => toast(`Built in step ${step}.`);

function closeMenus(except) {
  document.querySelectorAll('.menu.open').forEach(m => { if (m !== except) m.classList.remove('open'); });
}
function toggleMenu(trigger) {
  const menu = trigger.nextElementSibling;
  const willOpen = !menu.classList.contains('open');
  closeMenus();
  if (willOpen) menu.classList.add('open');
}
document.addEventListener('click', e => { if (!e.target.closest('.menu-wrap')) closeMenus(); });

/* ─── TOP NAV (per production screenshot) ─────── */
function renderNav(el) {
  const a = STATE.account;
  el.innerHTML = `
    <div class="nav-logo">${LOGO_HTML}</div>
    <div class="nav-account-picker">
      <div class="nav-account-label">Current account</div>
      <div class="nav-account-name">${a.name} <span class="nav-caret">${UI_ICONS.caretSolid}</span></div>
    </div>
    <div class="nav-tabs">
      <div class="nav-tab">${UI_ICONS.home} Home</div>
      <div class="nav-tab active" onclick="showScreen('s02')">${NAV_ICONS.layers} Application</div>
      <div class="nav-tab">${NAV_ICONS.globe} Network</div>
    </div>
    <div class="nav-spacer"></div>
    <div class="nav-right">
      <div class="nav-icon-btn" title="Search">${UI_ICONS.search}</div>
      <div class="nav-btn nav-btn--ai">${UI_ICONS.ai} Ask AI</div>
      <div class="nav-icon-btn" title="Help"><span class="nav-help">?</span></div>
      <div class="menu-wrap">
        <div class="nav-btn nav-btn--account" onclick="toggleMenu(this)">${UI_ICONS.user} Account <span class="nav-caret">${UI_ICONS.caretSolid}</span></div>
        <div class="menu account-menu">
          <div class="menu-label">Current account</div>
          <div class="menu-strong">${a.name} (${a.id})</div>
          <div class="menu-item" onclick="closeMenus();showScreen('s01')">${UI_ICONS.gear} Account Management</div>
          <div class="menu-sep"></div>
          <div class="menu-label">Logged in user</div>
          <div class="menu-strong">${STATE.user}</div>
          <div class="menu-item" onclick="closeMenus()">${UI_ICONS.user} My Profile</div>
          <div class="menu-sep"></div>
          <div class="menu-item" onclick="closeMenus()">Sign Out</div>
        </div>
      </div>
    </div>`;
}

/* ─── SIDEBAR ─────────────────────────────────── */
// variant: 'application' | 'website-mgmt' | 'account-mgmt'
// stageMode: on a staging site, items not in the stage flow are locked with a hover tooltip
const STAGE_LOCK_TIP = 'This area is not supported in stage. Make changes in production site.';

function renderSidebar(el, variant, activeItem, stageMode = false) {
  function navItem({ icon = '', label, onclick = null, itemId = null, isSubItem = false, hasChevron = false, inFlow = false, isExpander = false }) {
    const isActive = !!(itemId && activeItem === itemId);
    const locked   = stageMode && !inFlow && !isExpander;
    const cls = ['sidebar-nav-item', isActive && 'active', isSubItem && 'sub-item', locked && 'locked'].filter(Boolean).join(' ');
    const click = onclick && !locked ? `onclick="${onclick}"` : '';
    const tip   = locked ? `data-tip="${STAGE_LOCK_TIP}"` : '';
    const chev  = hasChevron ? `<span class="sidebar-chevron">&#9660;</span>` : '';
    return `<div class="${cls}" ${click} ${tip}><span class="sidebar-nav-icon">${icon}</span><span class="sidebar-nav-label">${label}</span>${chev}</div>`;
  }
  const header = (icon, title) => `
    <div class="sidebar-header">
      <span class="sidebar-header-icon">${icon}</span>
      <span class="sidebar-header-title">${title}</span>
      <button class="sidebar-collapse-btn" title="Collapse">&#10094;&#10094;</button>
    </div>`;
  const footer = `<div class="sidebar-footer">Copyright &copy; 2026 Imperva</div>`;
  let html = '';

  if (variant === 'website-mgmt') {
    html = header(NAV_ICONS.globe, 'Website Management') + `
      <nav class="sidebar-nav">
        ${navItem({ icon: NAV_ICONS.arrowLeft,       label: 'Websites',           onclick: "showScreen('s02')", itemId: 'websites', inFlow: true })}
        ${navItem({ icon: NAV_ICONS.dashboard,       label: 'Dashboards',         onclick: "showScreen('s05_1')", itemId: 'dashboards', inFlow: true })}
        ${navItem({ icon: NAV_ICONS.websiteSettings, label: 'Website Settings',   itemId: 'website-settings' })}
        ${navItem({ icon: NAV_ICONS.originNetwork,   label: 'Origin and Network', itemId: 'origin-network', hasChevron: true })}
        ${navItem({ icon: NAV_ICONS.security,        label: 'Security',           itemId: 'security', hasChevron: true, isExpander: true })}
        ${navItem({ label: 'Policies', itemId: 'security-policies', isSubItem: true })}
        ${navItem({ label: 'Rules',    onclick: 'openSiteRules()', itemId: 'security-rules', isSubItem: true, inFlow: true })}
        ${navItem({ icon: NAV_ICONS.cdn,      label: 'CDN',          itemId: 'cdn', hasChevron: true })}
        ${navItem({ icon: NAV_ICONS.sslTls,   label: 'SSL/TLS',      itemId: 'ssl-tls', hasChevron: true })}
        ${navItem({ icon: UI_ICONS.domains,   label: 'Domains',      itemId: 'domains' })}
        ${navItem({ icon: UI_ICONS.activity,  label: 'Activity Log', itemId: 'activity-log' })}
        ${navItem({ icon: NAV_ICONS.misc,     label: 'MISC',         itemId: 'misc', hasChevron: true })}
      </nav>` + footer;

  } else if (variant === 'account-mgmt') {
    html = header(UI_ICONS.gear, 'Account Management') + `
      <nav class="sidebar-nav">
        ${navItem({ icon: NAV_ICONS.arrowLeft, label: 'Back to Application', onclick: "showScreen('s02')", itemId: 'back' })}
        ${navItem({ label: 'Account Settings',     itemId: 'account-settings', isSubItem: true })}
        ${navItem({ label: 'Users',                itemId: 'users', isSubItem: true })}
        ${navItem({ label: 'Roles and Permissions',itemId: 'roles', isSubItem: true })}
        ${navItem({ label: 'API Keys',             itemId: 'api-keys', isSubItem: true })}
        ${navItem({ label: 'Notification Policies',itemId: 'notifications', isSubItem: true })}
        ${navItem({ label: 'Audit Trail',          itemId: 'audit', isSubItem: true })}
        ${navItem({ label: 'Stage configuration',  onclick: "showScreen('s01')", itemId: 'stage-config', isSubItem: true })}
      </nav>` + footer;

  } else {
    html = header(NAV_ICONS.layers, 'Application') + `
      <nav class="sidebar-nav">
        ${navItem({ icon: NAV_ICONS.globe, label: 'Websites', onclick: "showScreen('s02')", itemId: 'websites' })}
        <div class="sidebar-section-label">Services</div>
        ${navItem({ icon: NAV_ICONS.waf, label: 'WAF', itemId: 'waf', hasChevron: true, isExpander: true })}
        ${navItem({ label: 'Dashboards',   onclick: "showScreen('s05_0')", itemId: 'waf-dashboards', isSubItem: true })}
        ${navItem({ label: 'WAF Policies', itemId: 'waf-policies', isSubItem: true })}
        ${navItem({ label: 'Settings',     itemId: 'waf-settings', isSubItem: true })}
        ${navItem({ icon: NAV_ICONS.apiSecurity,  label: 'API Security',            itemId: 'api-security', hasChevron: true })}
        ${navItem({ icon: UI_ICONS.ai,            label: 'AI Application Security', itemId: 'ai-security', hasChevron: true })}
        ${navItem({ icon: NAV_ICONS.botMgmt,      label: 'Advanced Bot Protection', itemId: 'bot-mgmt', hasChevron: true })}
        ${navItem({ icon: NAV_ICONS.clientSide,   label: 'Client-Side Protection',  itemId: 'client-side' })}
        ${navItem({ icon: NAV_ICONS.sslTls,       label: 'SSL/TLS',                 itemId: 'ssl-tls', hasChevron: true })}
        ${navItem({ icon: NAV_ICONS.security,     label: 'Runtime Protection',      itemId: 'runtime', hasChevron: true })}
        <div class="sidebar-section-label">Analytics</div>
        ${navItem({ icon: NAV_ICONS.attackAnalytics, label: 'Attack Analytics',        itemId: 'attack-analytics' })}
        ${navItem({ icon: NAV_ICONS.securityEvents,  label: 'Security Events',         onclick: "showScreen('s05_3')", itemId: 'security-events' })}
        ${navItem({ icon: NAV_ICONS.troubleshoot,    label: 'Troubleshooting',         itemId: 'troubleshoot' })}
        ${navItem({ icon: NAV_ICONS.reputation,      label: 'Reputation Intelligence', itemId: 'reputation' })}
        ${navItem({ icon: NAV_ICONS.attackAnalytics, label: 'Experiments',             itemId: 'experiments' })}
      </nav>` + footer;
  }
  el.innerHTML = html;
}

/* ─── BREADCRUMB: stage indicator + stage actions ─ */
// Staging site:    account / stage.berliner.co.il [Stage] ▾  → Review and promote (n) · Reset stage · Go to production site
// Production site: account / www.berliner.co.il ▾            → Go to staging site (when one exists)
function renderCrumb(el, site, actions = '') {
  const meta = `<div class="crumb-meta">Generated on: 25 Oct 26 16:25:30 IST <a onclick="toast('Refreshed.')">Refresh</a></div>`;
  const accountLink = `<a class="crumb-link" onclick="showScreen('s02')">${STATE.account.name}</a>`;
  if (!site) { el.innerHTML = accountLink + (actions || meta); return; }
  const account = accountLink + `<span class="crumb-sep">/</span>`;

  let items = '';
  if (isStage(site)) {
    const n = changesFor(site).length;
    items = `
      <div class="menu-item ${n ? '' : 'disabled'}" onclick="closeMenus();openReview('${site.id}')">Review and promote <span class="menu-count">${n}</span></div>
      <div class="menu-item" onclick="closeMenus();confirmReset('${site.id}')">Reset stage</div>
      <div class="menu-sep"></div>
      <div class="menu-item" onclick="closeMenus();openSite('${site.stageOf}')">Go to production site <span class="menu-sub">${productionOf(site).name}</span></div>`;
  } else {
    const stg = stagingOf(site);
    items = !stg ? `<div class="menu-note">No staging site. An admin can enable staging in Account Management.</div>`
      : stg.stageStatus === 'ready' ? `<div class="menu-item" onclick="closeMenus();openSite('${stg.id}')">Go to staging site <span class="menu-sub">${stg.name}</span></div>` + pendingMenuNote(stg)
      : stg.stageStatus === 'disabled' ? `<div class="menu-note">Staging is turned off for this site. An admin can turn it on in Stage configuration.</div>`
      : `<div class="menu-note">${stg.name} is being created.</div>`;
  }
  el.innerHTML = `
    ${account}
    <div class="menu-wrap crumb-site">
      <button class="crumb-site-btn" onclick="toggleMenu(this)">
        <span>${site.name}</span>${envChip(site)}<span class="crumb-caret">${UI_ICONS.caret}</span>
      </button>
      <div class="menu crumb-menu">
        <div class="menu-label">${isStage(site) ? 'Stage actions' : 'Site'}</div>
        ${items}
      </div>
      ${isStage(site) && !STATE.guidanceSeen ? guidanceHtml() : ''}
    </div>
    ${meta}`;
}

// Production site menu: changes waiting in its staging site, with a shortcut to promote them
function pendingMenuNote(stg) {
  const n = changesFor(stg).length;
  if (!n) return '';
  return `<div class="menu-sep"></div>
    <div class="menu-pending">
      <div><strong>${n} ${n === 1 ? 'change' : 'changes'}</strong> in ${stg.name} ${n === 1 ? "isn't" : "aren't"} promoted yet.</div>
      <a onclick="closeMenus();openReview('${stg.id}')">Review and promote</a>
    </div>`;
}

/* ─── WEBSITES TABLE (s02): one table, Environment column + filter, Stage chip ─ */
const STATUS_ICON = {
  active:   `<span class="status-dot status-dot--ok">${UI_ICONS.check}</span>`,
  warning:  `<span class="status-dot status-dot--warn">!</span>`,
  inactive: `<span class="status-dot status-dot--off">–</span>`,
  progress: `<span class="status-dot status-dot--progress has-tip" data-tip="Creating the staging site takes a few minutes."><span class="spinner"></span></span>`,
};

function orderedSites() {
  // Each staging site sits right under its production site
  const out = [];
  STATE.sites.filter(s => s.env === 'prod').forEach(p => {
    out.push(p);
    const stg = stagingOf(p);
    if (stg) out.push(stg);
  });
  return out;
}

function setEnvFilter(value) {
  STATE.envFilter = value;
  closeMenus();
  renderWebsites();
}

function renderWebsites() {
  const f = STATE.envFilter;
  const rows = orderedSites().filter(s => f === 'all' || s.env === f);

  document.getElementById('body-s02').innerHTML = `
    <div class="table-container">
      <div class="table-toolbar">
        <div class="table-title">Websites</div>
        <div class="table-actions" style="margin-left:auto;">
          <div class="input-search">${UI_ICONS.search}<span>Search websites</span></div>
          <div class="seg" role="group" aria-label="Environment">
            ${[['all', 'All'], ['prod', 'Production'], ['stage', 'Stage']].map(([v, t]) => `<button class="seg-btn ${f === v ? 'active' : ''}" onclick="setEnvFilter('${v}')">${t}</button>`).join('')}
          </div>
          <button class="btn btn-primary btn-sm">Add website</button>
        </div>
      </div>
      <table class="websites-table">
        <thead><tr>
          <th style="width:36px;"><input type="checkbox"/></th>
          <th>Website</th>
          <th>Environment</th>
          <th>Bandwidth <span class="th-sub">(30 days)</span></th>
          <th>Human Visits</th>
          <th>Bot Visits</th>
          <th>WAF Sessions</th>
          <th>Creation Date</th>
          <th style="width:56px;">Status</th>
        </tr></thead>
        <tbody>
          ${rows.map(s => `
            <tr class="row-clickable ${isStage(s) ? 'row-stage' : ''}" onclick="openSite('${s.id}')">
              <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
              <td><span class="td-name"><span class="td-real">${s.name}</span></span><span class="td-sub">${s.siteId}</span></td>
              <td><span class="env-cell">${envChip(s)}</span></td>
              <td><span class="td-real">${s.bw}</span></td>
              <td><span class="td-real">${s.humans}</span></td>
              <td><span class="td-real">${s.bots}</span></td>
              <td><span class="td-real">${s.waf}</span></td>
              <td><span class="td-real">${s.created}</span></td>
              <td>${STATUS_ICON[s.status]}</td>
            </tr>`).join('')}
        </tbody>
      </table>
      <div class="table-pagination">
        <span>1–${rows.length} of ${rows.length}</span>
        <span>Rows per page: <strong>100</strong></span>
      </div>
    </div>`;
}

/* ─── SITE SCREENS ────────────────────────────── */
function openSite(siteId, screen = 's05_1') {
  const target = siteById(siteId);
  if (isStage(target) && target.stageStatus === 'progress') { notify({ type: 'info', title: `${target.name} is being created`, body: CREATE_TIP }); return; }
  if (isStage(target) && target.stageStatus === 'disabled') { notify({ type: 'info', title: `Staging is turned off for ${productionOf(target).name}`, body: 'Turn it on in Stage configuration.', action: { label: 'Go to Stage configuration', onclick: "showScreen('s01')" } }); return; }
  if (siteId !== STATE.currentSiteId) { STATE.rulesTab = 'All'; STATE.rulesQuery = ''; }
  STATE.currentSiteId = siteId;
  showScreen(screen);
}
function openSiteRules() {
  showScreen(isStage(currentSite()) ? 's05_1_1' : 's03');
}

// Site context: the Websites selector shows the current site but is disabled.
// Account level (Application → WAF → Dashboards): the selector works and includes staging sites.
function renderDashboard(accountLevel = false) {
  const bodyId = accountLevel ? 'body-s05_0' : 'body-s05_1';
  const sites = accountLevel ? selectedSites('dashSel') : [currentSite()];
  document.getElementById(bodyId).innerHTML = `
    <div class="dash-card">
      <div class="dash-tabs">
        <div class="dash-tab active">Security</div><div class="dash-tab">Performance</div><div class="dash-tab">Real-Time</div>
      </div>
      <div class="dash-filters">
        <div class="dash-filter">
          <div class="dash-filter-label">Websites</div>
          ${accountLevel ? multiSiteSelector('dashSel', 'renderAccountDash') : siteSelectorDisabled(currentSite())}
        </div>
        <div class="dash-filter dash-filter--time">
          <div class="dash-filter-label">Time range</div>
          <div class="dash-filter-value">Last 7 days ${UI_ICONS.caret}</div>
        </div>
      </div>
      ${sites.some(isStage) ? stageTrafficNote() : ''}
    </div>
    <div class="dash-image"><img src="dashboard-screenshot.png" alt="Security dashboard"/></div>`;
}
function renderAccountDash() { renderDashboard(true); }

function placeholder(bodyId, title, step) {
  document.getElementById(bodyId).innerHTML = `
    <div class="placeholder-card">
      <div class="placeholder-title">${title}</div>
      <div class="placeholder-text">Built in step ${step}.</div>
    </div>`;
}

/* ─── RULES DATA ──────────────────────────────── */
const RULE_TABS = ['All', 'Redirect', 'Rates', 'Security', 'Rewrite Request', 'Forward', 'Rewrite Response', 'Override WAF Settings'];

function prodRules(prodId) {
  if (!STATE.rules[prodId]) STATE.rules[prodId] = rulesTemplate();
  return STATE.rules[prodId];
}
// Staging rules = production rules with MOD/DEL applied, plus ADDs. stageState marks what differs from production.
function stageRules(stg) {
  const ch = changesFor(stg);
  const byRule = Object.fromEntries(ch.filter(c => c.type !== 'ADD').map(c => [c.ruleId, c]));
  const out = [];
  prodRules(stg.stageOf).forEach(r => {
    const c = byRule[r.id];
    if (!c) out.push({ ...r });
    else if (c.type === 'MOD') out.push({ ...c.after, stageState: 'MOD', changeId: c.id });
  });
  ch.filter(c => c.type === 'ADD').forEach(c => out.push({ ...c.after, stageState: 'ADD', changeId: c.id }));
  return out;
}
const rulesFor = site => isStage(site) ? stageRules(site) : prodRules(site.id);
const usedBy = (rules, id) => rules.filter(r => (r.dependsOn || []).includes(id));
const changeById = id => STATE.changes.find(c => c.id === id);
const newId = prefix => prefix + (STATE.seq++);

function changeSummary(list) {
  const n = t => list.filter(c => c.type === t).length;
  return [n('ADD') && `${n('ADD')} new`, n('MOD') && `${n('MOD')} changed`, n('DEL') && `${n('DEL')} deleted`].filter(Boolean).join(', ');
}

// Saving in a staging site records a change; saving in production edits production directly.
function saveRule(site, rule, data) {
  const stamp = { author: STATE.user, time: nowStamp() };
  if (!isStage(site)) {
    const list = prodRules(site.id);
    if (rule) Object.assign(list.find(r => r.id === rule.id), data);
    else list.push({ id: newId('p'), ruleId: String(STATE.seq), hits: '–', ...data });
    if (activeStagingOf(site)) STATE.productionChanged = { siteId: site.id, rule: data.name, by: STATE.user, time: stamp.time };
    return;
  }
  if (!rule) {
    const id = newId('n');
    STATE.changes.push({ id: newId('c'), siteId: site.id, type: 'ADD', ruleId: id, rule: data.name, before: null,
      after: { id, ruleId: String(STATE.seq), hits: '–', ...data }, comment: '', ...stamp });
  } else if (rule.changeId) {
    const c = changeById(rule.changeId);
    Object.assign(c, stamp, { rule: data.name, after: { ...c.after, ...data } });
  } else {
    const prod = prodRules(site.stageOf).find(r => r.id === rule.id);
    STATE.changes.push({ id: newId('c'), siteId: site.id, type: 'MOD', ruleId: rule.id, rule: data.name,
      before: { ...prod }, after: { ...prod, ...data }, comment: '', ...stamp });
  }
}

function deleteRule(site, rule) {
  if (!isStage(site)) {
    STATE.rules[site.id] = prodRules(site.id).filter(r => r.id !== rule.id);
    if (activeStagingOf(site)) STATE.productionChanged = { siteId: site.id, rule: rule.name, by: STATE.user, time: nowStamp() };
    return;
  }
  const stamp = { author: STATE.user, time: nowStamp() };
  const c = rule.changeId && changeById(rule.changeId);
  if (c && c.type === 'ADD') STATE.changes = STATE.changes.filter(x => x !== c);   // never reached production
  else if (c) Object.assign(c, stamp, { type: 'DEL', after: null, rule: c.before.name });
  else {
    const prod = prodRules(site.stageOf).find(r => r.id === rule.id);
    STATE.changes.push({ id: newId('c'), siteId: site.id, type: 'DEL', ruleId: rule.id, rule: prod.name,
      before: { ...prod }, after: null, comment: '', ...stamp });
  }
}

/* ─── RULES PAGE (s03 production, s05_1_1 staging) ─ */
const ICON_INFO = `<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8.5" stroke="currentColor" stroke-width="1.5"/><path d="M10 9v5M10 6.2v.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
const ICON_WARN = `<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 2.5 18 17H2L10 2.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M10 8v4M10 14.4v.1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;

function rulesNotice(site) {
  if (isStage(site)) {
    if (prodChangedFor(site)) return promotedNotice(site) + prodChangedNotice(site);
    return promotedNotice(site) + stageBanner(site);
  }
  return prodNotice(site);
}
// Yellow banner on staging Rules: shown while changes wait, no close button
function stageBanner(site) {
  const list = changesFor(site);
  if (!list.length) return '';
  return `
    <div class="notice notice--warn">
      <span class="notice-icon">${ICON_WARN}</span>
      <div class="notice-text"><strong>${list.length} ${list.length === 1 ? 'change' : 'changes'}</strong> in staging (${changeSummary(list)}) ${list.length === 1 ? "isn't" : "aren't"} promoted yet. They take effect in production only after you promote.</div>
      <button class="btn btn-primary btn-sm" onclick="openReview('${site.id}')">Review and promote</button>
    </div>`;
}
// Production Rules: points to the staging site and says how many changes wait there. The only notice that can be closed.
function prodNotice(site) {
  const stg = activeStagingOf(site);
  if (!stg || STATE.prodNoticeClosed.includes(site.id)) return '';
  const n = changesFor(stg).length;
  const pending = n ? ` <strong>${n} ${n === 1 ? 'change' : 'changes'}</strong> in staging ${n === 1 ? "isn't" : "aren't"} promoted yet.` : '';
  return `
    <div class="notice notice--info">
      <span class="notice-icon">${ICON_INFO}</span>
      <div class="notice-text">New security rules for this site are added in its staging site, <strong>${stg.name}</strong>. Add and test them there, then promote them to production.${pending}</div>
      <button class="btn btn-secondary btn-sm" onclick="openSite('${stg.id}','s05_1_1')">Go to staging rules</button>
      <button class="notice-close" title="Close" aria-label="Close" onclick="STATE.prodNoticeClosed.push('${site.id}');renderScreen(activeScreen())">✕</button>
    </div>`;
}

function renderRules(bodyId) {
  const site = currentSite();
  const stage = isStage(site);
  const addLocked = !stage && !!activeStagingOf(site);
  const tab = STATE.rulesTab;
  const addBtn = addLocked
    ? `<span class="has-tip tip-right" data-tip="Add new rules in the staging site, then promote them."><button class="btn btn-primary btn-sm" disabled>Add new rule</button></span>`
    : `<button class="btn btn-primary btn-sm" onclick="openRuleEditor()">Add new rule</button>`;

  document.getElementById(bodyId).innerHTML = `
    ${rulesNotice(site)}
    <div class="rules-card">
      <div class="rules-head">
        <div class="rules-title">Security Rules</div>
      </div>
      <div class="rules-tabs">
        ${RULE_TABS.map(t => `<button class="rules-tab ${t === tab ? 'active' : ''}" onclick="setRulesTab('${t}')">${t}</button>`).join('')}
      </div>
      <div class="rules-toolbar">
        <div class="rules-filter">${UI_ICONS.search}<input type="text" placeholder="Filter by Keyword or ID" value="${STATE.rulesQuery}" oninput="setRulesQuery(this.value)"/></div>
        <button class="rules-icon-btn" title="Export"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v9M4 6l4 4 4-4M2 13h12" stroke="#606A73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        ${addBtn}
      </div>
      <table class="rules-table">
        <thead><tr>
          <th>Priority / Name (ID)</th><th>Description</th><th>Hits (Last 7 days)</th><th>Status</th><th style="width:56px;">Edit</th><th style="width:56px;">More</th>
        </tr></thead>
        <tbody id="rules-tbody">${rulesRows(site)}</tbody>
      </table>
      <div class="rules-pagination">
        <span>${rulesFor(site).length} rules</span>
        <span style="margin-left:16px;">Show <select class="rules-page-select"><option>25</option><option>50</option></select> rows</span>
      </div>
    </div>`;
}

const IN_STAGE_TIP = {
  ADD: 'New in stage. Production doesn’t have this rule until you promote it.',
  MOD: 'Changed in stage. Production keeps the previous version until you promote it.',
};

function rulesRows(site) {
  const q = STATE.rulesQuery.trim().toLowerCase();
  const rules = rulesFor(site).filter(r =>
    (STATE.rulesTab === 'All' || r.group === STATE.rulesTab) &&
    (!q || r.name.toLowerCase().includes(q) || r.ruleId.includes(q)));
  if (!rules.length) return `<tr><td colspan="6" class="rules-empty">No rules match.</td></tr>`;
  const groups = RULE_TABS.slice(1).filter(g => rules.some(r => r.group === g));
  return groups.map(g => `
    <tr class="rules-group-row"><td colspan="6">${g}</td></tr>
    ${rules.filter(r => r.group === g).map(r => `
      <tr>
        <td><div class="rules-name">${r.name} (${r.ruleId})${r.stageState ? ` <span class="instage-badge has-tip" data-tip="${IN_STAGE_TIP[r.stageState]}">In stage</span>` : ''}</div></td>
        <td class="rules-desc">${r.desc}</td>
        <td>${r.hits}</td>
        <td><span class="rules-status ${r.enabled ? 'enabled' : 'disabled'}"><span class="rs-dot"></span>${r.enabled ? 'Enabled' : 'Disabled'}</span></td>
        <td><button class="rules-action-btn" title="Edit" onclick="openRuleEditor('${r.id}')">&#9998;</button></td>
        <td>
          <div class="menu-wrap">
            <button class="rules-action-btn" title="More" onclick="toggleMenu(this)">&#8942;</button>
            <div class="menu menu-right">
              <div class="menu-item" onclick="closeMenus();openRuleEditor('${r.id}')">Edit</div>
              <div class="menu-item menu-item--danger" onclick="closeMenus();confirmDeleteRule('${r.id}')">Delete</div>
            </div>
          </div>
        </td>
      </tr>`).join('')}`).join('');
}

function setRulesTab(t) { STATE.rulesTab = t; renderScreen(activeScreen()); }
function setRulesQuery(v) { STATE.rulesQuery = v; document.getElementById('rules-tbody').innerHTML = rulesRows(currentSite()); }
const activeScreen = () => document.querySelector('.screen.active').id;

function openRuleEditor(ruleId = null) {
  const site = currentSite();
  const rule = ruleId ? rulesFor(site).find(r => r.id === ruleId) : null;
  const r = rule || { name: '', group: 'Security', desc: 'If: ', enabled: true };
  const where = isStage(site)
    ? `Saved in <strong>${site.name}</strong>. Production doesn't change until you promote.`
    : `Saved in production right away.`;
  showModal({
    title: rule ? 'Edit rule' : 'Add new rule',
    wide: true,
    confirmLabel: 'Save',
    body: `
      <div class="re-field"><div class="field-label">Name</div><input class="text-input" id="re-name" value="${r.name}" placeholder="New rule"/></div>
      <div class="re-field"><div class="field-label">Rule type</div>
        <select class="text-input" id="re-group">${RULE_TABS.slice(1).map(g => `<option ${g === r.group ? 'selected' : ''}>${g}</option>`).join('')}</select></div>
      <div class="re-field"><div class="field-label">Condition</div><textarea class="text-input text-area" id="re-desc">${r.desc}</textarea></div>
      <label class="radio-row"><input type="checkbox" id="re-enabled" ${r.enabled ? 'checked' : ''}/> Enabled</label>
      <div class="field-help">${where}</div>`,
    onConfirm: () => {
      const data = {
        name: document.getElementById('re-name').value.trim() || (rule ? rule.name : `New rule ${STATE.seq - 10093200}`),
        group: document.getElementById('re-group').value,
        desc: document.getElementById('re-desc').value.trim() || 'If: URL contains /checkout',
        enabled: document.getElementById('re-enabled').checked,
      };
      saveRule(site, rule, data);
      renderScreen(activeScreen());
      toast(isStage(site) ? `“${data.name}” saved in staging` : `“${data.name}” saved in production`, null, 'success');
    },
  });
}

function confirmDeleteRule(ruleId) {
  const site = currentSite();
  const rules = rulesFor(site);
  const rule = rules.find(r => r.id === ruleId);
  const users = usedBy(rules, ruleId);
  const done = () => { deleteRule(site, rule); renderScreen(activeScreen()); toast(`“${rule.name}” deleted${isStage(site) ? ' in staging' : ''}.`); };
  if (users.length) {
    showModal({
      title: `“${rule.name}” is used by other rules`,
      danger: true, confirmLabel: 'Delete anyway',
      body: `<p>These rules depend on it and will stop working${isStage(site) ? ' in staging, and in production after you promote' : ''}:</p>
             <ul class="modal-list">${users.map(u => `<li>${u.name} (${u.ruleId})</li>`).join('')}</ul>
             <p>Edit or delete them first, or delete this rule anyway.</p>`,
      onConfirm: done,
    });
    return;
  }
  showModal({
    title: `Delete “${rule.name}”?`,
    danger: true, confirmLabel: 'Delete',
    body: isStage(site)
      ? (rule.stageState === 'ADD'
          ? `<p>This rule exists only in staging. It's removed completely.</p>`
          : `<p>The rule is removed from the staging site. Production keeps it until you promote the deletion.</p>`)
      : `<p>The rule is deleted from production right away.</p>`,
    onConfirm: done,
  });
}

/* ─── SITE SELECTORS ──────────────────────────── */
// Site context (site dashboard): shows the current site, disabled.
function siteSelectorDisabled(site) {
  return `<div class="site-select"><button class="site-select-btn" disabled><span class="site-select-text">${site.name} (${site.siteId})${envChip(site)}</span>${UI_ICONS.caret}</button></div>`;
}

// Account level (dashboards, events): multi-select. Default is all production sites, so stage
// test traffic is never mixed in unless the user picks staging sites.
const ALL_PROD = 'allProd';
function selectedSites(key) {
  const sel = STATE[key];
  if (sel.includes(ALL_PROD)) return STATE.sites.filter(s => s.env === 'prod');
  return sel.map(siteById).filter(Boolean);
}
function multiSiteSelector(key, rerender) {
  if (!STATE[key].includes(ALL_PROD) && !selectedSites(key).length) STATE[key] = [ALL_PROD];
  const sel = STATE[key];
  const all = sel.includes(ALL_PROD);
  const picked = selectedSites(key);
  const label = all ? 'All production websites'
    : picked.length === 1 ? `${picked[0].name} (${picked[0].siteId})${isStage(picked[0]) ? stageChip() : ''}`
    : `${picked.length} websites selected`;
  const opt = s => {
    const busy = isStage(s) && s.stageStatus !== 'ready';
    return `<label class="ms-option ${busy ? 'disabled' : ''}">
      <input type="checkbox" ${!all && sel.includes(s.id) ? 'checked' : ''} ${busy ? 'disabled' : ''} onchange="toggleSiteSel('${key}','${s.id}','${rerender}')"/>
      <span class="ms-site">${s.name}${isStage(s) ? pendingChip(s) : ''}</span>
      ${busy ? `<span class="ms-note">${s.stageStatus === 'disabled' ? 'Staging off' : 'Being created'}</span>` : ''}
    </label>`;
  };
  const prod = STATE.sites.filter(s => s.env === 'prod');
  const stg = STATE.sites.filter(isStage);
  return `
    <div class="menu-wrap site-select">
      <button class="site-select-btn" onclick="toggleMenu(this)"><span class="site-select-text">${label}</span>${UI_ICONS.caret}</button>
      <div class="menu site-select-menu ms-menu">
        <label class="ms-option"><input type="checkbox" ${all ? 'checked' : ''} onchange="toggleSiteSel('${key}','${ALL_PROD}','${rerender}')"/><span>All production websites</span></label>
        <div class="menu-sep"></div>
        <div class="menu-label">Production</div>${prod.map(opt).join('')}
        ${stg.length ? `<div class="menu-sep"></div><div class="menu-label">Stage</div>${stg.map(opt).join('')}` : ''}
      </div>
    </div>`;
}
function toggleSiteSel(key, id, rerender) {
  let sel = STATE[key].filter(x => x !== ALL_PROD);
  if (id === ALL_PROD) sel = [ALL_PROD];
  else sel = sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id];
  STATE[key] = sel.length ? sel : [ALL_PROD];
  window[rerender]();
  const menu = document.querySelector(`#body-${activeScreen()} .site-select-menu`);
  if (menu) menu.classList.add('open');   // keep open while picking
}

// "Stage | 3 pending changes": the count links to Review and promote for that staging site
function pendingChip(stg) {
  const n = changesFor(stg).length;
  if (!n || stg.stageStatus !== 'ready') return stageChip();
  return `<span class="stage-chip stage-chip--split">Stage<span class="chip-sep"></span><a class="chip-pending" onclick="event.preventDefault();event.stopPropagation();closeMenus();openReview('${stg.id}')">${n} pending ${n === 1 ? 'change' : 'changes'}</a></span>`;
}
const STAGE_TRAFFIC_NOTE = `<div class="stage-traffic-note">${'%ICON%'} Staging sites show test traffic only. It's kept separate from production traffic.</div>`;
const stageTrafficNote = () => STAGE_TRAFFIC_NOTE.replace('%ICON%', ICON_INFO);

/* ─── SECURITY EVENTS (s05_3, account level) ──── */
// Sessions, in the production Security Events layout (Sessions / Requests tabs, violation bar, session cards)
const SESSIONS = [
  { site: 'berliner', clientType: 'Hacking Tool', clientApp: 'cURL', entry: 'www.berliner.co.il/info.php.bak', method: 'GET', ua: 'curl/8.7.1',
    time: 'Oct 25 2026, 16:12:01', sessionId: '340000230503426314', country: 'France', ip: '185.177.72.9', hits: 2, views: 1, http: '1.1', cookies: 'Not supported',
    tags: [['Illegal Resource Access', 1]] },
  { site: 'stg-berliner', clientType: 'Unclassified', clientApp: 'Browser Impersonator', entry: 'stage.berliner.co.il/api/v2/orders', method: 'POST', ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 1...',
    time: 'Oct 25 2026, 16:05:40', sessionId: '480002801414848621', country: 'Israel', ip: '10.20.4.17', hits: 140, views: 0, http: '2.0', cookies: 'Supported',
    tags: [['Security Rules', 140, 'API Rate Abuse Block']] },
  { site: 'stg-berliner', clientType: 'Bad Bot', clientApp: 'Python-requests', entry: 'stage.berliner.co.il/prices', method: 'GET', ua: 'python-requests/2.31',
    time: 'Oct 25 2026, 15:58:12', sessionId: '480002801414848107', country: 'Israel', ip: '10.20.4.17', hits: 36, views: 36, http: '1.1', cookies: 'Not supported',
    tags: [['Security Rules', 36, 'Bot Scraping Detection'], ['Bad Bots']] },
  { site: 'berliner', clientType: 'Unclassified', clientApp: 'Browser Impersonator', entry: 'www.berliner.co.il/wp/.env', method: 'GET', ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 1...',
    time: 'Oct 25 2026, 15:41:52', sessionId: '480002801414844862', country: 'Hong Kong', ip: '35.220.240.233', hits: 2, views: 0, http: '1.1', cookies: 'Supported',
    tags: [['Illegal Resource Access', 2]] },
  { site: 'shop', clientType: 'Unclassified', clientApp: 'Browser Impersonator', entry: 'shop.berliner.co.il/', method: 'GET', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    time: 'Oct 25 2026, 15:20:23', sessionId: '100000350400697482', country: 'Vietnam', ip: '103.77.192.9', hits: 274, views: 92, http: '1.1', cookies: 'Supported',
    tags: [['Cross Site Scripting', 2], ['Illegal Resource Access', 181]] },
  { site: 'stg-berliner', clientType: 'Hacking Tool', clientApp: 'sqlmap', entry: "stage.berliner.co.il/search?q=1' OR '1'='1", method: 'GET', ua: 'sqlmap/1.8',
    time: 'Oct 25 2026, 13:49:07', sessionId: '480002801414841933', country: 'Israel', ip: '10.20.4.22', hits: 12, views: 0, http: '1.1', cookies: 'Not supported',
    tags: [['Cross Site Scripting', 3]] },
  { site: 'api', clientType: 'Bad Bot', clientApp: 'Go-http-client', entry: 'api.berliner.co.il/v1/login', method: 'POST', ua: 'Go-http-client/1.1',
    time: 'Oct 25 2026, 12:57:30', sessionId: '220000190030558172', country: 'Russia', ip: '91.240.118.2', hits: 48, views: 0, http: '1.1', cookies: 'Not supported',
    tags: [['Security Rules', 38, 'Block Session when reaching 10 requests'], ['Bad Bots']] },
];
const VIOLATION_COLORS = { 'Cross Site Scripting': '#1F6F78', 'Illegal Resource Access': '#B88CF1', 'Bad Bots': '#041295', 'Security Rules': '#5081F2' };


function renderEvents() {
  const picked = selectedSites('eventsSel');
  const ids = new Set(picked.map(x => x.id));
  const rows = SESSIONS.filter(e => ids.has(e.site));
  // Sessions by violation type: how many sessions carry each tag
  const counts = {};
  rows.forEach(r => r.tags.forEach(([t]) => { counts[t] = (counts[t] || 0) + 1; }));
  const total = Object.values(counts).reduce((a, b) => a + b, 0) || 1;
  const types = Object.keys(counts);
  const kv = (k, v) => `<div class="sess-kv"><span class="sess-k">${k}</span><span class="sess-v">${v}</span></div>`;

  document.getElementById('body-s05_3').innerHTML = `
    <div class="ev-card">
      <div class="dash-tabs"><div class="dash-tab active">Sessions</div><div class="dash-tab">Requests <span class="beta-tag">BETA</span></div></div>
      <div class="ev-filters">
        <div class="dash-filter"><div class="dash-filter-label">Websites</div>${multiSiteSelector('eventsSel', 'renderEvents')}</div>
        <div class="dash-filter dash-filter--time"><div class="dash-filter-label">Time range</div><div class="dash-filter-value">Last 7 days ${UI_ICONS.caret}</div></div>
        <div class="dash-filter dash-filter--time"><div class="dash-filter-label">Data Region</div><div class="dash-filter-value">EU ${UI_ICONS.caret}</div></div>
      </div>
      ${picked.some(isStage) ? stageTrafficNote() : ''}
      <div class="ev-filters-row"><button class="btn btn-secondary btn-sm">${UI_ICONS.filter} Filters</button></div>
    </div>

    <div class="ev-card ev-vis">
      <div class="ev-title">Sessions by violation type</div>
      <div class="ev-stats">${types.map(t => `<div class="ev-stat" style="--c:${VIOLATION_COLORS[t]}"><div class="ev-stat-label">${t}</div><div class="ev-stat-val">${counts[t]}</div></div>`).join('') || '<div class="ev-stat-label">No sessions</div>'}</div>
      <div class="ev-bar">${types.map(t => `<div style="width:${counts[t] / total * 100}%;background:${VIOLATION_COLORS[t]}"></div>`).join('')}</div>
    </div>

    <div class="ev-card">
      <div class="ev-title ev-title--list">Sessions</div>
      ${rows.length ? rows.map(r => { const s = siteById(r.site); return `
        <div class="sess-row">
          <span class="sess-chev">${UI_ICONS.caret}</span>
          <div class="sess-col">${kv('Client Type', r.clientType)}${kv('Client App', r.clientApp)}${kv('Entry Page', r.entry)}${kv('Method', r.method)}${kv('User Agent', r.ua)}</div>
          <div class="sess-col">${kv('Time', r.time)}${kv('Website', `${s.name} (${s.siteId})${isStage(s) ? stageChip() : ''}`)}${kv('Session ID', r.sessionId)}${kv('Country', r.country)}
            ${kv('Source IP', `<a class="sess-link">${r.ip}</a>`)}</div>
          <div class="sess-col sess-col--narrow">${kv('Hits', r.hits)}${r.views ? kv('Page Views', r.views) : ''}${kv('HTTP', r.http)}${kv('Cookies', r.cookies)}</div>
          <div class="sess-tags">
            <span class="ai-tag">${UI_ICONS.ai} AI Explain available</span>
            ${r.tags.map(([t, n]) => `<span class="viol-tag ${t === 'Bad Bots' ? 'viol-tag--bot' : ''}">${t}${n ? ` (${n})` : ''}</span>`).join('')}
          </div>
          <button class="kebab-btn kebab-btn--box">&#8942;</button>
        </div>`; }).join('') : `<div class="rules-empty">No sessions in this time range.</div>`}
    </div>`;
}

/* ─── FIRST-VISIT GUIDANCE (staging site) ─────── */
function guidanceHtml() {
  return `
    <div class="guide-pop" role="dialog">
      <div class="guide-title">You're in a staging site</div>
      <ul class="guide-list">
        <li>Changes here don't reach production until you review and promote them.</li>
        <li>Only Security Rules can be edited. Other areas are locked; make those changes in the production site.</li>
        <li>Use this menu to promote, reset stage, or go to the production site.</li>
      </ul>
      <button class="btn btn-primary btn-sm" onclick="dismissGuidance()">Got it</button>
    </div>`;
}
function dismissGuidance() { STATE.guidanceSeen = true; document.querySelectorAll('.guide-pop').forEach(g => g.remove()); }

/* ─── REVIEW AND PROMOTE (overlay) ────────────── */
// Opens over whatever page the user is on: top nav, sidebar and breadcrumbs stay; the page body is covered.
// Closing (✕ or after promoting) shows that same page again.
const reviewSite = () => STATE.review && siteById(STATE.review.stgId);
function openReview(stgId) {
  const stg = siteById(stgId);
  if (!stg || stg.stageStatus !== 'ready') return;
  STATE.review = { stgId };
  STATE.reviewFilter = 'all'; STATE.reviewQuery = ''; STATE.commentEditing = null;
  renderScreen(activeScreen());
  window.scrollTo(0, 0);
}
function closeReview() { STATE.review = null; renderScreen(activeScreen()); }
// Per staging site. Every change is selected by default; unselected changes stay in staging.
const isSelected = c => c.selected !== false;
const prodChangedFor = stg => STATE.productionChanged && STATE.productionChanged.siteId === stg.stageOf ? STATE.productionChanged : null;
const NO_PROMOTE_TIP = "You don't have permission to promote. Contact your account admin.";
const changeAfter = c => c.after || c.before;
const AUDIT_STUB = "toast('The audit log isn’t part of this prototype.')";

// Dependency problems among the selected changes, keyed by change id
function depErrors(stg) {
  const list = changesFor(stg);
  const sel = list.filter(isSelected);
  const errs = {};
  const name = id => (stageRules(stg).find(r => r.id === id) || prodRules(stg.stageOf).find(r => r.id === id) || {}).name;
  sel.forEach(c => {
    // A promoted rule can't depend on a rule that only exists in staging and stays there
    if (c.after) (c.after.dependsOn || []).forEach(dep => {
      const depChange = list.find(x => x.type === 'ADD' && x.ruleId === dep);
      if (depChange && !isSelected(depChange))
        errs[c.id] = { text: `Depends on “${depChange.rule}”, which exists only in staging and isn't selected. Select it too, or unselect this change.`, fixId: depChange.id, fixLabel: `Select “${depChange.rule}”` };
    });
    // Deleting a rule that production rules still use after the promote
    if (c.type === 'DEL') {
      const deleting = new Set(sel.filter(x => x.type === 'DEL').map(x => x.ruleId));
      const users = prodRules(stg.stageOf).filter(r => (r.dependsOn || []).includes(c.ruleId) && !deleting.has(r.id));
      if (users.length)
        errs[c.id] = { text: `“${users.map(u => u.name).join('”, “')}” still uses this rule in production. Delete or change it too, or unselect this deletion.` };
    }
  });
  return errs;
}

function promoteBlock(stg) {
  const sel = changesFor(stg).filter(isSelected);
  if (STATE.role !== 'admin') return NO_PROMOTE_TIP;
  if (prodChangedFor(stg)) return 'Production changed. Reset stage before you promote.';
  if (!sel.length) return 'Select at least one change to promote.';
  if (Object.keys(depErrors(stg)).length) return 'Fix the dependency errors first.';
  return '';
}

function prodChangedNotice(stg) {
  const pc = prodChangedFor(stg);
  if (!pc) return '';
  return `
    <div class="notice notice--block">
      <span class="notice-icon">${ICON_WARN}</span>
      <div class="notice-text"><strong>Production changed after this staging site was created.</strong> On ${pc.time}, ${pc.by} changed “${pc.rule}” in ${productionOf(stg).name}. Reset stage to get the latest production rules before you promote. Your staged changes will be lost.</div>
      <button class="btn btn-secondary btn-sm" onclick="${AUDIT_STUB}">View in Audit log</button>
      <button class="btn btn-danger btn-sm" onclick="confirmReset('${stg.id}')">Reset stage</button>
    </div>`;
}

function promotedNotice(site) {
  const p = STATE.lastPromote;
  if (!p || p.siteId !== site.id) return '';
  return `
    <div class="notice notice--ok">
      <span class="notice-icon">${UI_ICONS.check}</span>
      <div class="notice-text"><strong>${p.count} ${p.count === 1 ? 'change' : 'changes'} promoted to ${p.prod}.</strong> “${p.message}” · ${p.by}, ${p.time}</div>
      <button class="btn btn-secondary btn-sm" onclick="${AUDIT_STUB}">View in Audit log</button>
      <button class="notice-close" title="Dismiss" onclick="STATE.lastPromote=null;renderScreen(activeScreen())">✕</button>
    </div>`;
}

function diffRows(c) {
  const fields = [['Name', 'name'], ['Rule type', 'group'], ['Condition', 'desc'], ['Status', 'enabled']];
  const fmt = (r, k) => !r ? '' : k === 'enabled' ? (r[k] ? 'Enabled' : 'Disabled') : r[k];
  return fields.map(([label, k]) => {
    const b = fmt(c.before, k), a = fmt(c.after, k);
    const changed = c.type === 'MOD' && b !== a;
    if (c.type === 'MOD' && !changed && k !== 'name') return '';
    return `<tr class="${changed ? 'is-changed' : ''}">
      <td class="rv-field">${label}</td>
      <td class="rv-prod">${c.type === 'ADD' ? (k === 'name' ? '<span class="rv-none">Not in production</span>' : '') : b}</td>
      <td class="rv-stage">${c.type === 'DEL' ? (k === 'name' ? '<span class="rv-none">Deleted in staging</span>' : '') : a}</td>
    </tr>`;
  }).join('');
}

function renderReview() {
  const body = document.getElementById(`overlay-${activeScreen()}`);
  const stg = reviewSite();
  if (!stg) return;
  const prod = productionOf(stg);
  const all = changesFor(stg);
  const f = STATE.reviewFilter;
  const q = STATE.reviewQuery.trim().toLowerCase();
  const shown = all.filter(c => (f === 'all' || c.type === f) && (!q || c.rule.toLowerCase().includes(q)));
  const sel = all.filter(isSelected);
  const errs = depErrors(stg);
  const block = promoteBlock(stg);
  const count = t => all.filter(c => c.type === t).length;
  const chip = (t, label) => `<button class="rv-chip ${f === t ? 'active' : ''}" onclick="setReviewFilter('${t}')">${t === 'all' ? '' : `<span class="type-tag type-tag--${t.toLowerCase()}">${t}</span>`}${label}</button>`;

  const card = c => {
    const r = changeAfter(c);
    const err = isSelected(c) && errs[c.id];
    const editing = STATE.commentEditing === c.id;
    const comment = editing
      ? `<div class="rv-comment-edit"><textarea class="text-input text-area" id="cm-${c.id}" placeholder="Why did this change happen? Add context or a ticket link (optional)">${c.comment}</textarea>
           <div class="rv-comment-actions"><button class="btn btn-primary btn-sm" onclick="saveComment('${c.id}')">Save comment</button><button class="btn btn-secondary btn-sm" onclick="STATE.commentEditing=null;renderReview()">Cancel</button></div></div>`
      : c.comment
        ? `<div class="rv-comment"><span class="rv-comment-label">Comment</span>${c.comment} <a onclick="editComment('${c.id}')">Edit</a></div>`
        : `<a class="rv-add-comment" onclick="editComment('${c.id}')">+ Add comment</a>`;
    return `
      <div class="rv-change ${isSelected(c) ? 'is-selected' : ''} ${err ? 'has-error' : ''}">
        <input type="checkbox" class="rv-check" ${isSelected(c) ? 'checked' : ''} onchange="toggleChange('${c.id}')"/>
        <div class="rv-main">
          <div class="rv-top">
            <span class="type-tag type-tag--${c.type.toLowerCase()}">${c.type}</span>
            <span class="rv-name">${c.rule}</span><span class="rv-id">(${r.ruleId}) · ${r.group}</span>
            <span class="rv-meta">${c.author} · ${c.time}</span>
            <a class="rv-discard" onclick="confirmDiscard('${c.id}')">Discard</a>
          </div>
          <table class="rv-diff"><thead><tr><th></th><th>Production · ${prod.name}</th><th>Staging · ${stg.name}</th></tr></thead><tbody>${diffRows(c)}</tbody></table>
          ${comment}
          ${err ? `<div class="rv-error">${ICON_WARN}<span>${err.text}</span>${err.fixId ? `<a onclick="selectChange('${err.fixId}')">${err.fixLabel}</a>` : ''}</div>` : ''}
        </div>
      </div>`;
  };

  body.innerHTML = `
    <div class="rv-head">
      <h1 class="page-title">Review and promote</h1>
      <div class="rv-route">${stg.name}${stageChip()} <span class="rv-arrow">→</span> ${prod.name}${prodChip()}</div>
      <button class="rv-close" aria-label="Close" title="Close" onclick="closeReview()">✕</button>
    </div>
    ${prodChangedNotice(stg)}
    ${all.length ? `
    <div class="rv-card">
      <div class="rv-toolbar">
        <label class="rv-all"><input type="checkbox" ${sel.length === all.length ? 'checked' : ''} onchange="selectAllChanges(this.checked)"/> Select all</label>
        <div class="rv-chips">${chip('all', `All ${all.length}`)}${chip('ADD', count('ADD'))}${chip('MOD', count('MOD'))}${chip('DEL', count('DEL'))}</div>
        <div class="rules-filter rv-search">${UI_ICONS.search}<input type="text" placeholder="Search changes" value="${STATE.reviewQuery}" onchange="STATE.reviewQuery=this.value;renderReview()"/></div>
        <button class="btn btn-secondary btn-sm" onclick="confirmDiscardAll()">Discard all</button>
      </div>
      <div class="rv-group">Security Rules <span class="rv-group-count">${shown.length}</span></div>
      ${shown.length ? shown.map(card).join('') : '<div class="rules-empty">No changes match.</div>'}
    </div>
    <div class="rv-strip">
      <span><strong>${sel.length} of ${all.length}</strong> changes selected. Unselected changes stay in staging.</span>
      ${block
        ? `<span class="has-tip tip-right" data-tip="${block}"><button class="btn btn-primary btn-sm" disabled>Promote (${sel.length})</button></span>`
        : `<button class="btn btn-primary btn-sm" onclick="openPromote()">Promote (${sel.length})</button>`}
    </div>` : `
    <div class="rv-card rv-empty">
      <div class="rv-empty-title">Nothing to promote</div>
      <div class="rv-empty-text">Security rules in ${stg.name} match ${prod.name}.</div>
      <button class="btn btn-secondary btn-sm" onclick="STATE.review=null;openSite('${stg.id}','s05_1_1')">Go to staging rules</button>
    </div>`}`;
}

function setReviewFilter(t) { STATE.reviewFilter = t; renderReview(); }
function toggleChange(id) { const c = changeById(id); c.selected = !isSelected(c); renderReview(); }
function selectChange(id) { changeById(id).selected = true; renderReview(); }
function selectAllChanges(on) { changesFor(reviewSite()).forEach(c => { c.selected = on; }); renderReview(); }
function editComment(id) { STATE.commentEditing = id; renderReview(); document.getElementById(`cm-${id}`).focus(); }
function saveComment(id) { changeById(id).comment = document.getElementById(`cm-${id}`).value.trim(); STATE.commentEditing = null; renderReview(); }

function confirmDiscard(id) {
  const c = changeById(id);
  const effect = { ADD: 'The rule is removed from staging.', MOD: 'The rule in staging goes back to the production version.', DEL: 'The rule comes back in staging.' }[c.type];
  showModal({
    title: `Discard change to “${c.rule}”?`, danger: true, confirmLabel: 'Discard',
    body: `<p>${effect} This can't be undone.</p>`,
    onConfirm: () => { STATE.changes = STATE.changes.filter(x => x !== c); renderReview(); toast(`Change to “${c.rule}” discarded.`); },
  });
}
function confirmDiscardAll() {
  const stg = reviewSite();
  const list = changesFor(stg);
  showModal({
    title: `Discard all ${list.length} changes?`, danger: true, confirmLabel: 'Discard all',
    body: `<p>Staging goes back to the production rules. These changes are lost:</p>${changeList(list)}`,
    onConfirm: () => { STATE.changes = STATE.changes.filter(c => c.siteId !== stg.id); renderReview(); toast('All changes discarded.'); },
  });
}
const changeList = list => `<ul class="modal-list">${list.map(c => `<li><span class="type-tag type-tag--${c.type.toLowerCase()}">${c.type}</span>${c.rule}</li>`).join('')}</ul>`;

function openPromote() {
  const stg = reviewSite();
  const sel = changesFor(stg).filter(isSelected);
  showModal({
    title: `Promote ${sel.length} ${sel.length === 1 ? 'change' : 'changes'} to ${productionOf(stg).name}?`,
    confirmLabel: 'Promote', confirmDisabled: true,
    body: `<p>These changes go live in production right away:</p>${changeList(sel)}
      <div class="field-label" style="margin-top:14px;">Commit message <span class="req">*</span></div>
      <textarea class="text-input text-area" id="pm-msg" placeholder="Describe what this promote does" oninput="document.getElementById('modal-confirm').disabled=!this.value.trim()"></textarea>
      <div class="field-help">Shown in the audit log with the promoted changes.</div>`,
    onConfirm: () => promote(stg, sel, document.getElementById('pm-msg').value.trim()),
  });
  document.getElementById('pm-msg').focus();
}

// Apply the selected changes to production; the rest stay staged
function promote(stg, sel, message) {
  const prod = prodRules(stg.stageOf);
  sel.forEach(c => {
    if (c.type === 'ADD') prod.push({ ...c.after });
    else if (c.type === 'MOD') prod.splice(prod.findIndex(r => r.id === c.ruleId), 1, { ...c.after });
    else prod.splice(prod.findIndex(r => r.id === c.ruleId), 1);
  });
  STATE.changes = STATE.changes.filter(c => !sel.includes(c));
  stg.lastAction = nowStamp(); stg.lastUser = STATE.user;
  STATE.lastPromote = { siteId: stg.id, count: sel.length, prod: productionOf(stg).name, message, by: STATE.user, time: nowStamp() };
  STATE.review = null;
  renderScreen(activeScreen());   // back to the page the user was on
  notify({ type: 'success', title: `${sel.length} ${sel.length === 1 ? 'change' : 'changes'} promoted to ${productionOf(stg).name}`, body: `“${message}”`, action: { label: 'View in Audit log', onclick: AUDIT_STUB } });
}

/* ─── RESET STAGE ─────────────────────────────── */
function confirmReset(stgId) {
  const stg = siteById(stgId);
  const list = changesFor(stg);
  showModal({
    title: `Reset ${stg.name}?`, danger: true, confirmLabel: 'Reset stage',
    body: `<p>Staging gets the latest rules from ${productionOf(stg).name}.</p>` +
      (list.length ? `<p>These staged changes are lost:</p>${changeList(list)}` : `<p>There are no staged changes.</p>`),
    onConfirm: () => {
      STATE.changes = STATE.changes.filter(c => c.siteId !== stg.id);
      if (prodChangedFor(stg)) STATE.productionChanged = null;
      stg.lastAction = nowStamp(); stg.lastUser = STATE.user;
      renderScreen(activeScreen());
      notify({ type: 'success', title: 'Stage reset', body: `${stg.name} now matches production.` });
    },
  });
}

/* ─── PROTOTYPE TOGGLES ───────────────────────── */
function toggleProdChanged() {
  STATE.productionChanged = STATE.productionChanged ? null
    : { siteId: 'berliner', rule: 'Block Tor exit nodes', by: TEAMMATE, time: '25 Oct 2026, 15:02' };
  syncProtoToggles();
  renderScreen(activeScreen());
}
function toggleRole() {
  STATE.role = STATE.role === 'admin' ? 'no-promote' : 'admin';
  syncProtoToggles();
  renderScreen(activeScreen());
  toast(STATE.role === 'admin' ? 'Role: admin (can promote).' : 'Role: editor without promote permission.');
}
function syncProtoToggles() {
  document.getElementById('pt-prod').classList.toggle('on', !!STATE.productionChanged);
  document.getElementById('pt-role').textContent = STATE.role === 'admin' ? 'Role: admin' : 'Role: no promote';
  document.getElementById('pt-role').classList.toggle('on', STATE.role !== 'admin');
}

/* ─── SHARED MODAL ────────────────────────────── */
function showModal({ title, body, confirmLabel, danger = false, wide = false, validate = null, confirmDisabled = false, onConfirm }) {
  const el = document.getElementById('modal');
  el.innerHTML = `
    <div class="modal-box ${wide ? 'modal-box--wide' : ''}" role="dialog" aria-modal="true">
      <div class="modal-title">${title}</div>
      <div class="modal-body">${body}</div>
      <div class="modal-actions">
        <button class="btn btn-secondary btn-sm" onclick="hideModal()">Cancel</button>
        <button class="btn ${danger ? 'btn-danger' : 'btn-primary'} btn-sm" id="modal-confirm" ${confirmDisabled ? 'disabled' : ''}>${confirmLabel}</button>
      </div>
    </div>`;
  document.getElementById('modal-confirm').onclick = () => { if (validate && !validate()) return; hideModal(); onConfirm(); };
  el.classList.add('show');
}
function hideModal() { document.getElementById('modal').classList.remove('show'); }

/* ─── STAGE CONFIGURATION (s01) ───────────────── */
// One page: settings card (enable, routing, sites, stage actions) + table of staged sites.
const STAGE_ACTIONS = [
  { id: 'rules',    label: 'Security rules' },
  { id: 'abp',      label: 'Advanced Bot Protection', soon: true },
  { id: 'policies', label: 'Security Policies',       soon: true },
];
const actionLabel = id => STAGE_ACTIONS.find(a => a.id === id).label;
const stagingNameFor = prod => 'stage.' + prod.name.replace(/^www\./, '');
const CREATE_TIP = "Creating the staging site takes a few minutes. We'll let you know when it's ready.";

function nowStamp() {
  const d = new Date();
  const mon = d.toLocaleString('en-GB', { month: 'short' });
  return `${d.getDate()} ${mon} ${d.getFullYear()}, ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}

// Card 1: stage on/off + routing (committed with Save / Cancel in the breadcrumb row).
// Card 2: sites + stage actions → Add to list → staged sites table (In progress → Ready, turn off = disable).
function renderStageConfig() {
  const d = STATE.draft;
  const off = !d.enabled;
  const prodSites = STATE.sites.filter(x => x.env === 'prod');
  const staged = STATE.sites.filter(isStage);
  const canAdd = !off && d.sites.length && d.actions.length;

  const sitesBtn = d.sites.length ? d.sites.map(id => siteById(id).name).join(', ') : 'Choose sites';
  const actionsBtn = d.actions.length ? d.actions.map(actionLabel).join(', ') : 'Choose stage actions';
  const siteOptions = prodSites.map(x => {
    const has = !!stagingOf(x);
    return `<label class="ms-option ${has ? 'disabled' : ''}">
      <input type="checkbox" ${d.sites.includes(x.id) ? 'checked' : ''} ${has ? 'disabled' : ''} onchange="toggleDraft('sites','${x.id}')"/>
      <span>${x.name}</span>${has ? '<span class="ms-note">In the list</span>' : ''}
    </label>`;
  }).join('');
  const actionOptions = STAGE_ACTIONS.map(a => `
    <label class="ms-option ${a.soon ? 'disabled' : ''}">
      <input type="checkbox" ${d.actions.includes(a.id) ? 'checked' : ''} ${a.soon ? 'disabled' : ''} onchange="toggleDraft('actions','${a.id}')"/>
      <span>${a.label}</span>${a.soon ? '<span class="ms-soon">Coming soon</span>' : ''}
    </label>`).join('');
  const isIp = d.routing === 'ip';

  document.getElementById('body-s01').innerHTML = `
    <a class="back-link" onclick="showScreen('s02')">${NAV_ICONS.arrowLeft} Back</a>
    <h1 class="page-title">Stage configuration</h1>

    <div class="form-card">
      <div class="form-section">
        <div class="form-section-label">
          <div class="fs-title">Stage</div>
          <div class="fs-desc">Let teams test changes on a staging copy of a site before they reach production.</div>
        </div>
        <div class="form-section-fields">
          <label class="switch-row">
            <span class="switch ${d.enabled ? 'on' : ''}" onclick="setDraft('enabled', ${!d.enabled})"><span class="switch-knob"></span></span>
            <span>Enable stage</span>
          </label>
        </div>
      </div>
      <div class="form-section form-section--last ${off ? 'is-off' : ''}">
        <div class="form-section-label">
          <div class="fs-title">Routing</div>
          <div class="fs-desc">How test traffic reaches staging sites. Applies to every staging site in this account.</div>
        </div>
        <div class="form-section-fields">
          <div class="field-label">Select staging traffic by</div>
          <label class="radio-row"><input type="radio" name="routing" ${!isIp ? 'checked' : ''} ${off ? 'disabled' : ''} onchange="setDraft('routing','header')"/> Header + secret</label>
          <label class="radio-row"><input type="radio" name="routing" ${isIp ? 'checked' : ''} ${off ? 'disabled' : ''} onchange="setDraft('routing','ip')"/> Client IP</label>
          ${isIp ? `
          <div class="field-label" style="margin-top:14px;">Client IP range </div>
          <input class="text-input mono-input" ${off ? 'disabled' : ''} value="${d.cidr}" placeholder="e.g. 1.2.3.4/24" oninput="STATE.draft.cidr=this.value"/>
          <div class="field-help">Requests from this range reach staging sites. Production traffic is never routed to stage.</div>`
          : headerRoutingFields(d, off)}
        </div>
      </div>
    </div>

    <div class="form-card ${off ? 'is-off-card' : ''}">
      <div class="form-section ${off ? 'is-off' : ''}">
        <div class="form-section-label">
          <div class="fs-title">Sites</div>
          <div class="fs-desc">Each site you add gets its own staging site.</div>
        </div>
        <div class="form-section-fields">
          <div class="field-label">Websites</div>
          <div class="menu-wrap">
            <button class="select-btn" ${off ? 'disabled' : ''} onclick="toggleMenu(this)"><span class="select-text ${d.sites.length ? '' : 'placeholder'}">${sitesBtn}</span>${UI_ICONS.caret}</button>
            <div class="menu ms-menu">${siteOptions}</div>
          </div>
        </div>
      </div>
      <div class="form-section ${off ? 'is-off' : ''}">
        <div class="form-section-label">
          <div class="fs-title">Stage actions</div>
          <div class="fs-desc">What can be changed and tested in the staging sites.</div>
        </div>
        <div class="form-section-fields">
          <div class="field-label">Actions</div>
          <div class="menu-wrap">
            <button class="select-btn" ${off ? 'disabled' : ''} onclick="toggleMenu(this)"><span class="select-text ${d.actions.length ? '' : 'placeholder'}">${actionsBtn}</span>${UI_ICONS.caret}</button>
            <div class="menu ms-menu">${actionOptions}</div>
          </div>
          <div class="field-help">Can't be changed for a site after its staging site is created.</div>
          <button class="btn btn-primary btn-sm add-to-list" ${canAdd ? '' : 'disabled'} onclick="addToList()">Add to list</button>
        </div>
      </div>

      <div class="staged-head"><div class="table-title">Staged sites</div><div class="table-count">${staged.length}</div></div>
      ${staged.length ? `
      <table class="staged-table">
        <thead><tr><th>Site</th><th>Actions</th><th>Last action</th><th>Last updated by</th><th>Status</th><th style="width:48px;"></th></tr></thead>
        <tbody>
          ${staged.map(x => {
            const st = x.stageStatus;
            const ready = st === 'ready';
            const pill = {
              ready: `<span class="status-pill status-pill--ready">Ready</span>`,
              progress: `<span class="status-pill status-pill--progress has-tip" data-tip="${CREATE_TIP}"><span class="spinner"></span>In progress</span>`,
              disabled: `<span class="status-pill status-pill--disabled">Disabled</span>`,
            }[st];
            return `<tr>
              <td>
                <div class="td-name">${ready ? `<a class="table-link" onclick="openSite('${x.id}')">${x.name}</a>` : `<span class="td-real">${x.name}</span>`}${stageChip()}</div>
                <span class="td-sub">Staging for ${productionOf(x).name}</span>
              </td>
              <td>${x.actions.map(actionLabel).join(', ')}</td>
              <td>${x.lastAction}</td>
              <td>${x.lastUser}</td>
              <td>${pill}</td>
              <td>
                <div class="menu-wrap">
                  <button class="kebab-btn" onclick="toggleMenu(this)" aria-label="Actions">⋯</button>
                  <div class="menu menu-right menu-up">
                    <div class="menu-item ${ready ? '' : 'disabled'}" onclick="closeMenus();openSite('${x.id}')">Open staging site</div>
                    <div class="menu-item ${ready && changesFor(x).length ? '' : 'disabled'}" onclick="closeMenus();openReview('${x.id}')">Review and promote <span class="menu-count">${changesFor(x).length}</span></div>
                    <div class="menu-sep"></div>
                    ${st === 'disabled'
                      ? `<div class="menu-item" onclick="closeMenus();turnOnStaging('${x.id}')">Turn on staging</div>`
                      : `<div class="menu-item menu-item--danger ${ready ? '' : 'disabled'}" onclick="closeMenus();confirmTurnOff('${x.id}')">Turn off staging</div>`}
                  </div>
                </div>
              </td>
            </tr>`;}).join('')}
        </tbody>
      </table>` : `<div class="empty-row">No staged sites yet. Choose sites and stage actions, then add them to the list.</div>`}
    </div>`;
}

// Header routing: header name (default or custom), expiry the customer picks, and the secret Imperva generates
function headerRoutingFields(d, off) {
  const sec = STATE.stage.secret;
  const today = new Date().toISOString().slice(0, 10);
  const fmt = iso => new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  return `
    <div class="field-label" style="margin-top:14px;">Header name</div>
    <input class="text-input mono-input" ${off ? 'disabled' : ''} value="${d.headerName}" placeholder="${DEFAULT_HEADER}" oninput="STATE.draft.headerName=this.value"/>
    <div class="field-help">Imperva's default. You can use your own name.</div>

    <div class="field-label" style="margin-top:14px;">Secret expires on</div>
    <input type="date" class="text-input date-input" ${off ? 'disabled' : ''} min="${today}" value="${d.expiry}" onchange="STATE.draft.expiry=this.value"/>
    <div class="field-help">The header value is a secret Imperva generates. Requests with the header and a valid secret reach staging sites. Production traffic is never routed to stage.</div>

    <div class="secret-block">
      ${sec ? `<div class="secret-meta"><strong>Secret generated</strong> on ${sec.generatedAt} · expires ${fmt(sec.expires)}</div>`
            : `<div class="secret-meta">No secret yet. Generate one to start sending test traffic.</div>`}
      <button class="btn ${sec ? 'btn-secondary' : 'btn-primary'} btn-sm" ${off ? 'disabled' : ''} onclick="${sec ? 'confirmRegenerateSecret()' : 'generateSecret()'}">${sec ? 'Regenerate secret' : 'Generate secret'}</button>
      ${sec && sec.value ? `
        <div class="notice notice--warn secret-warn"><span class="notice-icon">${ICON_WARN}</span><div class="notice-text">This secret is shown only once. Store it now. It can't be retrieved again, only regenerated.</div></div>
        <div class="secret-value">
          <code id="secret-code">${sec.value}</code>
          <button class="btn btn-secondary btn-sm" onclick="copySecret()">Copy</button>
          <button class="btn btn-primary btn-sm" onclick="STATE.stage.secret.value=null;renderStageConfig()">Dismiss</button>
        </div>` : ''}
    </div>`;
}

function generateSecret() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  const value = Array.from({ length: 43 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  const d = STATE.draft;
  STATE.stage.headerName = d.headerName || DEFAULT_HEADER;
  STATE.stage.expiry = d.expiry;
  STATE.stage.secret = { generatedAt: nowStamp(), expires: d.expiry, value };
  renderStageConfig();
}
function confirmRegenerateSecret() {
  showModal({
    title: 'Regenerate the staging secret?',
    body: `<p>The current secret stops working right away. Test traffic that uses it no longer reaches staging sites until you update it.</p>`,
    confirmLabel: 'Regenerate', danger: true,
    onConfirm: generateSecret,
  });
}
function copySecret() {
  const v = STATE.stage.secret && STATE.stage.secret.value;
  if (v && navigator.clipboard) navigator.clipboard.writeText(v).catch(() => {});
  notify({ type: 'success', title: 'Secret copied' });
}

// Save / Cancel live in the breadcrumb row on this page
const STAGE_CONFIG_ACTIONS = `
  <div class="crumb-actions">
    <button class="btn btn-secondary btn-sm" onclick="cancelStageConfig()">Cancel</button>
    <button class="btn btn-primary btn-sm" onclick="saveStageConfig()">Save</button>
  </div>`;

function rerenderIfActive(id) {
  if (document.getElementById(id).classList.contains('active')) SCREENS[id].render();
}

function setDraft(key, value) { STATE.draft[key] = value; renderStageConfig(); }

function toggleDraft(key, id) {
  const list = STATE.draft[key];
  const i = list.indexOf(id);
  i >= 0 ? list.splice(i, 1) : list.push(id);
  renderStageConfig();
  // keep the dropdown open while picking
  document.querySelectorAll('#body-s01 .ms-menu')[key === 'sites' ? 0 : 1].classList.add('open');
}

function commitStageSettings() {
  const d = STATE.draft;
  Object.assign(STATE.stage, { enabled: d.enabled, routing: d.routing, cidr: d.cidr, headerName: d.headerName, expiry: d.expiry });
}

function cancelStageConfig() {
  STATE.draft = draftFrom(STATE.stage);
  renderStageConfig();
}

function saveStageConfig() {
  const turningOff = STATE.stage.enabled && !STATE.draft.enabled;
  commitStageSettings();
  STATE.draft = draftFrom(STATE.stage);
  if (turningOff) {
    // Stage off: every staging site is disabled (kept in the list, can be turned on again)
    STATE.sites.filter(x => isStage(x) && x.stageStatus === 'ready').forEach(x => setStageStatus(x, 'disabled'));
  }
  renderStageConfig();
  notify({ type: 'success', title: 'Stage configuration saved', body: turningOff ? 'Stage is off. Staging sites are disabled.' : '' });
}

function setStageStatus(stg, st) {
  stg.stageStatus = st;
  stg.status = { ready: 'active', progress: 'progress', disabled: 'inactive' }[st];
  stg.lastAction = nowStamp();
  stg.lastUser = STATE.user;
}

function addToList() {
  const d = STATE.draft;
  commitStageSettings();
  const created = d.sites.map(id => {
    const prod = siteById(id);
    const stg = {
      id: 'stg-' + prod.id, env: 'stage', name: stagingNameFor(prod), siteId: String(Number(prod.siteId) + 100),
      stageOf: prod.id, actions: [...d.actions], bw: '0bps', humans: '0', bots: '0', waf: '0', created: nowStamp().split(',')[0],
    };
    setStageStatus(stg, 'progress');
    STATE.sites.push(stg);
    return stg;
  });
  STATE.draft = { ...draftFrom(STATE.stage) };
  renderStageConfig();
  notify({
    type: 'info',
    title: created.length === 1 ? `Creating ${created[0].name}` : `Creating ${created.length} staging sites`,
    body: `${created.map(x => x.name).join(' and ')} will be ready in a few minutes. We'll let you know.`,
  });
  clearTimeout(markReady._t);
  markReady._t = setTimeout(markReady, 8000);   // simulated "a few minutes"
}

// Prototype: finish creating every in-progress staging site
function markReady() {
  const pending = STATE.sites.filter(x => isStage(x) && x.stageStatus === 'progress');
  if (!pending.length) { notify({ type: 'info', title: 'No staging sites in progress' }); return; }
  pending.forEach(x => setStageStatus(x, 'ready'));
  const one = pending.length === 1;
  notify({
    type: 'success',
    title: one ? `${pending[0].name} is ready` : `${pending.length} staging sites are ready`,
    body: one ? 'You can start testing rule changes.' : `${pending.map(x => x.name).join(' and ')} were added to Websites.`,
    action: one ? { label: 'Go to staging site', onclick: `openSite('${pending[0].id}')` } : { label: 'View in Websites', onclick: `showScreen('s02')` },
  });
  ['s01', 's02'].forEach(rerenderIfActive);
}

// Turn off = disable temporarily. The staging site and its staged changes stay; it can be turned on again.
function confirmTurnOff(stageId) {
  const stg = siteById(stageId);
  const prod = productionOf(stg);
  const pending = changesFor(stg);
  showModal({
    title: `Turn off staging for ${prod.name}?`,
    body: `<p><strong>${stg.name}</strong> is disabled until you turn it on again. Test traffic stops reaching it, and new security rules for ${prod.name} can be added in production.</p>` +
      (pending.length ? `<p>These unpromoted changes are kept:</p>${changeList(pending)}` : ''),
    confirmLabel: 'Turn off staging',
    danger: true,
    onConfirm: () => {
      setStageStatus(stg, 'disabled');
      if (STATE.currentSiteId === stageId) STATE.currentSiteId = stg.stageOf;
      renderStageConfig();
      notify({ type: 'success', title: `Staging turned off for ${prod.name}`, body: `${stg.name} is disabled. Turn it on again from this list.` });
    },
  });
}
function turnOnStaging(stageId) {
  const stg = siteById(stageId);
  setStageStatus(stg, 'ready');
  renderStageConfig();
  notify({ type: 'success', title: `Staging turned on for ${productionOf(stg).name}`, action: { label: 'Go to staging site', onclick: `openSite('${stg.id}')` } });
}

/* ─── SCREEN REGISTRY ─────────────────────────── */
// layout: which sidebar; site: whether the screen belongs to the current site (breadcrumb + stage locks)
const SCREENS = {
  s02:     { sidebar: 'application',  active: 'websites',        render: renderWebsites },
  s01:     { sidebar: 'account-mgmt', active: 'stage-config',    actions: STAGE_CONFIG_ACTIONS, render: renderStageConfig },
  s05_0:   { sidebar: 'application',  active: 'waf-dashboards',  render: () => renderDashboard(true) },
  s05_1:   { sidebar: 'website-mgmt', active: 'dashboards',      site: true, render: () => renderDashboard() },
  s03:     { sidebar: 'website-mgmt', active: 'security-rules',  site: true, render: () => renderRules('body-s03') },
  s05_1_1: { sidebar: 'website-mgmt', active: 'security-rules',  site: true, render: () => renderRules('body-s05_1_1') },
  s05_3:   { sidebar: 'application',  active: 'security-events', render: renderEvents },
};

function renderScreen(id) {
  const cfg = SCREENS[id];
  if (!cfg) return;
  const site = cfg.site ? currentSite() : null;
  renderNav(document.getElementById(`nav-${id}`));
  renderSidebar(document.getElementById(`sidebar-${id}`), cfg.sidebar, cfg.active, isStage(site));
  const crumb = document.getElementById(`crumb-${id}`);
  if (crumb) renderCrumb(crumb, site, cfg.actions || '');
  document.getElementById(`main-${id}`).classList.toggle('is-stage', isStage(site));
  cfg.render();
  // Review and promote overlay covers the page body while open
  const overlay = document.getElementById(`overlay-${id}`);
  document.getElementById(`body-${id}`).hidden = !!STATE.review;
  overlay.hidden = !STATE.review;
  if (STATE.review) renderReview(); else overlay.innerHTML = '';
}

function showScreen(id) {
  closeMenus();
  STATE.review = null;   // navigating away closes the overlay
  document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === id));
  document.querySelectorAll('.proto-nav button[data-screen]').forEach(b => b.classList.toggle('active', b.dataset.screen === id));
  renderScreen(id);
  window.scrollTo(0, 0);
}

/* ─── PROTOTYPE NAV ───────────────────────────── */
function toggleProtoNav() {
  const nav = document.querySelector('.proto-nav');
  const collapsed = nav.classList.toggle('collapsed');
  document.getElementById('proto-collapse-btn').textContent = collapsed ? '▾ Screens' : '✕';
}
function protoGo(siteId, screen) {
  if (siteId && !siteById(siteId)) { toast('No staging site in this demo state. Use “Full demo (stage configured)”.'); return; }
  if (siteId) STATE.currentSiteId = siteId;
  showScreen(screen);
}
function resetDemo(configured = false) {
  clearTimeout(markReady._t);
  STATE = SEED(configured);
  syncProtoToggles();
  document.getElementById('notify').innerHTML = '';
  showScreen('s02');
  notify({ type: 'info', title: configured ? 'Full demo: stage configured' : 'Demo reset: stage not configured' });
}

/* ─── INIT: build the shared screen shell, then show Websites ─ */
function buildShells() {
  Object.keys(SCREENS).forEach(id => {
    const el = document.getElementById(id);
    el.innerHTML = `
      <header class="top-nav" id="nav-${id}"></header>
      <div class="page-body">
        <aside class="sidebar" id="sidebar-${id}"></aside>
        <main class="page-content" id="main-${id}">
          <div class="crumb-bar" id="crumb-${id}"></div>
          <div class="screen-body" id="body-${id}"></div>
          <div class="screen-body review-overlay" id="overlay-${id}" hidden></div>
        </main>
      </div>`;
  });
}
buildShells();
showScreen('s02');
