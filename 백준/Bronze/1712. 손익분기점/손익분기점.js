const solution = (input) => {
  const [fixedCost, variableCost, salePrice] = input;

  if (salePrice - variableCost <= 0) return -1;

  const answer = fixedCost / (salePrice - variableCost);

  return answer < 0 ? -1 : Math.floor(answer) + 1;
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
