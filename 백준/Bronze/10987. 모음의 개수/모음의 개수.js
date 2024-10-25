const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const matchAlphabets = input.match(/[aeiou]/g);

console.log(matchAlphabets ? matchAlphabets.length : 0);
