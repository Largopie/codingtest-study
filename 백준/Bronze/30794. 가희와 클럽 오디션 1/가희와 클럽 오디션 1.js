const [lv, judgement] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const level = Number(lv);

switch (judgement) {
  case 'miss':
    console.log(0);
    return;
  case 'bad':
    console.log(level * 200);
    return;
  case 'cool':
    console.log(level * 400);
    return;
  case 'great':
    console.log(level * 600);
    return;
  default:
    console.log(level * 1000);
}
