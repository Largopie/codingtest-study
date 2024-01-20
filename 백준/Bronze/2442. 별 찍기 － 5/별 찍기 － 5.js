const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  solution(line);
  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = (input) => {
  const inputNumber = Number(input);
  let middleLength = Math.floor((inputNumber * 2 - 1) / 2);
  const answer = [];

  for (let i = 1; i <= inputNumber; i++) {
    answer.push(' '.repeat(middleLength) + '*'.repeat(i * 2 - 1));
    middleLength--;
  }

  console.log(answer.join('\n'));
};
