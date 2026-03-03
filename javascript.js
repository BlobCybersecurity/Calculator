let operator = ""
let numberOne = 0
let numberTwo = 0

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        add(num1, num2)
    } else if (operator === "-") {
        subtract(num1, num2)
    } else if (operator === "/") {
        divide(num1, num2)
    } else if (operator === "*") {
        multiply(num1, num2)
    }
}


// console.log(add(1, 2))
// console.log(subtract(4, 1))
// console.log(divide(6, 2))
// console.log(multiply(3, 1))