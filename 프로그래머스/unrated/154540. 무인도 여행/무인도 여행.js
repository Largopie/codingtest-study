function solution(maps) {
    const answer = []
    let maps_arr = maps.map((item) => item.split(''))
    
    let chain = []
    
    const is_connect = (a, b) => {
        chain.push(Number(maps_arr[a][b]));
        maps_arr[a][b] = 'V';

        if(b < maps_arr[0].length-1 && isNaN(maps_arr[a][b+1]) === false){
            is_connect(a, b+1);
        }if(b > 0 && isNaN(maps_arr[a][b-1]) === false){
            is_connect(a, b-1);
        }if(a > 0 && isNaN(maps_arr[a-1][b]) === false){
            is_connect(a-1, b);
        }if(a < maps_arr.length-1 && isNaN(maps_arr[a+1][b]) === false){
            is_connect(a+1, b);
        }
        
        return;
    }
    
    for(let i=0; i < maps_arr.length; i++){
        for(let j=0; j < maps_arr[0].length; j++){
            if(isNaN(maps_arr[i][j]) === false){
                is_connect(i, j)
                answer.push(chain.reduce((a,b) => a+b))
                chain = []
            }
        }
    }
    if(answer.length === 0) return [-1]
    return answer.sort((a,b) => a-b)
}