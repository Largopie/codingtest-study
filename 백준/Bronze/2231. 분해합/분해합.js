function generator(num, standardNumber) {
  const genNum =
    num +
    String(num)
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);

  return genNum === standardNumber;
}

function solution(input) {
  for (let i = 1; i <= input; i++) {
    if (generator(i, input)) return i;
  }

  return 0;
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline
  .on('line', function (line) {
    console.log(solution(Number(line)));
  })
  .on('close', function () {
    process.exit();
  });
