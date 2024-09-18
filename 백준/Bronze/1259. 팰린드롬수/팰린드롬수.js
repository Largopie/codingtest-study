function solution(input) {
  const arr = input.slice(0, input.length - 1);
  const answer = [];

  arr.forEach((nums) => {
    const len = nums.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (nums[i] !== nums[len - i - 1]) {
        answer.push('no');
        return;
      }
    }

    answer.push('yes');
  });

  return answer.join('\n');
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line.split('').map(Number));
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
