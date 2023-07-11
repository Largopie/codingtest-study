function solution(n) {
    let answer = 0;
    for (var i = 1; i <= parseInt(n**(1/2)); i++){
        if (n % i == 0) {
            if (i**2 == n) {
                answer+=1
            } else {
                answer +=2
            }
        }
    }
    return answer
}