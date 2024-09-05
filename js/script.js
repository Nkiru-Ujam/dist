"use strict";

const keys = document.querySelectorAll("p");
const inputField = document.querySelector(".input");
const resultField = document.querySelector(".answer");
console.log(keys);

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    // console.log(e.target.textContent);
    const displayInput = e.target.textContent;
    if (
      e.target.textContent !== "AC" &&
      e.target.textContent !== "DEL" &&
      e.target.textContent !== "%" &&
      e.target.textContent !== "+" &&
      e.target.textContent !== "−" &&
      e.target.textContent !== "×" &&
      e.target.textContent !== "÷" &&
      e.target.textContent !== "="
    ) {
      inputField.textContent += Number(displayInput);
      const showInput = Number(inputField.textContent);
      console.log(showInput);
    }

    function operator(x, y) {
      if (e.target.textContent === x) {
        inputField.textContent += y;
      }
    }

    operator("÷", "/");
    operator("×", "*");
    operator("−", "-");
    operator("+", "+");

    if (e.target.textContent === "00") {
      inputField.textContent += "0";
    }

    if (e.target.textContent === "%") {
      resultField.textContent = eval(inputField.textContent / 100);
    }

    if (e.target.textContent === "=") {
      resultField.textContent = eval(inputField.textContent);
    }

    if (e.target.textContent === "AC") {
      inputField.textContent = " ";
      resultField.textContent = " ";
    }

    if (e.target.textContent === "DEL") {
      inputField.textContent = inputField.textContent.slice(0, -1);
    }

    // resultField.textContent = eval(inputField.textContent);
  });
});
