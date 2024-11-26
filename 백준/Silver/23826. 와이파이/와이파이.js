const [firstLine, ...input] = require('fs').readFileSync(0).toString().trim().split('\n');

const n = Number(firstLine);
const [s, ...arr] = input.map((line) => line.split(' ').map((v) => +v));

const results = [];

arr.forEach(([x, y, e], idx, origin) => {
  let sum = 0;
  const based = Math.max(0, s[2] - (Math.abs(x - s[0]) + Math.abs(y - s[1])));
  const slice = [...origin.slice(0, idx), ...origin.slice(idx + 1)];

  sum += e;

  slice.forEach((val) => {
    if (val[2] !== 0) {
      sum += Math.max(0, val[2] - (Math.abs(x - val[0]) + Math.abs(y - val[1])));
    }
  });

  if (based - sum > 0) results.push(based - sum);
});

console.log(results.length === 0 ? 'IMPOSSIBLE' : Math.max(...results));
