function solution(arr) {
    let answer = []
    
    for(val of arr) answer = [...answer, ...Array.from({length: val}, () => val)]
    
    return answer
}