// Highlight active nav link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Contact form handler (if present)
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
if (contactForm && formMessage) {
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
}
