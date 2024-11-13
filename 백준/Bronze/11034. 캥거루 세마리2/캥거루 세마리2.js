const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => +v));

const arr = [];

input.forEach(([a, b, c]) => {
  arr.push(Math.max(b - a - 1, c - b - 1));
});

console.log(arr.join('\n'));
