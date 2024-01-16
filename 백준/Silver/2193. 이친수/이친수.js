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
  const arr = [1n, 1n];

  for (let i = 2; i < inputValue; i++) {
    arr.push(arr.at(-1) + arr.at(-2));
  }

  console.log(String(arr.find((_, idx) => idx === inputValue - 1)));
};
