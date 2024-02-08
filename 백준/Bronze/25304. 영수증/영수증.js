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
  const [total, count, ...inputArr] = input;
  const arr = inputArr.map((val) => val.split(' ').map((num) => +num));
  let answer = 0;

  arr.forEach(([price, count]) => {
    answer += price * count;
  });

  console.log(total === '' + answer ? 'Yes' : 'No');
};
