function solution(word) {
    const alphabet = ['','A', 'E', 'I', 'O', 'U']
    const len = alphabet.length
    const dict = []
    
    for(let a = 0; a < len; a++) {
        for(let b = 0; b < len; b++) {
            for(let c = 0; c < len; c++) {
                for(let d = 0; d < len; d++) {
                    for(let e = 0; e < len; e++) {
                        const makeWord = alphabet[a]+alphabet[b]+alphabet[c]+alphabet[d]+alphabet[e]
                        if(makeWord === '') continue
                        dict.push(makeWord)
                    }
                }
            }
        }
    }
    
    const uniqueDict = [...new Set(dict)]
    uniqueDict.sort()
    
    return uniqueDict.findIndex((element) => element === word)+1
}

