
// Función para hacer el menú responsive
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  // Toggle nav
  nav.classList.toggle('nav-active');

  // Animar los links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  // Animar burger
  burger.classList.toggle('toggle');
});

// Sticky Navbar
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('#navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});

