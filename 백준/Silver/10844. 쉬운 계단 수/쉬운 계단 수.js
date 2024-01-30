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
  const answer = Array.from({ length: inputValue }, () => Array.from({ length: 10 }, () => 0n));

  for (let i = 1; i <= 9; i++) {
    answer[0][i] += 1n;
  }

  for (let i = 1; i < inputValue; i++) {
    answer[i][0] = answer[i - 1][1] % 1000000000n;
    answer[i][9] = answer[i - 1][8] % 1000000000n;
    for (let j = 1; j < answer[0].length - 1; j++) {
      answer[i][j] = (answer[i - 1][j - 1] + answer[i - 1][j + 1]) % 1000000000n;
    }
  }

  console.log(String(answer.at(-1).reduce((acc, val) => acc + val) % 1000000000n));
};
