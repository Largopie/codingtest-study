const arr = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .slice(1)
  .map((val) => val.split(' ').map(Number));

arr.forEach(([Ta, Tb, Va, Vb]) => {
  let sum = Infinity;

  for (let i = Va; i >= 0; i -= 1) {
    const caseA = Ta * i;
    const caseB = Tb * Vb + Ta * (Va - i);

    const max = Math.max(caseA, caseB);

    sum = Math.min(max, sum);
  }

  console.log(sum);
});
