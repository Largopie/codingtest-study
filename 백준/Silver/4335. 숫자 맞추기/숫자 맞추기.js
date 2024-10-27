const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = [];
let lowNumbers = [];
let highNumbers = [];

for (let i = 0; i < input.length - 1; i += 2) {
  const speakNumber = Number(input[i]);
  const answer = input[i + 1];

  if (answer === 'too high') {
    highNumbers.push(speakNumber);
  } else if (answer === 'too low') {
    lowNumbers.push(speakNumber);
  } else {
    const isLowNumbersTruth = lowNumbers.every((number) => number < speakNumber);
    const isHighNumbersTruth = highNumbers.every((number) => number > speakNumber);

    if (isLowNumbersTruth && isHighNumbersTruth) solution.push('Stan may be honest');
    else solution.push('Stan is dishonest');

    lowNumbers = [];
    highNumbers = [];
  }
}

console.log(solution.join('\n'));
