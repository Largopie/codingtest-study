const input = Number(require('fs').readFileSync(0).toString().trim().split(' '));

const divide = input / 3;
let count = 0;

for (let i = 1; i <= divide - 2; i++) {
  for (let j = 1; j <= divide - 2; j++) {
    if (divide - i - j > 0) count++;
  }
}

console.log(count);
