const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links li");
const menu = document.querySelector("#menu");

menu.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  navLinks.classList.toggle("active");
});

navLinks.forEach((link) => link.addEventListener("click", addActiveClass));

function addActiveClass() {
  navLinks.forEach((link) => link.classList.remove("active"));

  this.classList.add("active");
}
