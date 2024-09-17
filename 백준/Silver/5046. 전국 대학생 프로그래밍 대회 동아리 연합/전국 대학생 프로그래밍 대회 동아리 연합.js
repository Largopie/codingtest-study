function solution(input) {
  let answer = undefined;
  const [N, B, H, W] = input[0].split(' ').map(Number);
  const infos = input.slice(1);
  const hotelInfos = [];

  for (let i = 0; i < infos.length; i += 2) {
    hotelInfos.push([...infos.slice(i, i + 2)]);
  }

  hotelInfos.forEach(([c, p]) => {
    const availablePeople = p.split(' ').map(Number);
    const cost = Number(c);

    const isOverCost = cost * N > B;
    const isAvailablePeople = availablePeople.some((ele) => ele >= N);

    if (!isOverCost && isAvailablePeople) {
      answer = answer ? Math.min(answer, cost * N) : cost * N;
    }
  });

  return answer ?? 'stay home';
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
