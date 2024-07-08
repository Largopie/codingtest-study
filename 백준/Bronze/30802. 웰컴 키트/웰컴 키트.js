function solution(input) {
  let tshirts = 0;
  const [n] = input[0];
  const arr = input[1];
  const [t, p] = input[2];

  arr.forEach((order) => {
    tshirts += Math.ceil(order / t);
  });

  return tshirts + '\n' + Math.floor(n / p) + ' ' + (n % p);
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

readline
  .on('line', function (line) {
    input.push(line.split(' ').map(Number));
  })
  .on('close', function () {
    console.log(solution(input));
    process.exit();
  });
