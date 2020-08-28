const menu = document.querySelector(".menu");
const navToggle = document.querySelector(".nav");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");

menu.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  arrowUp.classList.toggle("open");
  arrowDown.classList.toggle("close");
});

