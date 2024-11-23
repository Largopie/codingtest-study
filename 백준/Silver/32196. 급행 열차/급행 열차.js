const [firstLine, ...input] = require('fs').readFileSync(0).toString().trim().split('\n');

const arr = input.map((val) => val.split(' ').map(BigInt));
const [n, m, k, x, y] = firstLine.split(' ').map(BigInt);

arr.sort((a, b) => {
  const aDif = a[0] * x - a[1] * y;
  const bDif = b[0] * x - b[1] * y;

  if (aDif > bDif) return 1;
  else return -1;
});

const result = [k, k];

for (let i = 0; i < m; i++) {
  result[0] += arr[i][0];
  result[1] -= arr[i][1];
}

console.log(String(result[0] * x + result[1] * y));