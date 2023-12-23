const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  const arr = input.slice(1).map((val) => Number(val));
  arr.sort((a, b) => a - b);

  console.log(arr.join('\n'));
};