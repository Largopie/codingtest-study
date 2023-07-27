function solution(a, b, n) {
    let answer = 0;
    let now = 0;
    while(n >= a){
        now = parseInt(n / a) * b;
        answer += now;
        n = now + (n % a);
        console.log(n, now, answer)
    };
    
    return answer;
}