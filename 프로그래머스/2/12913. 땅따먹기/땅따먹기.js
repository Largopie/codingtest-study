function solution(land) {
    const excludeIndex = -1
    for(let i = 0; i < land.length - 1; i++) {
        for(let k = 0; k < land[i+1].length; k++) {
            land[i+1][k] += Math.max(...land[i].filter((_,idx) => k !== idx))
        }
    }
    
    return Math.max(...land.at(-1))
}