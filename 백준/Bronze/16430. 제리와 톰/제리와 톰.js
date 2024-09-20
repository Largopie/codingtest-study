const solution = (input) => {
  const [A, B] = input;

  return [B - A, B].join(' ');
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
