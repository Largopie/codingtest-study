const word = require('fs').readFileSync(0).toString().trim();

const HG = {
  a: 'aespa',
  b: 'baekjoon',
  c: 'cau',
  d: 'debug',
  e: 'edge',
  f: 'firefox',
  g: 'golang',
  h: 'haegang',
  i: 'iu',
  j: 'java',
  k: 'kotlin',
  l: 'lol',
  m: 'mips',
  n: 'null',
  o: 'os',
  p: 'python',
  q: 'query',
  r: 'roka',
  s: 'solvedac',
  t: 'tod',
  u: 'unix',
  v: 'virus',
  w: 'whale',
  x: 'xcode',
  y: 'yahoo',
  z: 'zebra',
};

let pointer = 0;
const arr = [];

while (true) {
  const firstChar = word[pointer];
  const findWord = HG[firstChar];
  const wordLen = pointer + findWord.length;

  if (word.substring(pointer, wordLen) === findWord) {
    arr.push(firstChar);
    pointer = pointer + findWord.length;

    if (pointer >= word.length - 1) break;
  } else {
    console.log('ERROR!');
    return;
  }
}

console.log(`It's HG!\n${arr.join('')}`);
