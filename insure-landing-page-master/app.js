const navMenu = document.querySelector(".nav__menu");
const navToggle = document.querySelector(".nav__toggle");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("nav__toggle-icon");
  document.querySelector("body").classList.toggle("stop-scrolling");
});
