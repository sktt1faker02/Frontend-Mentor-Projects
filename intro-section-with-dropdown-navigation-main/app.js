const featuresLink = document.querySelector("#features");
const companyLink = document.querySelector("#company");

const featuresMenu = document.querySelector(".features_menu");
const companyMenu = document.querySelector(".company_menu");

const arrowUp = document.querySelector(".feature_icon");
const arrowUp1 = document.querySelector(".company_icon");

const hamburger = document.querySelector(".hamburger");
const nav_icon = document.querySelector(".nav_icon_image");

const mainMenu = document.querySelector(".main_menu");

hamburger.addEventListener("click", () => {
  nav_icon.classList.toggle("nav_icon_close");
  mainMenu.classList.toggle("nav_open");
});

featuresLink.addEventListener("click", () => {
  showFeaturesMenu();
});

companyLink.addEventListener("click", () => {
  showCompanyMenu();
});

featuresLink.addEventListener("mouseover", () => {
  showFeaturesMenu();
});

companyLink.addEventListener("mouseover", () => {
  showCompanyMenu();
});

function showFeaturesMenu() {
  featuresMenu.classList.toggle("features_sub_show");
  companyMenu.classList.remove("company_sub_show");
  arrowUp.classList.toggle("icon_main_menu1");
  arrowUp1.classList.remove("icon_main_menu1");
}

function showCompanyMenu() {
  companyMenu.classList.toggle("company_sub_show");
  featuresMenu.classList.remove("features_sub_show");
  arrowUp1.classList.toggle("icon_main_menu1");
  arrowUp.classList.remove("icon_main_menu1");
}
