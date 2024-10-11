const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = 0;

input.forEach((line) => {
  const matchJoke = line.match(/joke/g);

  if (matchJoke) answer += matchJoke.length;
});

console.log(answer);
