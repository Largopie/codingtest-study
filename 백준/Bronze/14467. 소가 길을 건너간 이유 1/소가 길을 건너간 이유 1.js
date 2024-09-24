function solution(input) {
  let answer = 0;
  const arr = input.slice(1).map((val) => val.split(' ').map(Number));
  const cows = {};

  arr.forEach(([cowNum, position]) => {
    if (cows[cowNum] !== undefined && cows[cowNum] !== position) answer++;
    cows[cowNum] = position;
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
