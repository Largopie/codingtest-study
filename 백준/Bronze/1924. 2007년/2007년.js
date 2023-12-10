const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  const input = line.split(' ').map((val) => Number(val));
  solution(input);

  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = ([m, d]) => {
  const date = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  let answer = d;

  answer += date.slice(0, m).reduce((acc, val) => acc + val);
  console.log(day[answer % day.length]);
};