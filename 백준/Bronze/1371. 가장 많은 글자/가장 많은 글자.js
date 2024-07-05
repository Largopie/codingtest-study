function solution(input) {
  const answer = [];
  const counts = Array.from({ length: 26 }, () => 0);

  input.forEach((sentence) => sentence.forEach((word) => word.split('').forEach((c) => counts[c.charCodeAt() - 97]++)));

  const max = Math.max(...counts);

  counts.forEach((count, idx) => {
    if (count === max) answer.push(idx + 97);
  });

  return String.fromCharCode(...answer);
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input.push(line.split(' '));
  })
  .on('close', function () {
    console.log(solution(input));
    process.exit();
  });
