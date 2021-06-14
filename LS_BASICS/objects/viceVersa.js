let object = {};
let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

for (let i = 0; i < nestedArray.length; i++) {
  let obj = nestedArray[i];

  object[obj[0]] = obj[1];
}

console.log(object);
// { title: 'Duke', name: 'Nukem', age: 33 }