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

//The function that % calls. It's not really how it works though. 
function takePercent() {
    display1.value = '%(' + display2.value + ')';
    display2.value = (secureEval(display2.value)) / 100;
}

/*

    CODE INTERFACE PROVIDED BY PROFESSOR BELOW. Changed keyMap call of btnId.

*/

function $(id) {
    return document.getElementById(id);
  }

document.addEventListener("keydown", function(event) {

    const key = event.key;
  

    // Perform calculator logic
  
    if ("0123456789+-*/.%".includes(key)) {
  
      appendToDisplay(key);
  
    } else if (key === "Enter") {
        
      event.preventDefault(); // this prevents the form from being submitted
      flashButton('equals');
      calculate();
  
    }
    else if (key === "Backspace") {
        flashButton("AC")
        clearDisplay();
  
    }

  
    // Apply visual feedback
    function keyMap(key) {

        if ("0123456789".includes(key)) {
            // In my implementation, id = key for numerical digits.
            return key;
        }

        else if("+-*/.%=".includes(key)) {

            switch (key) {
                case '+':
                    return 'addition';
                case '-':
                    return 'subtraction';
                case '*':
                    return 'multiplication';
                case '/':
                    return 'division';
                case '.':
                    return 'decimal';
                case '%':
                    return 'mod';
                case '=':
                    return 'equals';
                
            }

        }

    }

    const btnId = keyMap(key); // keyMap needs to be defined above
    if (btnId) {
      
        flashButton(btnId); // flashButton needs to be defined. I gave you this already.
      
    }

    });

    function flashButton(id) {
        const button = $(id);
        if (!button) return;
        button.classList.add("pressed");
        setTimeout(() => {
          button.classList.remove("pressed");
        }, 100);

      }
      
 
  
  