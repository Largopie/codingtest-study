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
  const inputArr = input.slice(1).map((val) => val.split(' ').map((num) => +num));

  const findGreatestCommonFactor = (num1, num2) => {
    const div1 = divisor(num1);
    const div2 = divisor(num2);

    const filter = div1.filter((val) => div2.includes(val));

    return Math.max(...filter);
  };

  const divisor = (num) => {
    const arr = [];

    for (let i = 1; i <= parseInt(num ** (1 / 2)); i++) {
      if (num % i === 0) {
        arr.push(i);
        if (i ** 2 !== num) arr.push(num / i);
      }
    }
    return arr;
  };

  inputArr.forEach(([num1, num2]) => {
    const max = findGreatestCommonFactor(num1, num2);

    console.log((num1 * num2) / max);
  });
};
