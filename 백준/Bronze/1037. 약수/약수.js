const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

if (arr.length === 1) {
  console.log(arr[0] ** 2);
} else {
  console.log(arr[0] * arr.at(-1));
}
