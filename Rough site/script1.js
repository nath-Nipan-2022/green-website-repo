// Hamburger menu
const menu = document.querySelector(".menu");
const navLinks = document.querySelector("nav ul");

menu.addEventListener("click", function () {
	this.classList.toggle("active");
	navLinks.classList.toggle("active");
});

// TEXT animations
const heroText = document.querySelector(".heroText");
const splitText = heroText.innerHTML.split("");

function insertLetters() {
	heroText.innerHTML = "";

	for (const text of splitText) {
		const span = document.createElement("span");
		heroText.appendChild(span);
		span.textContent = text;
		if (text.charAt(0) !== " ") {
			span.className = "inline-blocked";
		}
	}
}

insertLetters();

// select the individual letters

let timer = setInterval(animateLetters, 50);
let char = 0;
function animateLetters() {
	const text = heroText.querySelectorAll("span")[char];
	char++;
	if (text.innerHTML !== " ") {
		text.classList.add("fadeText");
	}
	if (char >= splitText.length) {
		clearInterval(timer);
	}
}

// load images

const baseurl = "/Coding_images/";
const imgSources = ["DeccentBg", "laptopBg", "CoolPalace"];
const img = document.querySelectorAll("img");

const loadImages = async () => {
	for (let i = 0; i < imgSources.length; i++) {
		const src = imgSources[i];
		img[i].src = `${baseurl}${src}.jpg`;
	}
};

loadImages();
