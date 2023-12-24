function solution(word) {
    const dict = {'A':0, 'E':1, 'I':2, 'O':3, 'U':4}
    const improve = [5**4, 5**3, 5**2, 5**1, 5**0]
    let answer = 0
    
    for(let i = 0; i < word.length; i++) {
        answer+=dict[word[i]]*improve.slice(i).reduce((a, b) => a + b) + 1
    }
    
    return answer
}