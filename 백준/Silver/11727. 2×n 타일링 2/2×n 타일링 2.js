const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  solution(line);
  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = (input) => {
  const inputValue = Number(input);
  const dp = [0, 1, 3];

  for (let i = 3; i <= inputValue; i++) {
    if (i % 2 === 0) {
      dp[i] = (dp[i - 2] * 4 - 1) % 10007;
    } else {
      dp[i] = (dp[i - 1] * 2 - 1) % 10007;
    }
  }

  console.log(dp[inputValue]);
};
