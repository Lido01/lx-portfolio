// Responsive Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active');
    }
  });
});

// Contact Form Handler
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  formMessage.textContent = 'Sending...';
  formMessage.style.color = '#4f46e5';
  setTimeout(() => {
    formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
    formMessage.style.color = '#22c55e';
    contactForm.reset();
  }, 1200);
});
