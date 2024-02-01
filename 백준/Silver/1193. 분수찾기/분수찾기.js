const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  solution(line);
  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = (input) => {
  const inputValue = Number(input);
  let count = 0;
  let sum = 0;

  while (sum < inputValue) {
    count += 1;
    sum += count;
  }

  let rest = inputValue - (sum - count) - 1;
  let [left, right] = count % 2 === 0 ? [1 + rest, count - rest] : [count - rest, 1 + rest];

  console.log(`${left}/${right}`);
};
