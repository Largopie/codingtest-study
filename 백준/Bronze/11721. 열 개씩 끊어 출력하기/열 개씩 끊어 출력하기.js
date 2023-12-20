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
  let answer = '';
  for (let i = 0; i < input.length; i++) {
    answer += input[i];
    if (i % 10 === 9) answer += '\n';
  }
  console.log(answer);
};