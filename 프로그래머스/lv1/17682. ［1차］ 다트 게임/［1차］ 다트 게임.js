function solution(dartResult) {
    let number = '';
    let answer = [];
    
    for(let i=0; i < dartResult.length; i++){
        if(isNaN(dartResult[i]) === false) number+=dartResult[i];
        else{
            if(dartResult[i] === "S"){
                answer.push(Number(number));
                number = '';
            } else if(dartResult[i] === "D"){
                answer.push(Number(number)**2);
                number = '';
            } else if(dartResult[i] === "T"){
                answer.push(Number(number)**3);
                number = '';
            } else if(dartResult[i] === "*"){
                answer[answer.length-1] = answer.at(-1)*2;
                answer[answer.length-2] = answer.at(-2)*2;
            } else if(dartResult[i] === "#"){
                answer[answer.length-1] = -answer.at(-1);
            };
        };
    };
    return answer.reduce((a,b) => a+b);
}