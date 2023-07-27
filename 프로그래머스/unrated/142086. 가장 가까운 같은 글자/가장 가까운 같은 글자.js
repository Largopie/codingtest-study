function solution(s) {
    const word = {};
    const answer = [];
    for (let i=0; i < s.length; i++){
        if(Object.keys(word).includes(s[i])){
            answer.push(i - word[s[i]]);
        } else answer.push(-1)
        word[s[i]] = i;
    }
    return answer;
}