/* ============================================================
   CONFIG — drop your own images in here.
   Leave an array empty to use the generated placeholders.
   e.g. const JAR_IMAGES = ['img/jar-1.png', 'img/jar-2.png'];
   ============================================================ */
const JAR_IMAGES = [];   // regular (portrait) jar images
const LID_IMAGES = [];   // lid images (shown as circles)
const STORE_BG   = '';   // grocery store photo, e.g. 'img/store.jpg'

/* ---------- helpers ---------- */
const COLORS = ['#ffd400', '#ff3b2f', '#2f6bff', '#ff4fa3', '#19c37d', '#ff8a1f'];
const $ = (s) => document.querySelector(s);
const pad = (n, l = 3) => String(n).padStart(l, '0');
const uri = (s) => 'data:image/svg+xml;utf8,' + encodeURIComponent(s);

function jarSrc(i) {
  if (JAR_IMAGES.length) return JAR_IMAGES[i % JAR_IMAGES.length];
  const c = COLORS[i % COLORS.length];
  return uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400">
    <rect width="300" height="400" fill="${c}" fill-opacity=".3"/>
    <path d="M0 0L300 400M300 0L0 400" stroke="#000" stroke-opacity=".25"/>
    <rect x="80" y="60" width="140" height="30" fill="#fff" stroke="#000" stroke-width="2"/>
    <rect x="62" y="90" width="176" height="250" rx="26" fill="#fff" fill-opacity=".7" stroke="#000" stroke-width="2"/>
    <text x="150" y="228" font-family="monospace" font-size="26" text-anchor="middle">JAR ${pad(i + 1)}</text>
    <text x="150" y="256" font-family="monospace" font-size="14" text-anchor="middle">placeholder</text></svg>`);
}
function lidSrc(i) {
  if (LID_IMAGES.length) return LID_IMAGES[i % LID_IMAGES.length];
  const c = COLORS[(i + 2) % COLORS.length];
  return uri(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
    <circle cx="150" cy="150" r="150" fill="${c}" fill-opacity=".45"/>
    <circle cx="150" cy="150" r="118" fill="none" stroke="#000" stroke-opacity=".4" stroke-dasharray="6 6"/>
    <path d="M150 20V280M20 150H280" stroke="#000" stroke-opacity=".25"/>
    <text x="150" y="156" font-family="monospace" font-size="26" text-anchor="middle">LID ${pad(i + 1)}</text></svg>`);
}
const src = (type, i) => (type === 'lid' ? lidSrc(i) : jarSrc(i));

/* drag-to-spin with idle auto-rotation */
function spin(el, auto, apply) {
  let a = 0, drag = false, lx = 0;
  el.addEventListener('pointerdown', (e) => { drag = true; lx = e.clientX; el.setPointerCapture(e.pointerId); });
  el.addEventListener('pointermove', (e) => { if (drag) { a += (e.clientX - lx) * 0.4; lx = e.clientX; } });
  ['pointerup', 'pointercancel'].forEach((t) => el.addEventListener(t, () => (drag = false)));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  (function tick() { if (!drag && !reduce) a += auto; apply(a); requestAnimationFrame(tick); })();
}

/* ---------- 1. hero row ---------- */
const row = $('#row');
for (let i = 0; i < 26; i++) {
  const d = document.createElement('div');
  d.className = 'cd';
  d.style.setProperty('--i', i);
  d.innerHTML = `<img src="${jarSrc(i)}" alt="Jar placeholder ${i + 1}" draggable="false"><span>${pad(i + 1)}</span>`;
  row.appendChild(d);
}
addEventListener('scroll', () => {
  row.style.transform = `translate3d(${-scrollY * 0.35}px, ${scrollY * 0.18}px, 0)`;
}, { passive: true });

/* ---------- 2. index grid + dialog ---------- */
const dlg = $('#dlg');
function openDialog(type, i) {
  $('#dlg-img').src = src(type, i);
  $('#dlg-title').textContent = `${type === 'lid' ? 'Lid' : 'Jar'} #${pad(i + 1)}`;
  $('#dlg-type').textContent = type === 'lid' ? 'Lid (circular)' : 'Jar (regular)';
  dlg.showModal();
}
$('#dlg-close').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

const grid = $('#grid');
const TOTAL = 64;
for (let i = 0; i < TOTAL; i++) {
  const type = i % 3 === 1 ? 'lid' : 'jar';
  const b = document.createElement('button');
  b.className = 'cell ' + type;
  b.innerHTML = `<b>#${pad(i + 1)}</b><img src="${src(type, i)}" alt="${type} placeholder ${i + 1}">`;
  b.addEventListener('click', () => openDialog(type, i));
  grid.appendChild(b);
}
$('#count').textContent = `${pad(TOTAL)} objects`;

/* ---------- 3. sphere of lids ---------- */
const sphere = $('#sphere-el');
const world = document.createElement('div');
world.className = 'world';
sphere.appendChild(world);
const SN = 46, R = Math.min(sphere.clientWidth || 560, 560) * 0.48;
for (let i = 0; i < SN; i++) {
  const phi = Math.acos(1 - (2 * (i + 0.5)) / SN) * 180 / Math.PI;     // 0..180
  const theta = (180 * (1 + Math.sqrt(5)) * i) % 360;                    // golden angle
  const type = i % 4 === 0 ? 'jar' : 'lid';
  const im = document.createElement('img');
  im.className = 'it ' + (type === 'jar' ? 'jar' : 'lidc');
  im.src = src(type, i);
  im.alt = '';
  im.draggable = false;
  im.style.transform = `translate(-50%,-50%) rotateY(${theta}deg) rotateX(${90 - phi}deg) translateZ(${R}px)`;
  world.appendChild(im);
}
spin(sphere, 0.25, (a) => { world.style.transform = `rotateX(-14deg) rotateY(${a}deg)`; });

/* ---------- 4. cylinder with caption ring ---------- */
const cyl = $('#cyl');
const tilt = document.createElement('div');
tilt.className = 'cyl-tilt';
cyl.parentNode.insertBefore(tilt, cyl);
tilt.appendChild(cyl);
const CN = 12, CR = 340, ROWS = 4;
const ringY = (r) => (r - (ROWS - 1) / 2) * 124 + 80;
for (let c = 0; c < CN; c++) {
  const ang = (360 / CN) * c;
  const t = document.createElement('div');
  t.className = 'seg txt';
  t.textContent = `placeholder caption ${pad(c + 1, 2)}.`;
  t.style.transform = `translateY(${ringY(-1) - 20}px) rotateY(${ang}deg) translateZ(${CR}px)`;
  cyl.appendChild(t);
  for (let r = 0; r < ROWS; r++) {
    const type = (c + r) % 3 === 0 ? 'lid' : 'jar';
    const im = document.createElement('div');
    im.className = 'seg';
    im.innerHTML = `<img src="${src(type, c * ROWS + r)}" alt="" draggable="false">`;
    im.style.transform = `translateY(${ringY(r)}px) rotateY(${ang}deg) translateZ(${CR}px)`;
    cyl.appendChild(im);
  }
}
spin($('.cyl-view'), -0.18, (a) => { cyl.style.transform = `rotateY(${a}deg)`; });

/* ---------- 5. grocery store scene ---------- */
const scene = $('#scene');
if (STORE_BG) { scene.classList.add('has-bg'); scene.style.backgroundImage = `url("${STORE_BG}")`; }

const SHELVES = [38, 66, 94];          // y position (%) of each shelf's top edge
const PER = 5;
let n = 0;
SHELVES.forEach((y) => {
  const board = document.createElement('div');
  board.className = 'board';
  board.style.top = y + '%';
  scene.appendChild(board);
  for (let k = 0; k < PER; k++) {
    n++;
    const type = n % 5 === 0 ? 'lid' : 'jar';
    const x = 6 + k * 18.5 + ((n * 7) % 5);
    const color = COLORS[n % COLORS.length];
    const hs = document.createElement('div');
    hs.className = 'hs ' + type;
    hs.tabIndex = 0;
    hs.setAttribute('role', 'button');
    hs.style.cssText = `left:${x}%;bottom:${100 - y}%;--c:${color}`;
    if (x > 55) hs.classList.add('flip');
    hs.innerHTML = `
      <img src="${src(type, n - 1)}" alt="${type} placeholder ${n}">
      <span class="tag">${n}. ${type}</span>
      <div class="info">
        <h3>Placeholder ${type} name</h3>
        <p>Placeholder description. Replace with real information about this item.</p>
        <dl><dt>SKU</dt><dd>${pad(n, 4)}</dd><dt>Size</dt><dd>Placeholder</dd><dt>Price</dt><dd>$00.00</dd><dt>Aisle</dt><dd>00</dd></dl>
        <button type="button">Close</button>
      </div>`;
    scene.appendChild(hs);
  }
});
$('#detected').textContent = `${n} objects detected`;

function closeAll(except) {
  scene.querySelectorAll('.hs.open').forEach((h) => { if (h !== except) h.classList.remove('open'); });
}
scene.addEventListener('click', (e) => {
  const hs = e.target.closest('.hs');
  if (e.target.closest('.info button')) { hs.classList.remove('open'); return; }
  if (e.target.closest('.info')) return;
  closeAll(hs);
  if (hs) hs.classList.toggle('open');
});
scene.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('hs')) {
    e.preventDefault();
    closeAll(e.target);
    e.target.classList.toggle('open');
  }
  if (e.key === 'Escape') closeAll();
});