function solution(input) {
  const answer = [];
  const arr = input.slice(1);

  arr.forEach(([h, w, n]) => {
    const roomNumber = Math.ceil(n / h);
    const floor = n % h === 0 ? h : n % h;

    answer.push(floor + String(roomNumber).padStart(2, '0'));
  });

  return answer.join('\n');
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split(' ').map(Number));
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
