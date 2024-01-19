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
  const arr = input.map((val) => Number(val));

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const copy = arr.filter((val) => val !== arr[i] && val !== arr[j]);

      if (copy.reduce((a, b) => a + b) === 100) {
        console.log(copy.join('\n'));
        return;
      }
    }
  }
};
