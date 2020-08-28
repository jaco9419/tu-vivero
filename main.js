const menu = document.querySelector(".menu");
const navToggle = document.querySelector(".nav");
const arrow = document.querySelector(".arrow");

menu.addEventListener("click", () => {
    arrow.classList.add("move-down");
  navToggle.classList.toggle("open");
  arrow.classList.toggle("move-up");
});

