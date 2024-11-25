const [firstLine, input] = require('fs').readFileSync(0).toString().trim().split('\n');

const n = Number(firstLine);
const arr = input
  .split(' ')
  .map((v) => +v)
  .sort((a, b) => b - a);

const standardGrades = getStandardGrade(n, arr);
const results = Array(9).fill(0);

arr.forEach((g) => {
  results[standardGrades.findIndex((val) => val <= g)] += 1;
});

console.log(results.join('\n'));

function getStandardGrade(total, grades) {
  const gradeIndexs = [];
  const percentages = [4, 11, 23, 40, 60, 77, 89, 96, 100];

  percentages.forEach((p) => gradeIndexs.push(Math.floor(total * (p / 100)) - 1));

  return gradeIndexs.map((index) => grades[index]);
}
