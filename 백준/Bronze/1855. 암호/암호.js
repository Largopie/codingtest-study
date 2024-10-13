const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const K = Number(input[0]);
const words = input[1];
const answer = [];

for (let i = 0; i < words.length; i += K) {
  const splitArr = words.slice(i, i + K).split('');

  if ((i / K) % 2 === 0) {
    answer.push(splitArr);
  } else {
    answer.push(splitArr.reverse());
  }
}

let str = '';

for (let i = 0; i < K; i++) {
  for (let j = 0; j < answer.length; j++) {
    str += answer[j][i];
  }
}

console.log(str);
