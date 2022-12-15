function add () {
    let result = 0
    for (let x of arguments) {
        result += x
    } return (result);
};

function subtract (...numbers) {
    if (numbers.length > 0) {
        return numbers.reduce((product, number) => product - number)
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