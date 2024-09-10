const solution = (input) => {
  const [a, b, c] = input;
  return Math.floor(Math.max((a * b) / c, (a / b) * c));
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(line.split(' ').map(Number)));
  rl.close();
}).on('close', function () {
  process.exit();
});
