const solution = (input) => {
  const [K, D, A] = input;

  return K + A < D || D === 0 ? 'hasu' : 'gosu';
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(line.split('/').map(Number)));
  rl.close();
}).on('close', function () {
  process.exit();
});
