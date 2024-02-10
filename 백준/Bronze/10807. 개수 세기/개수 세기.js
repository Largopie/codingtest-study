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
  const [inputArr, v] = input.slice(1);
  const arr = inputArr.split(' ').map((val) => +val);
  let count = 0;

  arr.forEach((val) => {
    if (+v === val) count++;
  });

  console.log(count);
};
