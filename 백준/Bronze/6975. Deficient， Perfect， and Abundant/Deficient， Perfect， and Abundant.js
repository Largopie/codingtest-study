function isDivisor(baseNumber, targetNumber) {
  return baseNumber % targetNumber === 0;
}

function getSumOfDivisors(divisors) {
  return divisors.reduce((acc, cur) => acc + cur, 0);
}

function getDivisors(baseNumber) {
  const half = Math.floor(baseNumber / 2);
  const divisors = [];

  for (let i = 1; i <= half; i++) {
    if (isDivisor(baseNumber, i)) divisors.push(i);
  }

  return divisors;
}

function getClassification(baseNumber, sum) {
  if (baseNumber < sum) return `${baseNumber} is an abundant number.\n`;
  else if (baseNumber === sum) return `${baseNumber} is a perfect number.\n`;
  else return `${baseNumber} is a deficient number.\n`;
}

function solution(input) {
  const answer = [];

  input.slice(1).forEach((number) => {
    const divisors = getDivisors(number);
    const sum = getSumOfDivisors(divisors);

    answer.push(getClassification(number, sum));
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
  input.push(Number(line));
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
