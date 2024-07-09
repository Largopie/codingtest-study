function solution(input) {
  return (
    input[1].split('').reduce((acc, cur, idx) => {
      return acc + (cur.charCodeAt() - 96) * 31 ** idx;
    }, 0) % 1234567891
  );
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
