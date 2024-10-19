const [N, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);

const maximums = [1n];

for (let i = 1; i <= b; i++) {
  maximums.push(BigInt(2 ** i) + maximums[i - 1]);
}

console.log(N <= maximums[b] ? 'yes' : 'no');
