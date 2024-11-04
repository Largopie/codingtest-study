const [firstLine, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = [];
const obj = {};
const [n, m] = firstLine.split(' ').map((v) => +v);

input.slice(0, n).forEach((val) => {
  obj[val] = true;
});

input.slice(n).forEach((val) => {
  if (obj[val] === true) answer.push(val);
});

answer.sort();

answer.unshift(answer.length);

console.log(answer.join('\n'));
