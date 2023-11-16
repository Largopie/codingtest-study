function solution(s) {
    let zeroCount = 0
    let transCount = 0
    
    while(s !== '1') {
        const count = s.split('').filter((char) => char === '0').length
        
        s = s.replaceAll('0', '').length.toString(2)
        transCount+=1
        zeroCount+=count
    }
    
    return [transCount, zeroCount]
    
}