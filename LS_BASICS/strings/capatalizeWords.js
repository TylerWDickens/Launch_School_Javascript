//split on whitespace ""
//splice first letter
//toUpperCase() first letter
//joing

let string = 'launch school tech & talk';
let words = string.split(' ');
let caps = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];

  caps.push(word[0].toUpperCase() + word.slice(1));
}

caps.join(' '); // 'Launch School Tech & Talk'