const solution = (input) => {
  return input[0] + input[1] === input[2] ? 'correct!' : 'wrong!';
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const input = line.split(' ').map(Number);

  console.log(solution(input));
  rl.close();
}).on('close', function () {
  process.exit();
});
