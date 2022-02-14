let readlineSync = require("readline-sync");

let number = parseInt(readlineSync.question("Please enter an integer greater than 0: "))
let operation = readlineSync.question("Enter 's' to compute the sum, or 'p' to compute the product: ");

while ( operation != "s" & operation != "p") {
    operation = readlineSync.question("Enter 's' or 'p': ");
}

function sumOrProduct(number, operation) {
    let value = 0;
    if (operation == "s") {
        for (let i = 1; i <= number; i++) {
            value += i
        }
        console.log(`The sum of the integers between 1 and ${number} is ${value}`);
    } else {
        value = 1;
        for ( let i = 1; i <= number; i++) {
            value *= i
        }
        console.log(`The product of the integers between 1 and ${number} is ${value}`);
    }
}

sumOrProduct(number, operation)


