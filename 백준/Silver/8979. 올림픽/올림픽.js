const [firstInput, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const countryInfo = input.map((line) => line.split(' ').map(Number));
const [N, K] = firstInput.split(' ').map(Number);

countryInfo.sort(([aId, aGold, aSilver, aBronze], [bId, bGold, bSilver, bBronze]) => {
  if (aGold < bGold) return 1;
  else if (aGold > bGold) return -1;
  else {
    if (aSilver < bSilver) return 1;
    else if (aSilver > bSilver) return -1;
    else {
      if (aBronze < bBronze) return 1;
      else return -1;
    }
  }
});

const ansIdx = countryInfo.findIndex((ele) => ele[0] === K);

for (let i = ansIdx - 1; i >= 0; i--) {
  if (countryInfo[ansIdx].slice(1).some((ele, idx) => ele !== countryInfo[i][idx + 1])) {
    console.log(i + 2);
    return;
  }
}

console.log(ansIdx + 1);
