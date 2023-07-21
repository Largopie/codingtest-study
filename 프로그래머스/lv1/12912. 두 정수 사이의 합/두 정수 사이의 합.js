function solution(a, b) {
    let answer = 0;
    const big = Math.max(a,b);
    const small = Math.min(a,b);
    for(let i=small; i<=big; i++){
        answer+=i;
    }
    return answer;
}