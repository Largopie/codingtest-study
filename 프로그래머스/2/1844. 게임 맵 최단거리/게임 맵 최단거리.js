function solution(maps) {
    const x_len = maps[0].length - 1, y_len = maps.length - 1;
    const dx = [0,0,-1,1];
    const dy = [-1,1,0,0];
    
    const bfs = (x, y) => {
        const checked = [];
        const willChecked = [];
        
        willChecked.push([x, y]);
        
        while(willChecked.length !== 0){
            const node = willChecked.shift();
            if(!checked.includes(node)){
                checked.push(node)
                if(node[0] === x_len && node[1] === y_len) return checked
                for(let i=0; i < 4; i++){
                    const newX = node[0] + dx[i];
                    const newY = node[1] + dy[i];
                    if(newY >= 0 && newX >= 0 && newY <= y_len && newX <= x_len && maps[newY][newX] === 1){
                        maps[newY][newX] = maps[node[1]][node[0]]+1;
                        willChecked.push([newX, newY])
                    }
                }
            }
            
        }
    }
    const answer = bfs(0,0);
    return (maps[y_len][x_len] === 1) ? -1 : maps[y_len][x_len];
}