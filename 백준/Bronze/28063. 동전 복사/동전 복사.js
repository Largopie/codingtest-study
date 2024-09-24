function solution(input) {
  const N = Number(input[0]);
  const [x, y] = input[1].split(' ').map(Number);

  if (N === 1) return 0;
  else {
    if ((x === 1 || x === N) && (y === 1 || y === N)) return 2;
    else if (x === 1 || x === N) return 3;
    else if (y === 1 || y === N) return 3;
    else return 4;
  }
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
