function solution(operations) {
    const queue = []
    for(const operation of operations){
        const arr = operation.split(' ')
        if(arr[0] === 'I'){
            queue.push(Number(arr[1]))
        }else if(arr[0] === 'D'){
            if(arr[1] === '1'){
                queue.splice(queue.indexOf(Math.max(...queue)), 1)
            }else{
                queue.splice(queue.indexOf(Math.min(...queue)), 1)
            }
        }
    }
    if(queue.length === 0) return [0, 0]
    return [Math.max(...queue), Math.min(...queue)]
}