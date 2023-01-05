//global variables
let result = '';
let key = '';
let input1 = '';
let input2 = '';
let operatorStatus = false

const operators = {
    '+': function(num1, num2) {
        result =  num1 + num2;
        screenText.textContent = result;
        return result;
    },
    '-': function(num1, num2) {
        result =  num1 - num2;
        screenText.textContent = result;
        return result;
    },
    '*': function(num1, num2) {
        result =  num1 * num2;
        screenText.textContent = result;
        return result;
    },
    '÷': function(num1, num2) {
        result = num1 / num2;
        screenText.textContent = result;
        return result;
    }
}

function operate (num1, num2) {
    return operators[key](num1, num2);
}

//check for operator presence. false means no operators present.
function checkForOperator() {
    if (screenText.textContent.includes("+") ||
        screenText.textContent.includes("-") ||
        screenText.textContent.includes("*") ||
        screenText.textContent.includes("÷")) {
        operatorStatus = true
        console.log(operatorStatus)
    } else {
        operatorStatus = false
        console.log(operatorStatus)
    }
}

//number buttons
const screenText = document.getElementById('screenText')
const numberButtons = document.querySelectorAll('.calculatorNumber')
    for (const element of numberButtons) {
        element.addEventListener('click', function(e) {    
            checkForOperator()        
            if (screenText.textContent.length < 20) {
                if (operatorStatus == false)   { 
                screenText.textContent += e.target.textContent;
                input1 += (e.target.textContent);
                } else {
                    screenText.textContent += e.target.textContent;
                    input2 += (e.target.textContent);
                }
            }
        });
    }
//backspace button
const backspaceButton = document.getElementById('backspace');
    backspaceButton.addEventListener('click', function() {
        if (operatorStatus == false) {
        let str = screenText.textContent;
        screenText.textContent = str.slice(0, -1);
        input1 = input1.slice(0, -1);
        }
        else {
            let str = screenText.textContent;
            screenText.textContent = str.slice(0, -1);
            input2 = input2.slice(0, -1);
            checkForOperator();
        }
    });

//clear button
const clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', function() {
        screenText.textContent = '';
        input1 = '';
        input2 = '';
        checkForOperator();
    });

//operator buttons
const additionButton = document.querySelectorAll('.operator');
    for (const element of additionButton) {
        element.addEventListener('click', function(e) {
            if (screenText.textContent > 0) {
                key = e.target.textContent;
                screenText.textContent += e.target.textContent;
                checkForOperator();
            }
        });
    }

//equals button
const equalsButton = document.getElementById('equals');
    equalsButton.addEventListener('click', function(e) {
        operate(~~input1, ~~input2)
        screenText.textContent = operate(~~input1, ~~input2);
    });