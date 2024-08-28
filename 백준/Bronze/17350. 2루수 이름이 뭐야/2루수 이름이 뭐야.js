function solution(input) {
  const 뭐야 = 'anj';

  return input.includes(뭐야) ? '뭐야;' : '뭐야?';
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
