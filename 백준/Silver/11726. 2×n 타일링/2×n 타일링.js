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
  const arr = [1, 2, 3];

  for (let i = 3; i < inputValue; i++) {
    arr.push((arr.at(-1) + arr.at(-2)) % 10007);
  }

  console.log(arr.find((element, idx) => idx === inputValue - 1));
};
