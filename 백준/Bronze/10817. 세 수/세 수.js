const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const input = line.split(' ').map((val) => Number(val));
  solution(input);

  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = (input) => {
  input.sort((a,b) => a -  b);

  console.log(input[1]);
};