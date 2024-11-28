const [firstLine, ...input] = require('fs').readFileSync(0).toString().trim().split('\n');

const t = Number(firstLine);
const answer = [];

let team = {};

input.forEach((val, idx) => {
  const data = val.split(' ').map((v) => +v);

  if (data.length === 2) {
    if (idx !== 0) {
      answer.push(getResult(team));
      team = {};
    }

    for (let i = 1; i <= data[0]; i++) {
      team[i] = { win: 0, lose: 0 };
    }
  } else {
    const [a, b, p, q] = data;

    team[a].win += p;
    team[a].lose += q;

    team[b].win += q;
    team[b].lose += p;
  }
});

answer.push(getResult(team));

console.log(answer.join('\n'));

function getW(win, lose) {
  return Math.floor((win ** 2 / (win ** 2 + lose ** 2)) * 1000);
}

function getResult(team) {
  const result = [];

  Object.entries(team).forEach(([tn, { win, lose }]) => {
    if (win === 0 && lose === 0) result.push(0);
    else result.push(getW(win, lose));
  });

  return `${Math.max(...result)}\n${Math.min(...result)}`;
}
