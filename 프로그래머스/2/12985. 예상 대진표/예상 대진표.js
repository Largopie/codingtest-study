function solution(n,a,b)
{
    let count = 1, max = Math.max(a, b), min = Math.min(a, b)
    
    while(max !== min + 1 || min % 2 === 0) {
        count++
        max = Math.ceil(max / 2)
        min = Math.ceil(min / 2)
    }
    
    return count
}