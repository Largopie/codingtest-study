function solution(n, s) {
    if(s / n < 1) return [-1]
    
    const answer = Array.from({length: n}, () => Math.ceil(s / n))
    
    const sum = answer.reduce((a,b) => a + b)
    
    if(sum > s){
        for(let i=0; i < sum - s; i++) answer[i]-=1
    } else{
        for(let i=0; i < s - sum; i++) answer[i]+=1
    }
    
    return answer
}