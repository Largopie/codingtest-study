function solution(cipher, code) {
    return cipher.split('').filter((item, idx) => (idx+1) % code === 0).join('');
}