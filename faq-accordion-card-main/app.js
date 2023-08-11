// const questions = document.querySelectorAll(".question");
// const hideAnswerEl = document.querySelector(".answer");
// const showAnswer = document.querySelectorAll(".hidden");
// const btnAccordion = document.querySelectorAll(".btnAccordion");

// questions.forEach((question) =>
//   question.addEventListener("click", () => {
//     if (question.parentNode.classList.contains("hidden")) {
//       question.parentNode.classList.toggle("hidden");
//       btnAccordion.classList;
//     } else {
//       questions.forEach((question) =>
//         question.parentNode.classList.remove("hidden")
//       );
//       question.parentNode.classList.add("hidden");
//     }
//   })
// );

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const button = question.querySelector(".question__button");
  const questionText = question.querySelector(".question__title__text");
  button.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });

  questionText.addEventListener("click", () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
