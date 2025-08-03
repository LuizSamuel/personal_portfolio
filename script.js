document.querySelectorAll('a[href^=\"#\"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const toggleTheme = document.getElementById('toggle-theme');
toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

function animateCounter(id, endValue, duration = 2000) {
  let startValue = 0;
  let current = startValue;
  const increment = endValue / (duration / 20);
  const element = document.getElementById(id);

  const counter = setInterval(() => {
    current += increment;
    if (current >= endValue) {
      element.textContent = endValue;
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 20);
}

// Trigger animation when counter is in view
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

window.addEventListener('scroll', () => {
  const counterElement = document.getElementById('projectCount');
  if (isInViewport(counterElement) && counterElement.textContent === '0') {
    animateCounter('projectCount', 5); // Change 5 to the number of projects you want to count
  }
});
