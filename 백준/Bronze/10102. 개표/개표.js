const [n, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const lenA = input.split('').filter((val) => val === 'A').length;

console.log(lenA > +n - lenA ? 'A' : lenA === +n - lenA ? 'Tie' : 'B');
