// Slide in About section image
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-image');
    }
  });
}, { threshold: 0.3 });

const aboutImage = document.querySelector('.about-content img');
if (aboutImage) observer.observe(aboutImage);


// Animate skill bars on hover
const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  const level = skill.querySelector('.skill-level');
  const targetWidth = skill.getAttribute('data-skill');

  skill.addEventListener('mouseenter', () => {
    level.style.width = targetWidth;
  });

  skill.addEventListener('mouseleave', () => {
    level.style.width = '0';
  });
});
// Form submission behavior
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for contacting me! 🚀 (This is a demo form.)');
    form.reset();
  });
}