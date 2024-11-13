const [a, b] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

console.log((a + b) * (a - b));
