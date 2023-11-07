const numberButtons = document.querySelectorAll(".number");

const operatorButtons = document.querySelectorAll(".operator");

const screenDisplay = document.getElementById("screen-display");

const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");

let num1 = "";
let num2 = "";
let operator = null;

function updateDisplay(value) {
  screenDisplay.textContent = value;
}

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (operator === null) {
      num1 += e.currentTarget.textContent;
      console.log(num1);
      updateDisplay(num1);
    } else {
      num2 += e.currentTarget.textContent;
      console.log(num2);
      updateDisplay(num2);
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!num1) return; // If num1 is empty don't do anything
    operator = e.currentTarget.textContent;
    // Reset num2 if an operator is clicked again before equals
    num2 = "";
    updateDisplay(operator);
  });
});

equalsButton.addEventListener("click", equals);

function equals() {
  let result;
  const parsedNum1 = parseInt(num1);
  const parsedNum2 = parseInt(num2);

  if (operator === "+") {
    result = add(parsedNum1, parsedNum2);
  }

  updateDisplay(result);
}

function add(num1, num2) {
  return num1 + num2;
}
