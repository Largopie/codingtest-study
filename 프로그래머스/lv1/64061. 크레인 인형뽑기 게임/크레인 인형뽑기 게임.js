function solution(board, moves) {
    const basket = [];
    let answer = 0;
    for(move of moves){
        for(let i=0; i < board.length; i++){
            const pick = board[i][move - 1]
            if(pick !== 0) {
                basket.push(pick)
                board[i][move - 1] = 0
                
                if(basket.at(-1) === basket.at(-2)){
                    basket.pop();
                    basket.pop();
                    answer+=2
                }
                break
            }
        }
    }
    return answer
}