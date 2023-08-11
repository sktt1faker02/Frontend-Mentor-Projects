let listElements = document.querySelectorAll(".link");
const navIcon = document.querySelector(".navIcon");

navIcon.addEventListener("click", () => {
  document.querySelector(".header-menu").classList.toggle("open");
  document.querySelector(".navImg").classList.toggle("nav-icon");
  document.querySelector("body").classList.toggle("prevent-scroll");
});

listElements.forEach((listElement) => {
  listElement.addEventListener("click", () => {
    if (listElement.classList.contains("active")) {
      listElement.classList.remove("active");
    } else {
      listElements.forEach((ListE) => {
        ListE.classList.remove("active");
      });
      listElement.classList.toggle("active");
    }
  });
});
