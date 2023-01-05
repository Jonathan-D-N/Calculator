//global variables
let result = '';
let key = '';
let input1 = '';
let input2 = '';
let operatorStatus = false
const screenText = document.getElementById('screenText')
const equalsScreenText = document.getElementById('equalsScreenText')

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

//check for operator presence. false means no operators present.
function checkForOperator() {
    if (screenText.textContent.includes("+") ||
        screenText.textContent.includes("-") ||
        screenText.textContent.includes("*") ||
        screenText.textContent.includes("÷")) {
        operatorStatus = true
    } else {
        operatorStatus = false
    }
}
function clearEqualsText() {
    equalsScreenText.textContent = ''
}
//number buttons
const numberButtons = document.querySelectorAll('.calculatorNumber')
    for (const element of numberButtons) {
        element.addEventListener('click', function(e) {    
            checkForOperator();
            clearEqualsText();    
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
//period button
let periodPresent1 = false;
let periodPresent2 = false;
function checkForPeriod() {
    if (input1.includes('.')) {
        periodPresent1 = true
    } else {
        periodPresent1 = false
    }
    if (input2.includes('.')) {
        periodPresent2 = true
    } else {
        periodPresent2 = false
    }
}
const periodButton = document.getElementById('period');
    periodButton.addEventListener('click', function(e) {
        clearEqualsText();
        checkForPeriod();
        if (screenText.textContent.length < 20) {
            if (operatorStatus == false && periodPresent1 == false)   {
                screenText.textContent += e.target.textContent;
                input1 += (e.target.textContent);
                checkForPeriod();
                } else if (operatorStatus == true && periodPresent2 == false) {
                    screenText.textContent += e.target.textContent;
                    input2 += (e.target.textContent);
                    checkForPeriod();
                }
        }
    });

//backspace button
const backspaceButton = document.getElementById('backspace');
    backspaceButton.addEventListener('click', function() {
        clearEqualsText(); 
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
        clearEqualsText(); 
        screenText.textContent = '';
        result = ''
        input1 = '';
        input2 = '';
        checkForOperator();
    });

//operator buttons
const operatorButtons = document.querySelectorAll('.operator');
    for (const element of operatorButtons) {
        element.addEventListener('click', function(e) {
            if (equalsScreenText.textContent != ''){
                input1 = result.toString();
                input2 = ''
                screenText.textContent = input1
                checkForPeriod();
                console.log(input1)
            }
            clearEqualsText(); 
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
        clearEqualsText(); 
        operate(Number(input1), Number(input2))
        equalsScreenText.textContent = operate(Number(input1), Number(input2));
    });

//keyboard support
let keyPress = [];

const handler = {
    set: function(obj, prop, value) {
      obj[prop] = value;
      console.log('The keyPress array has changed!');
      return true;
    }
  };
  
  keyPress = new Proxy([], handler);



document.addEventListener('keydown', function(e) {
    keyPress.push(e.key)
    console.log(`key ${e.key}`);
});

