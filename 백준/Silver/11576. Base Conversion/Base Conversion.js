const [firstLine, secondLine, thirdLine] = require('fs').readFileSync(0).toString().trim().split('\n');

const [a, b] = firstLine.split(' ').map((v) => +v);
const m = Number(secondLine);
const numbers = thirdLine.split(' ').map((v) => +v);
const answer = [];

let targetNumber = 0;

for (let i = numbers.length - 1; i >= 0; i--) {
  targetNumber += numbers[i] * a ** (numbers.length - 1 - i);
}

let max = 0;

while (true) {
  if (targetNumber <= b ** (max + 1)) break;
  max++;
}

for (let i = max; i >= 0; i--) {
  answer.push(Math.floor(targetNumber / b ** i));
  targetNumber %= b ** i;
}

console.log(answer.join(' '));
