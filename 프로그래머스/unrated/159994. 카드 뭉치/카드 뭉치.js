function solution(cards1, cards2, goal) {
    while(goal.length !== 0){
        const word = goal.shift();
        if(cards1[0] === word){
            cards1.shift();
            continue;
        } else if(cards2[0] === word){
            cards2.shift();
            continue;
        } else{
            return "No";
        }
    };
    return "Yes";
}