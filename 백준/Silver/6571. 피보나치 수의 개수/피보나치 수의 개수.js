const input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(BigInt));

const pibonacci = [1n, 2n];
const result = [];

input.forEach(([start, end]) => {
  if (start === end && end === 0n) return;
  const [s, e] = findIdx(start, end);

  result.push(e - s + 1);
});

function findIdx(start, end) {
  let startIdx = 0;
  let endIdx = 0;

  while (true) {
    if (pibonacci.length - 1 < startIdx) {
      pibonacci.push(pibonacci[startIdx - 1] + pibonacci[startIdx - 2]);
    }

    if (start <= pibonacci[startIdx]) break;

    startIdx += 1;
  }

  endIdx = startIdx;

  while (true) {
    if (pibonacci.length - 1 < endIdx) {
      pibonacci.push(pibonacci[endIdx - 1] + pibonacci[endIdx - 2]);
    }

    if (end <= pibonacci[endIdx]) break;

    endIdx += 1;
  }

  if (end < pibonacci[endIdx]) {
    return [startIdx, endIdx - 1];
  }

  return [startIdx, endIdx];
}

console.log(result.join('\n'));
