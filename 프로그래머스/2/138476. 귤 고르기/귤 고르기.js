function solution(k, tangerine) {
    const dict = {}
    let answer = 0;
    let count = 0;
    
    for(val of tangerine) {
        if(!dict[val]) dict[val] = 1
        else {
            dict[val] +=1
        }
    }
    
    const countSort = Object.entries(dict).sort((a, b) => b[1] - a[1] )
    
    for([size, cnt] of countSort) {
        answer +=1;
        count+=cnt
        if(count >= k) return answer
    }
}