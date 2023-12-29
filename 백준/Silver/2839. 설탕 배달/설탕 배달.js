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
  const dilivery = [];
  let divideFiveShare = Math.floor(inputNumber / 5);

  for (let i = divideFiveShare; i >= 0; i--) {
    const rest = inputNumber - 5 * i;
    if (rest % 3 === 0) {
      dilivery.push(i + rest / 3);
    }
  }

  if (!dilivery.length) {
    console.log(-1);
  } else {
    console.log(Math.min(...dilivery));
  }
};
