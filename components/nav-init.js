function initBonsaiNav() {
  const nav = document.querySelector('.bonsai-nav');
  if (!nav) return;

  nav.addEventListener('click', function (e) {
    if (e.target.closest('.submenu')) return;
    const li = e.target.closest('.has-submenu');
    if (!li) return;
    e.preventDefault();
    nav.querySelectorAll('.has-submenu.open').forEach(function (item) {
      if (item !== li) item.classList.remove('open');
    });
    const isOpening = !li.classList.contains('open');
    li.classList.toggle('open');
    if (isOpening && window.innerWidth <= 700) {
      const submenu = li.querySelector('.submenu');
      if (submenu) {
        const rect = li.getBoundingClientRect();
        submenu.style.top = rect.bottom + 'px';
        submenu.style.left = rect.left + 'px';
      }
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.bonsai-nav')) {
      nav.querySelectorAll('.has-submenu.open').forEach(function (item) {
        item.classList.remove('open');
      });
    }
  });
}
