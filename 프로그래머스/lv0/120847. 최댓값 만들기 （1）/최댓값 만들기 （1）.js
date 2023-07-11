function solution(numbers) {
    var arr1 = numbers.sort((a, b) => {
        return b - a
    });
    
    return arr1[0] * arr1[1]
}