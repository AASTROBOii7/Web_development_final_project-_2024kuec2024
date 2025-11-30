(function () {
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === file) a.classList.add('active');
  });


  const reveal = () => {
    const els = document.querySelectorAll('.fade-in');
    const h = window.innerHeight;
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < h - 60) el.classList.add('show');
    });
  };
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);

  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.7);display:none;align-items:center;justify-content:center;z-index:1000;';
  const big = document.createElement('img');
  big.style.cssText = 'max-width:92%;max-height:92%;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.5)';
  overlay.appendChild(big);
  overlay.addEventListener('click', () => overlay.style.display = 'none');
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(overlay));

  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-lightbox]');
    if (!el) return;
    big.src = el.getAttribute('src');
    overlay.style.display = 'flex';
  });
})();
