const [n, s] = require('fs').readFileSync(0).toString().trim().split('\n');

let state = true;
let drifting = false;
let count = 0;

for (let i = 0; i < Number(n); i++) {
  if (count === 2) break;

  if (s[i] === 'W') {
    count += 1;
  } else {
    if (count === 1) {
      drifting = true;
    }
    state = !state;
  }
}

if (count !== 2) {
  console.log(0);
  return;
}

if (drifting) {
  console.log(6);
  return;
}

console.log(state ? 5 : 1);
