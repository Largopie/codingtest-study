const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  solution(line);
  rl.close();
}).on('close', function () {
  process.exit();
});

const solution = (input) => {
  let [n, k] = input.split(' ').map((val) => Number(val));
  const visited = Array.from({ length: 100000 }, () => false);
  const queue = [[n, 0]];

  while (queue.length) {
    const queueLength = queue.length;
    visited[n] = true;

    for (let i = 0; i < queueLength; i++) {
      const [val, seconds] = queue.shift();

      if (val === k) {
        console.log(seconds);
        return;
      }
      for (next of [val + 1, val - 1, val * 2]) {
        if (next >= 0 && next <= 100000 && !visited[next]) {
          visited[next] = true;
          queue.push([next, seconds + 1]);
        }
      }
    }
  }
};
