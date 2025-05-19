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
    try {
        const currentValue = secureEval(display2.value);
        const negatedValue = -currentValue;
        display1.value = `negate(${display2.value})`;
        display2.value = negatedValue;
    } catch {
        display2.value = "error";
    }
}

//Check if input is an operator. 
function checkInput(input) {
    return ((input === '/') || (input === '*') ||  (input === '+') || (input === '-') || (input === '.') || (input === '%'));
}

/* Solution to takePercent properly*/
function takePercent() {
    try {
        let expr = display2.value;

        // Match any expression ending with a number after an operator
        // Matches into three groups. forward slash indicates regEx 
        // Parenthesis indicates group (1)(2)(3)
        // Group 1 matches left side up until the last operator
        // Group 2 matches an operator
        // Group 3 matches any numerical digit
        // $ - match until end of string
        let match = expr.match(/(.+?)([+\-*/])([\d.]+)$/);

        if (match) {
            const baseExpr = match[1];
            const operator = match[2];
            const number = match[3]; 
            const percentValue = parseFloat(number) / 100;

            const newExpr = baseExpr + operator + percentValue;
            display1.value = newExpr;
            display2.value = secureEval(newExpr);
        } else {
            // If it's just a number (e.g., "50"), convert directly
            display1.value = expr + '%';
            display2.value = secureEval(expr) / 100;
        }
    } catch {
        display2.value = "error";
    }
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
      
 
  
  