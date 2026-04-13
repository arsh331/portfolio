document.addEventListener('DOMContentLoaded', function () {

  // ── Hamburger menu (legacy, kept for compatibility) ──
  const icon = document.querySelector('.hamburger i');
  const mobile = document.querySelector('.mobile');
  if (icon && mobile) {
    icon.addEventListener('click', function () {
      mobile.style.display = mobile.style.display === 'none' ? 'inherit' : 'none';
    });
  }

  // ── Scroll snap nav dots ──
  const container = document.getElementById('snap-container');
  const dotRows = document.querySelectorAll('.dot-row');
  const sections = document.querySelectorAll('.snap-section');
  const sectionLabel = document.getElementById('section-label');

  if (!container || !dotRows.length || !sections.length) return;

  // Click dot to jump to section
  dotRows.forEach(function (row) {
    row.addEventListener('click', function () {
      const index = parseInt(row.dataset.index);
      sections[index].scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Update active dot and section label on scroll
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const index = Array.from(sections).indexOf(entry.target);
        dotRows.forEach(function (r) { r.classList.remove('active'); });
        dotRows[index].classList.add('active');
        if (sectionLabel) {
          sectionLabel.textContent = dotRows[index].dataset.label;
        }
      }
    });
  }, { root: container, threshold: 0.5 });

  sections.forEach(function (section) { observer.observe(section); });

});