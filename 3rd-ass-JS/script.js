const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let currentValue = "";
let previousValue = "";
let operator = "";


numbers.forEach(button => {
  button.addEventListener("click", () => {
    currentValue += button.textContent;
    display.value = currentValue;
  });
});


operators.forEach(button => {
  button.addEventListener("click", () => {
    if (currentValue === "") return;

    if (previousValue !== "") {
      calculate();
    }

    operator = button.textContent;
    previousValue = currentValue;
    currentValue = "";
  });
});


equals.addEventListener("click", () => {
  if (currentValue === "" || previousValue === "") return;
  calculate();
  operator = "";
});


clear.addEventListener("click", () => {
  currentValue = "";
  previousValue = "";
  operator = "";
  display.value = "";
});


function calculate() {
  let result;

  const prev = Number(previousValue);
  const current = Number(currentValue);

  if (operator === "+") result = prev + current;
  if (operator === "-") result = prev - current;
  if (operator === "*") result = prev * current;
  if (operator === "/") result = prev / current;

  currentValue = result.toString();
  previousValue = "";
  display.value = currentValue;
}
