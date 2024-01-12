const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  solution(line);
  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = (input) => {
  if (input === '1 2 3 4 5 6 7 8') console.log('ascending');
  else if (input === '8 7 6 5 4 3 2 1') console.log('descending');
  else console.log('mixed');
};
