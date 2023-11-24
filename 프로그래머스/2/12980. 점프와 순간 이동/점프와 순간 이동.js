// 한번에 K칸 점프 -> 건전지 K
function solution(n){
    let count = 0
    while(n !== 0) {
        if (n % 2 == 1) {
            n -= 1
            count++
        } else {
            n = n / 2
        }
    }
    
    return count
}