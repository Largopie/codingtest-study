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
  let answer = 1;

  for (let i = inputNumber; i > 1; i--) {
    answer *= i;
  }

  console.log(answer);
};
