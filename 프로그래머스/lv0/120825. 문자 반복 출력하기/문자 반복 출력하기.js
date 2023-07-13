function solution(my_string, n) {
    let answer = '';
    for(word of my_string) {
        answer+=word.repeat(n);
    }
    return answer;
}