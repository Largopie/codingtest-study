const gcd = (a, b) => {
    return b ? gcd(b, a%b) : a
}

function solution(arr) {
    let lcm = arr.shift()
    
    arr.sort((a, b) => a - b)
    
    while(arr.length !== 0) {
        const val = arr.shift()
        lcm = lcm * val / gcd(val, lcm)
    }
    
    return lcm
}