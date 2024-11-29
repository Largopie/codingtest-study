const [firstLine, ...input] = require('fs').readFileSync(0).toString().trim().split('\n');

const asc = [...input].sort((a, b) => {
  if (a > b) return 1;
  else if (a === b) return 0;
  else return -1;
});
const desc = [...input].sort((a, b) => {
  if (a > b) return -1;
  else if (a === b) return 0;
  else return 1;
});

if (input.every((val, idx) => asc[idx] === val)) {
  console.log('INCREASING');
  return;
}

if (input.every((val, idx) => desc[idx] === val)) {
  console.log('DECREASING');
  return;
}

console.log('NEITHER');
