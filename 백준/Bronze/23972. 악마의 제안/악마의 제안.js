const solution = (input) => {
  const [K, N] = input;

  for (let i = K; i <= K * N; i++) {
    if ((i - K) * N >= i) return i;
  }

  return -1;
};

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(line.split(' ').map(Number)));
  rl.close();
}).on('close', function () {
  process.exit();
});
