const validateBracket = (array, pair) => {
    const copyArray = [...array]
    const validate = []

    while(copyArray.length !== 0) {
        const val = copyArray.shift()
        if(!!pair[val]) {
            if (validate.at(-1) === pair[val]) validate.pop()
            else return false
        }
        else validate.push(val)
    }
    
    return validate.length ? false : true
}

function solution(s) {
    let answer = 0
    const sArray = s.split('')
    const len = sArray.length
    const pair = {')':'(', ']':'[', '}':'{'}
    
    if(validateBracket(sArray, pair)) answer++
    for(let i = 1; i < len; i++) {
        const val = sArray.shift()
        sArray.push(val)
        if(validateBracket(sArray, pair)) answer++
    }
    
    return answer
}