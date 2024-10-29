const [fLine, sLine] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function getWorkMinutes(startTime, endTime) {
  const [startHours, startMinutes] = startTime.split(':').map((v) => +v);
  const [endHours, endMinutes] = endTime.split(':').map((v) => +v);

  return (endHours - startHours) * 60 + endMinutes - startMinutes;
}

function deliveryCountPerDay(startTime, endTime, deliveryMinutes) {
  const workMinutes = getWorkMinutes(startTime, endTime);
  const divide = workMinutes / deliveryMinutes;

  if (divide === Math.floor(divide)) return divide - 1;

  return Math.floor(divide);
}

function getAfterMinutes(currentTime, minutes) {
  const [currentHours, currentMinutes] = currentTime.split(':').map((v) => +v);
  const plusMinutes = currentMinutes + minutes;
  const afterHours = currentHours + Math.floor(plusMinutes / 60);
  const afterMinutes = plusMinutes % 60;

  return `${String(afterHours).padStart(2, '0')}:${String(afterMinutes).padStart(2, '0')}`;
}

const [startTime, endTime] = fLine.split(' ');
const [N, T] = sLine.split(' ').map((v) => +v);

const deliveryPerDay = deliveryCountPerDay(startTime, endTime, T);

const afterDay = Math.floor(N / deliveryPerDay);
const afterMinutes = ((N % deliveryPerDay) + 1) * T;

console.log([afterDay, getAfterMinutes(startTime, afterMinutes)].join('\n'));
