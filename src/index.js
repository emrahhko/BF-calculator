// Say hello let'us build a calculator
// alert("Hello there, let'us build a calculator");

alert("I'm a nice calculator Try me!")

let firstNumber = Number(prompt("please enter the first number"));

let secondNumber = Number(prompt("please enter the second number"));

while (isNaN(firstNumber) || isNaN(secondNumber)) {
    firstNumber = Number(prompt("Invalid input. Please enter a valid first number:"));
    secondNumber = Number(prompt("Invalid input. Please enter a valid second number:"));
}

let operator = prompt("please choose the operation -, +, /, x, *, %, ** ");

let calcul;

if (operator === "-") {
    calcul = firstNumber - secondNumber;
} else if (operator === "+") {
    calcul = firstNumber + secondNumber;
} else if (operator === "/") {
    calcul = firstNumber / secondNumber;
} else if (operator === "x" || operator === "*") {
    calcul = firstNumber * secondNumber;
} else if (operator === "%") {
    calcul = firstNumber % secondNumber;
}  else if (operator === "**") {
    calcul = firstNumber ** secondNumber;
} else {
    calcul = "please enter a valid operator";
}

alert(calcul);