function solution(input) {
  const answer = [];

  input.forEach(([x, y]) => {
    if (x === 0 || y === 0) answer.push('AXIS');
    else if (x > 0 && y > 0) answer.push('Q1');
    else if (x < 0 && y > 0) answer.push('Q2');
    else if (x < 0 && y < 0) answer.push('Q3');
    else answer.push('Q4');
  });

  return answer.join('\n');
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
