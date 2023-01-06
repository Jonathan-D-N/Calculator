//global variables
let result = '';
let key = '';
let input1 = '';
let input2 = '';
let operatorPresent = false

const screenText = document.getElementById('screenText')
const evaluatedText = document.getElementById('evaluatedText')
const numberButtons = document.querySelectorAll('.calculatorNumber')
const periodButton = document.getElementById('period');
const backspaceButton = document.getElementById('backspace');
const clearButton = document.getElementById('clear');
const evaluateButton = document.getElementById('evaluate');
const operatorButtons = document.querySelectorAll('.operator');

backspaceButton.addEventListener('click', backspace)
clearButton.addEventListener('click', clear);
evaluateButton.addEventListener('click', evaluate)
window.addEventListener('keydown', takeKeyboardInput)

//check for operator presence.
function checkForOperator() {
    if (screenText.textContent.includes("+") ||
        screenText.textContent.includes("-") ||
        screenText.textContent.includes("*") ||
        screenText.textContent.includes("÷")) {
        operatorPresent = true
    } else {
        operatorPresent = false
    }
}
function clearEvaluatedText() {
    evaluatedText.textContent = ''
}
//number buttons
numberButtons.forEach((element) =>
    element.addEventListener('click', function() {    
        inputNumber(element.textContent);
    })
);

function inputNumber(num) {
    checkForOperator();
    clearEvaluatedText();
    if (screenText.textContent.length < 20) {
        if (operatorPresent == false)   { 
        screenText.textContent += num;
        input1 += (num);
        } else {
            screenText.textContent += num;
            input2 += (num);
        }
    } else {
        console.log('test')
    }
}
//period button
periodButton.addEventListener('click', function() {
    clearEvaluatedText();
    inputPeriod(periodButton.textContent)    
});

function inputPeriod() {
    if (screenText.textContent.length < 20) {
        if (!operatorPresent && !input1.includes('.'))   {
            screenText.textContent += '.';
            input1 += '.';
            } else if (operatorPresent && !input2.includes('.')) {
                screenText.textContent += ('.');
                input2 += ('.');
            }
    }
}

//backspace button
function backspace() {
    if (!operatorPresent) {
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
}
//clear button
function clear() {
    clearEvaluatedText(); 
    screenText.textContent = '';
    result = '';
    input1 = '';
    input2 = '';
    checkForOperator();
}

//operator buttons
operatorButtons.forEach((element) =>
    element.addEventListener('click', function() {
        inputOperator(element.textContent)
    }))
function inputOperator(op) {
    if (evaluatedText.textContent != ''){
        input1 = result.toString();
        input2 = ''
        screenText.textContent = input1
        clearEvaluatedText(); 
    }
    if (screenText.textContent > 0) {
        key = (op);
        screenText.textContent += (op);
        checkForOperator();
    }
}
//evaluate button
function evaluate() {
    if (key == '') {
        return;
    }
    clearEvaluatedText(); 
    operate(Number(input1), Number(input2))
    evaluatedText.textContent = operate(Number(input1), Number(input2));
}

//keyboard input
function takeKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) inputNumber(e.key);
    if (e.key === '.') inputPeriod();
    if (e.key === 'Delete' || e.key == 'Escape') clear();
    if (e.key === 'Backspace') backspace();
    if (e.key === '+' || e.key === '-' || e.key === '*') inputOperator(e.key)
    if (e.key === '/') inputOperator('÷')
    if (e.key === '=' || e.key === 'Enter') evaluate();
}

function convertOperator(keyboardInput) {
    if (keyboardInput === '/') return '÷'
    if (keyboardInput === '+') return '+'
    if (keyboardInput === '-') return '-'
    if (keyboardInput === '*') return '*'
}

const operators = {
    '+': function(num1, num2) {
        result =  num1 + num2;
        //screenText.textContent = result;
        return result;
    },
    '-': function(num1, num2) {
        result =  num1 - num2;
        //screenText.textContent = result;
        return result;
    },
    '*': function(num1, num2) {
        result =  num1 * num2;
        //screenText.textContent = result;
        return result;
    },
    '÷': function(num1, num2) {
        result = num1 / num2;
        //screenText.textContent = result;
        return result;
    }
}

function operate (num1, num2) {
    return operators[key](num1, num2);
}