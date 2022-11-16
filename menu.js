const humberger = document.querySelector('.icon');
const navMenu = document.querySelector('.hidden-menu');
const cancel = document.querySelectorAll('.nav-link')

humberger.addEventListener('click', () => {
  humberger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

cancel.forEach(n => n.addEventListener('click', () => {
  humberger.classList.remove('active');
  navMenu.classList.remove('active');
}));
