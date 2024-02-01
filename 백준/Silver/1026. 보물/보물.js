const readline = require('readline');
const { Z_ASCII } = require('zlib');

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
  const [A, B] = input.slice(1).map((val) => val.split(' ').map((num) => +num));

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  console.log(A.map((val, idx) => val * B[idx]).reduce((a, b) => a + b));
};
