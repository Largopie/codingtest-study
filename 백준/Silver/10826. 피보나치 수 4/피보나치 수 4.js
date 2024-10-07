const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = [0n, 1n];

for (let i = 2; i <= Number(input); i++) {
  arr.push(arr[i - 2] + arr[i - 1]);
}

console.log(arr[input].toString());
