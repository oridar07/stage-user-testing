/* Staging v4 prototype — one environment selector (Production / Stage) at account level.
   Copied from v3. Data model is the same (a staging site is a twin of its production site);
   only the presentation changes: the user picks an environment once and every screen shows that environment. */

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
  pending: `<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="4" cy="3.5" r="1.8" stroke="currentColor" stroke-width="1.4"/><circle cx="12" cy="12.5" r="1.8" stroke="currentColor" stroke-width="1.4"/><path d="M4 5.3V10a2.5 2.5 0 0 0 2.5 2.5H9M12 10.7V6a2.5 2.5 0 0 0-2.5-2.5H7M8 11l1.5 1.5L8 14M8 2L6.5 3.5 8 5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
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
  env: 'prod',            // the environment the user works in: 'prod' | 'stage' (selector in the breadcrumb)
  // Account-level stage configuration (s01)
  // Routing: header name (Imperva default, can be custom) + a secret Imperva generates as the header value,
  // valid until an expiry date the customer picks. Or a client IP range (CIDR) the customer provides.
  stage: { enabled: true, routing: 'header', cidr: '', headerName: DEFAULT_HEADER, expiry: '2026-11-22',
           secret: { generatedAt: '22 Oct 2026, 10:12', expires: '2026-11-22', value: null } },
  sites: [
    { id: 'berliner',     env: 'prod',  name: 'www.berliner.co.il',   siteId: '693737416', bw: '1.4Mbps', humans: '12.1K', bots: '3.2K', waf: '274', created: '16 Nov 2025', status: 'active' },
    { id: 'stg-berliner', env: 'stage', name: 'stage.berliner.co.il', siteId: '693737522', stageOf: 'berliner', stageStatus: 'ready', actions: ['rules'], lastAction: '22 Oct 2026, 10:14', lastUser: USER, bw: '12Kbps', humans: '41', bots: '9', waf: '6', created: '22 Oct 2026', status: 'active' },
    { id: 'shop',         env: 'prod',  name: 'shop.berliner.co.il',  siteId: '693737418', bw: '2.5Kbps', humans: '30', bots: '3.2K', waf: '174', created: '28 May 2025', status: 'active' },
    { id: 'stg-shop',     env: 'stage', name: 'stage.shop.berliner.co.il', siteId: '693737518', stageOf: 'shop', stageStatus: 'ready', actions: ['rules'], lastAction: '22 Oct 2026, 10:14', lastUser: USER, bw: '0bps', humans: '6', bots: '0', waf: '0', created: '22 Oct 2026', status: 'active' },
    { id: 'api',          env: 'prod',  name: 'api.berliner.co.il',   siteId: '693737430', bw: '107bps',  humans: '4',  bots: '1.7K', waf: '69',  created: '16 Nov 2025', status: 'active' },
    { id: 'stg-api',      env: 'stage', name: 'stage.api.berliner.co.il', siteId: '693737530', stageOf: 'api', stageStatus: 'ready', actions: ['rules'], lastAction: '23 Oct 2026, 09:40', lastUser: TEAMMATE, bw: '3Kbps', humans: '2', bots: '14', waf: '1', created: '23 Oct 2026', status: 'active' },
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
    { id: 'c4', siteId: 'stg-shop', type: 'MOD', ruleId: 'r5', rule: 'Geo block sanctioned countries',
      before: null,
      after: { id: 'r5', ruleId: '10093160', group: 'Security', name: 'Geo block sanctioned countries', desc: 'If: CountryCode in (KP, IR, SY, CU)', hits: '57', enabled: true },
      author: TEAMMATE, time: '25 Oct 2026, 11:20', comment: '' },
  ],
  // Production rules per production site; created on first use from the template (rulesTemplate)
  rules: { berliner: rulesTemplate(), shop: rulesTemplate() },
  seq: 10093203,          // next rule ID
  rulesTab: 'All', rulesQuery: '',
  eventsSel: ['all'], dashSel: ['all'],           // account-level site selection (default: all sites in the environment)
  review: null,
  prodNoticeClosed: [],                           // production sites whose staging notice was closed                                   // Review and promote overlay: { stgId } while open
  guidanceSeen: false,
  // Mixed pages (SSL Certificates, Website Log Levels): list state
  sslTile: 'all', sslPage: 1, sslPer: 10, sslOpen: [], sslTab: 'dns', pendOpen: false,
  logQuery: '', logPage: 1, logPer: 25, logLevels: {},
  role: 'admin', reviewFilter: 'all', reviewQuery: '', lastPromote: null,
  productionChanged: null, // set when someone edits production rules while staging exists (used in step 4)
});
  if (!configured) {
    st.stage = { enabled: false, routing: 'header', cidr: '', headerName: DEFAULT_HEADER, expiry: defaultExpiry(), secret: null };
    st.sites = st.sites.filter(x => x.env !== 'stage');
    st.changes = [];
  }
  st.changes.forEach(c => {
    const prodId = st.sites.find(x => x.id === c.siteId).stageOf;
    if (c.type !== 'ADD') c.before = { ...st.rules[prodId].find(r => r.id === c.ruleId) };
  });
  st.audit = seedAudit(configured);
  st.draft = draftFrom(st.stage);
  return st;
};
// Audit Trail rows. env decides where a row shows: production audit or stage audit (stage sites only).
const ruleMsg = (verb, name, group) => `${verb}. Rule Name: ${name}. Rule Action: ${group}`;
function seedAudit(configured) {
  const row = (env, at, type, by, resource, message) => ({ env, at: new Date(at), type, by, resource, message, context: 'User Action' });
  const prod = [
    row('prod', '2026-10-25T07:58:12', 'User sign-in', USER, USER, 'Successfully SSO signed-in from Tel Aviv, Israel (82.166.4.21)'),
    row('prod', '2026-10-24T16:02:40', 'Site delivery settings changed', TEAMMATE, 'shop.berliner.co.il', 'Delivery settings configuration updated to on_the_fly_compression: true, compression_type: GZIP'),
    row('prod', '2026-10-24T13:41:05', 'User sign-in', TEAMMATE, TEAMMATE, 'Successfully SSO signed-in from Haifa, Israel (79.180.2.14)'),
    row('prod', '2026-10-24T08:51:19', 'User sign-in', USER, USER, 'Successfully SSO signed-in from Tel Aviv, Israel (82.166.4.21)'),
    row('prod', '2026-10-23T11:20:33', 'Rule changed', USER, 'api.berliner.co.il', ruleMsg('Rule updated', 'Block Session when reaching 10 requests', 'Rates')),
  ];
  // Every action in stage gets its own row, e.g. a rule edited twice shows twice
  const stage = [
    row('stage', '2026-10-24T09:12:04', 'Rule added', USER, 'stage.berliner.co.il', ruleMsg('Rule added to the site', 'API Rate Abuse Block', 'Rates')),
    row('stage', '2026-10-24T13:55:47', 'Rule changed', TEAMMATE, 'stage.berliner.co.il', ruleMsg('Rule updated', 'Bot Scraping Detection', 'Security')),
    row('stage', '2026-10-24T14:30:10', 'Rule changed', TEAMMATE, 'stage.berliner.co.il', ruleMsg('Rule updated', 'Bot Scraping Detection', 'Security')),
    row('stage', '2026-10-25T08:45:22', 'Rule added', USER, 'stage.berliner.co.il', ruleMsg('Rule added to the site', 'Strict API Ruleset', 'Security')),
    row('stage', '2026-10-25T11:20:09', 'Rule changed', TEAMMATE, 'stage.shop.berliner.co.il', ruleMsg('Rule updated', 'Geo block sanctioned countries', 'Security')),
  ];
  return configured ? [...prod, ...stage] : prod;
}
// Record an action. Later calls in the same moment sort above earlier ones.
function addAudit(env, site, type, message, extra = {}) {
  const last = STATE.audit.reduce((m, a) => Math.max(m, a.at.getTime()), 0);
  STATE.audit.push({ env, at: new Date(Math.max(Date.now(), last + 1000)), type, by: STATE.user, resource: site.name, message, context: 'User Action', ...extra });
}

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

/* ─── ENVIRONMENT ─────────────────────────────── */
const inStage        = () => STATE.env === 'stage';
const readyStaging   = () => STATE.sites.filter(s => isStage(s) && s.stageStatus === 'ready');
const stageAvailable = () => readyStaging().length > 0;          // selector is hidden until a staging site is ready
const sitesInEnv     = () => inStage() ? readyStaging() : STATE.sites.filter(s => s.env === 'prod');
const twinOf         = site => isStage(site) ? productionOf(site) : activeStagingOf(site);
const unpublished    = () => readyStaging().flatMap(changesFor);

// Switch environment without navigating (selections and the review overlay belong to the old environment)
function applyEnv(env) {
  STATE.env = env;
  STATE.review = null;
  STATE.dashSel = ['all']; STATE.eventsSel = ['all'];
  STATE.rulesTab = 'All'; STATE.rulesQuery = '';
}
// Selector: same screen in the other environment. In a site, go to its twin.
function setEnv(env) {
  closeMenus();
  if (env === STATE.env) return;
  const id = activeScreen();
  if (SCREENS[id].site) {
    const twin = twinOf(currentSite());
    if (!twin) return;                       // production-only site: Stage is disabled
    applyEnv(env);
    STATE.currentSiteId = twin.id;
    showScreen(id === 's03' || id === 's05_1_1' ? (env === 'stage' ? 's05_1_1' : 's03') : id);
  } else {
    applyEnv(env);
    showScreen(id);
  }
}

/* ─── SMALL HELPERS ───────────────────────────── */
const stageChip = () => `<span class="stage-chip">Stage</span>`;
const prodChip  = () => `<span class="prod-chip">Production</span>`;
const envTag    = env => env === 'stage' ? `<span class="env-tag env-tag--stage">Stage</span>` : `<span class="env-tag env-tag--prod">Production</span>`;
// Unpublished changes: per site "3 pending", total "3 unpublished changes"
const pendingTag = (n, total = false) =>
  `<span class="pending-tag">${UI_ICONS.pending}${n} ${total ? `unpublished ${n === 1 ? 'change' : 'changes'}` : 'pending'}</span>`;

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
        ${navItem({ label: 'Audit Trail',          onclick: "showScreen('s06')", itemId: 'audit', isSubItem: true })}
        ${navItem({ label: 'Stage configuration',  onclick: "showScreen('s01')", itemId: 'stage-config', isSubItem: true })}
        ${navItem({ icon: NAV_ICONS.securityEvents, label: 'SIEM Logs', itemId: 'siem', hasChevron: true, isExpander: true })}
        ${navItem({ label: 'Log Configuration',     itemId: 'siem-config', isSubItem: true })}
        ${navItem({ label: 'Accounts Log Settings', itemId: 'siem-accounts', isSubItem: true })}
        ${navItem({ label: 'Website Log Levels',    onclick: "showScreen('s08')", itemId: 'log-levels', isSubItem: true })}
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
        ${navItem({ icon: NAV_ICONS.sslTls,       label: 'SSL/TLS',                 itemId: 'ssl-tls', hasChevron: true, isExpander: true })}
        ${navItem({ label: 'SSL Certificates',            onclick: "showScreen('s07')", itemId: 'ssl-certs', isSubItem: true })}
        ${navItem({ label: 'Client to Imperva (mTLS)',    itemId: 'ssl-mtls-client', isSubItem: true })}
        ${navItem({ label: 'Imperva to Origin (mTLS)',    itemId: 'ssl-mtls-origin', isSubItem: true })}
        ${navItem({ label: 'Settings',                    itemId: 'ssl-settings', isSubItem: true })}
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

/* ─── BREADCRUMB: environment selector + account + site ─ */
// [Environment: Stage ▾] | Acme Corp / stage.berliner.co.il   (the whole "Environment: tag ▾" is the trigger)
// Phase 1: some screens aren't supported in stage yet and list all sites. There the selector is locked, with a tooltip.
const ENV_LOCK_TIP = 'This screen is not yet supported in stage. All sites are shown, production and stage.';
function envSelector(site, locked = false) {
  if (!stageAvailable()) return '';
  const stage = inStage();
  const total = unpublished().length;
  const noTwin = site && !isStage(site) && !activeStagingOf(site);
  const check = on => on ? `<span class="menu-check">${UI_ICONS.check}</span>` : '';
  const stageOpt = noTwin
    ? `<div class="menu-item disabled env-opt"><div>${envTag('stage')}<div class="env-opt-hint">This site is not supported in stage.</div></div></div>`
    : `<div class="menu-item ${stage ? 'selected' : ''}" onclick="setEnv('stage')">${envTag('stage')} ${check(stage)}</div>`;
  // Same quiet hint in both modes. Production: switch to stage. Stage: go to Websites, where each site has its count.
  const link = stage ? `<a onclick="closeMenus();showScreen('s02')">Go to websites</a>`
    : noTwin ? '' : `<a onclick="setEnv('stage')">Switch to stage</a>`;
  const pending = total ? `<div class="menu-sep"></div>
      <div class="env-hint">${UI_ICONS.pending}<div>${total} ${total === 1 ? "change in stage isn't" : "changes in stage aren't"} published yet.${link ? `<br>${link}` : ''}</div></div>` : '';
  return `
    <div class="menu-wrap env-select${locked ? ' env-select--locked has-tip tip-below' : ''}" ${locked ? `data-tip="${ENV_LOCK_TIP}"` : ''}>
      <button class="env-btn" ${locked ? 'disabled' : 'onclick="toggleMenu(this)"'}><span class="env-label">Environment:</span>${envTag(STATE.env)}<span class="crumb-caret">${UI_ICONS.caret}</span></button>
      <div class="menu env-menu">
        <div class="menu-label">Environment</div>
        <div class="menu-item ${stage ? '' : 'selected'}" onclick="setEnv('prod')">${envTag('prod')} ${check(!stage)}</div>
        ${stageOpt}
        ${pending}
      </div>
      ${stage && !locked && !STATE.guidanceSeen ? guidanceHtml() : ''}
    </div>
    <span class="crumb-divider"></span>`;
}

function renderCrumb(el, site, actions = '', locked = false) {
  const meta = `<div class="crumb-meta">Generated on: 25 Oct 26 16:25:30 IST <a onclick="toast('Refreshed.')">Refresh</a></div>`;
  const env = envSelector(site, locked);
  const accountLink = `<a class="crumb-link" onclick="showScreen('s02')">${STATE.account.name}</a>`;
  if (!site) { el.innerHTML = env + accountLink + (actions || meta); return; }
  // Site is plain text: switching, promote and reset all live in the environment selector
  el.innerHTML = `
    ${env}${accountLink}<span class="crumb-sep">/</span>
    <span class="crumb-site-name">${site.name}</span>
    ${meta}`;
}

/* ─── WEBSITES TABLE (s02): one table, Environment column + filter, Stage chip ─ */
const STATUS_ICON = {
  active:   `<span class="status-dot status-dot--ok">${UI_ICONS.check}</span>`,
  warning:  `<span class="status-dot status-dot--warn">!</span>`,
  inactive: `<span class="status-dot status-dot--off">–</span>`,
  progress: `<span class="status-dot status-dot--progress has-tip" data-tip="Creating the staging site takes a few minutes."><span class="spinner"></span></span>`,
};

// Only the sites in the selected environment. In stage: staging sites only, with a per-site Changes column.
function renderWebsites() {
  const stage = inStage();
  const rows = sitesInEnv();
  const cols = stage ? 9 : 8;
  const addBtn = stage
    ? `<span class="has-tip tip-right" data-tip="Websites are added in production."><button class="btn btn-primary btn-sm" disabled>Add website</button></span>`
    : `<button class="btn btn-primary btn-sm">Add website</button>`;
  const changesCell = s => {
    const n = changesFor(s).length;
    return n ? `<a class="pending-link" onclick="event.stopPropagation();openReview('${s.id}')">${pendingTag(n)}</a>` : `<span class="td-muted">—</span>`;
  };

  document.getElementById('body-s02').innerHTML = `
    <div class="table-container">
      <div class="table-toolbar">
        <div class="table-title">Websites</div>
        <div class="table-actions" style="margin-left:auto;">
          <div class="input-search">${UI_ICONS.search}<span>Search websites</span></div>
          ${addBtn}
        </div>
      </div>
      <table class="websites-table">
        <thead><tr>
          <th style="width:36px;"><input type="checkbox"/></th>
          <th>Website</th>
          ${stage ? '<th>Changes</th>' : ''}
          <th>Bandwidth <span class="th-sub">(30 days)</span></th>
          <th>Human Visits</th>
          <th>Bot Visits</th>
          <th>WAF Sessions</th>
          <th>Creation Date</th>
          <th style="width:56px;">Status</th>
        </tr></thead>
        <tbody>
          ${rows.length ? rows.map(s => `
            <tr class="row-clickable" onclick="openSite('${s.id}')">
              <td><input type="checkbox" onclick="event.stopPropagation()"/></td>
              <td><span class="td-name"><span class="td-real">${s.name}</span></span><span class="td-sub">${s.siteId}</span></td>
              ${stage ? `<td>${changesCell(s)}</td>` : ''}
              <td><span class="td-real">${s.bw}</span></td>
              <td><span class="td-real">${s.humans}</span></td>
              <td><span class="td-real">${s.bots}</span></td>
              <td><span class="td-real">${s.waf}</span></td>
              <td><span class="td-real">${s.created}</span></td>
              <td>${STATUS_ICON[s.status]}</td>
            </tr>`).join('') : `<tr><td colspan="${cols}" class="rules-empty">No sites in stage yet. <a class="table-link" onclick="showScreen('s01')">Go to Stage configuration</a></td></tr>`}
        </tbody>
      </table>
      <div class="table-pagination">
        <span>${rows.length ? `1–${rows.length} of ${rows.length}` : '0 of 0'}</span>
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
  // Opening a site from another environment (link, notification) switches the environment with it
  if (target.env !== STATE.env) {
    applyEnv(target.env);
    notify({ type: 'info', title: `Switched to ${isStage(target) ? 'Stage' : 'Production'}` });
  }
  STATE.currentSiteId = siteId;
  showScreen(screen);
}
function openSiteRules() {
  showScreen(isStage(currentSite()) ? 's05_1_1' : 's03');
}

// Site context: the Websites selector shows the current site but is disabled.
// Account level (Application → WAF → Dashboards): the selector lists the sites in the selected environment.
function renderDashboard(accountLevel = false) {
  const bodyId = accountLevel ? 'body-s05_0' : 'body-s05_1';
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
      ${inStage() ? stageTrafficNote() : ''}
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
    addAudit('prod', site, rule ? 'Rule changed' : 'Rule added', ruleMsg(rule ? 'Rule updated' : 'Rule added to the site', data.name, data.group));
    return;
  }
  addAudit('stage', site, rule ? 'Rule changed' : 'Rule added', ruleMsg(rule ? 'Rule updated' : 'Rule added to the site', data.name, data.group));
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
    addAudit('prod', site, 'Rule deleted', ruleMsg('Rule deleted from the site', rule.name, rule.group));
    return;
  }
  addAudit('stage', site, 'Rule deleted', ruleMsg('Rule deleted from the site', rule.name, rule.group));
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
      <div class="notice-text"><strong>${list.length} ${list.length === 1 ? 'change' : 'changes'}</strong> in ${site.name} (${changeSummary(list)}) ${list.length === 1 ? "isn't" : "aren't"} published yet. They take effect in production only after you promote.</div>
      <button class="btn btn-primary btn-sm" onclick="openReview('${site.id}')">Review and promote</button>
    </div>`;
}
// Production Rules: points to the staging site and says how many changes wait there. The only notice that can be closed.
function prodNotice(site) {
  const stg = activeStagingOf(site);
  if (!stg || STATE.prodNoticeClosed.includes(site.id)) return '';
  const n = changesFor(stg).length;
  const pending = n ? ` <strong>${n} ${n === 1 ? 'change' : 'changes'}</strong> in stage ${n === 1 ? "isn't" : "aren't"} published yet.` : '';
  return `
    <div class="notice notice--info">
      <span class="notice-icon">${ICON_INFO}</span>
      <div class="notice-text">New security rules for this site are added in stage. Add and test them there, then promote them to production.${pending}</div>
      <button class="btn btn-secondary btn-sm" onclick="setEnv('stage')">Switch to stage</button>
      <button class="notice-close" title="Close" aria-label="Close" onclick="STATE.prodNoticeClosed.push('${site.id}');renderScreen(activeScreen())">✕</button>
    </div>`;
}

function renderRules(bodyId) {
  const site = currentSite();
  const stage = isStage(site);
  const addLocked = !stage && !!activeStagingOf(site);
  const tab = STATE.rulesTab;
  const addBtn = addLocked
    ? `<span class="has-tip tip-right" data-tip="Switch to stage to add new rules, then promote them."><button class="btn btn-primary btn-sm" disabled>Add new rule</button></span>`
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
          <th>Priority / Name (ID)</th><th>Description</th><th>Hits (Last 7 days)</th><th>Status</th>${stage ? '<th style="width:56px;">Edit</th>' : ''}<th style="width:56px;">More</th>
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

// Edit column only in stage. In production, Edit stays in the More menu.
function rulesRows(site) {
  const cols = isStage(site) ? 6 : 5;
  const q = STATE.rulesQuery.trim().toLowerCase();
  const rules = rulesFor(site).filter(r =>
    (STATE.rulesTab === 'All' || r.group === STATE.rulesTab) &&
    (!q || r.name.toLowerCase().includes(q) || r.ruleId.includes(q)));
  if (!rules.length) return `<tr><td colspan="${cols}" class="rules-empty">No rules match.</td></tr>`;
  const groups = RULE_TABS.slice(1).filter(g => rules.some(r => r.group === g));
  return groups.map(g => `
    <tr class="rules-group-row"><td colspan="${cols}">${g}</td></tr>
    ${rules.filter(r => r.group === g).map(r => `
      <tr>
        <td><div class="rules-name">${r.name} (${r.ruleId})${r.stageState ? ` <span class="pending-tag pending-tag--sm has-tip" data-tip="${IN_STAGE_TIP[r.stageState]}">${UI_ICONS.pending}Pending</span>` : ''}</div></td>
        <td class="rules-desc">${r.desc}</td>
        <td>${r.hits}</td>
        <td><span class="rules-status ${r.enabled ? 'enabled' : 'disabled'}"><span class="rs-dot"></span>${r.enabled ? 'Enabled' : 'Disabled'}</span></td>
        ${cols === 6 ? `<td><button class="rules-action-btn" title="Edit" onclick="openRuleEditor('${r.id}')">&#9998;</button></td>` : ''}
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
      toast(isStage(site) ? `“${data.name}” saved in stage` : `“${data.name}” saved in production`, null, 'success');
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
// Same as today's production UI: no environment chip, no Production/Stage groups.
// The options are the sites in the selected environment.
function siteSelectorDisabled(site) {
  return `<div class="site-select"><button class="site-select-btn" disabled><span class="site-select-text">${site.name} (${site.siteId})</span>${UI_ICONS.caret}</button></div>`;
}

const ALL = 'all';
function selectedSites(key) {
  const sel = STATE[key];
  const inEnv = sitesInEnv();
  if (sel.includes(ALL)) return inEnv;
  return sel.map(siteById).filter(s => s && inEnv.includes(s));
}
function multiSiteSelector(key, rerender) {
  if (!STATE[key].includes(ALL) && !selectedSites(key).length) STATE[key] = [ALL];
  const sel = STATE[key];
  const all = sel.includes(ALL);
  const picked = selectedSites(key);
  const label = all ? 'All websites'
    : picked.length === 1 ? `${picked[0].name} (${picked[0].siteId})`
    : `${picked.length} websites selected`;
  const opt = s => `<label class="ms-option">
      <input type="checkbox" ${!all && sel.includes(s.id) ? 'checked' : ''} onchange="toggleSiteSel('${key}','${s.id}','${rerender}')"/>
      <span class="ms-site">${s.name}</span>
    </label>`;
  return `
    <div class="menu-wrap site-select">
      <button class="site-select-btn" onclick="toggleMenu(this)"><span class="site-select-text">${label}</span>${UI_ICONS.caret}</button>
      <div class="menu site-select-menu ms-menu">
        <label class="ms-option"><input type="checkbox" ${all ? 'checked' : ''} onchange="toggleSiteSel('${key}','${ALL}','${rerender}')"/><span>All websites</span></label>
        ${sitesInEnv().map(opt).join('')}
      </div>
    </div>`;
}
function toggleSiteSel(key, id, rerender) {
  let sel = STATE[key].filter(x => x !== ALL);
  if (id === ALL) sel = [ALL];
  else sel = sel.includes(id) ? sel.filter(x => x !== id) : [...sel, id];
  STATE[key] = sel.length ? sel : [ALL];
  window[rerender]();
  const menu = document.querySelector(`#body-${activeScreen()} .site-select-menu`);
  if (menu) menu.classList.add('open');   // keep open while picking
}

const STAGE_TRAFFIC_NOTE = `<div class="stage-traffic-note">${'%ICON%'} Stage shows test traffic only. It's kept separate from production traffic.</div>`;
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
      ${inStage() ? stageTrafficNote() : ''}
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
          <div class="sess-col">${kv('Time', r.time)}${kv('Website', `${s.name} (${s.siteId})`)}${kv('Session ID', r.sessionId)}${kv('Country', r.country)}
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

/* ─── FIRST-VISIT GUIDANCE (first switch to Stage) ─ */
function guidanceHtml() {
  return `
    <div class="guide-pop" role="dialog">
      <div class="guide-title">You're working in stage</div>
      <ul class="guide-list">
        <li>Everything you see now is stage. The orange line under the top bar is there on every page.</li>
        <li>Changes don't reach production until you review and promote them, site by site.</li>
        <li>Only Security Rules can be edited in stage. Other areas are locked; make those changes in production.</li>
        <li>Use this menu to switch back to production. Each site's changes are in the Websites list.</li>
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
  STATE.reviewFilter = 'all'; STATE.reviewQuery = '';
  renderScreen(activeScreen());
  window.scrollTo(0, 0);
}
function closeReview() { STATE.review = null; renderScreen(activeScreen()); }
// Per staging site, per feature: Security Rules are promoted together (no per-change selection).
const prodChangedFor = stg => STATE.productionChanged && STATE.productionChanged.siteId === stg.stageOf ? STATE.productionChanged : null;
const NO_PROMOTE_TIP = "You don't have permission to promote. Contact your account admin.";
const changeAfter = c => c.after || c.before;
const AUDIT_LINK = "openAudit()";
// Promotes and production changes are recorded in the production audit
function openAudit() {
  closeMenus();
  if (inStage()) { applyEnv('prod'); notify({ type: 'info', title: 'Switched to Production' }); }
  showScreen('s06');
}

// Dependency problems in what will be promoted, keyed by change id
function depErrors(stg) {
  const list = changesFor(stg);
  const errs = {};
  list.forEach(c => {
    // Deleting a rule that production rules still use after the promote
    if (c.type === 'DEL') {
      const deleting = new Set(list.filter(x => x.type === 'DEL').map(x => x.ruleId));
      const users = prodRules(stg.stageOf).filter(r => (r.dependsOn || []).includes(c.ruleId) && !deleting.has(r.id));
      if (users.length)
        errs[c.id] = { text: `“${users.map(u => u.name).join('”, “')}” still uses this rule in production. Delete or change it too, or discard this deletion.` };
    }
  });
  return errs;
}

function promoteBlock(stg) {
  if (STATE.role !== 'admin') return NO_PROMOTE_TIP;
  if (prodChangedFor(stg)) return 'Production changed. Reset stage before you promote.';
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
      <button class="btn btn-secondary btn-sm" onclick="${AUDIT_LINK}">View in Audit Trail</button>
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
      <button class="btn btn-secondary btn-sm" onclick="${AUDIT_LINK}">View in Audit Trail</button>
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
  const errs = depErrors(stg);
  const block = promoteBlock(stg);
  const count = t => all.filter(c => c.type === t).length;
  const chip = (t, label) => `<button class="rv-chip ${f === t ? 'active' : ''}" onclick="setReviewFilter('${t}')">${t === 'all' ? '' : `<span class="type-tag type-tag--${t.toLowerCase()}">${t}</span>`}${label}</button>`;

  const card = c => {
    const r = changeAfter(c);
    const err = errs[c.id];
    return `
      <div class="rv-change ${err ? 'has-error' : ''}">
        <div class="rv-main">
          <div class="rv-top">
            <span class="type-tag type-tag--${c.type.toLowerCase()}">${c.type}</span>
            <span class="rv-name">${c.rule}</span><span class="rv-id">(${r.ruleId}) · ${r.group}</span>
          </div>
          <table class="rv-diff"><thead><tr><th></th><th>Production · ${prod.name}</th><th>Staging · ${stg.name}</th></tr></thead><tbody>${diffRows(c)}</tbody></table>
          ${err ? `<div class="rv-error">${ICON_WARN}<span>${err.text}</span></div>` : ''}
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
        <div class="rv-chips">${chip('all', `All ${all.length}`)}${chip('ADD', count('ADD'))}${chip('MOD', count('MOD'))}${chip('DEL', count('DEL'))}</div>
        <div class="rules-filter rv-search">${UI_ICONS.search}<input type="text" placeholder="Search changes" value="${STATE.reviewQuery}" onchange="STATE.reviewQuery=this.value;renderReview()"/></div>
        <button class="btn btn-secondary btn-sm" onclick="confirmDiscardAll()">Discard all</button>
      </div>
      <div class="rv-group">Security Rules <span class="rv-group-count">${shown.length}</span></div>
      ${shown.length ? shown.map(card).join('') : '<div class="rules-empty">No changes match.</div>'}
    </div>
    <div class="rv-strip">
      <span>${all.length === 1 ? `<strong>1 change</strong> to Security Rules is promoted` : `All <strong>${all.length} changes</strong> to Security Rules are promoted together`} to ${prod.name}.</span>
      ${block
        ? `<span class="has-tip tip-right" data-tip="${block}"><button class="btn btn-primary btn-sm" disabled>Promote (${all.length})</button></span>`
        : `<button class="btn btn-primary btn-sm" onclick="openPromote()">Promote (${all.length})</button>`}
    </div>` : `
    <div class="rv-card rv-empty">
      <div class="rv-empty-title">Nothing to promote</div>
      <div class="rv-empty-text">Security rules in ${stg.name} match ${prod.name}.</div>
      <button class="btn btn-secondary btn-sm" onclick="STATE.review=null;openSite('${stg.id}','s05_1_1')">Go to stage rules</button>
    </div>`}`;
}

function setReviewFilter(t) { STATE.reviewFilter = t; renderReview(); }

function confirmDiscardAll() {
  const stg = reviewSite();
  const list = changesFor(stg);
  showModal({
    title: `Discard all ${list.length} changes?`, danger: true, confirmLabel: 'Discard all',
    body: `<p>Staging goes back to the production rules. These changes are lost:</p>${changeList(list)}`,
    onConfirm: () => {
      STATE.changes = STATE.changes.filter(c => c.siteId !== stg.id);
      addAudit('stage', stg, 'Changes discarded', `${list.length} ${list.length === 1 ? 'change' : 'changes'} discarded. ${stg.name} matches ${productionOf(stg).name}`);
      renderReview(); toast('All changes discarded.');
    },
  });
}
const changeList = list => `<ul class="modal-list">${list.map(c => `<li><span class="type-tag type-tag--${c.type.toLowerCase()}">${c.type}</span>${c.rule}</li>`).join('')}</ul>`;

function openPromote() {
  const stg = reviewSite();
  const sel = changesFor(stg);
  showModal({
    title: `Promote ${sel.length} ${sel.length === 1 ? 'change' : 'changes'} to ${productionOf(stg).name}?`,
    confirmLabel: 'Promote', confirmDisabled: true,
    body: `<p>These changes go live in production right away:</p>${changeList(sel)}
      <div class="field-label" style="margin-top:14px;">Commit message <span class="req">*</span></div>
      <textarea class="text-input text-area" id="pm-msg" placeholder="Describe what this promote does" oninput="document.getElementById('modal-confirm').disabled=!this.value.trim()"></textarea>
      <div class="field-help">Shown in the Audit Trail with the promoted changes.</div>`,
    onConfirm: () => promote(stg, sel, document.getElementById('pm-msg').value.trim()),
  });
  document.getElementById('pm-msg').focus();
}

// Apply all of the site's Security Rules changes to production
function promote(stg, sel, message) {
  const prod = prodRules(stg.stageOf);
  sel.forEach(c => {
    if (c.type === 'ADD') prod.push({ ...c.after });
    else if (c.type === 'MOD') prod.splice(prod.findIndex(r => r.id === c.ruleId), 1, { ...c.after });
    else prod.splice(prod.findIndex(r => r.id === c.ruleId), 1);
  });
  STATE.changes = STATE.changes.filter(c => !sel.includes(c));
  stg.lastAction = nowStamp(); stg.lastUser = STATE.user;
  const prodSite = productionOf(stg);
  const promoteId = 'p' + Date.now();
  const n = `${sel.length} ${sel.length === 1 ? 'change' : 'changes'}`;
  const verb = { ADD: ['Rule added', 'Rule added to the site'], MOD: ['Rule changed', 'Rule updated'], DEL: ['Rule deleted', 'Rule deleted from the site'] };
  sel.forEach(c => { const r = changeAfter(c); addAudit('prod', prodSite, verb[c.type][0], ruleMsg(`${verb[c.type][1]} (promoted from ${stg.name})`, c.rule, r.group), { promoteId }); });
  addAudit('prod', prodSite, 'Stage promoted', `${n} promoted from ${stg.name}. Commit message: “${message}”`, { promoteId });
  addAudit('stage', stg, 'Stage promoted', `${n} promoted to ${prodSite.name}. Commit message: “${message}”`);
  STATE.lastPromote = { siteId: stg.id, count: sel.length, prod: prodSite.name, message, by: STATE.user, time: nowStamp(), promoteId };
  STATE.review = null;
  renderScreen(activeScreen());   // back to the page the user was on
  notify({ type: 'success', title: `${sel.length} ${sel.length === 1 ? 'change' : 'changes'} promoted to ${productionOf(stg).name}`, body: `“${message}”`, action: { label: 'View in Audit Trail', onclick: AUDIT_LINK } });
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
      addAudit('stage', stg, 'Stage reset', `Stage reset to the latest production rules from ${productionOf(stg).name}. ${list.length} staged ${list.length === 1 ? 'change' : 'changes'} removed`);
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
  document.getElementById('pt-env').textContent = `Env: ${inStage() ? 'Stage' : 'Production'}`;
  document.getElementById('pt-env').classList.toggle('on', inStage());
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

/* ─── AUDIT TRAIL (s06, Account Management) ─── */
// Production: today's audit, plus a row per promoted rule and one for the promote.
// Stage: every action on stage sites, nothing else.
function renderAudit() {
  const rows = STATE.audit.filter(a => a.env === STATE.env).sort((a, b) => b.at - a.at);
  const fmt = d => `${d.toLocaleDateString('en-US')},<br>${d.toLocaleTimeString('en-US')}`;
  const fresh = STATE.lastPromote && STATE.lastPromote.promoteId;
  const tool = (icon, label) => `<a class="audit-tool" onclick="toast('Not part of this prototype.')">${icon}${label}</a>`;
  document.getElementById('body-s06').innerHTML = `
    <div class="audit-head">
      <h1 class="page-title">Audit Trail</h1>
      <div class="audit-range">Last 30 days ${UI_ICONS.caret}</div>
    </div>
    ${inStage() ? `<div class="stage-traffic-note audit-note">${ICON_INFO} Showing actions on stage sites only.</div>` : ''}
    <div class="audit-card">
      <div class="audit-toolbar">
        <button class="btn btn-secondary btn-sm audit-filters">${UI_ICONS.filter} Filters</button>
        <div class="audit-tools">${tool(UI_ICONS.search, 'Search')}${tool('', 'Download CSV')}${tool('', 'Expand messages')}</div>
      </div>
      <table class="audit-table">
        <thead><tr><th>Time <span class="audit-sort">⇅</span></th><th>Type</th><th>Performed By</th><th>Account</th><th>Resource</th><th>Context</th><th>Message</th></tr></thead>
        <tbody>
          ${rows.length ? rows.map(a => `
            <tr class="${fresh && a.promoteId === fresh ? 'audit-row--new' : ''}">
              <td class="audit-time">${fmt(a.at)}</td><td>${a.type}</td><td>${a.by}</td><td>${STATE.account.name}</td>
              <td>${a.resource}</td><td>${a.context}</td><td class="audit-msg">${a.message}</td>
            </tr>`).join('') : `<tr><td colspan="7" class="rules-empty">No actions in this time range.</td></tr>`}
        </tbody>
      </table>
      <div class="audit-pagination"><span>${rows.length ? `1 - ${rows.length} of ${rows.length}` : '0 of 0'}</span><span>Rows per page <strong>25</strong></span></div>
    </div>`;
}

/* ─── MIXED PAGES: SSL CERTIFICATES (s07) AND WEBSITE LOG LEVELS (s08) ─ */
// Phase 1: these screens aren't supported in stage yet. They list every site, production and stage together,
// sorted by name, with no environment marker. Used to test whether the mix is a blocker for customers.
const allSitesByName = () => [...STATE.sites].sort((a, b) => a.name.localeCompare(b.name));
const pagerHtml = (page, pages, fn) => {
  const nums = Array.from({ length: pages }, (_, i) => i + 1);
  const btn = (label, to, off) => `<button class="pg-page" ${off ? 'disabled' : `onclick="${fn}(${to})"`}>${label}</button>`;
  return `<div class="pg-pages">${pages > 4 ? btn('&lt;&lt;', 1, page === 1) : ''}${btn('&lt;', page - 1, page === 1)}${nums.map(n => `<button class="pg-page ${n === page ? 'active' : ''}" onclick="${fn}(${n})">${n}</button>`).join('')}${btn('&gt;', page + 1, page === pages)}${pages > 4 ? btn('&gt;&gt;', pages, page === pages) : ''}</div>`;
};

// Mock certificates, built from the demo sites so names always match
const CERT_PLAN = {   // by production site id
  berliner: { status: 'active',  exp: 'Jan 27 2027', type: 'RSA (Site)',   sans: ['www.berliner.co.il', 'berliner.co.il'] },
  shop:     { status: 'active',  exp: 'Feb 03 2027', type: 'RSA (Site)',   sans: ['shop.berliner.co.il', 'checkout.berliner.co.il'] },
  api:      { status: 'active',  exp: 'Jan 31 2027', type: 'ECDSA (Site)' },
  auth:     { status: 'process', exp: '-',           type: 'RSA (Site)',   issue: 'Validation pending' },
  cdn:      { status: 'soon',    exp: 'Nov 18 2026', type: 'RSA (Site)',   issue: 'Expires in 22 days', sans: ['cdn.berliner.co.il', 'static.cdn.berliner.co.il', 'img.cdn.berliner.co.il'] },
  admin:    { status: 'expired', exp: 'Oct 02 2026', type: 'RSA (Site)',   issue: 'Certificate expired' },
};
const CERT_STATUS = {
  active:  { label: 'Active',          icon: `<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#16A34A"/><path d="M4.5 8.2l2.3 2.3 4.7-4.8" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  process: { label: 'In process',      icon: `<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="none" stroke="#4B5563" stroke-width="1.6"/><path d="M8 1a7 7 0 0 1 0 14z" fill="#4B5563"/></svg>` },
  soon:    { label: 'Will expire soon', icon: `<svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1.5L15 14H1z" fill="#F59E0B" stroke="#F59E0B" stroke-width="1" stroke-linejoin="round"/><path d="M8 6v3.6M8 11.6v.1" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>` },
  expired: { label: 'Expired',         icon: `<svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="#DC2626"/><path d="M8 4.2v4.4M8 11v.1" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>` },
};
function mockCerts() {
  const hash = str => [...str].reduce((h, c) => (h * 31 + c.charCodeAt(0)) % 9000, 7) + 1000;
  const certs = STATE.sites.map(site => {
    const prodId = isStage(site) ? site.stageOf : site.id;
    const plan = CERT_PLAN[prodId] || { status: 'active', exp: 'Jan 27 2027', type: 'RSA (Site)' };
    const stage = isStage(site);
    const sans = stage ? (prodId === 'berliner' ? [site.name, 'www.' + site.name] : [site.name]) : (plan.sans || [site.name]);
    const status = stage ? (site.stageStatus === 'progress' ? 'process' : 'active') : plan.status;
    const issue = stage ? (status === 'process' ? 'Validation pending' : '') : (plan.issue || '');
    return { order: `BRL_${hash(site.id)}-${site.siteId.slice(-4)}`, site: site.name, status, sans, exp: status === 'process' ? '-' : plan.exp, type: plan.type, issue };
  });
  certs.push({ order: `BRL_${hash('acct1')}-0001`, site: '-', status: 'active', sans: ['*.berliner.co.il', 'berliner.co.il'], exp: 'Jan 06 2027', type: 'RSA (Account)', issue: '' });
  certs.push({ order: `BRL_${hash('acct2')}-0002`, site: '-', status: 'active', sans: ['*.shop.berliner.co.il'], exp: 'Dec 25 2026', type: 'ECDSA (Account)', issue: '' });
  return certs.sort((a, b) => a.order.localeCompare(b.order));
}
const PENDING_DOMAINS = [{ domain: '_delegate_validation.auth.berliner.co.il', type: 'RSA (Site)', method: 'CNAME', value: 'k4m2x9.ng.impervadns.net', expires: 'Dec 02 2026' }];

const COPY_ICON = `<svg width="13" height="13" viewBox="0 0 14 14" fill="currentColor"><path d="M4 1h7a1 1 0 0 1 1 1v8h-1.5V2.5H4V1zM2 3.5h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"/></svg>`;
const CHEV_DOWN = `<svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const CHEV_DOUBLE = `<svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 2l4 4 4-4M2 6.5l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const PG_STUB = "toast('Not part of this prototype.')";
const pgTools = `<div class="pg-tools"><a class="pg-tool" onclick="${PG_STUB}">${UI_ICONS.search} Search</a><a class="pg-tool" onclick="${PG_STUB}"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 1v9M4 6l4 4 4-4M2 13h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Download CSV</a></div>`;

function renderSsl() {
  const S = STATE;
  const certs = mockCerts();
  const n = k => certs.filter(c => c.status === k).length;
  const list = S.sslTile === 'all' ? certs : certs.filter(c => c.status === S.sslTile);
  const pages = Math.max(1, Math.ceil(list.length / S.sslPer));
  const page = Math.min(S.sslPage, pages);
  const rows = list.slice((page - 1) * S.sslPer, page * S.sslPer);
  const allOpen = rows.length && rows.every(c => S.sslOpen.includes(c.order));
  const tile = (k, label) => `<button class="pg-tile ${S.sslTile === k ? 'active' : ''}" onclick="setSslTile('${k}')">
      <div class="pg-tile-top">${k === 'all' ? '' : CERT_STATUS[k].icon}${label}</div><div class="pg-tile-n">${k === 'all' ? certs.length : n(k)}</div></button>`;
  const perSelect = (fn, opts, cur) => `<select class="pg-select" onchange="${fn}(this.value)">${opts.map(o => `<option ${o === cur ? 'selected' : ''}>${o}</option>`).join('')}</select>`;

  document.getElementById('body-s07').innerHTML = `
    <h1 class="page-title">SSL Certificates</h1>

    <div class="pg-card">
      <h2 class="pg-h">Domains pending ownership validation</h2>
      <p class="pg-sub">Add a domain's value to your DNS configuration to validate its ownership.</p>
      <div class="pg-tabs">
        <button class="pg-tab ${S.sslTab === 'dns' ? 'active' : ''}" onclick="STATE.sslTab='dns';renderSsl()">Validate by adding DNS records (${PENDING_DOMAINS.length})</button>
        <button class="pg-tab ${S.sslTab === 'email' ? 'active' : ''}" onclick="STATE.sslTab='email';renderSsl()">Validate by email (0)</button>
      </div>
      ${pgTools}
      <table class="pg-table">
        <thead><tr><th class="pg-c" style="width:36px;"><span class="pg-chev">${CHEV_DOUBLE}</span></th><th style="width:290px;">Domain name</th><th style="width:100px;">Certificate type</th><th style="width:100px;">Validation method</th><th style="width:210px;">Value</th><th>Record expires</th></tr></thead>
        <tbody>
          ${S.sslTab === 'dns' ? PENDING_DOMAINS.map(d => `
            <tr>
              <td class="pg-c"><button class="pg-chev ${S.pendOpen ? 'open' : ''}" onclick="STATE.pendOpen=!STATE.pendOpen;renderSsl()">${CHEV_DOWN}</button></td>
              <td title="${d.domain}">${d.domain} <a class="pg-copy" onclick="notify({type:'success',title:'Copied'})">${COPY_ICON}</a></td>
              <td>${d.type}</td><td>${d.method}</td>
              <td title="${d.value}">${d.value} <a class="pg-copy" onclick="notify({type:'success',title:'Copied'})">${COPY_ICON}</a></td>
              <td>${d.expires}</td>
            </tr>
            ${S.pendOpen ? `<tr class="pg-detail"><td></td><td colspan="5">Add a ${d.method} record named <strong>${d.domain}</strong> with the value <strong>${d.value}</strong> to your DNS configuration. Validation completes once the record is detected.</td></tr>` : ''}`).join('')
          : `<tr><td colspan="6" class="rules-empty">No domains pending email validation.</td></tr>`}
        </tbody>
      </table>
      <div class="pg-foot"><div>${S.sslTab === 'dns' ? `1 - ${PENDING_DOMAINS.length} of ${PENDING_DOMAINS.length}` : '0 of 0'} &nbsp; Rows per page ${perSelect('noop', ['10'], '10')}</div>${pagerHtml(1, 1, 'noop')}</div>
    </div>

    <div class="pg-card">
      <div class="pg-tiles">${tile('all', 'All')}${tile('active', 'Active')}${tile('process', 'In process')}${tile('soon', 'Will expire soon')}${tile('expired', 'Expired')}</div>
      <h2 class="pg-h pg-h--lg">Certificates (${certs.length})</h2>
      <div class="pg-toolbar"><button class="btn btn-secondary btn-sm audit-filters" onclick="${PG_STUB}">${UI_ICONS.filter} Filters</button>${pgTools}</div>
      <table class="pg-table">
        <thead><tr>
          <th class="pg-c" style="width:32px;"><button class="pg-chev" onclick="toggleSslAll()" title="Expand all">${CHEV_DOUBLE}</button></th>
          <th style="width:114px;">Name (Order ID)</th><th style="width:158px;">Website</th><th style="width:132px;">Status</th><th style="width:54px;">SANs (#)</th><th style="width:90px;">Expiration Date</th><th style="width:120px;">Certificate Type</th><th>Issues</th><th class="pg-c" style="width:44px;"></th>
        </tr></thead>
        <tbody>
          ${rows.length ? rows.map(c => `
            <tr>
              <td class="pg-c"><button class="pg-chev ${S.sslOpen.includes(c.order) ? 'open' : ''}" onclick="toggleSslRow('${c.order}')">${CHEV_DOWN}</button></td>
              <td title="${c.order}">${c.order}</td>
              <td title="${c.site}">${c.site}</td>
              <td><span class="pg-status">${CERT_STATUS[c.status].icon}${CERT_STATUS[c.status].label}</span></td>
              <td>${c.sans.length}</td><td>${c.exp}</td><td>${c.type}</td><td class="pg-wrap">${c.issue}</td>
              <td class="pg-c">${c.site === '-' ? '' : `<button class="kebab-btn kebab-btn--box" onclick="${PG_STUB}">&#8942;</button>`}</td>
            </tr>
            ${S.sslOpen.includes(c.order) ? `<tr class="pg-detail"><td></td><td colspan="8" class="pg-wrap"><div class="pg-detail-title">Subject Alternative Names (SANs)</div><ul class="san-list">${c.sans.map(d => `<li>${d}</li>`).join('')}</ul></td></tr>` : ''}`).join('')
          : `<tr><td colspan="9" class="rules-empty">No certificates in this status.</td></tr>`}
        </tbody>
      </table>
      <div class="pg-foot"><div>${list.length ? (page - 1) * S.sslPer + 1 : 0} - ${Math.min(page * S.sslPer, list.length)} of ${list.length} &nbsp; Rows per page ${perSelect('setSslPer', ['10', '25', '50'], String(S.sslPer))}</div>${pagerHtml(page, pages, 'setSslPage')}</div>
    </div>`;
}
function noop() {}
function setSslTile(k) { STATE.sslTile = k; STATE.sslPage = 1; renderSsl(); }
function setSslPage(p) { STATE.sslPage = p; renderSsl(); }
function setSslPer(v) { STATE.sslPer = Number(v); STATE.sslPage = 1; renderSsl(); }
function toggleSslRow(id) { const o = STATE.sslOpen; STATE.sslOpen = o.includes(id) ? o.filter(x => x !== id) : [...o, id]; renderSsl(); }
function toggleSslAll() {
  const certs = mockCerts().filter(c => STATE.sslTile === 'all' || c.status === STATE.sslTile).slice((STATE.sslPage - 1) * STATE.sslPer, STATE.sslPage * STATE.sslPer).map(c => c.order);
  STATE.sslOpen = certs.every(id => STATE.sslOpen.includes(id)) ? STATE.sslOpen.filter(id => !certs.includes(id)) : [...new Set([...STATE.sslOpen, ...certs])];
  renderSsl();
}

// Website Log Levels (Account Management → SIEM Logs)
const LOG_LEVELS = ['All Logs', 'Security Logs', 'Disabled'];
const LOG_DEFAULT = { cdn: 'Security Logs', admin: 'Disabled' };   // mock
const logLevelOf = s => STATE.logLevels[s.id] || LOG_DEFAULT[isStage(s) ? s.stageOf : s.id] || 'All Logs';
function logRows() {
  const q = STATE.logQuery.trim().toLowerCase();
  const list = allSitesByName().filter(s => !q || s.name.toLowerCase().includes(q) || s.siteId.includes(q));
  const pages = Math.max(1, Math.ceil(list.length / STATE.logPer));
  const page = Math.min(STATE.logPage, pages);
  return { list, pages, page, rows: list.slice((page - 1) * STATE.logPer, page * STATE.logPer) };
}
function logBodyHtml() {
  const { list, pages, page, rows } = logRows();
  return {
    body: rows.length ? rows.map(s => `<tr><td>${s.name} (${s.siteId})</td><td><select class="log-select" onchange="STATE.logLevels['${s.id}']=this.value">${LOG_LEVELS.map(l => `<option ${l === logLevelOf(s) ? 'selected' : ''}>${l}</option>`).join('')}</select></td></tr>`).join('')
      : `<tr><td colspan="2" class="rules-empty">No websites match.</td></tr>`,
    foot: `<div>Showing ${list.length ? (page - 1) * STATE.logPer + 1 : 0} to ${Math.min(page * STATE.logPer, list.length)} of ${list.length} entries &nbsp; Show <select class="pg-select" onchange="setLogPer(this.value)">${['10', '25', '50'].map(o => `<option ${o === String(STATE.logPer) ? 'selected' : ''}>${o}</option>`).join('')}</select> rows</div>${pagerHtml(page, pages, 'setLogPage')}`,
  };
}
function renderLogLevels() {
  const h = logBodyHtml();
  document.getElementById('body-s08').innerHTML = `
    <div class="pg-card log-card">
      <div class="log-head">
        <div><h2 class="pg-h">Log Levels</h2><p class="pg-sub">Logs can be activated per site.</p></div>
        <div class="log-tools">
          <div class="rules-filter">${UI_ICONS.filter}<input type="text" placeholder="Filter by Keyword or ID" value="${STATE.logQuery}" oninput="setLogQuery(this.value)"/></div>
          <button class="rules-icon-btn" title="Download" onclick="${PG_STUB}"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1v9M4 6l4 4 4-4M2 13h12" stroke="#606A73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
        </div>
      </div>
      <table class="pg-table log-table">
        <thead><tr><th>Name ${UI_ICONS.filter}</th><th style="width:300px;">Level</th></tr></thead>
        <tbody id="log-body">${h.body}</tbody>
      </table>
      <div class="pg-foot" id="log-foot">${h.foot}</div>
    </div>`;
}
function refreshLogRows() { const h = logBodyHtml(); document.getElementById('log-body').innerHTML = h.body; document.getElementById('log-foot').innerHTML = h.foot; }
function setLogQuery(v) { STATE.logQuery = v; STATE.logPage = 1; refreshLogRows(); }
function setLogPage(p) { STATE.logPage = p; refreshLogRows(); }
function setLogPer(v) { STATE.logPer = Number(v); STATE.logPage = 1; refreshLogRows(); }

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
  const pickable = prodSites.filter(x => !stagingOf(x));
  const allPicked = pickable.length > 0 && pickable.every(x => d.sites.includes(x.id));
  const siteOptions = `<label class="ms-option ${pickable.length ? '' : 'disabled'}">
      <input type="checkbox" ${allPicked ? 'checked' : ''} ${pickable.length ? '' : 'disabled'} onchange="toggleAllSites()"/>
      <span>Select all</span>
    </label><div class="menu-sep"></div>` + prodSites.map(x => {
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
                    <div class="menu-item ${ready ? '' : 'disabled'}" onclick="closeMenus();openSite('${x.id}')">Open in stage</div>
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

function setDraft(key, value) { STATE.draft[key] = value; renderStageConfig(); }

function toggleDraft(key, id) {
  const list = STATE.draft[key];
  const i = list.indexOf(id);
  i >= 0 ? list.splice(i, 1) : list.push(id);
  renderStageConfig();
  // keep the dropdown open while picking
  document.querySelectorAll('#body-s01 .ms-menu')[key === 'sites' ? 0 : 1].classList.add('open');
}

function toggleAllSites() {
  const pickable = STATE.sites.filter(x => x.env === 'prod' && !stagingOf(x)).map(x => x.id);
  STATE.draft.sites = pickable.every(id => STATE.draft.sites.includes(id)) ? [] : pickable;
  renderStageConfig();
  document.querySelectorAll('#body-s01 .ms-menu')[0].classList.add('open');   // keep the list open
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
  const wasStage = inStage();
  renderScreen('s01');   // whole screen: the env selector disappears and the user goes back to production when no stage is left
  notify({ type: 'success', title: 'Stage configuration saved', body: turningOff ? `Stage is off. Staging sites are disabled.${wasStage ? ' You are back in production.' : ''}` : '' });
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
    body: one ? 'You can start testing rule changes in stage.' : `${pending.map(x => x.name).join(' and ')} are now in stage.`,
    action: one ? { label: 'Switch to stage', onclick: `openSite('${pending[0].id}')` } : { label: 'Switch to stage', onclick: `applyEnv('stage');showScreen('s02')` },
  });
  ['s01', 's02'].forEach(id => { if (id === activeScreen()) renderScreen(id); });
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
      renderScreen('s01');
      notify({ type: 'success', title: `Staging turned off for ${prod.name}`, body: `${stg.name} is disabled. Turn it on again from this list.` });
    },
  });
}
function turnOnStaging(stageId) {
  const stg = siteById(stageId);
  setStageStatus(stg, 'ready');
  renderScreen('s01');
  notify({ type: 'success', title: `Staging turned on for ${productionOf(stg).name}`, action: { label: 'Switch to stage', onclick: `openSite('${stg.id}')` } });
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
  s06:     { sidebar: 'account-mgmt', active: 'audit',           render: renderAudit },
  // Mixed pages: all sites (production and stage), environment selector locked
  s07:     { sidebar: 'application',  active: 'ssl-certs',       envLocked: true, render: renderSsl },
  s08:     { sidebar: 'account-mgmt', active: 'log-levels',      envLocked: true, render: renderLogLevels },
};

function renderScreen(id) {
  const cfg = SCREENS[id];
  if (!cfg) return;
  // Keep the environment consistent: no stage left → production; a site screen follows its site
  if (inStage() && !stageAvailable()) applyEnv('prod');
  let site = cfg.site ? currentSite() : null;
  if (site && isStage(site) && site.stageStatus !== 'ready') { STATE.currentSiteId = site.stageOf; site = currentSite(); }
  if (site && site.env !== STATE.env) applyEnv(site.env);
  document.body.classList.toggle('env-stage', inStage());   // 2px orange line under the top nav
  renderNav(document.getElementById(`nav-${id}`));
  renderSidebar(document.getElementById(`sidebar-${id}`), cfg.sidebar, cfg.active, isStage(site));
  const crumb = document.getElementById(`crumb-${id}`);
  if (crumb) renderCrumb(crumb, site, cfg.actions || '', !!cfg.envLocked);
  cfg.render();
  // Review and promote overlay covers the page body while open
  const overlay = document.getElementById(`overlay-${id}`);
  document.getElementById(`body-${id}`).hidden = !!STATE.review;
  overlay.hidden = !STATE.review;
  if (STATE.review) renderReview(); else overlay.innerHTML = '';
  syncProtoToggles();
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
  if (siteId) { STATE.currentSiteId = siteId; if (siteById(siteId).env !== STATE.env) applyEnv(siteById(siteId).env); }
  showScreen(screen);
}
function protoToggleEnv() {
  if (!stageAvailable()) { toast('No staging site is ready. Use “Full demo (stage configured)”.'); return; }
  const id = activeScreen();
  if (SCREENS[id].envLocked) { toast(ENV_LOCK_TIP); return; }
  if (SCREENS[id].site && !twinOf(currentSite())) { toast('This site is not supported in stage.'); return; }
  setEnv(inStage() ? 'prod' : 'stage');
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
