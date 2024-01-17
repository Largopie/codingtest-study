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
  const inputArr = input.slice(1).map((val) => val.split(' ').map((num) => Number(num)));
  const len = inputArr.length;

  for (let i = 1; i < len; i++) {
    const lineLen = inputArr[i].length;
    for (let j = 0; j < lineLen; j++) {
      if (j === 0) inputArr[i][j] += inputArr[i - 1][j];
      else if (j === lineLen - 1) inputArr[i][j] += inputArr[i - 1][j - 1];
      else inputArr[i][j] += Math.max(inputArr[i - 1][j], inputArr[i - 1][j - 1]);
    }
  }

  console.log(Math.max(...inputArr.at(-1)));
};
