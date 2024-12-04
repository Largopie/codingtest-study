const [, secondLine] = require('fs').readFileSync(0).toString().trim().split('\n');

const m = secondLine.split(' ').map((v) => +v);
const result = [];

m.forEach((l) => {
  if (l === 300) result.push(1);
  else if (l >= 275) result.push(2);
  else if (l >= 250) result.push(3);
  else result.push(4);
});

console.log(result.join(' '));
