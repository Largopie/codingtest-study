const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(input.map((num) => '='.repeat(num)).join('\n'));
