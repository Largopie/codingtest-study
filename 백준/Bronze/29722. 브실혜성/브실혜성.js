function solution(input) {
  const [d, cycles] = input;
  const date = d.split('-').map(Number);

  date[2] += Number(cycles);

  const divide1 = Math.floor(date[2] / 30);

  date[1] += date[2] % 30 === 0 ? divide1 - 1 : divide1;
  date[2] = String(date[2] % 30 === 0 ? 30 : date[2] % 30).padStart(2, '0');

  const divide2 = Math.floor(date[1] / 12);

  date[0] += date[1] % 12 === 0 ? divide2 - 1 : divide2;
  date[1] = String(date[1] % 12 === 0 ? 12 : date[1] % 12).padStart(2, '0');

  return date.join('-');
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
