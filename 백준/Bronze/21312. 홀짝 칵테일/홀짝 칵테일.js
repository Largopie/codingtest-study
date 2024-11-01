const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const arr = [];

const getCombinations = (arr, selectNumber) => {
  const results = [];

  if (selectNumber === 1) return arr.map((val) => [val]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((c) => [fixed, ...c]);

    results.push(...attached);
  });

  return results;
};

for (let i = 1; i <= input.length; i++) {
  const combinations = getCombinations(input, i);

  combinations.forEach((val) => {
    if (val.length === 1) {
      arr.push(val[0]);
      return;
    }

    arr.push(val.reduce((acc, cur) => acc * cur, 1));
  });
}

const filteredOddNumber = arr.filter((val) => val % 2 === 1).sort((a, b) => a - b);

if (filteredOddNumber.length !== 0) {
  console.log(filteredOddNumber.at(-1));
} else {
  console.log(Math.max(...arr));
}
