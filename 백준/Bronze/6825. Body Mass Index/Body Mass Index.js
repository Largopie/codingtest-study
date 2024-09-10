function solution(input) {
  const weight = input[0];
  const height = input[1];

  const BMI = weight / (height * height);

  if (BMI > 25) return 'Overweight';
  else if (BMI >= 18.5 && BMI <= 25) return 'Normal weight';
  else return 'Underweight';
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(Number(line));
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
