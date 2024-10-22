const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const game = input.slice(0, n).map((val) => val.split(''));
const solvedGame = input.slice(n).map((val) => val.split(''));

let flag = 0;

const calculateBombCount = (i, j) => {
  let bombCount = 0;

  if (j + 1 < solvedGame[i].length && game[i][j + 1] === '*') bombCount++;
  if (j - 1 >= 0 && game[i][j - 1] === '*') bombCount++;
  if (i + 1 < solvedGame.length && game[i + 1][j] === '*') bombCount++;
  if (i - 1 >= 0 && game[i - 1][j] === '*') bombCount++;
  if (i + 1 < solvedGame.length && j + 1 < solvedGame[i].length && game[i + 1][j + 1] === '*') bombCount++;
  if (i + 1 < solvedGame.length && j - 1 >= 0 && game[i + 1][j - 1] === '*') bombCount++;
  if (i - 1 >= 0 && j + 1 < solvedGame[i].length && game[i - 1][j + 1] === '*') bombCount++;
  if (i - 1 >= 0 && j - 1 >= 0 && game[i - 1][j - 1] === '*') bombCount++;

  return bombCount;
};

for (let i = 0; i < solvedGame.length; i++) {
  for (let j = 0; j < solvedGame[0].length; j++) {
    if (solvedGame[i][j] === 'x' && game[i][j] === '*') flag = 1;
  }
}

for (let i = 0; i < solvedGame.length; i++) {
  for (let j = 0; j < solvedGame[0].length; j++) {
    if (flag && game[i][j] === '*') {
      solvedGame[i][j] = '*';
    }

    if (solvedGame[i][j] === 'x') {
      solvedGame[i][j] = calculateBombCount(i, j);
    }
  }
}

console.log(solvedGame.map((val) => val.join('')).join('\n'));
