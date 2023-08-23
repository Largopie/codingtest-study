function solution(n, s, a, b, fares) {
    const INF = Infinity;
    
    const graph = Array.from({length: n+1}, () => Array.from({length: n+1}, () => INF));
    
    fares.forEach(([x,y,cost]) => {
        graph[x][y] = cost;
        graph[y][x] = cost;
    })
    
    for(let i=1; i < graph.length; i++){
        graph[i][i] = 0;
    }
    
    const floydWarshall = (dist) => {
        const len = dist.length;
        for(let i=1; i < len; i++){
            for(let j=1; j < len; j++){
                for(let k=1; k < len; k++){
                    graph[j][k] = Math.min(graph[j][k], graph[j][i] + graph[i][k])
                }
            }
        }
    }
    
    floydWarshall(graph)
    
    let min = INF
    for(let i=1; i < graph.length; i++){
        min = Math.min(min, graph[s][i] + graph[i][a] + graph[i][b])
        
    }
    
    return min
}