function solution(input) {
  const [a, b, c] = input;

  return `${Number(a) + Number(b) - Number(c)}\n${a + b - c}`;
}

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
    console.log(solution(input));
    process.exit();
  });
