const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(line));

  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = (input) => {
  return input
    .split(' ')
    .map((val) => Number(val))
    .reduce((acc, val) => acc + val);
};
