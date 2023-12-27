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
        if ((['U', 'D'].includes(dir) && Math.abs(y) < MAX_SIZE )||(['L', 'R'].includes(dir) && Math.abs(x) < MAX_SIZE)) {
            const before = [x, y]
            move(dir)
            const after = [x, y]
            movePosition.push(sorting(before, after))
        }
    }
    
    console.log(movePosition)
    
    return new Set(movePosition).size
}