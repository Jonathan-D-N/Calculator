function add () {
    let result = 0
    for (let x of arguments) {
        result += x
    } return (result);
};

function subtract () {
        let result = (arguments[0]);
        for (let i = 1; i < arguments.length; i++) {
            result -= arguments[i]
        } return(result)
};

function multiply (...numbers) {
    if (numbers.length > 0) {
    return numbers.reduce((product, number) => product * number, 1);
    } else {
        return 0;
    }
}