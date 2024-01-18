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
  const inputArr = input.slice(1).map((val) => Number(val));
  const len = inputArr.length;
  const dp = Array.from({ length: len + 1 }, () => 0);

  dp[1] = inputArr[0];
  dp[2] = inputArr[0] + inputArr[1];

  for (let i = 3; i <= len; i++) {
    dp[i] = Math.max(dp[i - 3] + inputArr[i - 2] + inputArr[i - 1], dp[i - 2] + inputArr[i - 1], dp[i - 1]);
  }

  console.log(dp[len]);
};
