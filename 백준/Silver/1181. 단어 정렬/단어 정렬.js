const [n, ...input] = require('fs').readFileSync(0).toString().trim().split('\n');

const set = [...new Set(input)];

set.sort((a, b) => {
  if (a.length < b.length) return -1;
  else if (a.length === b.length) {
    if (a < b) return -1;
    else return 1;
  } else {
    return 1;
  }
});

console.log(set.join('\n'));
