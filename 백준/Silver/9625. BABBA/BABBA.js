const input = Number(require('fs').readFileSync(0).toString().trim());

let count = [0, 0];

for (let i = 1; i <= input; i++) {
  if (i === 1) count[1] += 1;
  else {
    count = [count[1], count[0] + count[1]];
  }
}

console.log(count.join(' '));
