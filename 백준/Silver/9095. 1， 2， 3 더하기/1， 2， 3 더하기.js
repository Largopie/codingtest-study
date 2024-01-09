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
  const inputArr = input.slice(1).map((val) => Number(val));

  inputArr.forEach((input) => {
    const answer = [];

    const bfs = (arr) => {
      const sum = arr.reduce((a, b) => a + b);
      if (sum === input) answer.push(arr);
      if (sum < input) {
        bfs([...arr, 1]);
        bfs([...arr, 2]);
        bfs([...arr, 3]);
      }
    };

    bfs([0]);
    console.log(answer.length);
  });
};
