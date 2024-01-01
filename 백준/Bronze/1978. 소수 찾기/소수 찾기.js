const readline = require('readline');

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
  const arr = input[1].split(' ').map((val) => Number(val));
  let answer = 0;

  const findPrimeNumber = (number) => {
    let count = 0;

    for (let i = 1; i <= parseInt(number ** (1 / 2)); i++) {
      if (number % i === 0) {
        count++;
        if (i ** 2 !== number) {
          count++;
        }
      }
    }
    return count;
  };

  arr.forEach((number) => {
    if (findPrimeNumber(number) === 2) {
      answer += 1;
    }
  });

  console.log(answer);
};
