function solution(survey, choices) {
    let answer = ''
    
    const test = {
        "R" : 0,
        "T" : 0,
        "F" : 0,
        "C" : 0,
        "M" : 0,
        "J" : 0,
        "A" : 0,
        "N" : 0,
    }
    
    const choose = (val, num) => {
        const val1 = val[0], val2 = val[1]
        switch(num) {
            case 1:
                return test[val1]+=3;
            case 2:
                return test[val1]+=2;
            case 3:
                return test[val1]+=1;
            case 4:
                return test[val1]+=0;
            case 5:
                return test[val2]+=1;
            case 6:
                return test[val2]+=2;
            case 7:
                return test[val2]+=3;
        }
    }

    for(let i=0; i < survey.length; i++){
        choose(survey[i], choices[i])
    }
    
    if(test['R'] >= test['T']) answer+='R';
    else answer+='T';
    
    if(test['C'] >= test['F']) answer+='C';
    else answer+='F';
    
    if(test['J'] >= test['M']) answer+='J';
    else answer+='M';
    
    if(test['A'] >= test['N']) answer+='A';
    else answer+='N';
    
    return answer
}