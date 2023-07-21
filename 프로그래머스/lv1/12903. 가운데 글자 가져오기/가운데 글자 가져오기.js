function solution(s) {
    const len = s.length;
    const half_len = parseInt(len / 2);
    return (len % 2 == 0) ? s.slice(half_len - 1, half_len + 1) : s[half_len];
}