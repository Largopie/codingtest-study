const [a, b] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map((v) => +v);

console.log(a * b);
