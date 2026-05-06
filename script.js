// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
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

// Active nav link
const currentPage = window.location.pathname.split("/").pop() || "index.html";
if (currentPage === "index.html") document.getElementById('nav-home')?.classList.add('active');
if (currentPage === "services.html") document.getElementById('nav-services')?.classList.add('active');
if (currentPage === "contact.html") document.getElementById('nav-contact')?.classList.add('active');