const [M, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.map((val) => val.split(' ').map(Number));

let perNext = arr[0][1] / arr[0][0];
let shape = arr[0][2];

for (let i = 1; i < arr.length; i++) {
  perNext = perNext * (arr[i][1] / arr[i][0]);

  if (arr[i][2] === 1) {
    shape = shape === 1 ? 0 : 1;
  }
}

console.log(shape, perNext);
