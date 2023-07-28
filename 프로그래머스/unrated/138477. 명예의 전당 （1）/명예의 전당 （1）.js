function solution(k, score) {
    const answer = [];
    const honor = [];
    
    for(let i=0; i < score.length; i++){
        if(honor.length < k) {
            honor.push(score[i]);
            answer.push(Math.min(...honor));
        }
        else {
            honor.sort((a,b) => b-a);
            if(honor.at(-1) < score[i]){
                honor.pop();
                honor.push(score[i]);
            };
            answer.push(Math.min(...honor));
        }
    }
    return answer;
}