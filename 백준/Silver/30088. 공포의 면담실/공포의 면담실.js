const [n, ...input] = require('fs').readFileSync(0).toString().trim().split('\n');

const arr = [];
const result = [];

input.forEach((val) => {
  const [k, ...minutes] = val.split(' ').map((v) => +v);

  arr.push(minutes.reduce((acc, cur) => acc + cur, 0));
});

arr.sort((a, b) => a - b);

result.push(arr[0]);

for (let i = 1; i < arr.length; i++) {
  result.push(result[i - 1] + arr[i]);
}

console.log(result.reduce((acc, cur) => acc + cur, 0));
