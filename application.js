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
    return numbers.reduce((product, number) => product * number, 1);
    } else {
        return 0;
    }
}