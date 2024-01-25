const readline = require('readline');
const { Z_ASCII } = require('zlib');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  const inputArr = input.slice(1).map((val) => val.split(' ').map((val) => Number(val)));
  const height = inputArr.length;
  const width = inputArr[0].length;
  const mx = [1, -1, 0, 0];
  const my = [0, 0, 1, -1];
  const cooked = [];
  let counts = height * width;
  let day = 0;

  inputArr.forEach((line, i) => {
    line.forEach((val, j) => {
      if (val === 1) {
        cooked.push([i, j]);
        counts--;
      }
      if (val === -1) counts--;
    });
  });

  let idx = 0;

  while (true) {
    const len = cooked.length;
    if (idx === len) break;

    for (let i = idx; i < len; i++) {
      const [h, w] = cooked[idx++];
      for (let i = 0; i < mx.length; i++) {
        const nx = h + mx[i];
        const ny = w + my[i];

        if (nx >= 0 && nx < height && ny >= 0 && ny < width && inputArr[nx][ny] === 0) {
          cooked.push([nx, ny]);
          inputArr[nx][ny] = 1;
          counts--;
        }
      }
    }
    day++;
  }

  counts ? console.log(-1) : console.log(day - 1);
};
