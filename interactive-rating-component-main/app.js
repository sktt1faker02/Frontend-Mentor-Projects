const mainContainer = document.querySelector("main");
const thanksContainer = document.querySelector(".thank-you");
const submitBtn = document.querySelector("#submit");
const rateAgain = document.querySelector("#rate-again");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden");
  mainContainer.style.display = "none";
});

rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden");
  mainContainer.style.display = "block";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.textContent = rate.textContent;
  });
});
