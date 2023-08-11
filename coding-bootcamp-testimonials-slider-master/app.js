const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const slideContainer = document.querySelector(".slide-container");
const slides = document.querySelectorAll(".slider");
const slideContent = document.querySelectorAll(".testimonial-text");
const sliderImage = document.querySelectorAll(".slider img");

let currentSlide = 0;

const showSlide = (n) => {
  sliderImage[currentSlide].classList.add("fade-in");

  slides[currentSlide].style.display = "none";
  slideContent[currentSlide].style.display = "none";

  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
  slideContent[currentSlide].style.display = "block";
};

btnPrev.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

btnNext.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});
