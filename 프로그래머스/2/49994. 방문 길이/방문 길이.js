function solution(dirs) {
    const MAX_SIZE = 5
    const movePosition = []
    let x = 0
    let y = 0
    
    
    const sorting = (arr1, arr2) => {
        const combine = [arr1, arr2]
        
        combine.sort((prevArr, nextArr) => {
            if(prevArr[0] === nextArr[0]) return prevArr[1] - nextArr[1]
            else return prevArr[0] - nextArr[0]
        })
        
        return combine.map((arr) => arr.join(',')).join(',')
    }
    
    const move = (str) => {
        if(str === 'U') y+=1
        else if (str === 'D') y-=1
        else if (str === 'L') x-=1
        else if (str === 'R') x+=1
    }
    
    for(dir of dirs) {
        if ((dir === 'U' && -5 <= y && y <= 4) || (dir === 'D' && -4 <= y && y <= 5) || (dir === 'L' && -4 <= x && x <= 5) || (dir === 'R' && -5 <= x && x <= 4)) {
            const before = [x, y]
            move(dir)
            const after = [x, y]
            movePosition.push(sorting(before, after))
        }
    }
    
    return new Set(movePosition).size
}