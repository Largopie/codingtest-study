function solution(n) {
    let answer = 0;
    for(let i = 1; i < parseInt(n**(1/2))+1; i++){
        if(n % i === 0) {
            answer+=i;
            console.log(i);
            if(i**2 !== n){
                answer+=(parseInt(n/i));
            }
        }
    }
    return answer;
}