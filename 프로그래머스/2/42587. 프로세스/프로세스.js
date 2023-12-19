function solution(priorities, location) {
    let count = 0
    const len = priorities.length
    const queue = Array.from({length: len}, () => [])
    
    for(let i = 0; i < priorities.length; i++) {
        queue[i] = [i, priorities[i]]
    }
    
    const find = queue[location][0]
    
    while(queue.length !== 0) {
        const process = queue.shift()
        const priorityState = queue.some(([work, priority]) => priority > process[1])
        
        if(priorityState) {
            queue.push(process)
        } else {
            count+=1
            if(find === process[0]) return count
        }
    }
}