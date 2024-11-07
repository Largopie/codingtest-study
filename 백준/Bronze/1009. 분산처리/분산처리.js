const [n, ...input] = require('fs').readFileSync(0).toString().trim().split('\n');

const arr = input.map((v) => v.split(' ').map((v) => +v));

const newArr = arr.map(([a, b]) => {
  const aList = [];
  let idx = 1;

  while (true) {
    const val = a ** idx % 10;

    if (aList.includes(val)) break;

    aList.push(val);
    idx++;
  }

  const newB = b % aList.length;
  const returnValue = aList[newB === 0 ? aList.length - 1 : newB - 1];

  return returnValue === 0 ? 10 : returnValue;
});

console.log(newArr.join('\n'));
