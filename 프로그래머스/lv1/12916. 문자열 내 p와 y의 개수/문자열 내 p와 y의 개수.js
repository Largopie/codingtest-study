function solution(s){
    const answer = [0, 0];
    for(str of s.toLowerCase()){
       if(str === 'p') answer[0]+=1;
        else if(str === 'y') answer[1]+=1;
    }
    
    return (answer[0] === answer[1] || answer.reduce((a,b) => a+b) === 0) ? true : false;
}