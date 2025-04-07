const display1 = document.getElementById("display-1");
const display2 = document.getElementById("display-2");

let prevInput;
let inputIsOperator = false;
let prevInputIsOperator = false;
function appendToDisplay(input) {

    inputIsOperator = (input === '/') || (input === 'X') ||  (input === '+') || (input === '-') || (input === '.') || (input === '%');
    prevInputIsOperator = (prevInput === '/') || (prevInput === 'X') ||  (prevInput === '+') || (prevInput === '-') || (prevInput === '.') || (prevInput === '%');

    if (inputIsOperator && prevInputIsOperator) {
        inputIsOperator = false;
        prevInputIsOperator = false;
        return;
    }

    display2.value += input;
    prevInput = input;

    }

function calculate() {
    try {
    display2.value = eval(display2.value);
    display1.value = display2.value;
    }

    catch (error) {
        display2.value = "error";
    }
}

function clearDisplay() {
    display2.value = "";
    display1.value = "";
}

function negate() {
    display2.value = -eval(display2.value);
}