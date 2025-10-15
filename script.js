document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
(function() {
  const ease = 0.05; 
  let target = window.scrollY;
  let current = window.scrollY;

  function update() {
    current += (target - current) * ease;
    window.scrollTo(0, current);
    requestAnimationFrame(update);
  }

  window.addEventListener('wheel', (e) => {
    e.preventDefault(); 
    target += e.deltaY;
    
    target = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight));
  }, { passive: false });

  update();
})();
