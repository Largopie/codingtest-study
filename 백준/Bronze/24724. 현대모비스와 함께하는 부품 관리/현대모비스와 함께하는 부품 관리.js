function solution(input) {
  const t = input[0];

  return Array.from({ length: t }, (_, idx) => idx + 1)
    .map((val) => `Material Management ${val}\nClassification ---- End!`)
    .join('\n');
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
