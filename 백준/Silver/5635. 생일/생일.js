const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.map((val) => val.split(' '));

arr.sort((a, b) => {
  const prevYear = Number(a[3]);
  const prevMonth = Number(a[2]);
  const prevDay = Number(a[1]);

  const nextYear = Number(b[3]);
  const nextMonth = Number(b[2]);
  const nextDay = Number(b[1]);

  if (prevYear > nextYear) return -1;
  else if (prevYear === nextYear) {
    if (prevMonth > nextMonth) return -1;
    else if (prevMonth === nextMonth) {
      if (prevDay > nextDay) return -1;
      else return 1;
    }
  }
});

console.log([arr[0][0], arr.at(-1)[0]].join('\n'));
