const display1 = document.getElementById("display-1");
const display2 = document.getElementById("display-2");

let prevInput;
let inputIsOperator = false;
let prevInputIsOperator = false;

function secureEval(expression) {
    const safePattern = /^[0-9+\-*/%.() ]+$/;
    if (!safePattern.test(expression)) {
      throw new Error("Invalid characters in expression.");
    }
    try {
      return Function('"use strict"; return (' + expression + ')')();
    } catch (e) {
      throw new Error("Error evaluating expression.");
    }
  }

function appendToDisplay(input) {

    inputIsOperator = checkInput(input);
    prevInputIsOperator = checkInput(prevInput);

    if (inputIsOperator && prevInputIsOperator) {
        inputIsOperator = false;
        prevInputIsOperator = false;
        return;
    }

    if ((display2.value == NaN) && (inputIsOperator)) {
        return;
    }

    display2.value += input;
    prevInput = input;

    }

function calculate() {
    try {
    display1.value = display2.value;
    display2.value = secureEval(display2.value);
    
    }

    catch {
        display2.value = "error";
    }
}

function clearDisplay() {
    display2.value = "";
    display1.value = "";
}

//Negate result
function negate() {
    display1.value = '-' + '('+ display2.value + ')';
    display2.value = (-secureEval(display2.value));
}

//Check if input is an operator. 
function checkInput(input) {
    return ((input === '/') || (input === '*') ||  (input === '+') || (input === '-') || (input === '.') || (input === '%'));
}

//The function that % calls. It's not really how it works but for this project it's good enough. 
function takePercent() {
    display1.value = '%(' + display2.value + ')';
    display2.value = (secureEval(display2.value)) / 100;
}

function displayKey(key) {
    
}