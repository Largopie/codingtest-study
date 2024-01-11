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
  const dp = Array.from({ length: len }, () => 0);

  dp[0] = inputArr[0];
  if (len >= 2) dp[1] = dp[0] + inputArr[1];
  if (len >= 3) dp[2] = Math.max(inputArr[0], inputArr[1]) + inputArr[2];

  for (let i = 3; i < len; i++) {
    dp[i] = Math.max(dp[i - 3] + inputArr[i - 1] + inputArr[i], dp[i - 2] + inputArr[i]);
  }

  console.log(dp[len - 1]);
};
