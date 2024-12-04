const word = require('fs').readFileSync(0).toString().trim();

const map = new Map([
  ['A', 'a'],
  ['B', 'v'],
  ['E', 'ye'],
  ['K', 'k'],
  ['M', 'm'],
  ['H', 'n'],
  ['O', 'o'],
  ['P', 'r'],
  ['C', 's'],
  ['T', 't'],
  ['Y', 'u'],
  ['X', 'h'],
]);

let str = '';

for (let i = 0; i < word.length; i++) {
  str += map.get(word[i]);
}

console.log(str);
