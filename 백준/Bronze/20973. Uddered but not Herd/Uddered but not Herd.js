function solution(input) {
  let count = 1;
  const alphabet = [...input[0]];

  for (let i = 1; i < input[1].length; i++) {
    const currentIdx = alphabet.findIndex((ele) => ele === input[1][i]);
    const beforeIdx = alphabet.findIndex((ele) => ele === input[1][i - 1]);

    if (currentIdx <= beforeIdx) count++;
  }

  return count;
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
