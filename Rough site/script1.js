// Hamburger menu 
const menu = document.querySelector('.menu');
// const nav = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

menu.addEventListener('click', function () {
   this.classList.toggle('active');
   navLinks.classList.toggle('active');
   header.classList.toggle('active');
});

