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
  const arr = [];

  arr.push(0);
  arr.push(1);

  for (let i = 2; i <= inputValue; i++) {
    const prevNum = arr.shift();
    arr.push(arr[0] + prevNum);
  }

  console.log(arr.at(-1));
};
