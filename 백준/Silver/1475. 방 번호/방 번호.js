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
  const inputValue = input.split('').map((val) => +val);
  const dict = {};
  let maxNumber = 0;
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    dict[i] = 0;
  }

  inputValue.forEach((val) => {
    if (val === 6) dict[9] += 1;
    else dict[val] += 1;
  });

  Object.entries(dict).forEach(([key, val]) => {
    if (answer < val) {
      maxNumber = Number(key);
      answer = val;
    }
  });

  if (maxNumber === 9) console.log(Math.ceil(answer / 2));
  else console.log(answer);
};
