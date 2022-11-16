const humberger = document.querySelector('.icon');
const navMenu = document.querySelector('.hidden-menu');

humberger.addEventListener('click', () => {
     humberger.classList.toggle('active');
     navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.
  addEventListener('click', () => {
    humberger.classList.remove('active');
    navMenu.classList.remove('active');

  }))
  