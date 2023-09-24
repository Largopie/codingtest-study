function solution(n, computers) {
    const graph = Array.from({length:computers.length}, () => []) 
    const visited = Array.from({length:computers.length}, () => false)
    let answer = 0
    
    const dfs = (node) => {
        visited[node] = true
        for(let i=0; i < computers[node].length; i++) {
            if(computers[node][i] === 1 && !visited[i]){
                dfs(i)
            }
        }
    }
    
    for(let i=0; i < computers.length; i++){
        if(!visited[i]) {
            dfs(i)
            answer++
        }
    }
    
    return answer
}