const [A, B] = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((val) => val.split(' ').map(Number));

let totalAScore = 0;
let totalBScore = 0;
let lastWin = '';

if (A.every((val, idx) => val === B[idx])) {
  console.log(`${A.length} ${A.length}\nD`);
  return;
}

A.forEach((AScore, idx) => {
  if (AScore > B[idx]) {
    totalAScore += 3;
    lastWin = 'A';
  } else if (AScore === B[idx]) {
    totalAScore += 1;
    totalBScore += 1;
  } else {
    totalBScore += 3;
    lastWin = 'B';
  }
});

const result = totalAScore > totalBScore ? 'A' : totalAScore === totalBScore ? lastWin : 'B';

console.log(`${totalAScore} ${totalBScore}\n${result}`);
