function solution(park, routes) {
    let x = 0, y = 0;
    
    for(let i=0; i < park.length; i++){
        for(let j=0; j < park[0].length; j++){
            if(park[i][j] === 'S'){
                x = j;
                y = i;
                break;
            }
        }
    }
    
    
    for(route of routes){
        const dir = route[0];
        const move = Number(route[2]);
        let flag = 0;
        
        if(dir === 'E'){
            for(let i=x+1; i <= x+move; i++){
                if(i === park[0].length){
                    flag = 1;
                    break;
                }
                if(park[y][i] === 'X') flag = 1;
            }
            if(flag === 0) x+=move;
        }else if(dir === 'W'){
            for(let i=x-1; i >= x-move; i--){
                if(i < 0){
                    flag = 1;
                    break;
                }
                if(park[y][i] === 'X') flag = 1;
            }
            if(flag === 0) x-=move;
        }else if(dir === 'S'){
            for(let i=y+1; i <= y+move; i++){
                if(i === park[0].length){
                    flag = 1;
                    break;
                }
                if(park[i][x] === 'X') flag = 1;
            }
            if(flag === 0) y+=move;
        }else if(dir === 'N'){
            for(let i=y-1; i >= y-move; i--){
                if(i < 0){
                    flag = 1;
                    break;
                }
                if(park[i][x] === 'X') flag = 1;
                
            }
            if(flag === 0) y-=move;
        }
    }
    
    return [y, x]
}