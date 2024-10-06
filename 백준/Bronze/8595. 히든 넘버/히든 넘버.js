const [len, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = 0;
let hiddenNumber = '';

for (let i = 0; i < Number(len); i++) {
  if (/\d/.test(input[i])) {
    hiddenNumber += input[i];
  }

  if (hiddenNumber !== '' && !/\d/.test(input[i])) {
    answer += Number(hiddenNumber);
    hiddenNumber = '';
  }
}

console.log(answer + Number(hiddenNumber));
