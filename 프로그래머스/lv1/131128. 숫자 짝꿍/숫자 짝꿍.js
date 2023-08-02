function solution(X, Y) {
    const answer = [];
    const X_count = {};
    for(let i=0; i <= 9; i++) X_count[i] = 0;
    for(val of X) X_count[val]+=1;
    
    for(num of Y){
        if(X_count[num] > 0){
            answer.push(num);
            X_count[num]-=1;
        };
    };
    if(answer.length === 0) return "-1";
    answer.sort((a,b) => b-a);
    return answer.reduce((a,b) => Number(a) + Number(b)) === 0 ? "0" : answer.join('');
}