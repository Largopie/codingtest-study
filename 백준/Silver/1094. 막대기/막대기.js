const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

const bars = [64];

while (true) {
  if (bars.reduce((acc, cur) => acc + cur, 0) === input) {
    console.log(bars.length);
    return;
  }

  const minLengthBar = bars.shift() / 2;
  bars.unshift(minLengthBar);

  if (bars.reduce((acc, cur) => acc + cur, 0) < input) {
    bars.unshift(minLengthBar);
  }
}
