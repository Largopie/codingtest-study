const [t, input] = require('fs').readFileSync(0).toString().trim().split('\n');

let count = 0;
const [n, k] = t.split(' ').map((v) => +v);
const arr = input.split(' ').map((v) => +v);

quick_sort(arr, 0, arr.length - 1);

if (count < k) {
  console.log(-1);
}

function quick_sort(arr, firstIndex, lastIndex) {
  if (firstIndex < lastIndex) {
    const q = partition(arr, firstIndex, lastIndex);

    quick_sort(arr, firstIndex, q - 1);
    quick_sort(arr, q + 1, lastIndex);
  }
}

function partition(arr, p, r) {
  const pivot = arr[r];
  let idx = p - 1;

  for (let i = p; i < r; i++) {
    if (arr[i] <= pivot) {
      count += 1;
      const temp = arr[++idx];

      arr[idx] = arr[i];
      arr[i] = temp;

      if (count === k) {
        console.log(arr.join(' '));
        return;
      }
    }
  }

  if (idx + 1 !== r) {
    count += 1;
    const temp = arr[idx + 1];

    arr[idx + 1] = arr[r];
    arr[r] = temp;
    if (count === k) {
      console.log(arr.join(' '));
      return;
    }
  }

  return idx + 1;
}
