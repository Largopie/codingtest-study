const [M, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.map((val) => val.split(' ').map(Number));

let ans = arr[0][1] / arr[0][0];
let o = arr[0][2];

for (let i = 1; i < arr.length; i++) {
  ans = (ans * arr[i][1]) / arr[i][0];

  if (arr[i][2] === 1) {
    o = o === 1 ? 0 : 1;
  }
}

console.log(o, ans);
