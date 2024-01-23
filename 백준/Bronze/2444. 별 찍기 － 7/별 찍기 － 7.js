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
  let space = inputNumber - 1;

  for (let i = 1; i <= inputNumber; i++) {
    console.log(' '.repeat(space) + '*'.repeat(i * 2 - 1));
    space--;
  }

  space = 1;
  for (let i = inputNumber - 1; i >= 1; i--) {
    console.log(' '.repeat(space) + '*'.repeat(i * 2 - 1));
    space++;
  }
};
