// 최대값 갱신
function solution(info, edges) {
    const graph = Array.from({length: info.length}, () => [])
    
    edges.forEach(([par, son], idx) => {
        graph[par].push(son)
    })
    
    let answer = 0
    
    const dfs = (start, sheep, wolf, possible) => {
        answer = Math.max(answer, sheep)
        
        if(sheep === wolf) return;
        
        const possibleNode = [...possible, ...graph[start]]
        possibleNode.splice(possibleNode.indexOf(start), 1)
                
        for(val of possibleNode){
            if(info[val] === 0) dfs(val, sheep+1, wolf, possibleNode)
            else dfs(val, sheep, wolf+1, possibleNode)
        }
    }
    dfs(0, 1, 0, [0])
    
    return answer
}