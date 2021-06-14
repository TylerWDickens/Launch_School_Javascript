function catAge(age) {
  switch (age) {
    case 0:
      return 0;
      break;
    case 1:
      return 15;
      break;
    case 2:
      return 24;
    default:
      return (age-2)*4 + 24
      break;
  }
}

console.log("0:", catAge(0));
console.log("1:", catAge(1));
console.log("2:", catAge(2));
console.log("3:", catAge(3));
console.log("4:", catAge(4));