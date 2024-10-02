const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = 0;
const testerCounts = arr[1].split(' ').map(Number);
const [B, C] = arr[2].split(' ').map(Number);

testerCounts.forEach((tester) => {
  let t = tester - B;

  answer += 1;
  if (t > 0) answer += Math.ceil(t / C);
});

console.log(answer);
