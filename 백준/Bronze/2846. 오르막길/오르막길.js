const [firstLine, input] = require('fs').readFileSync(0).toString().trim().split('\n');

const n = Number(firstLine);
const arr = input.split(' ').map((v) => +v);

const results = [];
let ups = [arr[0]];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > arr[i - 1]) {
    ups.push(arr[i]);
  } else {
    results.push(ups[ups.length - 1] - ups[0]);
    ups = [arr[i]];
  }
}

if (ups.length > 1) results.push(ups[ups.length - 1] - ups[0]);

console.log(Math.max(...results));
