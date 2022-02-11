let rlSync = require('readline-sync');

function toCaps(string) {

  if(string.length >= 10){
    return string.toUpperCase();
  }else {
    return string
  }
}
let str = rlSync.question('Enter a string\n')

console.log(toCaps(str));