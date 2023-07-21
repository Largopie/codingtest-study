function solution(arr, divisor) {
    let new_arr = arr.filter((item) => item % divisor === 0);
    return (new_arr.length === 0) ? [-1] : new_arr.sort((a,b) => a-b);
}