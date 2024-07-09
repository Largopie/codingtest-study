function solution(input) {
  const alphabet = input[1].split('');

  const r = 31n;
  const M = 1234567891n;

  let result = 0n;

  alphabet.forEach((char, idx) => {
    const num = BigInt(char.charCodeAt() - 96);
    result += num * r ** BigInt(idx);
  });

  return (result % M).toString();
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
