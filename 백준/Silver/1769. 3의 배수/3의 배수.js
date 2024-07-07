function solution(input) {
  let count = 1;
  let sum = input
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);

  if (Math.floor(Number(input) / 10) === 0) {
    return Number(input) % 3 === 0 ? 0 + '\nYES' : 0 + '\nNO';
  }

  while (Math.floor(sum / 10) !== 0) {
    count++;
    sum = String(sum)
      .split('')
      .map(Number)
      .reduce((acc, cur) => acc + cur, 0);
  }

  return Number(sum) % 3 === 0 ? count + '\nYES' : count + '\nNO';
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline
  .on('line', function (line) {
    console.log(solution(line));
  })
  .on('close', function () {
    process.exit();
  });
