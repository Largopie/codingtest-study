const [firstInput, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const countryInfo = input.map((line) => line.split(' ').map(Number));
const [N, K] = firstInput.split(' ').map(Number);
const prizes = Array.from({ length: N }, () => 0);

countryInfo.sort((a, b) => {
  if (a[1] > b[1]) return -1;
  else if (a[1] < b[1]) return 1;
  else {
    if (a[2] > b[2]) return -1;
    else if (a[2] < b[2]) return 1;
    else {
      if (a[3] > b[3]) return -1;
      else return 1;
    }
  }
});

let p = 0;

countryInfo.forEach(([countryId, ...prize], idx) => {
  if (countryInfo[idx - 1]) {
    const [beforeCountryId, ...beforePrize] = countryInfo[idx - 1];

    if (beforePrize.every((val, index) => val === prize[index])) {
      prizes[countryId - 1] = p;
    } else {
      prizes[countryId - 1] = ++p;
    }
  } else prizes[countryId - 1] = ++p;
});

console.log(prizes[K - 1]);
