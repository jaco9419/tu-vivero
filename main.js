const menu = document.querySelector(".menu-js");
const navToggle = document.querySelector(".nav-custom");
const arrow = document.querySelector(".arrow");

menu.addEventListener("click", () => {
    arrow.classList.add("move-down");
  navToggle.classList.toggle("open-js");
  arrow.classList.toggle("move-up");
});

