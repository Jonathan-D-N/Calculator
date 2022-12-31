//global variables
let num1 = '';
let num2 = '';
let result = '';
let key = '';

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
    '/': function(num1, num2) {
        result = num1 / num2;
        screenText.textContent = result;
        return result;
    }
}

function operate (num1, num2, operator) {
    let key = operator;
    return operators[key](num1, num2);
}

//
const screenText = document.getElementById('screenText');
const calculatorButtons = document.querySelectorAll('button');
pressButtons()
function pressButtons() {
    for (const element of calculatorButtons) {
        element.addEventListener('click', function(e) {
            if (screenText.textContent.length < 20 && 
            (e.target.classList.contains('calculatorNumber') || e.target.classList.contains('printable'))) {
                displayButtons(e.target.textContent);
                // screenText.textContent += e.target.textContent;
            }
        });
    }
}

function displayButtons(e) {
    if (e == '÷' && screenText.textContent.includes('÷')
        || e == '*' && screenText.textContent.includes('*')
        || e == '-' && screenText.textContent.includes('-')
        || e == '+' && screenText.textContent.includes('+')){
        return;
    }
     screenText.textContent += e;
     console.log(e)
}

function operatorButtons(e) {
        if (e.target.textContent === 'backspace') {
        let str = screenText.textContent;
        screenText.textContent = str.slice(0, -1)
}
}

// const functionButtons = document.getElementById('container')
// functionButtons.addEventListener('click', function(e) {
//     if (e.target.textContent === 'backspace') {
//         let str = screenText.textContent;
//         screenText.textContent = str.slice(0, -1)
//     } else if (e.target.textContent === 'delete') {
//         screenText.textContent = '';
//         return;
//     } //operators
//       else if (e.target.textContent === '÷' && screenText.textContent > 0) {
//         key = '/'
//         screenText.textContent += e.target.textContent
//     } else if (e.target.textContent === '*' && screenText.textContent > 0) {
//         key = '*'
//         screenText.textContent += e.target.textContent
//     } else if (e.target.textContent === '-' && screenText.textContent > 0) {
//         key = '-'
//         screenText.textContent += e.target.textContent
//     } else if (e.target.textContent === '+' && screenText.textContent > 0) {
//         key = '+'
//         screenText.textContent += e.target.textContent
//     }
// });
// //equals operator
// const equalsButton = document.getElementById('equals');
// equalsButton.addEventListener('click', function(element) {
//     splitEquals(screenText.textContent)
// });
// let op1 = 0
// let op2 = 0
// function splitEquals() {
//     let str = screenText.textContent;
//     let arr = str.split('')
//     let results = [];
//     let currentNum = '';
// if (screenText.textContent.length > 0) {
//     for(let i = 0; i < arr.length; i++) {
//         let char = arr[i];
//         if (/[a-zA-Z0-9]/.test(char)){
//             currentNum += char;
//         } else {
//             if(currentNum.length > 0) {
//                 results.push(currentNum);
//                 currentNum = '';
//             }
//             results.push(char);
//         }
//     }
//     if(currentNum.length > 0) {
//         results.push(currentNum);
//     }
//     op1 = Number(results[0]);
//     op2 = Number(results[2]);
//     operate(op1, op2);
// }
// }