function add (...numbers) {
    if (numbers.length > 0) {
        return numbers.reduce((product, number) => product + number);
    } else {
        return 0
    }
}

function subtract (...numbers) {
    if (numbers.length > 0) {
        return numbers.reduce((product, number) => product - number);
    } else {
        return 0
    }
}

function multiply (...numbers) {
    if (numbers.length > 0) {
    return numbers.reduce((product, number) => product * number);
    } else {
        return 0;
    }
}

function divide (...numbers) {
    if (numbers.length > 0) {
    return numbers.reduce((product, number) => product / number);
    } else {
        return 0;
    }
}

function operate (num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    } else {
        return('ERROR')
    }
}