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
const screenText = document.getElementById('screenText')
const buttonSource = document.getElementById('wrapper');
buttonSource.addEventListener('click', function(e) {
    if (e.target.textContent == 'backspace') {
        let tempText = screenText.textContent;
        screenText.textContent = tempText.slice(0, -1)
        console.log(tempText)
    } else {
    screenText.textContent += e.target.textContent;
    }
})