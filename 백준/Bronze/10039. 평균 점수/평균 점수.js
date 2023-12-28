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
  const arr = input.map((val) => (Number(val) < 40 ? 40 : Number(val)));

  console.log(arr.reduce((acc, val) => acc + val) / arr.length);
};