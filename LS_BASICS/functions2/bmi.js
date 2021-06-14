//bmi = weightInKilograms / heightInMeters**2;

function calculateBMI(cm, kilos) {
let meters = cm/100;
//Check meters value
console.log("meters:", meters)
let bmi = (kilos / meters**2)

return bmi;

}

console.log(calculateBMI(180, 80)); // "24.69"