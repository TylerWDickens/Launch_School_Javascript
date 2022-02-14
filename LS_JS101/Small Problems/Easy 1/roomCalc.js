let readlineSync = require("readline-sync");

const SQFT_TO_SQM = 10.7639;

console.log("Enter the length of the room in meters:");
length = readlineSync.prompt()
console.log("Eneter the width of the room in meters:")
width = readlineSync.prompt()

mArea = length * width

iArea = length * width * SQFT_TO_SQM;

console.log(`The area of the room is ${mArea} square meters (${iArea} square feet).`)