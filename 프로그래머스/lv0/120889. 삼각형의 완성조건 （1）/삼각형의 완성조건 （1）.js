function solution(sides) {
    const long = Math.max(...sides);
    return sides.reduce((a,b) => a+b) > 2*long ? 1 : 2
}