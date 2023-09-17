function solution(n, edge) {
    const graph = Array.from({length: n+1}, () => [])
    let distance = Array(n+1).fill(Infinity)
    
    for([num1, num2] of edge){
        graph[num1].push(num2)
        graph[num2].push(num1)
    }
    
    const queue = [1]
    distance[1] = 0
    
    while(queue.length !== 0){
        const node = queue.shift()
        for(val of graph[node]){
            if(distance[val] === Infinity){
                distance[val] = distance[node] + 1
                queue.push(val)
            }
        }
    }
    
    distance = distance.slice(1)
    const max = Math.max(...distance)
    
    return distance.filter((val) => val === max).length

}