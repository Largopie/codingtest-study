function solution(k, m, score) {
    let answer = 0;
    score.sort((a,b) => b-a);
    score = score.slice(0, score.length - score.length % m);
    for(let i=0; i < score.length; i+=m){
        let min = score.slice(i, i+m);
        answer+=(Math.min(...min) * min.length)
    }
    return answer;
}