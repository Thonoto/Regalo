/* Scroll reveal */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".hidden").forEach(section => {
  observer.observe(section);
});

/* Lanterns */
const container = document.getElementById("lantern-container");

const isDesktop = window.innerWidth > 768;
const lanternCount = isDesktop ? 28 : 16;

for (let i = 0; i < lanternCount; i++) {
  const lantern = document.createElement("div");
  lantern.classList.add("lantern");

  lantern.style.left = Math.random() * 100 + "%";
  lantern.style.animationDuration = 12 + Math.random() * 10 + "s";
  lantern.style.animationDelay = Math.random() * 5 + "s";

  container.appendChild(lantern);
}
