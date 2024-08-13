var output = document.querySelector(".output");
var firstValInput = document.querySelector(".firstval");
var secondValInput = document.querySelector(".secondval");
var operation = "";

document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent === "=") {
      calculate();
    } else {
      operation = button.textContent;
    }
  });
});

function calculate() {
  const firstVal = parseFloat(firstValInput.value);
  const secondVal = parseFloat(secondValInput.value);
  let result;

  switch (operation) {
    case "+":
      result = firstVal + secondVal;
      break;
    case "-":
      result = firstVal - secondVal;
      break;
    case "*":
      result = firstVal * secondVal;
      break;
    case "/":
      result = firstVal / secondVal;
      break;
    case "%":
      result = firstVal % secondVal;
      break;
    case "**":
      result = Math.pow(firstVal, secondVal);
      break;
    case "sqrt":
      result = Math.sqrt(firstVal);
      break;
    case "log":
      result = Math.log10(firstVal);
      break;
  }

  output.innerText = `Result: ${result}`;
  firstValInput.value = "";
  secondValInput.value = "";
}

