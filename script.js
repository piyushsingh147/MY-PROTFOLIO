// Interactive enhancements & smooth scrolling feedback
document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav section on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('text-indigo');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-indigo');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll);
});
