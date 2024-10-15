const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let startIndex = 0;
const answer = [];

while (Number(input[startIndex]) !== 0) {
  let tall = [];
  let max = 0;

  for (let i = startIndex; i <= startIndex + Number(input[startIndex]); i++) {
    const [name, h] = input[i].split(' ');
    const height = h * 100;

    if (max < height) {
      max = height;
      tall = [name];
    } else if (max === height) {
      tall.push(name);
    }
  }

  answer.push(tall);

  startIndex += Number(input[startIndex]) + 1;
}

console.log(answer.map((val) => val.join(' ')).join('\n'));
