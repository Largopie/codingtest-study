function solution(left, right) {
    function divisor_count(num) {
        let count = 0;
        for(let i=1; i <= parseInt(num**(1/2)+1); i++){
            if(num % i === 0){
                count+=1;
                if(i**2 !== num) count+=1;
            }
        };
        return count;
    };
    let answer = 0;
    for(let i=left; i <= right; i++){
        (divisor_count(i) % 2 === 0) ? answer+=i : answer-=i;
    };
    
    return answer;
}