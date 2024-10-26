const [n, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(n);

let max = 1;

const arr = input.split(' ').map(Number);

if (N === 1 || new Set(arr).size === 1) {
  console.log(max);
  return;
}

for (let i = 0; i < N - 1; i++) {
  const incompleteNumbers = [];

  incompleteNumbers.push(arr[i]);
  for (let j = i + 1; j < N; j++) {
    const arrNumber = arr[j];

    if (incompleteNumbers.at(-1) % 2 !== arrNumber % 2) {
      incompleteNumbers.push(arrNumber);
    }
  }

  max = Math.max(max, incompleteNumbers.length);
}

console.log(max);
