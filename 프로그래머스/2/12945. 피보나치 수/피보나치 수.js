function solution(n) {
    const f = [0, 1]
    
    for(let i = 2; i <= n; i++) {
        const val = (f.at(-1) + f.at(-2)) % 1234567
        f.push(val)
    }
    
    return f[n];
}