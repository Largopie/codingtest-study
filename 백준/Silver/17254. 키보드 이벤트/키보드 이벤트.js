const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((val) => val.split(' ').map((val, idx) => (idx === 2 ? val : Number(val))));

arr.sort((a, b) => {
  if (a[1] > b[1]) return 1;
  else if (a[1] < b[1]) return -1;
  else {
    return a[0] - b[0];
  }
});

console.log(arr.map(([a, b, word]) => word).join(''));
