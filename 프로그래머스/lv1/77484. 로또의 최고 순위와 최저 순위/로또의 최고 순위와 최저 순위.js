function solution(lottos, win_nums) {
    const prize = {
        '6' : 1,
        '5' : 2,
        '4' : 3,
        '3' : 4,
        '2' : 5
    };
    let zero_count = 0;
    let correct = 0;
    
    for(val of lottos){
        if(win_nums.includes(val)) correct+=1;
        if(val === 0) zero_count+=1;
    };
    const max = correct+zero_count;
    const min = correct;
    return [(max < 2) ? 6 : prize[max], (min < 2) ? 6 : prize[min]];
}