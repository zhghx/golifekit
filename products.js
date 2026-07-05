/* ===== GoLifeKit — shared product catalog =====
   Add or edit a product by changing ONE object below.
   Both shop.html (list) and product.html (detail) render from this array.
   Replace `checkout: '#'` with your real Gumroad / Lemon Squeezy / Stripe link. */

const PRODUCTS = [
  {
    id: 'complete-kit',
    name: 'Complete Toolkit',
    emoji: '🧰',
    color: '#4f7cff',
    badge: 'Best value',
    featured: true,
    price: 19,
    oldPrice: 39,
    tagline: 'All four templates in one bundle — your whole life, organized.',
    description:
      'The complete GoLifeKit: every template we make, connected into one calm system. Track your habits, manage your money, and hit your goals from a single dashboard. Buy the bundle and save over 45% versus buying each template on its own.',
    includes: [
      'Habit Tracker template',
      'Budget & Expense Log template',
      'Goal Planner template',
      'Life Dashboard (bonus)',
      'Setup guide & quick-start video',
      'Free lifetime updates',
    ],
    features: [
      { title: 'Everything connected', text: 'The four templates link together so habits, budget, and goals feed one home screen.' },
      { title: 'Ready in one click', text: 'Duplicate the whole bundle into your Notion in seconds — nothing to configure.' },
      { title: 'Save 45%+', text: 'Buying the bundle costs far less than picking up each template separately.' },
    ],
    checkout: '#',
  },
  {
    id: 'habit-tracker',
    name: 'Habit Tracker',
    emoji: '📊',
    color: '#4f7cff',
    badge: '',
    featured: false,
    price: 9,
    oldPrice: null,
    tagline: 'Build streaks that actually stick.',
    description:
      'A clean, motivating habit system for Notion. Check off habits daily or weekly, watch your completion rate update automatically, and keep yourself honest with a calendar heatmap that makes gaps impossible to ignore.',
    includes: [
      'Daily & weekly habit views',
      'Calendar heatmap',
      'Automatic completion rate',
      'Free lifetime updates',
    ],
    features: [
      { title: 'Daily & weekly views', text: 'See what needs doing today, and zoom out to your whole week at a glance.' },
      { title: 'Calendar heatmap', text: 'A color grid of your consistency that keeps you accountable.' },
      { title: 'Auto completion rate', text: 'Your success percentage updates on its own — no formulas to touch.' },
    ],
    checkout: '#',
  },
  {
    id: 'budget-planner',
    name: 'Budget & Expense Log',
    emoji: '💰',
    color: '#14c8a6',
    badge: '',
    featured: false,
    price: 9,
    oldPrice: null,
    tagline: 'Know exactly where your money goes.',
    description:
      'Log income and spending in seconds and let the dashboard do the math. Auto-rollup views show your monthly totals and category breakdown so you can budget with confidence — no spreadsheet formulas required.',
    includes: [
      'Income & expense log',
      'Monthly dashboard',
      'Category breakdown',
      'Free lifetime updates',
    ],
    features: [
      { title: 'Log in seconds', text: 'Add a transaction with a couple of taps, on desktop or mobile.' },
      { title: 'Monthly dashboard', text: 'Totals and trends roll up automatically each month.' },
      { title: 'Category breakdown', text: 'See exactly which categories eat your budget.' },
    ],
    checkout: '#',
  },
  {
    id: 'goal-planner',
    name: 'Goal Planner',
    emoji: '🎯',
    color: '#f5a623',
    badge: '',
    featured: false,
    price: 9,
    oldPrice: null,
    tagline: 'Turn big ambitions into weekly action.',
    description:
      'Break down your biggest goals into quarterly milestones and weekly actions, with visual progress bars that keep momentum visible. Connect goals to your habits so daily effort always ladders up to something bigger.',
    includes: [
      'Quarterly milestones',
      'Weekly action list',
      'Visual progress bars',
      'Free lifetime updates',
    ],
    features: [
      { title: 'Milestones', text: 'Split each goal into quarterly checkpoints you can actually track.' },
      { title: 'Weekly actions', text: 'Always know the next concrete step, not just the dream.' },
      { title: 'Progress bars', text: 'Watch completion fill up as you move — momentum you can see.' },
    ],
    checkout: '#',
  },
  {
    id: 'life-dashboard',
    name: 'Life Dashboard',
    emoji: '📅',
    color: '#8b5cf6',
    badge: '',
    featured: false,
    price: 9,
    oldPrice: null,
    tagline: 'One home screen for your entire life.',
    description:
      'The command center that ties everything together. Today\'s habits, this month\'s budget, and your top goals — all on one page so you open Notion and instantly know where you stand.',
    includes: [
      'Unified home screen',
      "Today's habits at a glance",
      "This month's budget summary",
      'Top goals overview',
      'Free lifetime updates',
    ],
    features: [
      { title: 'One glance', text: 'Habits, money, and goals together — no jumping between pages.' },
      { title: 'Always current', text: 'Pulls live from your other templates automatically.' },
      { title: 'Bonus in the kit', text: 'Included free when you buy the Complete Toolkit.' },
    ],
    checkout: '#',
  },
];

/* ---- helpers shared by both pages ---- */
function findProduct(id) {
  return PRODUCTS.find(function (p) { return p.id === id; }) || null;
}
function money(n) { return '$' + n; }

/* Placeholder media block for a product (styled box with its emoji + name). */
function mediaBlock(p, label) {
  return (
    '<div class="pc-thumb" style="--pc:' + p.color + '">' +
    '<span class="pc-emoji">' + p.emoji + '</span>' +
    (label ? '<span class="pc-thumb-label">' + label + '</span>' : '') +
    '</div>'
  );
}

/* ---- Shop / list page ---- */
function renderShop(mountId) {
  var mount = document.getElementById(mountId);
  if (!mount) return;
  mount.innerHTML = PRODUCTS.map(function (p) {
    return (
      '<a class="product-card' + (p.featured ? ' featured' : '') + '" href="product.html?id=' + p.id + '">' +
        mediaBlock(p, '') +
        '<div class="pc-body">' +
          '<div class="pc-head">' +
            '<h3>' + p.name + '</h3>' +
            (p.badge ? '<span class="pc-badge">' + p.badge + '</span>' : '') +
          '</div>' +
          '<p class="pc-tagline">' + p.tagline + '</p>' +
          '<div class="pc-foot">' +
            '<span class="pc-price">' +
              (p.oldPrice ? '<s>' + money(p.oldPrice) + '</s> ' : '') +
              '<b>' + money(p.price) + '</b>' +
            '</span>' +
            '<span class="pc-link">View details →</span>' +
          '</div>' +
        '</div>' +
      '</a>'
    );
  }).join('');
}

/* ---- Product detail page ---- */
function renderProduct(mountId) {
  var mount = document.getElementById(mountId);
  if (!mount) return;
  var params = new URLSearchParams(window.location.search);
  var p = findProduct(params.get('id'));

  if (!p) {
    mount.innerHTML =
      '<div class="pd-missing">' +
      '<h1>Product not found</h1>' +
      '<p>We couldn\'t find that product. Browse the full collection instead.</p>' +
      '<a class="btn btn-primary" href="shop.html">← Back to shop</a>' +
      '</div>';
    return;
  }

  document.title = p.name + ' — GoLifeKit';

  var includes = p.includes.map(function (i) { return '<li>' + i + '</li>'; }).join('');
  var features = p.features.map(function (f) {
    return '<div class="pd-feature"><h4>' + f.title + '</h4><p>' + f.text + '</p></div>';
  }).join('');

  var others = PRODUCTS.filter(function (o) { return o.id !== p.id; }).slice(0, 3).map(function (o) {
    return (
      '<a class="mini-card" href="product.html?id=' + o.id + '">' +
        '<span class="mini-emoji" style="--pc:' + o.color + '">' + o.emoji + '</span>' +
        '<span class="mini-name">' + o.name + '</span>' +
        '<span class="mini-price">' + money(o.price) + '</span>' +
      '</a>'
    );
  }).join('');

  mount.innerHTML =
    '<a class="back-link" href="shop.html">← All products</a>' +
    '<div class="pd-hero">' +
      '<div class="pd-media">' + mediaBlock(p, p.name) + '</div>' +
      '<div class="pd-info">' +
        (p.badge ? '<span class="eyebrow">' + p.badge + '</span>' : '') +
        '<h1>' + p.name + '</h1>' +
        '<p class="pd-tagline">' + p.tagline + '</p>' +
        '<div class="pd-price-row">' +
          (p.oldPrice ? '<s>' + money(p.oldPrice) + '</s>' : '') +
          '<span class="pd-price">' + money(p.price) + '</span>' +
          '<span class="pd-once">one-time</span>' +
        '</div>' +
        // TODO: replace p.checkout ('#') in products.js with your real checkout link
        '<a class="btn btn-primary btn-lg pd-buy" href="' + p.checkout + '">Buy ' + p.name + ' — ' + money(p.price) + '</a>' +
        '<p class="pd-guarantee">🔒 Secure checkout · Instant access · 14-day money-back guarantee</p>' +
      '</div>' +
    '</div>' +
    '<div class="pd-detail">' +
      '<div class="pd-main">' +
        '<h2>About this template</h2>' +
        '<p class="pd-desc">' + p.description + '</p>' +
        '<div class="pd-features">' + features + '</div>' +
      '</div>' +
      '<aside class="pd-side">' +
        '<h3>What\'s included</h3>' +
        '<ul class="pd-includes">' + includes + '</ul>' +
      '</aside>' +
    '</div>' +
    '<div class="pd-more">' +
      '<h2>You might also like</h2>' +
      '<div class="mini-grid">' + others + '</div>' +
    '</div>';
}
