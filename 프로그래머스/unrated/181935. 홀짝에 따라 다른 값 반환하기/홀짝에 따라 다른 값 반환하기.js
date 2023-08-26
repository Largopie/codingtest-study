function solution(n) {
    let start = (n % 2 === 1) ? 1 : 2;
    const arr = []
    for(let i=0; i <= n; i++){
        if(n % 2 === 0 && i % 2 === 0) arr.push(i**2)
        if(n % 2 === 1 && i % 2 === 1) arr.push(i)
    }
    return arr.reduce((a,b) => a+b)
}