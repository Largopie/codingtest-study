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
  const map = input.slice(1).map((val) => val.split('').map((num) => +num));
  const height = map.length;
  const width = map[0].length;
  const visited = Array.from({ length: height }, () => Array.from({ length: width }, () => false));
  const mx = [1, -1, 0, 0];
  const my = [0, 0, 1, -1];
  const answer = [];

  const dfs = (arr, startX, startY) => {
    const willVisit = [[startX, startY]];
    let count = 0;

    while (willVisit.length) {
      const [dx, dy] = willVisit.shift();
      visited[dy][dx] = true;
      count++;

      for (let i = 0; i < mx.length; i++) {
        const nx = mx[i] + dx;
        const ny = my[i] + dy;

        if (nx >= 0 && nx < width && ny >= 0 && ny < height && arr[ny][nx] === 1 && !visited[ny][nx]) {
          willVisit.push([nx, ny]);
          visited[ny][nx] = true;
        }
      }
    }

    return count;
  };

  map.forEach((arr, i) => {
    arr.forEach((val, j) => {
      if (!visited[i][j] && val === 1) {
        const count = dfs(map, j, i);
        answer.push(count);
      }
    });
  });

  if (!answer.length) {
    console.log(answer.length);
    return;
  }

  answer.sort((a, b) => a - b);

  console.log(answer.length);
  console.log(answer.join('\n'));
};
