const readline = require('readline');
const { Z_ASCII } = require('zlib');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

const solution = (input) => {
  const inputArr = input.slice(1).map((val) => +val);

  const swap = (arr, left, right) => {
    const temp = arr[left];

    arr[left] = arr[right];
    arr[right] = temp;
  };

  const partition = (arr, left, right) => {
    const pivot = arr[left + Math.round(Math.random() * (right - left))];

    while (left <= right) {
      while (arr[left] < pivot) left++;
      while (arr[right] > pivot) right--;

      if (left <= right) {
        swap(arr, left, right);
        left++;
        right--;
      }
    }
    return left;
  };

  const quickSort = (arr, left, right) => {
    if (left >= right) return arr;

    let index = partition(arr, left, right);

    if (left < index - 1) quickSort(arr, left, index - 1);
    if (index < right) quickSort(arr, index, right);

    return arr;
  };

  console.log(quickSort(inputArr, 0, inputArr.length - 1).join('\n'));
};
