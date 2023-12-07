function solution(citations) {
    const n = citations.length
    let h = Math.max(...citations)
    
    while(h !== 0) {
        const citation =  citations.filter((val) => val >= h).length
        const another = n - citation
        if(citation >= h && another <= h) {
            return h
        }
        h--;
    }
    
    return 0
}