
// selecting the nav
const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
// selecting the menu
const menu = document.querySelector('#menu');

menu.addEventListener('click', function(e){
  e.stopPropagation();
  menu.classList.toggle('active');
  nav.classList.toggle('active');
  navLinks.classList.toggle('active');
})