function solution(n) {
    const pibonacci = [1, 2]
    if (n === 1) return 1
    if (n === 2) return 2
    
    for(let i = 3; i <= n; i++) {
        pibonacci.push((pibonacci.at(-1) + pibonacci.at(-2)) % 1234567)
    }
    
    return pibonacci.at(-1)
}