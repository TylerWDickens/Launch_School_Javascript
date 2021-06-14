let object = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let nestedArray = [];

for (let prop in object) {
  nestedArray.push([prop, object[prop]]);
}