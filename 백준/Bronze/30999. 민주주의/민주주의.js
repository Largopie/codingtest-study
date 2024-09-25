function solution(input) {
  let answer = 0;

  input.slice(1).forEach((votes) => {
    const agreeCount = votes.split('').filter((vote) => vote === 'O').length;

    if (agreeCount > Math.floor(votes.length / 2)) answer++;
  });

  return answer;
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
