function solution(d, budget) {
    d = d.sort((a,b) => a-b);
    for(idx in d){
        if(budget - d[idx] < 0) return parseInt(idx);
        budget -= d[idx];
    };
    return d.length;
};