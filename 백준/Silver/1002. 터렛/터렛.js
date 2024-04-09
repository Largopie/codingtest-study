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
  const inputArray = input.slice(1);
  const answer = [];

  inputArray.forEach((str) => {
    const arr = str.split(' ').map((value) => Number(value));
    const [x1, y1, r1] = arr[2] >= arr[5] ? arr.slice(0, 3) : arr.slice(3, 6);
    const [x2, y2, r2] = arr[2] >= arr[5] ? arr.slice(3, 6) : arr.slice(0, 3);

    const distance = (x1 - x2) ** 2 + (y1 - y2) ** 2;

    if (x1 === x2 && y1 === y2 && r1 === r2) {
      answer.push(-1);
      return;
    }

    if (distance === r1 ** 2) {
      answer.push(2);
    } else if (distance > r1 ** 2) {
      if ((r1 + r2) ** 2 === distance) {
        answer.push(1);
      } else if ((r1 + r2) ** 2 > distance) {
        answer.push(2);
      } else {
        answer.push(0);
      }
    } else {
      if ((r1 - r2) ** 2 === distance) {
        answer.push(1);
      } else if ((r1 - r2) ** 2 > distance) {
        answer.push(0);
      } else {
        answer.push(2);
      }
    }
  });

  console.log(answer.join('\n'));
};
