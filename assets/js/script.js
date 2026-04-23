// On sélectionne les éléments qu'on va manipuler
// C'est toujours la première chose à faire en JS
const navbar = document.getElementById("navbar");
const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");
const backToTop = document.getElementById("back-to-top");
const contactForm = document.getElementById("contact-form");
const skillBars = document.querySelectorAll(".skill-progress");
// Au clic sur le burger : ouvrir/fermer le menu
if (burger) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("open"); // anime le X
    navLinks.classList.toggle("open"); // fait glisser le menu
  });
}

// Fermer le menu quand on clique un lien
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});
