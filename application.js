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