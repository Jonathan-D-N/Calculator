//global variables
let result = '';
let key = '';

const operators = {
    '+': function(num1, num2) {
        result =  num1 + num2;
        return result;
    },
    '-': function(num1, num2) {
        result =  num1 - num2;
        return result;
    },
    '*': function(num1, num2) {
        result =  num1 * num2;
        return result;
    },
    '/': function(num1, num2) {
        result = num1 / num2;
        return result;
    }
}

function operate (num1, num2) {
    return operators[key](num1, num2);
}

//
// event listeners
let leftText = ''
let rightText = ''
const screenText = document.getElementById('screenText')
//numbers
const numberButtons = document.querySelectorAll('.calculatorNumber')
for (const element of numberButtons) {
    element.addEventListener('click', function(e) {
        if (screenText.textContent.length < 20) {
        screenText.textContent += e.target.textContent;
}
});
}
const buttonFunctions = document.getElementById('container')
//backspace and delete
buttonFunctions.addEventListener('click', function(e) {
    if (e.target.textContent === 'backspace') {
        let str = screenText.textContent;
        screenText.textContent = str.slice(0, -1)
    } else if (e.target.textContent === 'delete') {
        screenText.textContent = '';
        return;
    } //operators
      else if (e.target.textContent === '÷' && screenText.textContent > 0) {
        key = '/'
        screenText.textContent += e.target.textContent
    } else if (e.target.textContent === '*' && screenText.textContent > 0) {
        key = '*'
        screenText.textContent += e.target.textContent
    } else if (e.target.textContent === '-' && screenText.textContent > 0) {
        key = '-'
        screenText.textContent += e.target.textContent
    } else if (e.target.textContent === '+' && screenText.textContent > 0) {
        key = '+'
        screenText.textContent += e.target.textContent
    }
});
//equals operator
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', function(element) {
        let str = screenText.textContent;
        let arr = str.split('')
        let result = [];
        let currentNum = '';

        for(let i = 0; i < arr.length; i++) {
            let char = arr[i];
            if (/[a-zA-Z0-9]/.test(char)){
                currentNum += char;
            } else {
                if(currentNum.length > 0) {
                    result.push(currentNum);
                    currentNum = '';
                }
                result.push(char);
            }
        }
        if(currentNum.length > 0) {
            result.push(currentNum);
        }
});