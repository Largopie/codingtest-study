function solution(brown, yellow) {
    const sum = brown + yellow
    
    for(let side = 3; side < sum; side++) {
        const otherSide = sum / side
        const yellowSide = side - 2
        const yellowOtherSide = otherSide - 2
        
        if(yellowSide * yellowOtherSide === yellow) {
            return [Math.max(side, otherSide), Math.min(side, otherSide)]
        }
        
    }
}