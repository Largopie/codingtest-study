const solution = (input) => {
  const answer = [];

  for (let i = input; i >= 1; i--) {
    answer.push(`${' '.repeat(input - i)}${'*'.repeat(i * 2 - 1)}`);
  }

  return [...answer, ...answer.slice(0, answer.length - 1).reverse()].join('\n');
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(Number(line)));
  rl.close();
}).on('close', function () {
  process.exit();
});
