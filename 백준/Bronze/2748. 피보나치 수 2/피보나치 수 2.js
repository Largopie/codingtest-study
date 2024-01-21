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
  const answer = [0n, 1n];

  for (let i = 2; i <= inputNumber; i++) {
    const shift = answer.shift();
    answer.push(shift + answer.at(-1));
  }

  console.log(String(answer.at(-1)));
};
