function solution(s, skip, index) {
    const alphabet = []
    for(let i=97; i <= 122; i++){
        let asc = String.fromCharCode(i)
        if(skip.includes(asc) === false) alphabet.push(asc);
    }
    
    let answer = ''
    
    for(c of s){
        let idx = alphabet.indexOf(c)+index
        if(idx >= alphabet.length) idx %= alphabet.length;
        answer+=alphabet[idx]
    }
    return answer
}