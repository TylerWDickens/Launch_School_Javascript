let number = 4321;
let ones = number % 10;
let tens = number % 100 - ones;
let hundreds = (number  - tens - ones) % 1000;
let thousands = (number % 10000 - hundreds - tens - ones)/1000;

console.log(ones, tens/10, hundreds/100, thousands);
