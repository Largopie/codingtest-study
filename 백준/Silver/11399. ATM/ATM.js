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
  const inputArr = input[1]
    .split(' ')
    .map((value) => Number(value))
    .sort((a, b) => a - b);

  let answer = 0n;
  let sum = 0n;

  for (let i = 0; i < inputArr.length; i++) {
    sum += BigInt(inputArr[i]);
    answer += sum;
  }

  console.log(answer.toString());
};
