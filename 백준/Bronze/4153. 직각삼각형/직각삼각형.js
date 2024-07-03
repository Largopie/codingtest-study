function solution(input) {
  let answer = [];

  input.slice(0, input.length - 1).forEach(([a, b, c]) => {
    const [sortedA, sortedB, sortedC] = [a, b, c].sort((a, b) => a - b);

    if (sortedA ** 2 + sortedB ** 2 === sortedC ** 2) answer.push('right');
    else answer.push('wrong');
  });

  return answer.join('\n');
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input.push(line.split(' ').map(Number));
  })
  .on('close', function () {
    console.log(solution(input));
    process.exit();
  });
