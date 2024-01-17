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
  const inputArr = input.slice(1);
  const queue = [];
  const answer = [];

  inputArr.forEach((val) => {
    const queueSize = queue.length;

    if (val.includes('push')) queue.push(val.split(' ')[1]);
    else if (val === 'pop') answer.push(queueSize ? queue.shift() : -1);
    else if (val === 'size') answer.push(queueSize);
    else if (val === 'empty') answer.push(queueSize ? 0 : 1);
    else if (val === 'front') answer.push(queueSize ? queue[0] : -1);
    else if (val === 'back') answer.push(queueSize ? queue.at(-1) : -1);
  });

  console.log(answer.join('\n'));
};
