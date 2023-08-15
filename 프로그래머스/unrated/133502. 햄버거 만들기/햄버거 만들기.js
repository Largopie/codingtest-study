function solution(ingredient) {
    let answer = 0;
    const arr = [];
    
    for(val of ingredient){
        arr.push(val)
        if(String(arr.slice(-4)) === String([1,2,3,1])){
            arr.splice(-4, 4)
            answer++
        }
    }
    
    return answer
}