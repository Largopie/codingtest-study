function solution(input) {
  const answer = [];
  let maxM = 0;
  let maxN = 0;
  const arr = input.slice(1);

  arr.forEach(([m, n]) => {
    if (maxM < m) maxM = m;
    if (maxN < n) maxN = n;
  });

  const counts = Array.from({ length: maxM + 1 }, () => Array.from({ length: maxN + 1 }, () => 0));

  counts.forEach((count, m) => {
    count.forEach((_, n) => {
      if (n === 0 || m === 0) return;

      if (n === m) {
        counts[m][n] = 1;
      } else if (m === 1) {
        counts[m][n] = n;
      } else if (n > m) {
        const beforeCounts = counts[m - 1];

        counts[m][n] = beforeCounts.slice(0, n).reduce((acc, cur) => acc + cur, 0);
      }
    });
  });

  arr.forEach(([m, n]) => {
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
