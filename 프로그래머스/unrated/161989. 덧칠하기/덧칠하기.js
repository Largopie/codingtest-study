function solution(n, m, section) {
    let answer = 0;
    const arr = new Array(n).fill(1);
    for(val of section){
        arr[val-1] = 0;
    };
    
    for(let i=0; i < arr.length; i++){
        if(arr[i] === 0){
            arr.fill(1, i, i+m);
            answer+=1
        }
    }
    return answer;
    
}