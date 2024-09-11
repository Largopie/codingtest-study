function solution(input) {
  const jinho = input[0];
  const mbtis = input.slice(2);

  return mbtis.filter((mbti) => jinho === mbti).length;
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
