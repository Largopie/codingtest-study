function solution(arr) {
    arr = arr.filter((item) => item !== Math.min(...arr));
    return (arr.length === 0) ? [-1] : arr;
}