function remakeString(str, times) {
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr += str[i].repeat(times);
  }

  return Array(times).fill(newStr).join('\n');
}

function solution(input) {
  const [M, N, K] = input[0].split(' ').map(Number);
  const answer = [];

  input.slice(1).forEach((val) => {
    answer.push(remakeString(val, K));
  });

  return answer.join('\n');
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
