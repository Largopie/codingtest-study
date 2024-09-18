// a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다
// 1층의 3호에 살려면 자신의 아래0층의 1호부터 3호까지 사람들의 수의 합만큼 사람들을 데려와야 함
// 0층의 i호에는 i명의 사람이 삼

function countLivingPeople(a, b) {
  const arr = Array.from({ length: a }, () => Array(b).fill(0));

  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      if (i === 0) arr[i][j] = j + 1;
      else arr[i][j] = arr[i - 1].slice(0, j + 1).reduce((acc, cur) => acc + cur, 0);
    }
  }

  return arr;
}

function solution(input) {
  const answer = [];
  const arr = input.slice(1);
  const tests = [];

  for (let i = 0; i < arr.length - 1; i += 2) {
    tests.push([arr[i], arr[i + 1]]);
  }

  tests.forEach(([a, b]) => {
    const sum = countLivingPeople(a, b)
      .at(-1)
      .reduce((acc, cur) => acc + cur, 0);

    answer.push(sum);
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
  input.push(Number(line));
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
