function solution(name, yearning, photo) {
    const score = {};
    let answer = [];
    for(let i=0; i < name.length; i++){
        score[name[i]] = yearning[i];
    };
    
    for(arr of photo){
        let total = 0;
        for(val of arr){
            if(score[val] !== undefined) total+=score[val];
        };
        answer.push(total);
    };
    
    return answer;
}