// Hamburger menu toggle (only click event – works on both mouse and touch)
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

function toggleMenu(e) {
  if (navLinks) {
    navLinks.classList.toggle('active');
  }
  // Prevent any weird default behavior on the button (e.g., page zoom)
  if (e) e.preventDefault();
}

if (hamburger) {
  hamburger.addEventListener('click', toggleMenu);
}

// Close menu when any navigation link is clicked (not touchstart)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (navLinks) {
      navLinks.classList.remove('active');
    }
    // Do NOT prevent default – let the browser navigate
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
revealElements.forEach(el => observer.observe(el));

// Active nav link highlighting
const currentPage = window.location.pathname.split("/").pop() || "index.html";
if (currentPage === "index.html") document.getElementById('nav-home')?.classList.add('active');
if (currentPage === "services.html") document.getElementById('nav-services')?.classList.add('active');
if (currentPage === "contact.html") document.getElementById('nav-contact')?.classList.add('active');