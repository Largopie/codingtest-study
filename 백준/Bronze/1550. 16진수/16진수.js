const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input.push(line);
  })
  .on('close', function () {
    solution(input);
    process.exit();
  });

function solution(input) {
  console.log(parseInt(input, 16));
}
