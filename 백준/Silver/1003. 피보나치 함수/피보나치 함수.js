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

  const fibonacci = (num) => {
    const count = [
      [1, 0],
      [0, 1],
      [1, 1],
    ];

    if (num <= 2) return count[num];

    for (let i = 3; i <= num; i++) {
      count.shift();
      count.push([count.at(-1)[0] + count.at(-2)[0], count.at(-1)[1] + count.at(-2)[1]]);
    }

    return count.at(-1);
  };

  inputArr.forEach((number) => {
    const [zero, one] = fibonacci(number);
    console.log(zero, one);
  });
};
