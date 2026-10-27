import d from './portfolio-data.js';

const app = document.getElementById('app');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const n2 = i => String(i + 1).padStart(2, '0');
const tint = p => `oklch(0.78 0.12 ${p.hue})`;
const onTint = p => `oklch(0.2 0.03 ${p.hue})`;
const metric = m => m.text ?? (m.pre || '') + m.v + m.s;
const isWide = () => innerWidth >= 960;
const total = String(d.projects.length).padStart(2, '0');

const imageIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>';

// An image map entry is a path, or { src, focus } where focus is a CSS
// object-position ('left', 'top', '30% 50%') that picks which part survives the crop.
function image(id) {
  const v = d.images && d.images[id];
  if (!v) return null;
  return typeof v === 'string' ? { src: v, focus: '' } : { src: v.src, focus: v.focus || '', ratio: v.ratio };
}

// An image box: the mapped screenshot if there is one, otherwise a placeholder.
function slot(id, placeholder, cls = '') {
  const im = image(id);
  const inner = im
    ? `<img src="${esc(im.src)}" alt="${esc(placeholder)}" loading="lazy"${im.focus ? ` style="object-position:${esc(im.focus)}"` : ''}>`
    : `<div class="slot-empty">${imageIcon}<span>${esc(placeholder)}</span></div>`;
  return `<div class="slot ${cls}"${im && im.ratio ? ` style="aspect-ratio:${esc(im.ratio)}"` : ''}>${inner}</div>`;
}

// ── Templates ─────────────────────────────────────────

function homeView() {
  const [first, ...rest] = d.name.split(' ');
  const rows = d.projects.map((p, i) => `
    <a class="row" href="#${esc(p.id)}" data-i="${i}" style="--tint:${tint(p)}">
      <span class="row-n">${n2(i)}</span>
      <div class="row-main">
        <div class="row-name">${esc(p.name)}</div>
        <div class="row-tag">${esc(p.tagline)}</div>
      </div>
      <span class="row-type">${esc(p.type)}</span>
      <div class="row-stat"><b>${esc(metric(p.metrics[0]))}</b><span>${esc(p.metrics[0].l)}</span></div>
    </a>`).join('');

  return `
  <header class="topbar mono">
    <a class="home" href="#">${esc(d.name)}</a>
    <nav>
      <a href="#work" data-scroll="work">Work</a>
      <a href="#contact" data-scroll="contact">Contact</a>
      <a href="${esc(d.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>
    </nav>
  </header>

  <section class="hero" data-say="Hey, I'm ${esc(d.short)}. I'll narrate, you scroll.">
    <div class="hero-top">
      <h1 class="hero-name"><span>${esc(first)}</span><span>${esc(rest.join(' '))}<span class="accent">.</span></span></h1>
      <img class="portrait" src="assets/gaurav.webp" alt="${esc(d.name)}">
    </div>
    <div class="hero-meta">
      <p class="lede">${esc(d.lede)}</p>
      <p class="bio">${esc(d.bio)}</p>
      <dl class="facts">
        <div><dt>Now</dt><dd>${esc(d.roleShort)}</dd></div>
        <div><dt>In product</dt><dd class="nowrap">${d.years} years</dd></div>
        <div><dt>Based in</dt><dd class="nowrap">${esc(d.location)}</dd></div>
        <div><dt>Say hi</dt><dd><a href="mailto:${esc(d.email)}">${esc(d.email)}</a></dd></div>
      </dl>
    </div>
  </section>

  <section id="work" class="work" data-say="Hover a row. Each one is a whole story.">
    <div class="work-head mono"><span>Selected work (${total})</span><span>Problem → role → outcome</span></div>
    <div class="rows">${rows}</div>
  </section>
  <div class="peek" aria-hidden="true"><span></span></div>

  <section id="contact" class="contact" data-say="That's me. Psst: you can drag me anywhere.">
    <div class="contact-card">
      <div class="mono">Contact</div>
      <h2>Let's build something people use.</h2>
      <div class="contact-foot">
        <a class="contact-mail" href="mailto:${esc(d.email)}">${esc(d.email)}</a>
        <a class="pill" href="${esc(d.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>
      </div>
    </div>
    <div class="foot mono"><span>© ${new Date().getFullYear()} ${esc(d.name)}</span><span>${esc(d.location)}</span></div>
  </section>`;
}

function caseView(pi) {
  const P = d.projects[pi];
  const N = d.projects[(pi + 1) % d.projects.length];
  const ch = d.chapters;
  const label = i => (P.labels || {})[ch[i].key] ?? ch[i].label;
  const say = i => (P.says || {})[ch[i].key] ?? ch[i].say;
  const head = i => `<div class="ch-n">${n2(i)}</div><h2>${esc(label(i))}</h2>`;
  const sec = (i, body, extra = '') =>
    `<section class="chapter" data-chapter="${i}" data-say="${esc(say(i))}"${extra}>${head(i)}${body}</section>`;
  // Items can be plain strings or { t, d } (title + description).
  const item = x => typeof x === 'string' ? { t: x } : x;

  const toc = ch.map((c, i) => `
    <a href="#${esc(P.id)}" data-go="${i}">
      <div class="toc-row"><span class="toc-n">${n2(i)}</span><span class="toc-label">${esc(label(i))}</span></div>
      <div class="toc-bar"><i></i></div>
    </a>`).join('');

  return `
  <div class="progress"></div>
  <header class="casebar mono">
    <a class="back" href="#">← Index</a>
    <span class="title">${esc(P.name)}</span>
    <a class="next-link" href="#${esc(N.id)}">Next: ${esc(N.name)} →</a>
  </header>

  <section class="cover" data-say="This is ${esc(P.name)}. Grab a coffee, it's a good one.">
    <div class="cover-top mono"><span>Case study ${n2(pi)} / ${total}</span><span>${esc(P.type)}</span></div>
    <h1>${esc(P.name)}</h1>
    <p class="cover-tag">${esc(P.tagline)}</p>
    <dl class="cover-facts">
      <div><dt class="label">Role</dt><dd>${esc(P.roleTitle)}</dd></div>
      <div><dt class="label">Team</dt><dd>${esc(P.teamSize)}</dd></div>
      <div><dt class="label">Timeline</dt><dd>${esc(P.timeline)}</dd></div>
      <div><dt class="label">Result</dt><dd>${esc(P.result ?? metric(P.metrics[0]) + ' ' + P.metrics[0].l)}</dd></div>
    </dl>
  </section>
  <div class="cover-shot">${slot(P.id + '-hero', `Hero shot of ${P.name}`)}</div>

  <div class="story">
    <aside class="toc"><div class="toc-inner"><div class="label">The story</div><nav>${toc}</nav></div></aside>
    <div style="min-width:0">
      ${sec(0, `
        <p class="context">${esc(P.context)}</p>
        <div class="question"><div class="label">${esc(P.questionLabel || 'The question')}</div><blockquote>“${esc(P.problem)}”</blockquote></div>`)}

      ${sec(1, `
        <div class="insights">${P.insights.map((x, i) => `
          <div class="insight"><b>${n2(i)}</b><h3>${esc(x.t)}</h3><p>${esc(x.d)}</p></div>`).join('')}
        </div>
        ${slot(P.id + '-research', 'Research notes, an affinity map or interview photos', 'research')}`)}

      ${sec(2, `
        <div class="role">
          <div><div class="role-title">${esc(P.roleTitle)}</div><p>${esc(P.roleText)}</p></div>
          <ul class="team">${P.team.map(t => `<li><span>${esc(t)}</span><i></i></li>`).join('')}</ul>
        </div>`)}

      ${sec(3, `
        <div class="decisions">${P.decisions.map(x => `
          <div class="decision">
            <div><div class="label tinted">We chose</div><div class="d-chose">${esc(x.chose)}</div></div>
            <div><div class="label">Instead of</div><div class="d-over">${esc(x.over)}</div></div>
            <div><div class="label">Because</div><div class="d-why">${esc(x.why)}</div></div>
          </div>`).join('')}
        </div>`)}

      ${sec(4, `
        <div class="built">${P.built.map(item).map((b, i) => `
          <figure>${slot(`${P.id}-screen-${i + 1}`, b.t)}<figcaption><span>${n2(i)}</span><div><b>${esc(b.t)}</b>${b.d ? `<p>${esc(b.d)}</p>` : ''}</div></figcaption></figure>`).join('')}
        </div>`)}

      ${sec(5, `
        <div class="metrics">${P.metrics.map(m => m.text != null ? `
          <div class="metric text"><b>${esc(m.text)}</b><span>${esc(m.l)}</span></div>` : `
          <div class="metric"><b data-v="${m.v}" data-pre="${esc(m.pre || '')}" data-s="${esc(m.s)}">${esc(reduceMotion ? metric(m) : (m.pre || '') + 0 + m.s)}</b><span>${esc(m.l)}</span></div>`).join('')}
        </div>
        ${P.outcomeNote ? `<p class="outcome-note">${esc(P.outcomeNote)}</p>` : ''}`, ' data-count')}

      ${sec(6, `
        <div class="learnings">${P.learnings.map(item).map((x, i) => `
          <div class="learning"><span>${n2(i)}</span><div><p>${esc(x.t)}</p>${x.d ? `<p class="learning-d">${esc(x.d)}</p>` : ''}</div></div>`).join('')}
        </div>
        ${P.aside ? `<div class="aside"><div class="label">Behind the scenes</div><p>${esc(P.aside)}</p></div>` : ''}`)}
    </div>
  </div>

  <a class="next" href="#${esc(N.id)}" data-say="Another story? Right this way." style="--next-tint:${tint(N)};--next-on:${onTint(N)}">
    <div class="next-top mono"><span>Next case study</span><span>${esc(N.type)}</span></div>
    <div class="next-big"><span class="next-name">${esc(N.name)}</span><span class="next-arrow">→</span></div>
  </a>
  <div class="foot case-foot mono">
    <a href="#">← Back to index</a>
    <a href="mailto:${esc(d.email)}">${esc(d.email)}</a>
  </div>`;
}

// ── Routing ───────────────────────────────────────────

let view = null;     // 'home' or a project id
let page = {};       // per-render element refs

function route() {
  const h = decodeURIComponent(location.hash.slice(1));
  return d.projects.some(p => p.id === h) ? h : 'home';
}

function scrollToId(id, smooth) {
  const el = document.getElementById(id);
  if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 60, behavior: smooth ? 'smooth' : 'auto' });
}

function render() {
  const prev = view;
  view = route();
  const pi = d.projects.findIndex(p => p.id === view);
  if (pi >= 0) {
    const P = d.projects[pi];
    app.style.setProperty('--tint', tint(P));
    app.style.setProperty('--on-tint', onTint(P));
    app.innerHTML = caseView(pi);
    document.title = `${P.name} · ${d.name}`;
  } else {
    app.style.removeProperty('--tint');
    app.style.removeProperty('--on-tint');
    app.innerHTML = homeView();
    document.title = `${d.name} · Product`;
  }

  page = {
    says: [...app.querySelectorAll('[data-say]')],
    chapters: [...app.querySelectorAll('[data-chapter]')],
    toc: [...app.querySelectorAll('.toc a')],
    count: app.querySelector('[data-count]'),
    progress: app.querySelector('.progress'),
    casebar: app.querySelector('.casebar'),
    peek: app.querySelector('.peek'),
    counting: false
  };
  cancelAnimationFrame(countRaf);

  // Coming back from a story lands on the project list, not the top.
  if (view === 'home' && prev && prev !== 'home') scrollToId('work');
  else scrollTo(0, 0);
  setTimeout(onScroll, 60);
}

// ── Scroll-driven state ───────────────────────────────

let countRaf = 0;

function onScroll() {
  const vh = innerHeight;

  let say = null;
  page.says.forEach((el, i) => { if (i === 0 || el.getBoundingClientRect().top < vh * 0.6) say = el.getAttribute('data-say'); });
  if (say && say !== narrator.said && !narrator.dragging) narrator.speak(say);

  let active = 0;
  page.chapters.forEach((el, i) => {
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.45) active = i;
    const fill = Math.max(0, Math.min(1, (vh * 0.45 - r.top) / r.height));
    const link = page.toc[i];
    if (link) link.querySelector('i').style.width = (fill * 100).toFixed(1) + '%';
  });
  page.toc.forEach((a, i) => a.classList.toggle('on', i === active));

  if (page.progress) {
    const max = document.documentElement.scrollHeight - vh;
    page.progress.style.width = (max > 0 ? Math.min(1, scrollY / max) * 100 : 0).toFixed(2) + '%';
  }
  if (page.casebar) page.casebar.classList.toggle('past', scrollY > vh * 0.6);

  if (page.count && !page.counting && page.count.getBoundingClientRect().top < vh * 0.7) countUp();
}

function countUp() {
  page.counting = true;
  if (reduceMotion) return;
  const nums = [...page.count.querySelectorAll('[data-v]')];
  const t0 = performance.now();
  const step = now => {
    const t = Math.min(1, (now - t0) / 1600);
    const e = 1 - Math.pow(1 - t, 3);
    nums.forEach(b => { b.textContent = b.dataset.pre + Math.round(+b.dataset.v * e) + b.dataset.s; });
    if (t < 1) countRaf = requestAnimationFrame(step);
  };
  countRaf = requestAnimationFrame(step);
}

let scrollRaf = 0;
addEventListener('scroll', () => {
  if (!scrollRaf) scrollRaf = requestAnimationFrame(() => { scrollRaf = 0; onScroll(); });
}, { passive: true });

// ── Clicks and hover ──────────────────────────────────

app.addEventListener('click', e => {
  const s = e.target.closest('[data-scroll]');
  if (s) { e.preventDefault(); scrollToId(s.dataset.scroll, true); return; }
  const g = e.target.closest('[data-go]');
  if (g) {
    e.preventDefault();
    const el = page.chapters[+g.dataset.go];
    if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 90, behavior: 'smooth' });
  }
});

// Floating preview that trails the cursor over the project list.
let hoverP = null, mx = 0, my = 0;
function placePeek() {
  const el = page.peek;
  if (!el) return;
  const on = !!hoverP && isWide();
  el.style.opacity = on ? 1 : 0;
  el.style.transform = `translate(${mx + 28}px, ${my - 120}px) rotate(${on ? -4 : 6}deg) scale(${on ? 1 : 0.7})`;
  if (!hoverP) return;
  el.style.background = tint(hoverP);
  el.style.color = onTint(hoverP);
  const im = image(hoverP.id + '-hero');
  let img = el.querySelector('img');
  if (im) {
    if (!img) { img = document.createElement('img'); img.alt = ''; el.prepend(img); }
    img.src = im.src;
    img.style.objectPosition = im.focus;
  } else if (img) img.remove();
  el.querySelector('span').textContent = im ? '' : hoverP.name + ' screenshot';
}
app.addEventListener('mousemove', e => {
  if (!page.peek) return;
  mx = e.clientX; my = e.clientY;
  placePeek();
});
app.addEventListener('mouseover', e => {
  const row = e.target.closest('.row');
  const p = row ? d.projects[+row.dataset.i] : null;
  if (p !== hoverP) { hoverP = p; placePeek(); }
});
app.addEventListener('mouseleave', () => { hoverP = null; placePeek(); });

// ── Narrator ──────────────────────────────────────────

const narrator = (() => {
  const root = document.getElementById('narrator');
  const bubble = root.querySelector('.bubble');
  const avatar = root.querySelector('.avatar');
  const cfg = d.narrator || {};
  let pos = null, timer = 0;

  const self = {
    said: null,
    dragging: false,
    speak(t) {
      self.said = t;
      bubble.classList.add('hide');
      clearTimeout(timer);
      timer = setTimeout(() => { bubble.textContent = t; bubble.classList.remove('hide'); }, 140);
    },
    place() {
      const p = pos || { x: cfg.side === 'right' ? innerWidth - 92 : 24, y: innerHeight - 92 };
      root.style.left = p.x + 'px';
      root.style.top = p.y + 'px';
      root.classList.toggle('on-right', p.x > innerWidth / 2);
      root.classList.toggle('below', p.y < 170);
    }
  };

  if (cfg.show === false) return self;
  root.hidden = false;
  self.place();

  avatar.addEventListener('pointerdown', e => {
    e.preventDefault();
    const r = avatar.getBoundingClientRect();
    const off = { x: e.clientX - r.left, y: e.clientY - r.top };
    clearTimeout(timer);
    self.dragging = true;
    root.classList.add('dragging');
    bubble.textContent = 'Hey! Where are we going?';
    bubble.classList.remove('hide');
    const move = ev => {
      pos = {
        x: Math.max(8, Math.min(innerWidth - 76, ev.clientX - off.x)),
        y: Math.max(8, Math.min(innerHeight - 76, ev.clientY - off.y))
      };
      self.place();
    };
    const up = () => {
      removeEventListener('pointermove', move);
      removeEventListener('pointerup', up);
      removeEventListener('pointercancel', up);
      self.dragging = false;
      root.classList.remove('dragging');
      self.speak('Good spot. Carry on.');
    };
    addEventListener('pointermove', move);
    addEventListener('pointerup', up);
    addEventListener('pointercancel', up);
  });

  addEventListener('resize', () => {
    if (pos) pos = { x: Math.min(pos.x, innerWidth - 76), y: Math.min(pos.y, innerHeight - 76) };
    self.place();
  });

  return self;
})();

addEventListener('resize', onScroll);
addEventListener('hashchange', render);
render();
