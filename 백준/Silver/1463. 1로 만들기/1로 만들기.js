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
  const inputNumber = Number(input);

  if (inputNumber === 1) {
    console.log(0);
    return;
  }

  const bfs = (arr, count) => {
    count += 1;
    const newArr = [];

    arr.forEach((val) => {
      if (val % 3 === 0) newArr.push(val / 3);
      if (val % 2 === 0) newArr.push(val / 2);
      if (val > 1) newArr.push(val - 1);
    });

    if (newArr.includes(1)) {
      console.log(count);
      return;
    }
    bfs(newArr, count);
  };

  bfs([inputNumber], 0);
};
