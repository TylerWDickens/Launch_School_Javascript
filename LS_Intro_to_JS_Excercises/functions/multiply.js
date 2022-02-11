let rlSync = require('readline-sync');

function multiply(num1, num2) {
  return `${num1} x ${num2} = ${num1 * num2}`;
}
let firstNum = rlSync.question('Enter your first number\n');
let secondNum = rlSync.question('Enter your last number\n');

console.log(multiply(firstNum, secondNum));
