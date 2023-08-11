const hamburger = document.querySelector(".nav_icon");
const navMenu = document.querySelector(".nav_menu");
const body = document.querySelector("body");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("nav_icon_active");
  navMenu.classList.toggle("nav_menu_active");
  body.classList.toggle("bodyScrollDisable");
});
