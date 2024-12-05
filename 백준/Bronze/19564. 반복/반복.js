const word = require('fs').readFileSync('/dev/stdin').toString().trim();

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

let pointer = 0;
let str = '';
let count = 0;

while (str !== word) {
  for (let i = 0; i < alphabet.length; i++) {
    if (word[pointer] === alphabet[i]) {
      str += word[pointer];
      pointer++;
    }
  }
  count++;
}

console.log(count);
