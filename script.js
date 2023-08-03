var display = document.getElementById('display'),
    firstNumber = "",
    secondNumber = "",
    operator = "";

function press(number) {
    firstNumber += number;
    display.innerHTML = firstNumber;
}

function setOP(op) {
    operator = op;
    secondNumber = firstNumber;
    firstNumber = "";
}

function clr() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    display.innerHTML = "0";
}

function calculate() {
    let x = parseFloat(secondNumber);
    let y = parseFloat(firstNumber);
    let result = 0;
    
    if(operator == "+") {
        result = x + y;
    } else if(operator == "-") {
        result = x - y;
    } else if(operator == "*") {
        result = x * y;
    } else {
        result = x / y;
    }
    
    firstNumber = result;
    operator = "";
    display.innerHTML = result;
}

