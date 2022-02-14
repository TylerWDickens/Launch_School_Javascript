let readlineSync = require('readline-sync');

let bill = parseFloat(readlineSync.question("What is the bill? "))
let percentage = parseFloat(readlineSync.question("What is the tip percentage? "))

let tip = bill * percentage / 100;
let total = bill + tip;

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);