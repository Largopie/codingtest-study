function solution(input) {
  const answer = [];
  const arr = input.slice(1);

  arr.forEach(([m, n]) => {
    const counts = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));

    counts.forEach((count, m) => {
      count.forEach((_, n) => {
        if (n === 0 || m === 0) return;

        if (n === m) {
          counts[m][n] = 1;
        } else if (m === 1) {
          counts[m][n] = n;
        } else if (n > m) {
          let sum = 0;

          for (let i = 0; i < n; i++) {
            sum += counts[m - 1][i];
          }
          counts[m][n] = sum;
        }
      });
    });

    answer.push(counts[m][n]);
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
