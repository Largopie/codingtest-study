function solution(names) {
    const answer = [];
    for(let i=0; i < names.length; i+=5){
        answer.push(names[i]);
    };
    
    return answer;
}