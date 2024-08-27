const solution = (r) => {
  const PI = 3.14159265359;
  const euclid = (PI * r * r).toFixed(6);
  const taxi = ((r * 2) ** 2 / 2).toFixed(6);

  return [euclid, taxi].join('\n');
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
