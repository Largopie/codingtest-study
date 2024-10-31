const number = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());

console.log(String(number % 20000303n));
