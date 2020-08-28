const menu = document.querySelector(".menu");
const navToggle = document.querySelector(".nav");
//const navLinks = document.querySelectorAll(".nav__link");

menu.addEventListener("click", () => {
  navToggle.classList.add("open");
});


// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     document.body.classList.remove("nav-open");
//   });
// });