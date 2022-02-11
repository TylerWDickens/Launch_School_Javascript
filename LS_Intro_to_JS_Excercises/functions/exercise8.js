let rlSync = require('readline-sync');
let num = Number(rlSync.question('Enter an integer\n'));

function numberRange(number) {
  if (number < 0) {
    return `${number} is less than 0`;
  } else if (number <= 50) {
    return`${number} is between 0 and 50`;
  } else if (number <= 100) {
    return `${number} is between 50 and 100`;
  } else {
    return`${number} is greater than 100`;
  }
}

console.log(numberRange(num));