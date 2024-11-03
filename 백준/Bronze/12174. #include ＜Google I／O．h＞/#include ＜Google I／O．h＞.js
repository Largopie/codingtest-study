const [t, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const testCase = [];

for (let i = 0; i < input.length; i += 2) {
  const val = [];
  const replace = input[i + 1].replaceAll('O', 0).replaceAll('I', 1);
  const len = replace.length / Number(input[i]);

  for (let i = 0; i < replace.length; i += len) {
    const slice = replace.substring(i, i + len);

    val.push(String.fromCharCode(parseInt(slice, 2)));
  }

  testCase.push(val.join(''));
}

console.log(testCase.map((val, idx) => `Case #${idx + 1}: ${val}`).join('\n'));
