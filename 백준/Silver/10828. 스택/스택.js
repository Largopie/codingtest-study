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
  const inputArr = input.slice(1).map((val) => val.split(' '));
  const stack = [];
  const answer = [];

  inputArr.forEach(([command, num], idx) => {
    switch (command) {
      case 'push':
        stack.push(Number(num));
        break;
      case 'pop':
        if (stack.length) answer.push(stack.pop());
        else answer.push(-1);
        break;
      case 'size':
        answer.push(stack.length);
        break;
      case 'empty':
        answer.push(stack.length ? 0 : 1);
        break;
      default:
        answer.push(stack.at(-1) ?? -1);
    }
  });

  console.log(answer.join('\n'));
};
