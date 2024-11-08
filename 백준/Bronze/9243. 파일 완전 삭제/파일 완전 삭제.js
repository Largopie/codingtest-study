const [n, a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

if (n % 2 === 0) {
  console.log(a === b ? 'Deletion succeeded' : 'Deletion failed');
  return;
}

let str = '';

for (let i = 0; i < a.length; i++) {
  str += a[i] === '0' ? '1' : '0';
}

console.log(b === str ? 'Deletion succeeded' : 'Deletion failed');
