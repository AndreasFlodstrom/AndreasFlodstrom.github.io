
(function() {
  const ease = 0.05; 
  let target = window.scrollY;
  let current = window.scrollY;
  let isScrollingToAnchor = false; 

  function update() {
    // Smoothly move current towards target
    current += (target - current) * ease;
    window.scrollTo(0, current);
    requestAnimationFrame(update);
  }

  // Handle scroll wheel
  window.addEventListener('wheel', (e) => {
    e.preventDefault(); 
    target += e.deltaY;
    target = Math.max(0, Math.min(target, document.body.scrollHeight - window.innerHeight));
  }, { passive: false });

  // Handle anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        
        target = targetEl.offsetTop;
      }
    });
  });

  update();
})();

// Only redirect on GitHub Pages, not local files
if (location.hostname.includes("github.io") && window.location.pathname.endsWith('.html')) {
  const newPath = window.location.pathname.replace('.html', '/');
  window.location.replace(newPath);
}

