const readline = require('readline');
const { Z_ASCII } = require('zlib');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  const n = Number(input[0]);
  const costs = input.slice(1).map((val) => val.split(' ').map((num) => Number(num)));

  for (let i = 1; i < costs.length; i++) {
    for (let j = 0; j < costs[i].length; j++) {
      costs[i][j] = costs[i][j] + Math.min(...costs[i - 1].filter((_, idx) => idx !== j));
    }
  }

  console.log(Math.min(...costs.at(-1)));
};
