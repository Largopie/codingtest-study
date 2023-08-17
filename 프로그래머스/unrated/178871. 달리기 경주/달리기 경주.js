function solution(players, callings) {
    const rank = {}
    
    for(let i=0; i < players.length; i++){
        rank[players[i]] = i
    }
    
    for(call of callings){
        const call_rank = rank[call]
        const change_player = players[call_rank - 1]
        
        players[call_rank] = players[call_rank - 1]
        players[call_rank - 1] = call
        
        rank[change_player] += 1
        rank[call] -=1
    }
    
    return players
}