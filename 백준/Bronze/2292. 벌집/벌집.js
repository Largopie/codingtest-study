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
  let count = 0;
  let lastNumber = 0;

  while (true) {
    lastNumber += 1;
    lastNumber += count * 6;

    if (lastNumber >= inputNumber) {
      console.log(count + 1);
      break;
    }
    lastNumber -= 1;
    count += 1;
  }
};
