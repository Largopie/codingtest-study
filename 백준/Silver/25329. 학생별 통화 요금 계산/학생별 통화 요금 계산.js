const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.map((v) => v.split(' '));
const obj = {};
const res = [];

arr.forEach(([time, name]) => {
  const [h, m] = time.split(':').map((v) => +v);
  const total = h * 60 + m;

  if (obj[name]) obj[name] += total;
  else obj[name] = total;
});

Object.entries(obj).forEach(([name, total]) => {
  let money = 10;

  if (total > 100) {
    money += Math.ceil((total - 100) / 50) * 3;
  }

  res.push([name, money]);
});

res.sort((a, b) => {
  if (a[1] < b[1]) return 1;
  else if (a[1] === b[1]) {
    if (a[0] < b[0]) return -1;
    else return 1;
  } else return -1;
});

console.log(res.map((v) => v.join(' ')).join('\n'));
