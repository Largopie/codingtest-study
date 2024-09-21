function solution(input) {
  const arr = input.slice(1);
  const answer = [];

  arr.forEach((nums, idx) => {
    answer.push(`Case #${idx + 1}: ${Math.max(...nums)}`);
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
