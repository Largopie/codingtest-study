const solution = (input) => {
  const answer = [];

  for (let i = 1; i <= input; i++) {
    let str = '';

    str += ''.padStart(input - i, ' ');

    if (i === 1 || i === input) {
      str += ''.padStart(i * 2 - 1, '*');
    } else {
      str += '*';
      str += ''.padStart(i * 2 - 3, ' ');
      str += '*';
    }

    answer.push(str);
  }

  return answer.join('\n');
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
