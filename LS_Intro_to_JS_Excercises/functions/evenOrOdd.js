let rlSync = require('readline-sync');
let num = Number(rlSync.question('Enter an integer\n'));

function evenOrOdd(number) {
  if(Number.isInteger(number)) {
    return number % 2 === 0 ? "Number is even" : "Number is odd";
  } else {
    return "Number is not an integer";
  }
  
  
}

console.log(evenOrOdd(num));