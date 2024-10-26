const [n, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(n);

let max = 1;

const arr = input.split(' ').map(Number);

if (N === 1 || new Set(arr).size === 1) {
  console.log(max);
  return;
}

const oddIndex = arr.findIndex((num) => num % 2 === 1);
const evenIndex = arr.findIndex((num) => num % 2 === 0);

const oddAnswers = oddIndex === -1 ? [] : [arr[oddIndex]];
const evenAnswers = evenIndex === -1 ? [] : [arr[evenIndex]];

for (let i = oddIndex + 1; i < N; i++) {
  if (oddAnswers.at(-1) % 2 !== arr[i] % 2) {
    oddAnswers.push(arr[i]);
  }
}

for (let i = evenIndex + 1; i < N; i++) {
  if (evenAnswers.at(-1) % 2 !== arr[i] % 2) {
    evenAnswers.push(arr[i]);
  }
}

console.log(Math.max(evenAnswers.length, oddAnswers.length));
