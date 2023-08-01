function solution(number, limit, power) {
    const answer = [];
    const divisor = (num) => {
        const div_arr = [];
        for(let i=1; i < parseInt(num**(1/2)) + 1; i++){
            if(num % i === 0){
                div_arr.push(i);
                if(i**2 !== num){
                    div_arr.push(parseInt(num / i));
                };
            };
        };
        return div_arr.length;
    };
    for(let i=1; i <= number; i++){
        let div_count = divisor(i);
        answer.push((div_count > limit) ? power : div_count);
    };
    return answer.reduce((a,b) => a+b);
}