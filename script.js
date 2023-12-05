const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links li");
const menu = document.querySelector("#menu");

document.body.addEventListener("click", (e) => {
  if (!menu.contains(e.target) & !nav.contains(e.target)) {
    nav.classList.remove("active");
    menu.classList.remove("active");
  } else if (menu.contains(e.target)) {
    nav.classList.toggle("active");
    menu.classList.toggle("active");
  }
});

navLinks.forEach((link) => link.addEventListener("click", addActiveClass));

function addActiveClass() {
  navLinks.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");
}

// animation for vertical line 📏 & circles ⚪
const verticalLine = document.querySelector(".vertical");
const circles = document.querySelectorAll(".circle");
const horizontalLines = document.querySelectorAll(".horizontal");
const startingPoint = document.querySelector("#home").offsetHeight / 2;

let activeIndex = 0;

/// **  Description **
/**
 * animation will start at height/2 of the Home page.
 * when scrollAmount >= height of a feature card
 * we want to increment active Index and
 * then animate vertical line and the circles.
 */

function scrollEffect() {
  const scrollAmt = scrollY - startingPoint;

  if (scrollAmt < 0) {
    activeIndex = 0;
    circles.forEach((circle) => circle.classList.remove("active"));
    horizontalLines.forEach((circle) => circle.classList.remove("active"));
    verticalLine.style.height = 0;
    return;
  }

  const amtToScroll =
    document.querySelector(".feature").offsetHeight * (activeIndex + 1);

  if (scrollAmt >= amtToScroll) {
    activeIndex = Math.min(activeIndex + 1, circles.length);
    verticalLine.style.height = `${(activeIndex * 100) / circles.length}%`;
    circles[activeIndex - 1].classList.add("active");
    horizontalLines[activeIndex - 1].classList.add("active");
  }
}

window.onscroll = scrollEffect;
