function solution(numbers) {
    const result = numbers.reduce((sum, currValue) => {
        return sum + currValue;
    }, 0);
    
    return result / numbers.length
}