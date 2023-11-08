function solution(s) {
  let max = 0;
  const len = s.length;
  if (len === 1) return 1;
  if (len === 0) return 0;

  for (let p = 0; p < len - 1; p++) {
    if (s[p] === s[p + 1]) {
      const palindrome = [s[p], s[p + 1]];
      let prevPointer = p - 1,
        nextPointer = p + 2;

      while (prevPointer >= 0 && nextPointer <= len) {
        if (s[prevPointer] === s[nextPointer]) {
          palindrome.unshift(s[prevPointer]);
          palindrome.push(s[nextPointer]);

          prevPointer -= 1;
          nextPointer += 1;
        } else break;
      }

      max = Math.max(max, palindrome.length);
    }
  }

  for (let p = 1; p < len; p++) {
    const palindrome = [s[p]];
    for (let i = 1; i <= p; i++) {
      if (s[p - i] === s[p + i]) {
        palindrome.unshift(s[p - i]);
        palindrome.push(s[p + i]);
      } else break;
    }

    max = Math.max(max, palindrome.length);
  }

  return max;
}