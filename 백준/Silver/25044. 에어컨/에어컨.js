const [n, k] = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split(' ')
  .map((v) => +v);

const obj = {};

let day = 0;
let time = 60 * 15;
let i = -1;

while (day <= n) {
  i += 1;

  if (time >= 1440) {
    time -= 1440;
    day += 1;
  }

  if (!obj[day]) obj[day] = [time];
  else obj[day].push(time);

  if (i % 3 === 2) time += 60 * 18 + k;
  else time += 180;
}

console.log(arrayToTime(obj[n]).join('\n'));

function arrayToTime(arr) {
  const newArr = [];

  newArr.push(arr.length);

  arr.forEach((num) => {
    const hours = String(Math.floor(num / 60)).padStart(2, '0');
    const minutes = String(num % 60).padStart(2, '0');

    newArr.push(`${hours}:${minutes}`);
  });

  return newArr;
}
