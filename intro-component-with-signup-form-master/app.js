const inputs = document.querySelectorAll("input");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add("error_icon");
      input.nextElementSibling.classList.add("error_text");
    } else {
      input.classList.remove("error_icon");
      input.nextElementSibling.classList.remove("error_text");

      if (input.type == "email") {
        if (validateEmail(input.value)) {
          console.log("Valid Email");
        } else {
          console.log("Invalid Email");
          input.nextElementSibling.textContent =
            "Looks like this is not an email";
          input.nextElementSibling.classList.add("error_text");
        }
      }
    }
  });
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
