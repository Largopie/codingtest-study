function solution(answers) {
    const stu1 = [1,2,3,4,5];
    const stu2 = [2,1,2,3,2,4,2,5];
    const stu3 = [3,3,1,1,2,2,4,4,5,5];
    const answer = [];
    let stu1_a = 0, stu2_a = 0, stu3_a = 0;
    
    for(let i=0; i < answers.length; i++){
        if(answers[i] === stu1[i % stu1.length]) stu1_a+=1;
        if(answers[i] === stu2[i % stu2.length]) stu2_a+=1;
        if(answers[i] === stu3[i % stu3.length]) stu3_a+=1;
    };
    
    const max = Math.max(stu1_a, stu2_a, stu3_a);
    if(stu1_a === max) answer.push(1);
    if(stu2_a === max) answer.push(2);
    if(stu3_a === max) answer.push(3);
    
    return answer;
}