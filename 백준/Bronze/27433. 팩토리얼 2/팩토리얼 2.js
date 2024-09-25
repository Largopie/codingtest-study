const solution = (input) => {
  return Array.from({ length: input }, (_, idx) => idx + 1).reduce((acc, cur) => acc * cur, 1);
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
