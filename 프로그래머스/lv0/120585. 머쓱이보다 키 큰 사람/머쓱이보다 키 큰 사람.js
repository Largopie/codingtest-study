function solution(array, height) {
    let answer = 0;
    for (val of array) {
        if (val > height) answer += 1;
    }
    return answer;
}