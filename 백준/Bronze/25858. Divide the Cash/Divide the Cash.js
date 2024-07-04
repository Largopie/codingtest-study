function solution(input) {
  const answer = [];

  const totalAmount = Number(input[0][1]);
  const arr = input.slice(1);

  const totalSolve = arr.reduce((acc, cur) => acc + cur[0], 0);
  const moneyPerSolved = totalAmount / totalSolve;

  arr.forEach((solve) => answer.push(moneyPerSolved * solve));

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
