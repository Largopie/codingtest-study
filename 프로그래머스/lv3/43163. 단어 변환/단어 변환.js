// 한 번에 한 개의 알파벳 변환 가능
// words에 있는 단어로만 변환 가능
function solution(begin, target, words) {
    if(!words.includes(target)) return 0
    
    const checkPossibleChange = (changed, word) => {
        let dif = 0;
        for(let i=0; i < changed.length; i++){
            if(changed[i] != word[i]) dif++
            if(dif > 1) return false
        }
        return true
    }
    
    let answer = Infinity;
    const changeWord = (changed, result, searchable) => {
        if(changed === target) answer = Math.min(answer, result)
        
        const possible = [...searchable]
        
        for(val of searchable){
            if(checkPossibleChange(changed, val)) {
                possible.splice(possible.indexOf(val), 1)
                changeWord(val, result + 1, possible)
            }
        }
    }
    
    changeWord(begin, 0, words)
    
    return answer
}