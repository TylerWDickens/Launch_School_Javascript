let vehicle = {
  manufacturer: 'Tesla',
  model: 'Model X',
  year: 2015,
  range: 295,
  seats: 7
};

function keysArr(obj) {

  let keys =[];

  for(let property in obj) {

    keys.push(property);

  }
console.log(keys);
}

keysArr(vehicle);