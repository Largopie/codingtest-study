function solution(s1, s2) {
    let answer = 0;
    for(var i = 0; i < s1.length; i++){
        for(var j =0; j < s2.length; j++) {
            if (s1[i] === s2[j]) {
                answer += 1;
                break;
            }
        }
    }
    return answer
}