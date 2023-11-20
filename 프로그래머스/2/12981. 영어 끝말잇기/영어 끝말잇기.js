function solution(n, words) {
    const dictionary = {}
    const length = words.length;
    let count = 0;
    
    
    for(let i = 0; i < length; i++) {
        if(words[i - 1] !== undefined && (words[i - 1].at(-1) !== words[i].at(0))) break
        if(dictionary[words[i]]) break
        dictionary[words[i]] = true
        count++
    }
    
    
    if(words.length === count) return [0, 0]
    
    return [(count % n) + 1, parseInt(count / n) + 1]
}