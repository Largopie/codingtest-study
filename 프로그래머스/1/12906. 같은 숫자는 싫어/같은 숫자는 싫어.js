function solution(arr) {
    return arr.filter((val, idx, array) => array[idx+1] !== val)
}