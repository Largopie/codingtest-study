const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const alphabet = [];
const score = {};

let total = 0;

function isPrimeNumber(number) {
  for (let i = 2; i <= number ** 0.5; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
}

for (let i = 97; i <= 122; i += 1) {
  alphabet.push(String.fromCharCode(i));
}

for (let i = 65; i <= 90; i += 1) {
  alphabet.push(String.fromCharCode(i));
}

alphabet.forEach((char, idx) => {
  score[char] = idx + 1;
});

for (let i = 0; i < input.length; i += 1) {
  total += score[input[i]];
}

console.log(isPrimeNumber(total) ? 'It is a prime word.' : 'It is not a prime word.');
