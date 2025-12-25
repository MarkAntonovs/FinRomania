// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;
      
      menuToggle.setAttribute('aria-expanded', newState);
      mobileMenu.setAttribute('aria-hidden', !newState);
    });

    // Close menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      const isMenuOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      const isClickInsideMenu = mobileMenu.contains(e.target);
      const isClickOnButton = menuToggle.contains(e.target);
      
      if (isMenuOpen && !isClickInsideMenu && !isClickOnButton) {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }
});
