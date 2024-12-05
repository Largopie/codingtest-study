const [firstLine, secondLine] = require('fs').readFileSync(0).toString().trim().split('\n');

const n = Number(firstLine);
const dots = secondLine.split(' ').map((v) => +v);

dots.sort((a, b) => b - a);

let sum = 0n;

for (let i = 0; i < n; i++) {
  sum += BigInt(dots[i] * (n - 1 - 2 * i)) * 2n;
}

console.log(sum.toString());
