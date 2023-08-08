function solution(babbling) {
    let answer = 0;
    const isUpperCase = (val) => {
        return val.toLowerCase() !== val ? true : false;
    }
    const change = {
        "aya": "A",
        "ye": "B",
        "woo": "C",
        "ma": "D"
    };

    for(let i=0; i < babbling.length; i++){
        for(word in change){
            babbling[i] = babbling[i].replaceAll(word, change[word]);
        };
    };
    
    
    let flag = 1;
    for(let i=0; i < babbling.length; i++){
        for(c of babbling[i]){
            if(isUpperCase(c) === false){
                flag = 0;
                break;
            }else{
                if(babbling[i].includes(c.repeat(2))){
                    flag = 0;
                    break;
                }
            }
        }
        if(flag) answer+=1;
        flag = 1;
    }
    
    return answer;
    
    
    
}