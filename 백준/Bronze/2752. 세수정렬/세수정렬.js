const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input.push(line.split(' ').map(Number));
  })
  .on('close', function () {
    solution(input);
    process.exit();
  });

function solution(input) {
  const sortedNumber = input[0].sort((a, b) => a - b);

  console.log(sortedNumber.join(' '));
}
