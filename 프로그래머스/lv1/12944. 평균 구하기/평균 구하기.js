function solution(arr) {
    let arr_sum = arr.reduce((a,b) => a + b);
    return arr_sum / arr.length;
}