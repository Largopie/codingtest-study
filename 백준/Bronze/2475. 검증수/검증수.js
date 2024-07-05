function solution(input) {
  return (
    input.reduce((acc, cur) => {
      return acc + cur ** 2;
    }, 0) % 10
  );
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline
  .on('line', function (line) {
    const input = line.split(' ').map(Number);

    console.log(solution(input));
  })
  .on('close', function () {
    process.exit();
  });
