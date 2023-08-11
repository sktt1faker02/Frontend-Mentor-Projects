const navIcon = document.querySelector(".nav-icon");
const headerMenu = document.querySelector(".header-nav");
const arrowBtn = document.querySelector(".arrow");

navIcon.addEventListener("click", () => {
  headerMenu.classList.toggle("showMenu");
});
