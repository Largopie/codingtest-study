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
  const arr = input[1].split(' ').map((val) => Number(val));
  const len = arr.length;
  let answer = arr[0];

  for (let i = 1; i < len; i++) {
    arr[i] = Math.max(arr[i - 1] + arr[i], arr[i]);
    answer = Math.max(answer, arr[i]);
  }

  console.log(answer);
};
