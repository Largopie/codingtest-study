let [r, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function getSliceArray(startIndex, endIndex) {
  return input.slice(startIndex, endIndex + 1);
}

const answer = [];
let count = 0;
let startIdx = 0;

while (count < Number(r)) {
  const wordCount = Number(input[startIdx]);
  const words = getSliceArray(startIdx + 1, startIdx + wordCount);

  const attendeeCount = Number(input[startIdx + wordCount + 1]);
  const passwordInfos = getSliceArray(startIdx + wordCount + 2, startIdx + wordCount + 2 + attendeeCount - 1);

  const passwords = [];

  passwords.push(`Scenario #${count + 1}:`);

  passwordInfos.forEach((passwordInfo) => {
    let password = '';
    const passwordIdxs = passwordInfo.split(' ').slice(1).map(Number);

    passwordIdxs.forEach((passwordIdx) => {
      password += words[passwordIdx];
    });

    passwords.push(password);
  });

  answer.push(passwords.join('\n'));

  startIdx = startIdx + wordCount + 2 + attendeeCount;
  count += 1;
}

console.log(answer.join('\n\n'));
