const logo = document.querySelector(".logo");
const navIcon = document.querySelector(".nav-icon");

navIcon.addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("active");
  logo.classList.toggle("logo-fixed");
  navIcon.classList.toggle("nav-fixed");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const pic = entry.target.querySelector("#about picture");
    const aboutText = entry.target.querySelector(".about-text");

    if (entry.isIntersecting) {
      pic.classList.add("js-move-up");
      aboutText.classList.add("js-move-left");

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    pic.classList.remove("js-move-up");
    aboutText.classList.remove("js-move-left");
    // galleryList.classList.remove("js-move-up");
  });
});

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const galleryList = entry.target.querySelectorAll(".gallery-list picture");

    if (entry.isIntersecting) {
      galleryList.forEach((e) => e.classList.add("js-move-up"));

      return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    galleryList.forEach((e) => e.classList.remove("js-move-up"));

    // galleryList.classList.remove("js-move-up");
  });
});

observer.observe(document.querySelector("#about"));
observer2.observe(document.querySelector("#gallery"));
