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
    solution(input);
    process.exit();
  });

function solution(input) {
  const [n, m] = input[0];
  const arr = input[1];
  let max = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const num = arr[i] + arr[j] + arr[k];
        if (num <= m) {
          max = Math.max(max, num);
        }
      }
    }
  }

  console.log(max);
}
