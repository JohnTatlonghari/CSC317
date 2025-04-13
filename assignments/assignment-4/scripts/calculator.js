const display1 = document.getElementById("display-1");
const display2 = document.getElementById("display-2");

let prevInput;
let inputIsOperator = false;
let prevInputIsOperator = false;

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
    display2.value = eval(display2.value);
    
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
    display2.value = (-eval(display2.value));
}

//Check if input is an operator. 
function checkInput(input) {
    return ((input === '/') || (input === '*') ||  (input === '+') || (input === '-') || (input === '.') || (input === '%'));
}

//The function that % calls. It's not really how it works but for this project it's good enough. 
function takePercent() {
    display1.value = '%(' + display2.value + ')';
    display2.value = (eval(display2.value)) / 100;
}

function displayKey(key) {
    
}