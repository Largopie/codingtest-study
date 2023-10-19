function solution(s){
    const stack = []
    
    for(val of s) {
        if(val === '(') stack.push(val)
        else {
            if(stack.length === 0) return false
            stack.pop()
        }
    }
    
    return stack.length === 0 ? true : false
}