const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

console.log(n % 3 === 0 || m % 3 === 0 ? 'YES' : 'NO');
