function solution(N, stages) {
    const challenge = {};
    const answer = [];
    let people = stages.length;
    for(let i=1; i <= N; i++) challenge[i] = 0;
    
    for(val of stages){
        for(let i=1; i < val; i++) challenge[i]+=1;
    }
    
    for(let i=1; i <= N; i++){
        let fail = people - challenge[i];
        challenge[i] = fail / people;
        people -= fail
    };
    
    const challenge_sort = Object.entries(challenge).sort((a,b) => b[1] - a[1]);
    for(val of challenge_sort) answer.push(Number(val[0]));
    return answer;
}