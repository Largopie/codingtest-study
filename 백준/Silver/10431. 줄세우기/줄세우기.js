const [P, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.map((val) => val.split(' ').map(Number));
const answer = [];

arr.forEach(([T, firstHeight, ...heights]) => {
  let lineBack = 0;
  let line = [firstHeight];

  heights.forEach((height) => {
    const tallIndex = line.findIndex((h) => h > height);

    if (tallIndex === -1) {
      line = [...line, height];
      return;
    }

    const afterLine = line.slice(tallIndex);

    lineBack += afterLine.length;
    line = [...line.slice(0, tallIndex), height, ...afterLine];
  });

  answer.push(lineBack);
});

console.log(answer.map((val, idx) => `${idx + 1} ${val}`).join('\n'));
