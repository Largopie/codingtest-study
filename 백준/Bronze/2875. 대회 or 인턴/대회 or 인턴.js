const solution = (input) => {
  const [N, M, K] = input;
  const maxTeams = Math.min(Math.floor(N / 2), M);
  const a = N - maxTeams * 2;
  const b = M - maxTeams;

  return K - (a + b) <= 0 ? maxTeams : Math.max(maxTeams - Math.ceil((K - (a + b)) / 3), 0);
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
