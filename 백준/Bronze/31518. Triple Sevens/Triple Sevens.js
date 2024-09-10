function solution(input) {
  const arr = input.slice(1);

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(7)) return 0;
  }

  return 777;
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
