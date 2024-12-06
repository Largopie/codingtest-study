const [num, firstLine, secondLine] = require('fs').readFileSync(0).toString().trim().split('\n');

const n = Number(num);
let a = firstLine.split(' ').map((v) => +v);
let b = secondLine.split(' ').map((v) => +v);

if (a.every((val, idx) => val === b[idx])) {
  console.log(1);
  return;
}

for (let i = n - 1; i > 0; i--) {
  a = selection_sort(a, i);

  if (a.every((val, idx) => val === b[idx])) {
    console.log(1);
    return;
  }
}

console.log(0);

function selection_sort(arr, pointer) {
  let max = [pointer, arr[pointer]];

  for (let i = pointer; i >= 0; i--) {
    if (max[1] < arr[i]) {
      max = [i, arr[i]];
    }
  }

  const pivot = arr[pointer];

  arr[pointer] = max[1];
  arr[max[0]] = pivot;

  max = [pointer, arr[pointer]];

  return arr;
}
