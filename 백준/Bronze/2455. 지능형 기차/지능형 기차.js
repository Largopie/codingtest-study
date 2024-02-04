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
  const arr = input.map((val) => val.split(' ').map((num) => +num));
  let max = 0;
  let train = 0;

  arr.forEach(([getOff, getOn]) => {
    train -= getOff;
    train += getOn;
    max = Math.max(train, max);
  });

  console.log(max);
};
