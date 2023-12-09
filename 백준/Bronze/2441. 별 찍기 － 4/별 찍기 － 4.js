const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const input = Number(line);
  solution(Number(input));

  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = (input) => {
  for(let i = input; i > 0; i--) {
    console.log(`${' '.repeat(input - i)}${'*'.repeat(i)}`);
  }
};