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
  const arr = input[1].split(' ').map((val) => +val);
  const dp = Array.from({ length: arr.length }, () => 1);
  let pointer = 1;

  while (pointer < arr.length) {
    for (let i = 0; i < pointer; i++) {
      if (arr[i] < arr[pointer] && dp[i] >= dp[pointer]) {
        dp[pointer] = dp[i] + 1;
      }
    }
    pointer++;
  }

  console.log(Math.max(...dp));
};
