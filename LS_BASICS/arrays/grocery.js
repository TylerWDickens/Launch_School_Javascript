let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];

// Your code.

function listGrocery(arr) {

  for(let i = 0; arr.length; i++) {

    let print = arr.shift();
    console.log(print);
  }
  
}

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

listGrocery(groceryList);
console.log(groceryList); // []