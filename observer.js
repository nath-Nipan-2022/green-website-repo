const imageSections = document.querySelectorAll(".image-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { target } = entry;
      if (entry.isIntersecting) {
        target.classList.add("active");
      }
    });
  },
  { threshold: 0.5 }
);

window.innerWidth >= 768 &&
  imageSections.forEach((section) => observer.observe(section));

horizontalLines.forEach((line) => observer.observe(line));
