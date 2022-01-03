"use strict";

const messageEl = document.querySelector(".message");
const submitBtnEl = document.querySelector(".req-btn");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const formValidation = function (state) {
  if (state === "success") {
    messageEl.classList.remove("error");
    messageEl.classList.add("success");
    messageEl.textContent =
      "✅ A request for access was successfully submitted ";
  } else if (state === "empty") {
    messageEl.classList.remove("success");
    messageEl.classList.add("remove");
    messageEl.textContent = "❗ Oops! Please add your email";
  } else if (state === "error") {
    messageEl.classList.remove("success");
    messageEl.classList.add("remove");
    messageEl.textContent = "❗ Oops! Please check your email";
  }
};

submitBtnEl.addEventListener("click", function () {
  const input = document.querySelector(".email-inp");

  if (validateEmail(input.value)) {
    formValidation("success");
  } else if (input.value === "") {
    formValidation("empty");
  } else {
    formValidation("error");
  }

  messageEl.classList.add("error");
});
