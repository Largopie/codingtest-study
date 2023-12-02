function solution(elements) {
    const len = elements.length;
    const answer = []
    
    for(let i = 1; i <= len; i++) {
        for(let n = 0; n < len; n++) {
            const slice = elements.slice(n, n+i)
            const sliceLength = slice.length
            
            if(sliceLength < i) {
                slice.push(...elements.slice(0, i - sliceLength))
            }
            answer.push(slice.reduce((a,b) => a + b))
        }
    }
    
    return new Set(answer).size
}