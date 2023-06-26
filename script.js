const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll(".nav-links li");
const menu = document.querySelector("#menu");

document.body.addEventListener("click", (e) => {
	if (!menu.contains(e.target) & !nav.contains(e.target)) {
		nav.classList.remove("active");
		menu.classList.remove("active");		
	} else if(menu.contains(e.target)){
		nav.classList.toggle("active");
		menu.classList.toggle("active");
	}
});

navLinks.forEach((link) => link.addEventListener("click", addActiveClass));

function addActiveClass() {
	navLinks.forEach((link) => link.classList.remove("active"));
	this.classList.add("active");
}

function scrollEffect() {
	const verticalLine = document.querySelector(".vertical");
	const parent = verticalLine.parentElement;
	const prevElem = parent.previousElementSibling;
	const html = document.documentElement;

	let height = 0;
	let scrollTop = html.scrollTop;

	const OFFSET_TOP = verticalLine.offsetTop;
	const MIN_HEIGHT = prevElem.scrollHeight / 2;
	const MAX_HEIGHT = parent.clientHeight - (OFFSET_TOP * 2);

	if (scrollTop >=  MIN_HEIGHT) {
		height = scrollTop - MIN_HEIGHT;

		if (height >= MAX_HEIGHT) {
			height = MAX_HEIGHT;
		}
	} else {
		height = 0;
	}

	verticalLine.style.height = `${height}px`;
}

window.onscroll = scrollEffect;
