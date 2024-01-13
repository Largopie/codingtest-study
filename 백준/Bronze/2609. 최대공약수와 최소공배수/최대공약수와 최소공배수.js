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
  const inputArr = input.split(' ').map((val) => Number(val));

  const findDivisor = (num) => {
    const divisors = [];

    for (let i = 1; i <= parseInt(num ** (1 / 2)); i++) {
      if (num % i === 0) {
        divisors.push(i);
        if (i ** 2 !== num) divisors.push(num / i);
      }
    }
    divisors.sort((a, b) => a - b);

    return divisors;
  };

  const big = Math.max(...inputArr);
  const small = Math.min(...inputArr);

  const firstNumberDivisor = findDivisor(big);
  const secondNumberDivisor = findDivisor(small);
  const gcd = Math.max(...firstNumberDivisor.filter((val) => secondNumberDivisor.includes(val)));

  console.log(gcd);
  console.log((big * small) / gcd);
};
