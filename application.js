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
    console.log(e.target.id)
    if (e.target.textContent === 'backspace') {
        let str = screenText.textContent;
        screenText.textContent = str.slice(0, -1)
    } else if (e.target.textContent === 'delete') {
        screenText.textContent = '';
        return;
    } else if (screenText.textContent.length > 20) {
        return
    } else {
        screenText.textContent += e.target.textContent;
    }


})