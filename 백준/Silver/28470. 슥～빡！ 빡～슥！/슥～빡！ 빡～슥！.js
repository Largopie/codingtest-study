const [firstLine, secondLine, thirdLine, fourthLine] = require('fs').readFileSync(0).toString().trim().split('\n');

const n = Number(firstLine);
const attack = secondLine.split(' ').map((v) => +v);
const defense = thirdLine.split(' ').map((v) => +v);
const k = fourthLine.split(' ').map((v) => +v * 10);
let adrenaline = 0;

for (let i = 0; i < n; i++) {
  const attackFirst = parseInt((attack[i] * k[i]) / 10);
  const defenseFirst = parseInt((defense[i] * k[i]) / 10);

  const max = Math.max(attackFirst - defense[i], attack[i] - defenseFirst);

  adrenaline += max;
}

console.log(adrenaline);
