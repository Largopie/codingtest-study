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
  let answer = 1;
  const [n, m] = input[0].split(' ').map((val) => Number(val));
  const maze = input.slice(1);
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
  const queue = [[0, 0]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  maze.forEach((val, i) => {
    for (let j = 0; j < val.length; j++) {
      if (maze[i][j] === '0') visited[i][j] = true;
    }
  });

  visited[0][0] = 1;

  while (queue.length) {
    const len = queue.length;

    answer++;
    for (let i = 0; i < len; i++) {
      const [nx, ny] = queue.shift();

      for (let j = 0; j < dx.length; j++) {
        let moveX = dx[j] + nx;
        let moveY = dy[j] + ny;

        if (moveX >= 0 && moveX <= m - 1 && moveY >= 0 && moveY <= n - 1 && !visited[moveY][moveX]) {
          queue.push([moveX, moveY]);
          visited[moveY][moveX] = answer;
        }
      }
    }
  }

  console.log(visited[n - 1][m - 1]);
};
