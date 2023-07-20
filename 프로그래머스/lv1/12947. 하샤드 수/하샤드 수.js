function solution(x) {
    const sumX = String(x).split('').map(Number).reduce((a,b) => a+b);
    return (x % sumX === 0) ? true : false;
}