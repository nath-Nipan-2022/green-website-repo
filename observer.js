const images = document.querySelectorAll(".image-section");
const horizontalLines = document.querySelectorAll('.horizontal');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		const { target } = entry;
		if (entry.isIntersecting) {
			target.classList.add('active');
		}
	})
}, {threshold: 0.5});

window.innerWidth >= 768 && images.forEach(image => observer.observe(image));
	
horizontalLines.forEach(line => observer.observe(line));
