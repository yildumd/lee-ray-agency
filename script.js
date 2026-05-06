// Hamburger menu toggle – supports both click and touch
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function toggleMenu(e) {
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
  // Prevent default touch behavior (zoom, scroll) on the button
  if (e) e.preventDefault();
}

if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);
  hamburger.addEventListener('touchstart', toggleMenu);
}

// Close menu when any navigation link is clicked or tapped
document.querySelectorAll('.nav-links a').forEach(link => {
  const closeMenu = (e) => {
    if (navLinks) {
      navLinks.classList.remove('active');
    }
  };
  link.addEventListener('click', closeMenu);
  link.addEventListener('touchstart', closeMenu);
});

// Scroll reveal animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));

// Active nav link highlighting based on current page
const currentPage = window.location.pathname.split("/").pop() || "index.html";
if (currentPage === "index.html") document.getElementById('nav-home')?.classList.add('active');
if (currentPage === "services.html") document.getElementById('nav-services')?.classList.add('active');
if (currentPage === "contact.html") document.getElementById('nav-contact')?.classList.add('active');