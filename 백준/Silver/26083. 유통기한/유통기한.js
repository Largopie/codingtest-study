const [t, n, ...expiryDate] = require('fs').readFileSync(0).toString().trim().split('\n');

const DAY_OF_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const [ty, tMonth, tDay] = t.split(' ').map((v) => +v);
const tYear = 2000 + ty;
const result = [];

expiryDate.forEach((val) => {
  const date = val.split(' ').map((v) => +v);
  const arr = [
    [date[0], date[1], date[2]],
    [date[2], date[1], date[0]],
    [date[2], date[0], date[1]],
  ];
  let invalid = 0;
  let safe = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const [y, month, day] = arr[i];
    const year = y + 2000;

    const isLeapYear = year % 4 === 0;
    const dayOfMonth = [...DAY_OF_MONTH];
    if (isLeapYear) dayOfMonth[1] = 29;

    if (month > 12 || month < 1 || day < 1 || day > dayOfMonth[month - 1]) {
      invalid += 1;
      continue;
    }

    if (year > tYear) safe += 1;
    else if (year === tYear) {
      if (month > tMonth) safe += 1;
      else if (month === tMonth) {
        if (day >= tDay) safe += 1;
      }
    }
  }

  if (invalid === arr.length) {
    result.push('invalid');
  } else if (invalid + safe === arr.length) {
    result.push('safe');
  } else {
    result.push('unsafe');
  }
});

console.log(result.join('\n'));
