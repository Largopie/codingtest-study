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
  const arr = input.map((val) => val.split(' ').map((num) => +num));

  arr.forEach((yuts) => {
    const len = yuts.filter((val) => val === 0).length;

    switch (len) {
      case 1:
        console.log('A');
        break;
      case 2:
        console.log('B');
        break;
      case 3:
        console.log('C');
        break;
      case 4:
        console.log('D');
        break;
      default:
        console.log('E');
        break;
    }
  });
};
