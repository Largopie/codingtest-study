const [firstLine, secondLine, ...input] = require('fs').readFileSync(0).toString().trim().split('\n');

const n = Number(firstLine);
const [x, y, r] = secondLine.split(' ').map((v) => +v);

const arr = input.map((v) => +v);

const minX = x - r;
const maxX = x + r;

let boundary = 0;
let inside = 0;

arr.forEach((val) => {
  if (val === minX || val === maxX) boundary += 1;
  if (val > minX && val < maxX) inside += 1;
});

console.log(inside, boundary);