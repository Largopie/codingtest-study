const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const answer = [0, 5];

for (let i = 2; i <= input; i++) {
  answer.push((answer[i - 1] + (i * 5 - (2 * i - 1))) % 45678);
}

console.log(answer.at(-1));
