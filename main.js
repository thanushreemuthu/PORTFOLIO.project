/* ── Cursor ── */
(function() {
  const cur   = document.getElementById('cursor');
  const trail = document.getElementById('cursor-trail');
  if (!cur || !trail) return;
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.transform   = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
    setTimeout(() => { trail.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; }, 80);
  });
  document.querySelectorAll('a,button,.card,.project-card,.skill-card').forEach(el => {
    el.addEventListener('mouseenter', () => { trail.style.width='50px'; trail.style.height='50px'; });
    el.addEventListener('mouseleave', () => { trail.style.width='32px'; trail.style.height='32px'; });
  });
})();

/* ── Starfield ── */
(function() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], nebulas = [];
  const COLS = ['rgba(74,143,232,','rgba(155,93,229,','rgba(241,91,181,','rgba(0,187,249,'];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }

  function init() {
    stars = Array.from({length: 300}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*1.4+0.2,
      alpha: Math.random()*0.8+0.1,
      speed: Math.random()*0.2+0.04,
      tw: Math.random()*Math.PI*2,
      tws: Math.random()*0.02+0.005
    }));
    nebulas = Array.from({length: 5}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      r: Math.random()*260+100,
      color: COLS[Math.floor(Math.random()*COLS.length)],
      alpha: Math.random()*0.055+0.018,
      ang: Math.random()*Math.PI
    }));
  }

  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, {passive:true});

  function draw() {
    ctx.clearRect(0,0,W,H);
    nebulas.forEach(n => {
      const g = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r);
      g.addColorStop(0, n.color+(n.alpha*2)+')');
      g.addColorStop(1, n.color+'0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(n.x,n.y,n.r,n.r*0.5,n.ang,0,Math.PI*2);
      ctx.fill();
    });
    stars.forEach(s => {
      s.tw += s.tws;
      const a = s.alpha*(0.55+0.45*Math.sin(s.tw));
      let y = (s.y - scrollY*s.speed*0.05) % H;
      if (y < 0) y += H;
      ctx.beginPath(); ctx.arc(s.x, y, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(238,240,255,${a})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { resize(); init(); });
  resize(); init(); requestAnimationFrame(draw);
})();

/* ── Scroll reveal ── */
(function() {
  const items = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  items.forEach(el => obs.observe(el));
})();

/* ── Active nav link ── */
(function() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) a.classList.add('active');
  });
})();

/* ── Page transition on link click ── */
(function() {
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
      a.addEventListener('click', e => {
        e.preventDefault();
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s';
        setTimeout(() => { window.location.href = href; }, 300);
      });
    }
  });
})();
