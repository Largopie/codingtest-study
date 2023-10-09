function solution(s) {
    let min = Infinity, max = -Infinity;
    const numbers = s.split(' ').map((value) => Number(value));
    
    for(number of numbers) {
        min = Math.min(min, number);
        max = Math.max(max, number);
    }
    
    return min + " " + max;
}