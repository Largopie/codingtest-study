const [h, i, a, r, c] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

console.log(h * i - a * r * c);
