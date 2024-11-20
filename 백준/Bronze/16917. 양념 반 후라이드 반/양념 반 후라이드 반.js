const [a, b, c, x, y] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const total = x >= y ? y * c * 2 + (x - y) * a : x * c * 2 + (y - x) * b;

console.log(Math.min(x * a + b * y, Math.min(total, Math.max(x, y) * c * 2)));
