function solution(s) {
    const slice = s.slice(2, s.length - 2)
    const split = slice.split('},{').map((val) => val.split(',').map((val) => Number(val)))
    
    split.sort((a, b) => a.length - b.length)
    
    const answer = []
    
    split.forEach((arr) => {
        arr.forEach((val) => {
            if(!answer.includes(val)) answer.push(val)
        })
    })
    
    return answer
}