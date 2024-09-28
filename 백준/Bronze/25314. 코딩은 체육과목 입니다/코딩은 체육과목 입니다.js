const solution = (input) => {
  const answer = [...Array(Math.floor(input / 4)).fill('long')];

  answer.push('int');

  return answer.join(' ');
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(Number(line)));
  rl.close();
}).on('close', function () {
  process.exit();
});
