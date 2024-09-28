function solution(input) {
  const answer = Array.from({ length: input.length }, () => Array(input[0].length).fill(0));
  const ready = '.omln';
  const jump = 'owln.';

  for (let i = 0; i < input[0].length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[1][i] === 'o') {
        answer[j][i] = jump[j];
      } else if (input[1][i] === 'w') {
        answer[j][i] = ready[j];
      } else {
        answer[j][i] = input[j][i];
      }
    }
  }

  return answer.map((val) => val.join('')).join('\n');
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
