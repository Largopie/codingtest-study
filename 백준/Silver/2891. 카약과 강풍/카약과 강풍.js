const arr = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, S, R] = arr[0].split(' ').map(Number);
const broken = arr[1].split(' ').map(Number);
const oneMore = arr[2].split(' ').map(Number);

const answer = Array.from({ length: N }, () => 1);

broken.forEach((teamNum) => {
  answer[teamNum - 1] -= 1;
});

oneMore.forEach((teamNum) => {
  answer[teamNum - 1] += 1;
});

answer.forEach((team, idx) => {
  if (team !== 2) return;

  if (idx - 1 >= 0 && answer[idx - 1] === 0) {
    answer[idx - 1] += 1;
    answer[idx] -= 1;
  } else if (idx + 1 < N && answer[idx + 1] === 0) {
    answer[idx + 1] += 1;
    answer[idx] -= 1;
  }
});

console.log(answer.filter((team) => team === 0).length);
